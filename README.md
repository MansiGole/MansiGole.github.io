Mansi Gole — Personal Portfolio
Premium editorial engineering portfolio for Mansi Gole, B.Tech Electronics & Computer Science student at SIES Graduate School of Technology (SIESGST), Navi Mumbai.

Stack
Frontend: React 19, Tailwind CSS, Framer Motion, lucide-react, sonner
Backend: FastAPI, Motor (MongoDB), httpx
Email: Emergent-managed Resend proxy (no API key required)
Database: MongoDB (contact form submissions)
Structure
frontend/
├── public/
│   ├── assets/            # Real screenshots of flagship projects
│   └── favicon.svg        # MG mark
└── src/
    ├── data/content.js    # ALL portfolio content — edit here to update
    ├── components/        # Navbar, Hero, About, Skills, FlagshipProjects,
    │                      # ProjectModal, SecondaryProjects, Experience,
    │                      # Achievements, Exploring, Contact (+Footer)
    └── App.js
backend/
└── server.py              # /api/contact (MongoDB + email), /api/status
Environment Variables
frontend/.env: REACT_APP_BACKEND_URL backend/.env: MONGO_URL, DB_NAME, CORS_ORIGINS, EMERGENT_EMAIL_KEY, EMAIL_FROM_NAME, EMAIL_REPLY_TO, CONTACT_NOTIFY_EMAIL

Run
Supervisor-managed: sudo supervisorctl restart frontend backend

Updating Content
All text, projects, links, skills and milestones live in frontend/src/data/content.js. Project screenshots live in frontend/public/assets/.

