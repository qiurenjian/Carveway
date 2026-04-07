#!/usr/bin/env bash
set -euo pipefail

# ==========================================
# Carveway 手动部署脚本
# 用法：./scripts/deploy.sh [--skip-build]
# ==========================================

DEPLOY_HOST="mainland"
DEPLOY_PATH="/opt/services/carveway-web"
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SKIP_BUILD=false

for arg in "$@"; do
  case $arg in
    --skip-build) SKIP_BUILD=true ;;
    *) echo "Unknown argument: $arg"; exit 1 ;;
  esac
done

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; BLUE='\033[0;34m'; NC='\033[0m'
log_info()  { echo -e "${BLUE}[INFO]${NC} $1"; }
log_ok()    { echo -e "${GREEN}[ OK ]${NC} $1"; }
log_warn()  { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERR ]${NC} $1"; }

cd "$PROJECT_ROOT"

# ── 1. Git 状态检查 ──────────────────────────────────────────────────────────
log_info "Checking git status..."
if ! git diff-index --quiet HEAD -- 2>/dev/null; then
  log_warn "Uncommitted changes detected."
  read -rp "Continue anyway? [y/N] " confirm
  [[ "$confirm" =~ ^[Yy]$ ]] || { log_error "Deploy cancelled."; exit 1; }
fi

CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
if [[ "$CURRENT_BRANCH" != "main" ]]; then
  log_warn "On branch '$CURRENT_BRANCH', not 'main'."
  read -rp "Continue? [y/N] " confirm
  [[ "$confirm" =~ ^[Yy]$ ]] || { log_error "Deploy cancelled."; exit 1; }
fi

# ── 2. 本地构建 ──────────────────────────────────────────────────────────────
if [[ "$SKIP_BUILD" == "false" ]]; then
  log_info "Building static site (npm run build)..."
  npm run build
  log_ok "Build completed → out/"
else
  log_warn "Skipping build (--skip-build)"
  [[ -d "$PROJECT_ROOT/out" ]] || { log_error "out/ not found. Run npm run build first."; exit 1; }
fi

# ── 3. SSH ControlMaster ─────────────────────────────────────────────────────
log_info "Establishing SSH connection to $DEPLOY_HOST..."
SSH_CTL="/tmp/ssh_deploy_carveway_$$"
ssh -nNf \
    -o ControlMaster=yes \
    -o ControlPath="$SSH_CTL" \
    -o ControlPersist=10m \
    -o ConnectTimeout=15 \
    "$DEPLOY_HOST" 2>/dev/null || true

SSH_E="ssh -o ControlMaster=no -o ControlPath=$SSH_CTL"

if ! $SSH_E "$DEPLOY_HOST" "echo 'SSH OK'" &>/dev/null; then
  log_error "Cannot connect to $DEPLOY_HOST. Check ~/.ssh/config."
  exit 1
fi
log_ok "SSH ready."

# ── 4. 确保服务器目录存在 ────────────────────────────────────────────────────
$SSH_E "$DEPLOY_HOST" "mkdir -p $DEPLOY_PATH/out $DEPLOY_PATH/deploy"

# ── 5. rsync out/（增量） ────────────────────────────────────────────────────
log_info "Syncing out/ to server..."
rsync -avz --delete --checksum \
  -e "$SSH_E" \
  "$PROJECT_ROOT/out/" \
  "$DEPLOY_HOST:$DEPLOY_PATH/out/"
log_ok "out/ synced."

# ── 6. rsync 部署配置 ────────────────────────────────────────────────────────
log_info "Syncing deploy configs..."
rsync -avz \
  -e "$SSH_E" \
  "$PROJECT_ROOT/deploy/" \
  "$DEPLOY_HOST:$DEPLOY_PATH/deploy/"

rsync -avz \
  -e "$SSH_E" \
  "$PROJECT_ROOT/docker-compose.prebuilt.yml" \
  "$DEPLOY_HOST:$DEPLOY_PATH/docker-compose.yml"
log_ok "Configs synced."

# ── 7. 服务器重建并重启容器 ──────────────────────────────────────────────────
log_info "Rebuilding container on server..."
$SSH_E "$DEPLOY_HOST" bash << ENDSSH
  set -e
  cd $DEPLOY_PATH
  docker compose -p carveway-web build --no-cache
  docker compose -p carveway-web up -d
  docker image prune -f
  docker ps | grep carveway-web || echo "WARNING: carveway-web not found"
ENDSSH
log_ok "Container restarted."

# ── 8. 关闭 ControlMaster ────────────────────────────────────────────────────
ssh -O stop -o ControlPath="$SSH_CTL" "$DEPLOY_HOST" 2>/dev/null || true

log_ok "Deploy complete!"
echo ""
echo "  Site: http://139.199.62.13"
echo "  Time: $(date)"
