# 会话上下文

更新时间：2026-04-14

## 上次完成
- GitHub 仓库迁移到正确账号：github.com/qiurenjian/Carveway
- GitHub Actions 自动部署打通（push main → 构建 → 部署，约 3-5 分钟）
- 新增 scripts/deploy.sh 本地手动部署脚本
- Let's Encrypt SSL 证书签发成功（有效期至 2026-07-06，自动续期已配置）
- 域名 carveway.com.cn / www.carveway.com.cn HTTPS 全部正常，HTTP 自动跳转 HTTPS
- ICP 备案号写入 Footer：粤ICP备2026036874号
- /ctx 跨端同步方案落地（.claude/ctx.md 存入 Git，换端 git pull 即恢复）
- 公安备案（粤公网安备44030002011755号）图标与链接添加，已部署生效

## 待继续
- rqiudev/Carveway 旧仓库未删除（需登录 rqiudev 账号手动删，或忽略）

## 关键信息
- GitHub 只用 qiurenjian 账号，token 存于 ~/.git-credentials
- SSH Deploy Key：~/.ssh/carveway_deploy（已加入服务器 authorized_keys）
- 服务器 SSH 端口 2222（非标准），别名 mainland
- Let's Encrypt 证书路径：/etc/letsencrypt/live/carveway.com.cn/（软链接指向 carveway.com.cn-0001）
- certbot 用 pip3 安装（apt 版本有 Python 依赖冲突，不要用 apt 版本）
- nginx 配置：/opt/services/_infra/conf.d/carveway.conf（改后需 docker exec nginx-proxy nginx -s reload）
- commit message 加 [skip ci] 可跳过 GitHub Actions 部署触发
- 公安备案图标从服务器下载（国内网络更稳定）：ssh mainland 获取后本地上传

## 当前状态
- https://carveway.com.cn → 200 正常，HTTPS 证书有效
- 网站底部显示 ICP 备案号 + 公安备案图标与链接
- nginx-proxy 容器运行中（80/443 均开放，安全组已放行）
- carveway-web 容器运行中
- GitHub Actions 最近一次部署：success
