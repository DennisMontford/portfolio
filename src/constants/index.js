import project1 from "../assets/projects/project-1.webp.webp";
import project2 from "../assets/projects/project-2.webp.webp";
import project3 from "../assets/projects/project-3.webp.webp";
import project4 from "../assets/projects/project-4.webp.webp";

export const HERO_CONTENT = `I'm a passionate full-stack developer with experience building user-focused applications. Proficient in modern technologies like React, Next.js, Node.js, and MongoDB. I enjoy crafting efficient and scalable solutions for web development challenges. Whether it’s front-end interactivity or back-end logic, I thrive on creating seamless digital experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCE = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Nexora.io",
    description: `Develop and maintain dynamic websites and web applications using JavaScript, React.js, and Node.js. Build and optimize RESTful APIs to enable seamless communication between systems and integrate MongoDB databases for efficient data storage and retrieval. Design and implement intuitive UI/UX features to enhance user experience and engagement. Work closely with stakeholders to gather requirements, define timelines, and deliver high-quality solutions.`,
    technologies: [
      "Javascript",
      "Tailwind CSS",
      "node.js",
      "HTML",
      "React.js",
      "Next.js",
      "mongoDB",
      "Redis",
      "Firebase",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Versaluu - Chat Application",
    image: project1,
    description:
      "A real-time chat application with features like private messaging, theme customization, an option to display only online users, and a sleek, user-friendly interface designed for an engaging experience.",
    technologies: [
      "MERN",
      "Socket.io",
      "Daisy UI",
      "Tailwind CSS",
      "Redis",
      "HTML",
    ],
    link: "https://versaluu.onrender.com/",
  },
  {
    title: "SuperNova - E-commerce Website",
    image: project2,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, Stripe integration, and user authentication.",
    technologies: ["MERN", "Stripe", "Redis", "Tailwind CSS", "HTML"],
    link: "https://supernova-ecommerce-store.onrender.com/",
  },
  {
    title: "Netflix Clone - Streaming Platform",
    image: project3,
    description:
      "A video streaming platform with features like a dynamic homepage, personalized recommendations, video playback, and user authentication for a seamless entertainment experience.",
    technologies: ["MERN", "Redis", "HTML", "Tailwind CSS"],
    link: "https://netflix-clone-uow7.onrender.com/",
  },
  {
    title: "KoffeeRam - Coffee Tracking Application",
    image: project4,
    description:
      "A caffeine tracker app with user authentication that calculates how much caffeine is currently in your system by logging coffee intake, amount consumed, and cost, with real-time updates.",
    technologies: ["React.js", "Tailwind CSS", "Firebase", "HTML"],
    link: "https://koffeeram.netlify.app/",
  },
];

export const CONTACT = {
  address: "Pinson, AL",
  phoneNumber: "+1 (659)-206-0165",
  email: "draymontford@gmail.com",
};
