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
    link: "https://x.com/aryan30804",
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
    image: "kubernetes.svg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Postman",
    image: "postman.svg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Git",
    image: "git.svg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Linux",
    image: "linux.svg",
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
        link: "https://github.com/aryansingh0059",
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
        link: "https://x.com/aryan30804",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/aryan-kumar1705/",
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
        link: "mailto:aryansinghclub1212@gmail.com",
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

export type ProjectStatus = "delivered" | "maintenance" | "progress";

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  status: ProjectStatus;
  technologies: string[];
  categories: string[];
  featured: boolean;
  date: string;
}

export const PROJECTS: Project[] = [
  {
    title: "DocMatcher – Similar Document Matcher",
    description:
      "A MERN-based semantic document template matching system that identifies and ranks similar documents using meaning-based similarity instead of keyword matching. Leverages NLP embeddings to understand document context and deliver accurate similarity scores.",
    image: "/projects/DocMatcher.png",
    link: "https://github.com/aryansingh0059/Similar-Doc-matcher",
    github: "https://github.com/aryansingh0059/Similar-Doc-matcher",
    status: "delivered",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "NLP", "Python"],
    categories: ["fullstack", "ai-ml"],
    featured: true,
    date: "2024-03-01"
  },
  {
    title: "QuickCure – Premium Healthcare Dashboard",
    description:
      "A modern, high-performance healthcare platform with a premium Glassmorphism aesthetic. Seamlessly manage appointments for patients and doctors with real-time scheduling, status tracking, and an intuitive dashboard experience.",
    image: "/projects/QuickCure.png",
    link: "https://patient-appointment-management-blue.vercel.app/",
    github: "https://github.com/aryansingh0059/Patient-Appointment-Management",
    status: "delivered",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    categories: ["fullstack", "frontend"],
    featured: true,
    date: "2024-02-15"
  },
  {
    title: "CineVerse – Movie Ticket Booking System",
    description:
      "A premium movie ticket booking platform with real-time seat selection, TMDB API integration, and a sleek cinematic UI. Users can browse trending movies, view showtimes, and book seats with an interactive seat map.",
    image: "/projects/CineVerse.png",
    link: "https://movie-ticket-booking-red-theta.vercel.app/",
    github: "https://github.com/aryansingh0059/Movie-Ticket-Booking",
    status: "delivered",
    technologies: ["React", "Next.js", "Tailwind CSS", "TMDB API", "Node.js"],
    categories: ["fullstack", "frontend"],
    featured: true,
    date: "2024-03-10"
  },
] as const;

export interface Certificate {
  title: string;
  issuer: string;
  link: string;
  date: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    title: "Building AI Agents with MongoDB",
    issuer: "MongoDB",
    link: "https://www.credly.com/earner/earned/share/b9883e49-69d2-467e-a97d-56925112e0aa",
    date: "June 2025",
  },
  {
    title: "MongoDB Query Optimization Techniques",
    issuer: "MongoDB",
    link: "https://www.credly.com/badges/3cdd1800-481d-413d-ab90-8aad2702bfb1",
    date: "2025",
  },
  {
    title: "Building AI-Powered Search with MongoDB Vector Search",
    issuer: "MongoDB",
    link: "https://www.credly.com/badges/37dcd302-64b1-4e2f-a802-e5a614a158c6",
    date: "2025",
  },
  {
    title: "Fundamentals of Network Communication",
    issuer: "University of Colorado System",
    link: "https://www.coursera.org/account/accomplishments/verify/R5KVQP9V0O2K",
    date: "2024",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    link: "https://www.coursera.org/account/accomplishments/verify/HD7O6C4H2O40",
    date: "2024",
  },
];


