import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  Collage_Finalversion,
  body,
  p1,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Freelance Web Developer",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Present",
    points: [
      "Developed and maintained websites and web applications using TypeScript, JavaScript, HTML, PHP, and MySQL.",
      "Designed responsive, user-friendly web pages with optimized performance and cross-browser compatibility.",
      "Integrated databases and backend logic for efficient data management.",
      "Collaborated with clients to deliver customized, scalable, and secure web solutions.",
    ],
  },
  {
    title: "Microsoft Certified: Azure Data Engineer Associate (DP-203)",
    company_name: "Microsoft",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2024 - Oct 2024",
    points: [
      "Gained expertise in designing and implementing data solutions using Azure services like Data Lake, Synapse, Databricks, and Data Factory.",
      "Developed ETL pipelines for data ingestion, transformation, and storage in cloud environments.",
      "Implemented data security, monitoring, and optimization strategies for scalable and efficient data solutions.",
      "Worked with structured and unstructured data, ensuring high availability and reliability in enterprise data workflows.",
    ],
  },
  
  {
    title: "Bachelor of Computer Application",
    company_name: "St Aloysius College",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2021 - June 2024",
    points: [
      "Studied core computer science concepts, including programming, data structures, and databases.",
      "Gained hands-on experience in software development, web technologies, and system analysis.",
      "Collaborated on projects to build and optimize applications while ensuring best coding practices and performance.", 
      "Engaged in problem-solving, algorithm development, and teamwork to create efficient and scalable solutions.",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company_name: "Honeywell",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "OCT 2023 - (1 Month)",
    points: [
      "Configured Palo Alto Networks firewall to secure applications, reducing unauthorized access attempts by 30%.",
      "Monitored network traffic and identified vulnerabilities, enhancing system reliability and security.",
      "Assisted in implementing security policies and best practices to safeguard cloud-based applications.",
      "Implemented network security best practices to enhance application reliability and backend security.",

    ],
  },
];

const projects = [
  {
    name: "Flux",
    description:
      "A social media platform where users can create accounts, upload pictures, view posts, and interact. Designed and implemented using latest technologies for better UI.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Collage_Finalversion,
    source_code_link: "https://github.com/daniishaikh/Social-Media-Web-App"
  },
  {
    name: "Bodyfuel;",
    description:
      "The Gym Management System Website is designed to enhance gym operations and improve user experiences for members, trainers, and administrators.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: body,
    source_code_link: "https://github.com/daniishaikh/Bodyfuel",
  },
  {
    name: "Portfolio",
    description:
      "Built a portfolio site with stunning UI, 3D elements, and animations. Demonstrates the developer's skills in a unique manner that creates a lasting impact.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: p1,
    source_code_link: "https://github.com/daniishaikh/Nextjs-portfolio",
  },
];

export { services, technologies, experiences, projects };
