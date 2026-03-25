#!/usr/bin/env bash
set -euo pipefail

VERSION="${1:-}"

if [[ -z "$VERSION" ]]; then
  echo "Usage: $0 <version>" >&2
  echo "Example: $0 1.2.0" >&2
  exit 1
fi

# Ensure we are in repo root
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$REPO_ROOT"

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

# Must be run on a release/* branch checked out from develop
if [[ "$CURRENT_BRANCH" != release/* ]]; then
  echo "You are on branch '$CURRENT_BRANCH'." >&2
  echo "Create and checkout a release branch first: git checkout -b release/$VERSION" >&2
  exit 1
fi

# Ensure working tree is clean
if [[ -n "$(git status --porcelain)" ]]; then
  echo "Working tree is not clean. Commit or stash changes before running a release." >&2
  exit 1
fi

echo "[release] Starting release on branch $CURRENT_BRANCH (version $VERSION)..."

"$SCRIPT_DIR/release-frontend.sh" "$VERSION"
"$SCRIPT_DIR/release-backend.sh" "$VERSION"

echo "[release] Frontend and backend checks completed."

# Create tags for this release if they do not already exist
FRONTEND_TAG="frontend-v$VERSION"
BACKEND_TAG="backend-v$VERSION"

if git rev-parse -q --verify "refs/tags/$FRONTEND_TAG" >/dev/null; then
  echo "[release] Tag $FRONTEND_TAG already exists, not creating."
else
  git tag "$FRONTEND_TAG"
  echo "[release] Created tag $FRONTEND_TAG."
fi

if git rev-parse -q --verify "refs/tags/$BACKEND_TAG" >/dev/null; then
  echo "[release] Tag $BACKEND_TAG already exists, not creating."
else
  git tag "$BACKEND_TAG"
  echo "[release] Created tag $BACKEND_TAG."
fi

echo ""
echo "[release] Release $VERSION complete."
echo "[release] Next steps:"
echo "  1. git add backend/CHANGELOG.md frontend/CHANGELOG.md"
echo "  2. git commit -m 'chore: release $VERSION - update changelogs'"
echo "  3. git push origin $CURRENT_BRANCH --tags"
echo "  4. Merge $CURRENT_BRANCH → develop → uat → main"
