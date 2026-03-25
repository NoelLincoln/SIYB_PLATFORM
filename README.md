<a name="readme-top"></a>

<div align="center">
  <h1><b>🚀 Mustard Steps Consulting Platform</b></h1>
  <h3>Professional Business Training & Consulting Services</h3>
  <p>Empowering entrepreneurs through comprehensive business training modules</p>
</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [🏗️ Project Structure](#project-structure)
- [🔌 API Endpoints](#api-endpoints)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 Mustard Steps Consulting Platform <a name="about-project"></a>

**Mustard Steps Consulting Platform** is a comprehensive business training and consulting platform designed to help entrepreneurs start and improve their businesses. The platform offers four core training modules along with an interactive business simulation game, providing a complete learning ecosystem for aspiring and existing business owners.

## 🎯 Training Modules

- **GYB (Generate Your Business Idea)** - Discover and develop viable business ideas
- **SYB (Start Your Business)** - Transform ideas into actionable business plans
- **IYB (Improve Your Business)** - Optimize and grow existing businesses
- **EYB (Expand Your Business)** - Scale businesses to new markets and opportunities
- **Business Simulation Game** - Interactive business simulation for hands-on learning

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Backend</summary>
  <ul>
    <li>Django 6.0</li>
    <li>Django REST Framework</li>
    <li>PostgreSQL 16</li>
    <li>Celery (Background Tasks)</li>
    <li>Redis (Cache & Message Broker)</li>
    <li>Python-decouple (Environment Management)</li>
  </ul>
</details>

<details>
  <summary>Frontend</summary>
  <ul>
    <li>React 18</li>
    <li>TypeScript</li>
    <li>Axios (API Client)</li>
    <li>React Router</li>
    <li>Material-UI / Tailwind CSS</li>
  </ul>
</details>

<details>
  <summary>Shared</summary>
  <ul>
    <li>TypeScript Types</li>
    <li>Shared Constants</li>
    <li>Common Utilities</li>
    <li>API Interfaces</li>
  </ul>
</details>

<details>
  <summary>Development Tools</summary>
  <ul>
    <li>Visual Studio Code</li>
    <li>Postman (API Testing)</li>
    <li>Git & GitHub</li>
    <li>Docker (Coming Soon)</li>
  </ul>
</details>

<details>
  <summary>Future AI Integration</summary>
  <ul>
    <li>OpenAI API</li>
    <li>Business Idea Generator</li>
    <li>AI Writing Assistant</li>
    <li>Performance Analytics</li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Multi-Module Training System** - Four comprehensive business training modules
- **User Progress Tracking** - Monitor learning progress across all modules
- **Group Booking System** - Minimum 9 participants for group sessions
- **Interactive Business Simulation** - Business simulation with dynamic scenarios
- **User Management** - Registration, authentication, and profile management
- **Payment Processing** - Secure payment system for course enrollment
- **Session Scheduling** - Flexible scheduling for training sessions
- **RESTful API** - Complete API for frontend-backend communication
- **Responsive Design** - Works seamlessly across all devices
- **Admin Dashboard** - Comprehensive admin interface for content management

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->
## 🚀 Live Demo <a name="live-demo"></a>

🔗 **Coming Soon** - Demo will be available once deployment is complete

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to set up and run the application you need:

- **Python 3.12+** with virtual environment support
- **Node.js 18+** and npm
- **PostgreSQL 16+** 
- **Redis Server** (for Celery tasks)
- **Git** for version control

Basic knowledge required:
- Python and Django development
- React and TypeScript
- RESTful API concepts
- Database design and management

### Setup

Clone this repository to your desired folder:

```bash
cd my-folder
git clone https://github.com/your-username/mustard-steps-platform.git
cd mustard-steps-platform
```

### Install

#### 🐍 Backend Setup

1. **Create and activate Python virtual environment:**
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

2. **Install Python dependencies:**
```bash
cd backend
pip install -r requirements.txt
```

3. **Set up PostgreSQL database:**
```bash
# Connect to PostgreSQL
sudo -u postgres psql

# Create database and user
CREATE DATABASE msc_platform_db;
CREATE USER msc_user WITH PASSWORD 'msc_password123';
GRANT ALL PRIVILEGES ON DATABASE msc_platform_db TO msc_user;
ALTER USER msc_user CREATEDB;
\q
```

4. **Configure environment variables:**
```bash
# Copy .env.example to .env and update values
cp .env.example .env
```

5. **Run database migrations:**
```bash
python manage.py migrate
python manage.py createsuperuser  # Create admin user
```

#### ⚛️ Frontend Setup

```bash
cd frontend
npm install
```

#### 📦 Root Dependencies (for unified development)

```bash
cd .. # Back to project root
npm install
```

### Usage

#### 🚀 Quick Start (Recommended)

Start both backend and frontend with one command:

```bash
# From project root
npm run dev
# OR
./start-dev.sh
```

This will start:
- Django backend on `http://localhost:8000`
- React frontend on `http://localhost:3000`

#### 🔧 Manual Start

**Backend only:**
```bash
cd backend
source ../.venv/bin/activate
python manage.py runserver
```

**Frontend only:**
```bash
cd frontend
npm start
```

#### 🧪 API Testing

Test the API endpoints using Postman or browser:

- **Health Check:** `http://localhost:8000/api/health/`
- **Platform Info:** `http://localhost:8000/api/accounts/welcome/`
- **Admin Panel:** `http://localhost:8000/admin/`
- **API Root:** `http://localhost:8000/api/`

### Run tests

```bash
# Backend tests
cd backend
python manage.py test

# Frontend tests
cd frontend
npm test
```

### Deployment

Deployment instructions will be added for:
- **Docker Containerization**
- **AWS/Azure Cloud Deployment**
- **CI/CD Pipeline Setup**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROJECT STRUCTURE -->

## 🏗️ Project Structure <a name="project-structure"></a>

```
mustard-steps-platform/
├── backend/                 # Django REST API
│   ├── accounts/           # User management
│   ├── gyb/               # Generate Your Business Idea module
│   ├── syb/               # Start Your Business module
│   ├── iyb/               # Improve Your Business module
│   ├── eyb/               # Expand Your Business module
│   ├── siyb_game/         # Business simulation game
│   ├── siyb_platform/     # Django project settings
│   ├── manage.py          # Django management script
│   ├── requirements.txt   # Python dependencies
│   └── .env              # Environment variables
├── frontend/               # React application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── tsconfig.json
├── shared/                 # Shared code between frontend/backend
│   ├── types/             # TypeScript type definitions
│   ├── constants/         # Shared constants
│   ├── utils/             # Common utilities
│   └── index.ts           # Main exports
├── .venv/                 # Python virtual environment
├── start-dev.sh           # Development server script
├── package.json           # Root package configuration
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

<!-- API ENDPOINTS -->

## 🔌 API Endpoints <a name="api-endpoints"></a>

### Public Endpoints
- `GET /api/health/` - Health check
- `GET /api/accounts/welcome/` - Platform information
- `GET /api/accounts/user-count/` - Total user count

### Authentication (Coming Soon)
- `POST /api/auth/register/` - User registration
- `POST /api/auth/login/` - User login
- `POST /api/auth/logout/` - User logout

### Modules (Coming Soon)
- `GET /api/modules/` - List all training modules
- `GET /api/modules/{slug}/` - Module details
- `POST /api/progress/` - Update user progress

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Mustard Steps Consulting Team**

- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/your-profile/)
- Email: your.email@example.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **AI Business Idea Generator** - Generate personalized business ideas using AI
- [ ] **AI Writing Assistant** - Help users write business plans with AI guidance
- [ ] **Performance Analytics** - AI-powered insights into learning progress
- [ ] **Virtual Business Coach** - Personalized AI coaching throughout the journey
- [ ] **Mobile Application** - Native iOS and Android apps
- [ ] **Multi-language Support** - Support for multiple languages
- [ ] **Video Conferencing Integration** - Built-in video calls for group sessions
- [ ] **Gamification System** - Badges, leaderboards, and achievements
- [ ] **Marketplace Integration** - Connect graduates with investors/mentors
- [ ] **Advanced Reporting** - Comprehensive analytics dashboard

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/your-username/mustard-steps-platform/issues).

### Contributing Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project and find it helpful for your entrepreneurial journey, please give it a ⭐️!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- **ILO (International Labour Organization)** - Inspiration for business training methodologies
- **Django Community** - Excellent web framework and documentation
- **React Community** - Powerful frontend library and ecosystem
- **All Contributors** - Everyone who helped build this platform

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>