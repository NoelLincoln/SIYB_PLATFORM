#!/usr/bin/env bash
set -euo pipefail

ENV_TARGET="${1:-}"
VERSION="${2:-}"

if [[ -z "$ENV_TARGET" || -z "$VERSION" ]]; then
  echo "Usage: $0 <uat|prod> <version>" >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

echo "[frontend] Running release steps for env: $ENV_TARGET (version $VERSION)"

cd "$REPO_ROOT/frontend"

echo "[frontend] Checking formatting (Prettier)..."
npm run format:check

echo "[frontend] Running ESLint..."
npm run lint

echo "[frontend] Building frontend..."
npm run build

# Ensure a changelog file exists with a title
if [[ ! -f CHANGELOG.md ]]; then
  cat > CHANGELOG.md << 'EOF'
# Frontend Changelog

EOF
  echo "[frontend] Created CHANGELOG.md."
fi

LAST_TAG=$(git -C "$REPO_ROOT" describe --tags --match "frontend-v*" --abbrev=0 2>/dev/null || true)
if [[ -n "$LAST_TAG" ]]; then
  RANGE="$LAST_TAG..HEAD"
else
  RANGE=""
fi

if [[ -n "$RANGE" ]]; then
  CHANGE_LINES=$(git -C "$REPO_ROOT" log "$RANGE" --pretty=format:'- %s' -- frontend/ || true)
else
  CHANGE_LINES=$(git -C "$REPO_ROOT" log --pretty=format:'- %s' -- frontend/ || true)
fi

if [[ -z "$CHANGE_LINES" ]]; then
  CHANGE_LINES="- No code changes since last release."
fi

TMP_FILE=$(mktemp)
{
  echo "# Frontend Changelog"
  echo
  echo "## [$VERSION] - $(date +%Y-%m-%d)"
  echo
  echo "### Changes"
  echo
  printf '%s
' "$CHANGE_LINES"
  echo
  if [[ -f CHANGELOG.md ]]; then
    # Skip existing title line if present
    tail -n +2 CHANGELOG.md 2>/dev/null || true
  fi
} > "$TMP_FILE"

mv "$TMP_FILE" CHANGELOG.md

echo "[frontend] Updated CHANGELOG.md for version $VERSION."
echo "[frontend] Release checks completed successfully."
