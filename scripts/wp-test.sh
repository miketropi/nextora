#!/usr/bin/env bash
# Spin up a local test site (wp-now) for the theme in this repo.
set -euo pipefail
cd "$(dirname "$0")/.."
REPO_ROOT="$(pwd)"

if [[ -f .env ]]; then set -a; source .env; set +a; fi

PORT="${PORT:-8881}"; PHP="${PHP:-8.2}"; WP="${WP:-latest}"

# Blueprint requires Node 20+
NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
if (( NODE_MAJOR < 20 )); then
  echo "⚠  Node $(node -v) detected — Blueprint support needs Node 20+. Permalink/setup steps will be skipped."
fi

NPM_CACHE="${npm_config_cache:-$HOME/.npm}"
if [[ -d "$NPM_CACHE" ]] && find "$NPM_CACHE" -user root -print -quit 2>/dev/null | grep -q .; then
  echo "⚠  npm cache ($NPM_CACHE) contains root-owned files — npx will fail with EACCES."
  read -rp "   Fix permissions now with sudo? [y/N] " ans
  if [[ "$ans" =~ ^[Yy]$ ]]; then
    sudo chown -R "$(id -u):$(id -g)" "$NPM_CACHE"; echo "✓ Permissions fixed."
  else
    echo "   Skipped. Run manually:  sudo chown -R \$(id -u):\$(id -g) \"$NPM_CACHE\""; exit 1
  fi
fi

STYLE="$(grep -rls "Theme Name:" . --include=style.css | head -n1 || true)"
[[ -z "$STYLE" ]] && { echo "No style.css with 'Theme Name:' found."; exit 1; }
THEME_DIR="$(cd "$(dirname "$STYLE")" && pwd)"

# Blueprint lives at repo root; pass it explicitly with an absolute path
BLUEPRINT_ARG=()
if [[ -f "$REPO_ROOT/blueprint.json" ]]; then
  BLUEPRINT_ARG=(--blueprint="$REPO_ROOT/blueprint.json")
fi

cd "$THEME_DIR"
echo "→ http://localhost:$PORT  (admin / password)"
exec npx --yes @wp-now/wp-now start \
  --php="$PHP" --wp="$WP" --port="$PORT" \
  "${BLUEPRINT_ARG[@]}" "$@"