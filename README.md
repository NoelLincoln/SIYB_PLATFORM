# Mustard Steps Consulting

People-centred training and facilitation — Empowering Growth. Driving Impact.

---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [License](#license)

---

## About

Marketing landing page for **Mustard Steps Consulting Limited** — a people-centred training and facilitation company committed to unlocking individual and team potential through practical, experiential learning.

The site is mobile-first and fully responsive, built as a React SPA backed by a Django API.

### Sections

| Section | Description |
| --- | --- |
| Hero | Full-bleed image (mobile) / split layout (desktop) with CTA |
| Catalyst | Short company introduction |
| Get To Know Juliet | Therapist profile with illustration |
| The 3 Mustard Pillars | Individual Rise · Teams Align · Organizations Transform |

---

## Tech Stack

### Frontend

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- Framer Motion
- Radix UI (Sheet, Dialog, Navigation Menu)
- React Router v7
- Lucide React

### Backend

- Django + Django REST Framework
- Python 3.12+

---

## Project Structure

```text
mustard-steps-platform/
├── backend/                 # Django REST API
│   ├── siyb_platform/      # Django project settings
│   ├── manage.py
│   └── requirements.txt
├── frontend/                # React SPA
│   ├── src/
│   │   ├── assets/         # SVGs, images
│   │   ├── components/     # Navbar, MustardPillars, etc.
│   │   ├── pages/          # HomePage and supporting pages
│   │   └── index.css       # Design tokens + global styles
│   ├── package.json
│   └── vite.config.ts
├── shared/                  # Shared types and utilities
├── start-dev.sh            # One-command dev startup
└── package.json            # Root scripts
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.12+ with virtual environment support

### Install

```bash
git clone https://github.com/NoelLincoln/siyb-platform.git
cd siyb-platform
npm run setup
```

### Run in development

```bash
npm run dev
```

- Frontend → `http://localhost:5173`
- Backend → `http://localhost:8000`

### Frontend only

```bash
cd frontend
npm run dev
```

### Backend only

```bash
cd backend
source ../.venv/bin/activate
python manage.py runserver
```

---

## License

[MIT](./LICENSE)
