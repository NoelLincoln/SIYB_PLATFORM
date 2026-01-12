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

echo "[backend] Running release steps for env: $ENV_TARGET (version $VERSION)"

cd "$REPO_ROOT/backend"

if [[ ! -x "../.venv/bin/python" ]]; then
  echo "[backend] ../.venv/bin/python not found or not executable. Activate/create the virtualenv first." >&2
  exit 1
fi

echo "[backend] Running Django system check..."
../.venv/bin/python manage.py check

echo "[backend] Running Django tests..."
../.venv/bin/python manage.py test

# Ensure a changelog file exists with a title
if [[ ! -f CHANGELOG.md ]]; then
  cat > CHANGELOG.md << 'EOF'
# Backend Changelog

EOF
  echo "[backend] Created CHANGELOG.md."
fi

LAST_TAG=$(git -C "$REPO_ROOT" describe --tags --match "backend-v*" --abbrev=0 2>/dev/null || true)
if [[ -n "$LAST_TAG" ]]; then
  RANGE="$LAST_TAG..HEAD"
else
  RANGE=""
fi

if [[ -n "$RANGE" ]]; then
  CHANGE_LINES=$(git -C "$REPO_ROOT" log "$RANGE" --pretty=format:'- %s' -- backend/ || true)
else
  CHANGE_LINES=$(git -C "$REPO_ROOT" log --pretty=format:'- %s' -- backend/ || true)
fi

if [[ -z "$CHANGE_LINES" ]]; then
  CHANGE_LINES="- No code changes since last release."
fi

TMP_FILE=$(mktemp)
{
  echo "# Backend Changelog"
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

echo "[backend] Updated CHANGELOG.md for version $VERSION."
echo "[backend] Release checks completed successfully."
