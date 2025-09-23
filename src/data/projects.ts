import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "whatsapp-bulk-marketing-system",
    title: "WhatsApp Bulk Marketing System",
    description:
      "Automated & optimized bulk messaging, delivering 1 lakh+ WhatsApp messages with 80% less manual effort. Integrated scheduling & tracking for seamless customer engagement.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sejalkailashyadav/whatsapp/",
    tags: ["Node.js", "SQL", "WhatsApp Business API", "GitHub", "VS Code"],
  },
  {
    id: "compass-cancer-hospital-website",
    title: "Compass Cancer Hospital Website (CCH)",
    description:
      "Customized & scaled a hospital website backend for 10K+ monthly visitors. Enhanced database performance, security, and custom features for better user experience.",
    icon: "/skills/laravel.PNG",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://www.compasscancerhospital.com/",
    tags: ["Laravel", "MySQL", "JavaScript", "PHP", "Sass"],
  },
  {
    id: "ecommerce-fullstack-web-app",
    title: "E-Commerce Full-Stack Web App",
    description:
      "Built a basic e-commerce platform as part of training. Implemented search, cart, checkout & order history, ensuring a smooth shopping experience.",
    icon: "/skills/nestjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sejalkailashyadav/product-management-systemm",
    tags: ["NestJS", "Prisma ORM", "Express.js", "MySQL"],
  },
  {
    id: "driver-drowsiness-detection",
    title: "Driver Drowsiness Detection System",
    description:
      "Python project to detect driver drowsiness using Python, OpenCV, and Keras. Alerts the driver when sleepy to prevent accidents on highways.",
    icon: "/skills/python.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sejalkailashyadav/ML-Driver-Drowsiness-Detection-system",
    tags: ["Python", "OpenCV", "Keras", "Pandas"],
  },
  {
    id: "event-calendar-web-app",
    title: "Event Calendar Web App",
    description:
      "Implemented multi-language support using i18next, dark theme option, adding/editing/deleting events, calendar & event views, data stored in LocalStorage.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sejalyadav0818/Event-Calendar",
    tags: ["React.js", "i18next", "Redux"],
  },
  {
    id: "quickmdnotes",
    title: "QuickMDNotes - Advanced Note-Taking Web Application",
    description:
      "Developed using Vite, React, and TypeScript. Provides advanced functionalities like categorization, markdown support, and note filtering.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sejalyadav0818/QuickMDNotes",
    tags: ["React.js", "TypeScript", "Bootstrap", "Redux", "Redux Thunk"],
  },
  {
    id: "product-management-system",
    title: "Product Management System",
    description:
      "Comprehensive e-commerce solution using NestJS, Prisma ORM, Express.js. Includes UI for search, cart, checkout, order history & admin panel for product/category/user management.",
    icon: "/skills/nestjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sejalyadav0818/product-management-systemm",
    tags: ["NestJS", "Express.js", "MySQL", "Prisma ORM", "E-Commerce"],
  },
];

export default projects;
