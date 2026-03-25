import { FaFacebook, FaYoutube } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
} from "react-icons/rx";

// export const SKILL_DATA = [
//   {
//     skill_name: "HTML",
//     image: "html.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "CSS",
//     image: "css.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "JavaScript",
//     image: "js.png",
//     width: 65,
//     height: 65,
//   },
//   {
//     skill_name: "Tailwind CSS",
//     image: "tailwind.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "React",
//     image: "react.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Redux",
//     image: "redux.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "TypeScript",
//     image: "ts.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Next.js 14",
//     image: "next.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Stripe",
//     image: "stripe.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Node.js",
//     image: "node.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "MongoDB",
//     image: "mongodb.png",
//     width: 40,
//     height: 40,
//   },
// ] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Docker",
    image: "docker.png", // Change from URL to local file
    width: 60,
    height: 60,
  },
  {
    skill_name: "Kubernetes",
    image: "kubernetes.png", // Change from URL to local file
    width: 60,
    height: 60,
  },
  {
    skill_name: "Postman",
    image: "postman.png", // Change from URL to local file
    width: 60,
    height: 60,
  },
  {
    skill_name: "Git",
    image: "git.png", // Change from URL to local file
    width: 60,
    height: 60,
  },
  {
    skill_name: "Linux",
    image: "linux.png", // Change from URL to local file
    width: 60,
    height: 60,
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Resume",
    link: "#resume",
  },
  { title: "Contact", link: "#contact" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};


export const PROJECTS = [

  {
    title: "Edvora - WebApp",
    description:
      'Edvora is an innovative educational web platform designed to make learning more accessible, interactive, and personalized. It empowers students, teachers, and institutions with intuitive tools that streamline teaching, enhance engagement, and improve academic outcomes.',
    image: "/projects/Edvora.png",
    // image: "https://edvora-beryl.vercel.app/signup",
    link: "https://edvora-beryl.vercel.app",
    status: "delivered",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    categories: ["frontend", "fullstack","backend"],
    featured: true,
    date: "2024-01-15"
  },
  {
    title: "WillWings – Explore the World, Effortlessly",
    description:
      'WillWings is a modern travel web platform designed to make trip planning smoother, smarter, and more enjoyable. It empowers travelers with intuitive tools that simplify discovering destinations, booking experiences, and managing journeys—all in one place.',
    image: "/projects/WillWings.png",
    link: "https://travel-planner123.netlify.app",
    status: "delivered",
    technologies: ["React", "CSS3", "JavaScript", "GSAP"],
    categories: ["frontend"],
    featured: false,
    date: "2023-11-20"
  },
  { 
    title: "Universe - Portfolio Website",
    description:
      'Embark on a cosmic voyage with Universe, my space-themed portfolio website crafted to transport you into the depths of the unknown. This immersive digital experience blends futuristic design, celestial aesthetics, and seamless interactivity—inviting you to discover my work as if traveling through galaxies.',
    image: "/projects/Portfolio.png",
    link: "https://example.com",
    status: "maintenance",
    technologies: ["Three.js", "React", "WebGL", "Node.js"],
    categories: ["frontend", "fullstack"],
    featured: true,
    date: "2024-02-01"
  },
  {
    title: "E-Commerce Platform",
    description:
      'A full-featured e-commerce platform with real-time inventory management, payment processing, and customer analytics. Built with scalability and performance in mind.',
    image: "/projects/Edvora.png", // Use existing image as placeholder
    link: "https://example.com",
    status: "delivered",
    technologies: ["Next.js", "Stripe", "MongoDB", "Node.js"],
    categories: ["fullstack", "enterprise"],
    featured: true,
    date: "2023-12-10"
  },
  {
    title: "Mobile Fitness App",
    description:
      'A cross-platform mobile application for fitness tracking, workout plans, and nutrition guidance with social features and progress analytics.',
    image: "/projects/WillWings.png", // Use existing image as placeholder
    link: "https://example.com",
    status: "maintenance",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    categories: ["mobile", "frontend"],
    featured: false,
    date: "2023-10-05"
  },
  {
    title: "AI Content Generator",
    description:
      'An AI-powered content generation tool that helps creators write engaging copy, generate ideas, and optimize content for SEO using machine learning algorithms.',
    image: "/projects/Portfolio.png", // Use existing image as placeholder
    link: "https://example.com",
    status: "delivered",
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    categories: ["ai-ml", "fullstack"],
    featured: true,
    date: "2024-01-30"
  },
  {
    title: "DevOps Automation Suite",
    description:
      'A comprehensive DevOps toolset for CI/CD pipeline automation, container orchestration, and infrastructure monitoring with real-time alerts.',
    image: "/projects/Edvora.png", // Use existing image as placeholder
    link: "https://example.com",
    status: "delivered",
    technologies: ["Docker", "Kubernetes", "AWS", "Terraform"],
    categories: ["devops", "enterprise"],
    featured: false,
    date: "2023-09-15"
  },
  {
    title: "Social Media Dashboard",
    description:
      'A real-time social media analytics dashboard that aggregates data from multiple platforms and provides insights through interactive visualizations.',
    image: "/projects/WillWings.png", // Use existing image as placeholder
    link: "https://example.com",
    status: "maintenance",
    technologies: ["Vue.js", "D3.js", "Express.js", "PostgreSQL"],
    categories: ["frontend", "fullstack"],
    featured: false,
    date: "2023-08-22"
  },
  {
    title: "Blockchain Wallet",
    description:
      'A secure cryptocurrency wallet with multi-chain support, NFT management, and decentralized exchange integration for seamless crypto transactions.',
    image: "/projects/Portfolio.png", // Use existing image as placeholder
    link: "https://example.com",
    status: "progress",
    technologies: ["Web3.js", "Solidity", "React", "Node.js"],
    categories: ["fullstack", "blockchain"],
    featured: true,
    date: "2024-02-10"
  },
  {
    title: "Healthcare Management System",
    description:
      'An enterprise healthcare platform for patient records management, appointment scheduling, and telemedicine features with HIPAA compliance.',
    image: "/projects/Edvora.png", // Use existing image as placeholder
    link: "https://example.com",
    status: "delivered",
    technologies: ["Angular", "Java", "Spring Boot", "MySQL"],
    categories: ["enterprise", "fullstack"],
    featured: true,
    date: "2023-11-30"
  }
] as const;


