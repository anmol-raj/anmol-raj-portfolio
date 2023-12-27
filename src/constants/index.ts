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
  threejs,
} from "../assets";
import fbshot from "../assets/fbshot.png"
import tyke from "../assets/tyke.png"
import futor from "../assets/futor.png"
import tmm from "../assets/tmm.jpeg"
import ecom from "../assets/ecom-shot.png"
import fitapp from "../assets/fitshot.png"


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
    title: "ReactJS Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Front End Developer",
    icon: backend,
  },
  {
    title: "UI Designer",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UI Developer",
    company_name: "Tyke Invest",
    icon: tyke,
    iconBg: "#383E56",
    date: "Nov 2021 - Present ",
    points: [
      "Developed the User Interface of web applications like www.tykeinvest.com, www.tyke.pe & many more using Remix.js(the framework of React.js), Typescript, Html, CSS, and Figma from marketing pages to the dashboard & other internal tools for the teams like admins & finance using React with Material UI.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed email templates for all the products & integrated other third-party tools for marketing, tracking user behavior & optimized the app accordingly.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Collaborated with the design team & developed our own design system for the various products using Storybook, React.js & typescript.Built, tested and deployed scalable web application",
    ],
  },
  {
    title: "UI Developer",
    company_name: "Futor Labs",
    icon: futor,
    iconBg: "#E6DEDD",
    date: "Feb 2019 - Mar 2020",
    points: [
      "Worked upon designing the User Interface for the applications using Adobe XD & Figma.",
      "I have also experience in developing the designed UI using Angular 8.",
      "I got an opportunity to design and develop a whole application from scratch. It had many functionalities and a user-friendly front end for users to interact with."
    ],
  },
  {
    title: "UI Developer",
    company_name: "TMM Magazine",
    icon: tmm,
    iconBg: "#383E56",
    date: "Feb 2018 - Jan 2019 ",
    points: [
      "I have developed the website www.houseoftmm.com for the company itself & some websites for their clients.",
      "Did SEO, SEM, SMO, for that website, Run Facebook Ads & Online promotions of the brand.",
      "Provided support for website maintenance, Content updation on the website, Video editing, Social media accounts handling,",
      "Created Posts for social media content marketing."

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Facebook Clone",
    description:
      "An advanced social media Facebook clone application using React js , Node js, Express js, Mongodb and many many other tools.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node js",
        color: "pink-text-gradient",
      },
    ],
    image: fbshot,
    source_code_link: "https://github.com/anmol-raj/Facebook-clone",
  },
  {
    name: "E-Commerce + Dashboard & CMS",
    description:
      "A modern E-Commerce + Dashboard & CMS app using Next.js 13 App Router, React, Tailwind, Prisma, MySQL, TypeScript, etc.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typeScript",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://github.com/anmol-raj/ecom-app-with-dashboard",
  },
  {
    name: "Fitness App",
    description:
      "A modern Fitness Exercises app using React 18, React Router, and Material-UI, integrated with RapidAPI. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: fitapp,
    source_code_link: "https://github.com/anmol-raj/fitness-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
