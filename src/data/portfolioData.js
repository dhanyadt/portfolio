export const personalInfo = {
  name: "DHANYA D T",
  title: "Software Engineer",
  description: "Computer Science Graduate focused on full-stack development, backend systems, and building useful software.",
  metadata: [
    "BENGALURU · INDIA",
    "COMPUTER SCIENCE · 2026",
    "OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES"
  ],
  socials: {
    github: "https://github.com/dhanyadt",
    linkedin: "https://www.linkedin.com/in/dhanya-d-t-46a02525b",
    email: "mailto:dhanyadt6@gmail.com"
  },
  resumeUrl: "/DHANYA_DT_RESUME.pdf"
};

export const projects = [
  {
    id: "wastezero",
    number: "01",
    title: "WasteZero",
    category: "NGO × VOLUNTEER PLATFORM",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    description: "A full-stack platform connecting NGOs with volunteers through skill and location-based matching and real-time communication.",
    features: [
      "Authentication & role-based access",
      "Skill and location-based matching",
      "NGO handles opportunity creation and management",
      "Volunteer opportunity discovery and applications",
      "Real-time messaging with Socket.IO",
      "Admin management & platform analytics"
    ],
    github: "https://github.com/dhanyadt/Waste-Zero-",
    liveDemo: "https://waste-zero-five.vercel.app/",
    assetsDir: "/projects/wastezero",
    themeClass: "project-wastezero",
    caseStudy: {
      overview: "WasteZero is a full-stack platform that connects NGOs with volunteers through skill and location-based matching. NGOs can create and manage volunteer opportunities, while volunteers can discover relevant opportunities and communicate with organizations in real time. The platform also includes role-based experiences and an admin layer for managing users, opportunities and platform activity.",
      problem: "NGOs often lack centralized platforms to rapidly recruit volunteers with specific skill sets. Meanwhile, volunteers face problem in discovering local opportunities aligned with their schedules and expertise.",
      solution: "A web platform offering role-based access control, location match, dynamic matches and real-time support mechanisms. The platform empowers both administrators and volunteer applicants to coordinate seamlessly.",
      myContribution: "I handled the majority of the backend and integration work for the project. I developed and tested REST APIs, implemented authentication and role-based functionality, worked on the skill-based matching system, and integrated WebSocket-based real-time messaging. I also handled frontend–backend integration and contributed to selected frontend functionality.",
      gallery: [
        {
          image: "ngo-dashboard.png",
          alt: "NGO Dashboard showing recommended volunteer matches",
          caption: "NGO Dashboard / Volunteer Matching"
        },
        {
          image: "volunteer-dashboard.png",
          alt: "Volunteer Dashboard showing recommended opportunities",
          caption: "Volunteer Dashboard / Opportunity Matching"
        },
        {
          image: "messages.png",
          alt: "Real-time messaging interface between an NGO and a volunteer",
          caption: "Real-Time Messaging",
          sectionTitle: "Real-Time Communication",
          sectionText: "Once matched, NGOs and volunteers can message each other directly within the platform to coordinate next steps."
        }
      ],
      architecture: {
        nodes: [
          { id: "frontend", label: "React Frontend", type: "frontend" },
          { id: "api", label: "Node.js / Express API", type: "backend" },
          { id: "database", label: "MongoDB", type: "database" }
        ]
      },
      technicalNotes: [
        "JWT-based authentication / role-based access",
        "Socket.IO for real-time communication",
        "REST APIs for application functionality"
      ],
      challenges: [],
      learnings: []
    }
  },
  {
    id: "supportiq",
    number: "02",
    title: "SupportIQ",
    category: " CUSTOMER SUPPORT PLATFORM",
    ownership: "Individual Project · End-to-end development",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "JWT"],
    description: "A full-stack customer support platform combining troubleshooting, decision trees and a structured knowledge base.",
    features: [
      "AI-Assisted Customer Support Chatbot",
      "Guided Decision-Tree Troubleshooting",
      "Searchable Knowledge Base",
      "Secure JWT-Based Admin Authentication",
      "Support Category & Knowledge Management",
      "Customer Message Management"
    ],
    github: "https://github.com/dhanyadt/contact-center-knowledge-system",
    liveDemo: "https://contact-center-knowledge-system.onrender.com/",
    assetsDir: "/projects/supportiq",
    themeClass: "project-supportiq",
    caseStudy: {
      overview: "SupportIQ is a full-stack customer support and knowledge management system designed to help users resolve issues faster through AI-assisted support, guided troubleshooting, and a searchable knowledge base. The platform also includes a secure administrative dashboard for managing support content and customer requests.",
      problem: "Users and support agents often struggle to find the right answer when knowledge is scattered across documents, causing slow resolution and inconsistent guidance.",
      solution: "A unified support interface that combines an AI-assisted chatbot with structured decision-tree flows and a searchable knowledge base, guiding users step by step toward a concrete answer.",
      myContribution: "I designed and developed the platform end to end, including the customer-facing interface, REST API backend, MongoDB integration, AI-assisted support flow, decision-tree troubleshooting system, knowledge-base management, and JWT-based admin authentication and authorization. I also implemented the administrative workflows for managing support content and customer messages, and deployed the application for live use.",
      gallery: [
        {
          image: "support-experience.png",
          alt: "SupportIQ guided troubleshooting and support category browsing",
          caption: "Guided Troubleshooting / Support Categories",
          sectionTitle: "Customer Support Experience",
          sectionText: "Users pick a category and move through a guided, decision-tree-style flow to reach a solution, with an AI-assisted chat option if they're still stuck."
        },
        {
          image: "admin-dashboard.png",
          alt: "SupportIQ admin dashboard for managing knowledge base and messages",
          caption: "Admin Dashboard / Knowledge Management",
          sectionTitle: "Admin & Knowledge Management",
          sectionText: "A secure, JWT-protected admin dashboard for managing support categories, the knowledge base, and incoming customer messages."
        }
      ],
      architecture: {
        nodes: [
          { id: "ui", label: "Customer Interface", type: "frontend" },
          { id: "api", label: "Node.js / Express REST API", type: "backend" },
          { id: "db", label: "MongoDB", type: "database" }
        ]
      },
      technicalNotes: [
        "JWT authentication",
        "Protected admin routes",
        "Knowledge-base management",
        "Decision-tree troubleshooting",
        "AI-assisted support"
      ],
      challenges: [],
      learnings: []
    }
  },
  
];

export const experiences = [
  {
    id: "infosys-springboard",
    role: "Full-Stack Development Intern",
    company: "Infosys Springboard",
    duration: "Jan 2026 — Apr 2026",
    bullets: [
      "Contributed to WasteZero, a MERN-stack NGO–Volunteer platform.",
      "Developed and tested REST APIs and backend functionality using Node.js and Express.",
      "Worked on authentication, role-based access, and skill-based matching.",
      "Implemented real-time communication using WebSockets / Socket.IO.",
      "Integrated frontend and backend functionality using React and REST APIs.",
      "Collaborated using Git/version-controlled repositories, debugging issues and adapting to changing requirements."
    ]
  }
];

export const skills = {
  Languages: ["Python", "JavaScript", "SQL"],
  Frontend: ["React", "HTML", "CSS", "Bootstrap"],
  Backend: ["Node.js", "Express", "Flask", "REST APIs"],
  Databases: ["MongoDB", "MySQL", "SQLite"],
  Tools: ["Git", "GitHub", "Postman", "Docker"]
};

export const education = {
  degree: "B.Tech — Computer Science Engineering",
  specialization: "Cybersecurity",
  institution: "Presidency University, Bengaluru",
  graduation: "2026",
  cgpa: ""
};
