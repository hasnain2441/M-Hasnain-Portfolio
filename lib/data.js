export const profile = {
  name: "Muhammad Hasnain",
  role: "Python / Django Developer",
  company: "SoftCompuTech",
  location: "Lahore, Pakistan",
  email: "m.hasnain2441@gmail.com",
  phone: "+92-320-9572441",
  github: "https://github.com/hasnain2441",
  linkedin: "https://linkedin.com/in/muhammad-hasnain-431830373",
};

export const about =
  "I'm a backend developer with a year of professional experience building multi-tenant ERPs, billing systems and learning platforms in Django. I care about access control that holds up, queries that stay fast, and APIs another developer can pick up without a call.";

export const experience = {
  title: "Python/Django Developer",
  company: "SoftCompuTech",
  period: "Jun 2025 - Present",
  points: [
    "Architected and delivered multi-tenant ERP solutions using Django and DRF, covering core business workflows across e-commerce and hospitality.",
    "Engineered a custom MBAC system enabling granular, module-level access control across enterprise roles, reducing unauthorized access risk.",
    "Drove backend optimization through advanced SQL tuning, wrote unit tests for reliability, and maintained clean codebases in a Git-based Agile workflow.",
  ],
};

export const projects = [
  {
    name: "KSA Medical Billing Platform",
    stack: ["DRF", "PostgreSQL", "Celery", "Redis", "AWS"],
    live: "https://ksa-billing-frontend-one.vercel.app/",
    points: [
      "Saudi Arabia-focused platform for patients, providers, insurance, claims, billing, pharmacy and reporting.",
      "NPHIES integration using FHIR R4 and OAuth2 for eligibility checks, claim submission and remittance via Celery.",
      "JWT auth, RBAC, audit logging, and AWS S3 for Saudi-region data residency compliance.",
    ],
  },
  {
    name: "School Management System",
    stack: ["Django", "DRF", "PostgreSQL", "Celery", "Redis", "Channels"],
    live: "https://school-fronend.vercel.app/",
    points: [
      "Multi-school, multi-branch platform with role-based access for admins, teachers, staff, students and guardians.",
      "REST APIs for academics, exams, attendance, timetables, HR, inventory and notifications.",
      "Full examination system: scheduling, papers, sessions, grading, results and rankings.",
      "AI-powered quiz generation through OpenAI and Celery, plus real-time quizzes.",
    ],
  },
  {
    name: "eStudy Academy",
    stack: ["Django", "DRF", "PostgreSQL", "Redis", "Channels"],
    live: "https://estudy.academy",
    points: [
      "Backend for an e-learning platform covering students, teachers, courses, assignments, quizzes, enrollments and certificates.",
      "Cart, invoice, payment verification, refunds and progress tracking, with protected content access.",
      "Real-time timed quizzes over WebSockets with auto-grading and notifications.",
      "JWT auth, Student/Teacher/Admin RBAC, Google Meet classrooms, attendance and audit logging.",
    ],
  },
  {
    name: "Sikh Legacy Travel",
    stack: ["Django", "DRF", "PostgreSQL"],
    live: "https://sikhlegacytravel.com",
    points: [
      "Backend for a Sikh heritage travel platform covering tour packages, bookings, itineraries and customer management.",
      "REST APIs for tour listings, availability, reservations and payment tracking with role-based access.",
    ],
  },
  {
    name: "Multi-Tenant E-Commerce ERP",
    stack: ["Django", "DRF", "PostgreSQL"],
    live: "https://onlineeasystore.com/",
    points: [
      "Multi-tenant ERP with RBAC and full store-data isolation; browsing, cart, checkout and order tracking on tenant-scoped APIs.",
      "Store-level permission guards, optimized PostgreSQL queries, and CI/CD deployment for reliable releases.",
    ],
  },
  {
    name: "Multi-Tenant Hotel Management ERP",
    stack: ["Django", "DRF", "PostgreSQL"],
    live: "https://onlineeasystore.com/",
    points: [
      "Custom MBAC engine enforcing role-level access per module (Rooms, Bookings, Restaurant, Staff, Reports) across all tenants.",
      "Fully documented APIs for room inventory, reservations, check-in/out and restaurant management, with audit trail.",
    ],
  },
];

export const skills = [
  ["Languages", "Python, SQL, HTML, CSS, JavaScript"],
  ["Frameworks", "Django, Django REST Framework, Flask"],
  ["Databases", "PostgreSQL, Microsoft SQL Server"],
  ["Tools", "Git, Docker, Celery, Redis, AWS (S3), Postman, Swagger/OpenAPI, CI/CD"],
  ["Security", "RBAC, MBAC, Multi-Tenancy, JWT Auth, AES-256-GCM"],
  ["Real-time", "Django Channels, WebSockets, ASGI"],
  ["AI / ML", "OpenAI API (GPT-4o-mini), RAG, Function Calling, VGG19 CNN"],
];

export const education = [
  ["Bachelor in Computer Science", "The Islamia University of Bahawalpur", "2021 - 2025"],
  ["Intermediate (Pre Engineering)", "", "2019 - 2021"],
];
