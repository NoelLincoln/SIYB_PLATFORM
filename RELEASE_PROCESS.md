# Release Process

This document describes how releases are done for this project using Git branches and the shell scripts in the `scripts/` directory.

It is intentionally detailed so that someone unfamiliar with the project can follow it end‑to‑end.

---

## Branching Model

We use a Git‑flow–style model with these long‑lived branches:

- `develop`: default integration branch for day‑to‑day development.
- `uat`: stabilization branch used for User Acceptance Testing.
- `main`: production branch.

Short‑lived branches are:

- `feature/*`: new features or non‑urgent changes, branched from `develop`.
- `release/*`: optional release candidate branches prepared from `develop` for a specific version.
- `hotfix/*`: urgent fixes branched from the production branch (`main`/`master`).

> If your production branch is named `master` instead of `main`, substitute `master` everywhere this document mentions `main`.

---

## Release Scripts Overview

All release helpers live in `scripts/` and are designed to be run from the **repository root**.

### `scripts/release.sh`

This is the orchestration script you normally run.

Usage:

- `./scripts/release.sh <uat|prod> <version>`

Behavior:

- Validates the environment target:
  - `uat` → must be on branch `uat`.
  - `prod` → must be on branch `main` (or adjust the script if you use `master`).
- Ensures the working tree is **clean** (no uncommitted changes).
- Runs:
  - `scripts/release-frontend.sh <env> <version>`
  - `scripts/release-backend.sh <env> <version>`
- Creates (if missing) and/or reuses Git tags at the repo root:
  - `frontend-v<version>`
  - `backend-v<version>`
- Prints a reminder to push tags (tags are **not** pushed automatically).

### `scripts/release-frontend.sh`

Usage:

- `./scripts/release-frontend.sh <uat|prod> <version>`

Behavior (run from repo root via `release.sh`):

- Changes into `frontend/`.
- Runs quality checks:
  - `npm run format:check` (Prettier formatting check).
  - `npm run lint` (ESLint).
- Builds the frontend:
  - `npm run build`.
- Ensures `frontend/CHANGELOG.md` exists; if not, creates it with the title `# Frontend Changelog`.
- Computes the last tag matching `frontend-v*` and generates a list of commit messages since that tag **touching `frontend/` only`**.
- Prepends a new changelog section:
  - `## [<version>] - <YYYY-MM-DD>`
  - Under `### Changes`, lists each commit as `- <subject>`.
  - If there are no matching commits, writes `- No code changes since last release.`

> Note: The `ENV_TARGET` argument (`uat`/`prod`) is currently used only for logging; all logic is based on Git history and tags.

### `scripts/release-backend.sh`

Usage:

- `./scripts/release-backend.sh <uat|prod> <version>`

Behavior (run from repo root via `release.sh`):

- Changes into `backend/`.
- Requires `../.venv/bin/python` to exist and be executable.
  - If missing, the script aborts with a clear message – you must create/activate the virtualenv first.
- Runs Django checks and tests:
  - `../.venv/bin/python manage.py check`
  - `../.venv/bin/python manage.py test`
- Ensures `backend/CHANGELOG.md` exists; if not, creates it with the title `# Backend Changelog`.
- Computes the last tag matching `backend-v*` and generates a list of commit messages since that tag **touching `backend/` only`**.
- Prepends a new changelog section:
  - `## [<version>] - <YYYY-MM-DD>`
  - Under `### Changes`, lists each commit as `- <subject>`.
  - If there are no matching commits, writes `- No code changes since last release.`

> As with the frontend, the `ENV_TARGET` argument is used for logging only; backend logic is driven by Git history and tags.

---

## Versioning Conventions

- We recommend **Semantic Versioning**: `MAJOR.MINOR.PATCH` (e.g. `1.2.3`).
- The `<version>` parameter you pass to the scripts is used to:
  - Label changelog sections in `frontend/CHANGELOG.md` and `backend/CHANGELOG.md`.
  - Name Git tags `frontend-v<version>` and `backend-v<version>`.
- The scripts do **not** automatically bump any version fields in `package.json` or Python metadata – keep those in sync manually if you use them.

---

## Standard UAT Release Flow

This is the flow for preparing and releasing to the **UAT environment**.

### 1. Merge features into `develop`

- For each feature:
  - Create a branch from `develop` (e.g. `feature/new-reporting-page`).
  - Implement changes and open an MR into `develop`.
  - Wait for CI (tests/linters) to pass and reviews to complete.
  - Merge the MR into `develop`.

### 2. Promote `develop` → `uat`

- Once a set of features is ready for UAT:
  - Open an MR from `develop` → `uat`.
  - Ensure CI passes on the MR.
  - Merge the MR so `uat` now contains exactly what should be tested.

### 3. Prepare for the UAT release

- On your local machine:
  - Ensure your working copy is clean and up to date:
    - `git checkout uat`
    - `git pull`
  - Confirm there are **no uncommitted changes** (this is also enforced by `release.sh`).
  - Ensure dependencies and tooling are set up:
    - Frontend: `cd frontend && npm install` (once per environment).
    - Backend: virtualenv exists at `.venv/` with Django and requirements installed.

