import { FaYoutube, FaGithub } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
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
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
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
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/mr_kumaraman/",
  },
  {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/amankumar43209",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/amankumar/",
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
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
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
 
] as const;

export const FULLSTACK_SKILL = [
  
  
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Linux",
    image: "Linux.png",
    width: 70,
    height: 70,
  },
] as const;

export const PROJECTS = [
  // {
  //   title: "Being_fit",
  //   description:"",
  //   image: "",
  //   link: "",
  // },
  // {
  //   title: "",
  //   description:"",
  //   image: "",
  //   link: "",
  // },
  {
    title: "Space Themed Website",
    description:
      'Embark on an interstellar journey with my "Space Themed Website", a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world.',
    image: "/projects/project-1.png",
    link: "#",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/amankumar43209",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com/amankumae43209/",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/mr_kumaraman/",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/amankumar",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "www.linkedin.com/in/aman-kumar-591782263/",
      },
    ],
  },
  {
    title: "About",
    data: [
      
      {
        name: "Learning about me",
        icon: null,
        link: "#",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@amankumar43209@gmail.com",
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
] as const;

export const LINKS = {
  sourceCode: "https://github.com/amankumar43209",
};
