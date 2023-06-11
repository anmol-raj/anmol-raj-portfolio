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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import tyke from "../assets/tyke.png"
import futor from "../assets/futor.png"
import tmm from "../assets/tmm.jpeg"


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
    date: "March 2020 - April 2021",
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
    date: "Jan 2021 - Feb 2022",
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
    date: "Jan 2022 - Jan 2023",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
