import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 2,
    title: "Web Development",
    icons: [
      "/skills/redux.svg",
      "/skills/nextjs.png",
      "/skills/react.svg",
      "/skills/html.svg",
      "/skills/css.svg",
    ],
    shortDescription: "Crafting visually appealing and user-friendly websites.",
    description:
      "I design and develop modern, responsive websites that enhance your online presence. From simple landing pages to complex e-commerce platforms, I leverage the latest frameworks and technologies to deliver seamless, fast, and SEO-friendly experiences. Every project is tailored to meet your brand identity and user needs.",
  },
  {
    id: 3,
    title: "Backend Development",
    icons: [
      "/skills/socket-io.png",
      "/skills/docker.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/aws.svg",
    ],
    shortDescription: "Building robust and scalable backend systems.",
    description:
      "I create secure, efficient, and scalable backend infrastructures that power modern applications. With expertise in server-side development, API design, and database management, I ensure your applications handle high traffic and complex data seamlessly. My solutions are optimized for performance, reliability, and maintainability.",
  },
  {
    id: 4,
    title: "Product Strategy",
    icons: [
      "/skills/git.svg",
      "/images/collaboration.png",
      "/images/logical-thinking.png",
      "/images/analytical-skills.png",
      "/skills/ubuntu.png",
    ],
    shortDescription: "Defining goals, target audiences, and success roadmaps.",
    description:
      "I help shape product visions by defining clear goals, identifying target audiences, and creating actionable roadmaps. Combining market analysis, user research, and strategic planning, I ensure products align with business objectives and deliver meaningful user experiences. Maximize growth and impact through a structured product strategy.",
  },
  {
    id: 6,
    title: "Database Management",
    icons: [
     
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
       "/skills/mysql.svg",
      "/skills/redis.svg",
      "/skills/sqlite.svg",
    ],
    shortDescription: "Optimizing database systems for performance and reliability.",
    description:
      "I design, implement, and optimize database systems for both SQL and NoSQL environments. From schema design and query optimization to data security and scalability, I ensure your data infrastructure is reliable and efficient. My goal is to deliver high-performing, secure, and maintainable database solutions that support your applications seamlessly.",
  },
];

export default services;
