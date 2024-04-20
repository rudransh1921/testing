import {
  web,
  django,
  sumz,
  python,
  imaginify,
  gssoc,
  javascript,
  typescript,
  html,
  yb,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  lp,
  threejs,
  timechain,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Web Developer ",
    icon: web,
  },

];

const technologies = [

  {
    name: "django",
    icon: django,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },

];

const experiences = [
  {
    title: "Open Source Developer",
    company_name: "Timechain Labs",
    icon: timechain,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Built Contract Store - a marketplace for predefined smart contracts which users can use as templates.",
      "Led initiative in design as well as development phase of the project for the frontend part of the project.",
      "Tech Stack : Javascript, NestJS, Firebase, Sveltekit",
    ],
  },
  {
    title: "Open Source Developer",
    company_name: "Girlscript Summer Of Code",
    icon: gssoc,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2022",
    points: [
      "Contributed to Projects: Moksha and Web Resources Hub",
      "Added code of different data Structures and algorithms which refactored the code into more optimised ones.",
      "Tech Stack : HTML, CSS and Javascript",
    ],
  },
  
];

const testimonials = [];

const projects = [
  {
    name: "Dropboat",
    description:
      "Developed a full stack web application with the objective to build a comprehensive Inventory Management System (IMS) that efficiently controls and manages stocks.  Additionally, its versatile plugin system accommodates custom applications and extensions with ease.", 
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: sumz,
    source_code_link: "https://github.com/Rudransh2608/Dropboat_inventory",
  },
  {
    name: "La Paz",
    description:
      "LaPaz is a 5star rated chrome extension which generates random quotes with each click. With the help of this simple and lightweight Quote Generator, you can add motivational and thought-provoking phrases to your web surfing.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "json",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "purple-text-",
      },
      {
        name: "canva",
        color: "red-text-gradient",
      }
    ],
    image: lp,
    source_code_link: "https://github.com/Rudransh2608/LaPaz-chome-extension",
  },
  {
    name: "Bingeflix",
    description:
      "Built a full stack web application similar to the popular streaming platform Netflix, replicating its main features and user interface. Integrated and rendered user authentication with engaging templates.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "red-text-gradient",
      }
    ],
    image: imaginify,
    source_code_link: "https://github.com/Rudransh2608/BingeFlix",
  },
];

export { services, technologies, experiences, testimonials, projects };