### 4. Choose the UAT release version

- Decide on a version, e.g. `1.3.0`.
- Make sure it is higher than the last released version to avoid confusing tags and changelog sections.

### 5. Run the UAT release script

From the **repo root** on branch `uat`:

- `./scripts/release.sh uat 1.3.0`

What this does:

- Validates:
  - You are on branch `uat`.
  - The working tree is clean.
- Runs frontend checks + build and updates `frontend/CHANGELOG.md`.
- Runs backend checks + tests and updates `backend/CHANGELOG.md`.
- Creates or reuses tags:
  - `frontend-v1.3.0`
  - `backend-v1.3.0`

If any step fails (tests, lint, build), the whole script aborts and no tags are created.

### 6. Push branch and tags

- Still on `uat`:
  - `git push origin uat`
  - `git push origin --tags`

Your CI/CD system can now deploy UAT from the `uat` branch and/or from the newly created tags.

### 7. Run UAT

- The UAT environment is tested by QA / stakeholders.
- Any issues are fixed via new feature/bugfix branches into `develop`, then re‑promoted `develop` → `uat`, and the UAT release process (steps above) is repeated with a new version (e.g. `1.3.1`).

---

## Standard Production Release Flow

This is the flow for promoting a **tested UAT release** to production.

### 1. Ensure UAT version is approved

- Confirm the UAT version (e.g. `1.3.0`) has passed testing and is ready for production.

### 2. Merge `uat` → production branch

- Open an MR from `uat` → `main` (or `master`).
- Ensure CI passes and reviewers approve.
- Merge the MR so production branch contains exactly what was tested in UAT.

### 3. Prepare for the production release

- On your local machine:
  - `git checkout main` (or `master`).
  - `git pull`.
  - Ensure your working tree is clean (no local changes).

### 4. Run the production release script

From the **repo root** on the production branch:

- `./scripts/release.sh prod 1.3.0`

What this does:

- Validates:
  - You are on the expected branch for `prod` (by default `main`).
  - The working tree is clean.
- Re‑runs frontend and backend checks/tests/build, providing a final safety net before production.
- Creates or confirms tags:
  - `frontend-v1.3.0`
  - `backend-v1.3.0`
- Updates changelogs (if there were new commits since the UAT run, they will be included).

### 5. Push production branch and tags

- Still on the production branch:
  - `git push origin main` (or `git push origin master`).
  - `git push origin --tags`.

Your production deployment pipeline should then deploy based on the production branch and/or the tags created.

---

## Hotfix Flow

For urgent production fixes that cannot wait for the normal `develop` → `uat` → `main` cycle, use a **hotfix**.

### 1. Create a hotfix branch from production

- `git checkout main` (or `master`)
- `git pull`
- `git checkout -b hotfix/1.3.1`

### 2. Implement and test the fix

- Make minimal, focused changes.
- Run relevant tests locally (backend + frontend as appropriate).

### 3. Merge the hotfix back

- Open MRs:
  - `hotfix/1.3.1` → `main` (or `master`).
  - `hotfix/1.3.1` → `develop`.
  - Optionally also into `uat` so that UAT stays close to production.
- Ensure CI passes on all MRs.

### 4. Run the production release for the hotfix

- After the hotfix branch is merged into the production branch:
  - `git checkout main` (or `master`)
  - `git pull`
  - `./scripts/release.sh prod 1.3.1`
  - `git push origin main && git push origin --tags`

This produces new tags `frontend-v1.3.1` and `backend-v1.3.1` and updates changelogs.

---

## Guidelines and Conventions

- **Branch naming**
  - Features: `feature/<short-description>`
  - Releases (optional): `release/x.y.z`
  - Hotfixes: `hotfix/x.y.z`
- **CI / checks**
  - All MRs into `develop`, `uat`, and the production branch must pass tests/linters.
  - `release.sh` re‑checks backend/ frontend before tagging.
- **Permissions**
  - Direct pushes to `develop`, `uat`, and the production branch should be restricted.
  - Use MRs for all changes to these branches.
- **Changelogs**
  - Frontend: `frontend/CHANGELOG.md`
  - Backend: `backend/CHANGELOG.md`
  - Generated from Git commit messages; write clear subjects so the changelog is readable.
- **Tags**
  - Frontend tags: `frontend-v<version>`
  - Backend tags: `backend-v<version>`
  - Tags are created locally and must be pushed explicitly with `git push --tags`.

---

## Quick Summary

- Day‑to‑day work happens in `feature/*` branches off `develop`.
- Changes are merged into `develop`, then promoted via MR to `uat`.
- From `uat`, run `./scripts/release.sh uat <version>`, then push branch + tags.
- When UAT is signed off, merge `uat` into the production branch and run `./scripts/release.sh prod <version>`, then push branch + tags.
- For urgent production fixes, use `hotfix/*` from the production branch and run a dedicated prod release for the hotfix version.
