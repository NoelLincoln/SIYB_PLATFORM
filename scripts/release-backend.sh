#!/usr/bin/env bash
set -euo pipefail

ENV_TARGET="${1:-}"
if [[ -z "$ENV_TARGET" ]]; then
  echo "Usage: $0 <uat|prod>" >&2
  exit 1
fi

echo "[backend] Running release steps for env: $ENV_TARGET"

cd "$(dirname "$0")/../backend"

if [[ ! -x "../.venv/bin/python" ]]; then
  echo "[backend] ../.venv/bin/python not found or not executable. Activate/create the virtualenv first." >&2
  exit 1
fi

echo "[backend] Running Django system check..."
../.venv/bin/python manage.py check

echo "[backend] Running Django tests..."
../.venv/bin/python manage.py test

# Ensure a changelog file exists
if [[ ! -f CHANGELOG.md ]]; then
  cat > CHANGELOG.md << 'EOF'
# Backend Changelog

This file documents notable changes to the SIYB backend.

EOF
  echo "[backend] Created CHANGELOG.md (please add release notes)."
else
  echo "[backend] CHANGELOG.md exists. Remember to add release notes."
fi

echo "[backend] Release checks completed successfully."
