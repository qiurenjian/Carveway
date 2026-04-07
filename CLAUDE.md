# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

凯为传动技术（深圳）有限公司官网 - B2B 工业传动产品展示网站。

## Tech Stack

- **Next.js 14** (App Router) + TypeScript + Tailwind CSS
- **Static Export** (`output: 'export'`) — 构建产出纯 HTML/CSS/JS，由 Nginx 提供服务
- **Framer Motion** (滚动动效)、**lucide-react** (图标)
- 字体通过 `next/font/google` 构建时下载自托管（规避大陆 Google Fonts 不可用）

## Common Commands

```bash
npm run dev          # 本地开发
npm run build        # 构建静态输出到 out/
npm run lint         # ESLint 检查
```

## Architecture

- `src/data/products.ts` — 所有产品型号/规格参数的核心数据文件，所有产品页面从此取数据
- `src/data/company.ts` — 公司联系信息和导航结构
- `src/data/industries.ts` — 行业应用数据
- `src/components/sections/ProductCategoryPage.tsx` — 产品子页共享布局组件
- `src/components/layout/` — Navbar 和 Footer
- `src/components/ui/` — 通用 UI 组件（Button, Card, Breadcrumb, SectionHeader）

产品页面采用统一模式：每个 `src/app/products/[category]/page.tsx` 导入对应数据后传入 `ProductCategoryPage` 组件渲染。

## 部署

### 服务器信息
- **服务器 IP**：139.199.62.13，**SSH 端口：2222**
- **SSH 别名**：`ssh mainland`（~/.ssh/config 已配置）
- **部署路径**：`/opt/services/carveway-web/`

### 部署架构
- `nginx-proxy` (port 80/443) 做统一反向代理 → `/opt/services/_infra/`
- `carveway-web` 通过 `infra_net` 网络被 nginx-proxy 代理
- 网络：`infra_net`（代理网络）、`carveway_net`（官网隔离网络）

### 自动部署（推荐）

push 到 `main` 分支自动触发 GitHub Actions（`.github/workflows/deploy.yml`）：

1. GitHub Actions runner 执行 `npm ci && npm run build`（Node 22 + npm cache 加速）
2. rsync `out/` 到服务器（`--checksum` 增量传输）
3. rsync `deploy/` 配置 + `docker-compose.prebuilt.yml` → 服务器 `docker-compose.yml`
4. 服务器 `docker compose -p carveway-web build --no-cache && up -d`

### 手动部署

```bash
./scripts/deploy.sh             # 构建 + 部署
./scripts/deploy.sh --skip-build  # 跳过构建（需已有 out/ 目录）
```

### GitHub Secrets 配置

仓库 Settings → Secrets and variables → Actions：

| Secret | 值 |
|--------|---|
| `SSH_PRIVATE_KEY` | `~/.ssh/carveway_deploy` 私钥内容 |
| `SSH_HOST` | `139.199.62.13` |
| `SSH_USER` | `root` |

Deploy Key 公钥（`~/.ssh/carveway_deploy.pub`）已添加到服务器 `~/.ssh/authorized_keys`。

### Docker Compose 文件说明

- `docker-compose.yml` — 服务器运行时文件（由部署脚本从 `docker-compose.prebuilt.yml` 覆盖）
- `docker-compose.prebuilt.yml` — CI/手动部署用，基于 `deploy/Dockerfile.prebuilt`（只拷贝 `out/`）
- `deploy/Dockerfile` — 全量构建（含 npm 构建阶段，适合本地调试）
- `deploy/Dockerfile.prebuilt` — 轻量部署（只拷贝已构建的 `out/` 到 nginx）

### 添加新 Web 服务

1. 在 `/opt/services/<name>/` 创建服务目录和 docker-compose.yml
2. 服务加入 `infra_net` (external: true) 网络
3. 在 `/opt/services/_infra/conf.d/` 添加 `.conf` 路由文件
4. `docker compose -p infra restart`
5. 更新 `/opt/services/README.md`
