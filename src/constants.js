// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import reduxLogo from './assets/tech_logo/redux.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import cLogo from './assets/tech_logo/c.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import cppLogo from './assets/tech_logo/cpp.png';

import sassLogo from './assets/tech_logo/sass.png';
import angularLogo from './assets/tech_logo/angular.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import gurukullogo from './assets/education_logo/gurukullogo.png';
import jeclogo from './assets/education_logo/jeclogo.png';

// Project Section Logo's
import jeclibrary from './assets/work_logo/jec_library.png';
import simonsaysgame from './assets/work_logo/simonsays_game.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import gym_management from './assets/work_logo/gym_management.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      // { name: 'SASS', logo: sassLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      // { name: 'GSAP', logo: gsapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Springboot', logo: springbootLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      // { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Figma",
      "Material UI",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: jeclogo,
    school: "Jabalpur Engineering College, Jabalpur",
    date: "Oct 2022 - Present",
    grade: "7.337 CGPA",
    desc: "Currently i am pursuing Bacholar of Technology  in Information Technology from JEC, Jabalpur. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at JEC has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bacholar of Technology (I.T)",
  },
  {
    id: 2,
    img: gurukullogo,
    school: "Gurukul School Dhamnod",
    date: "June 2021 - March 2022",
    grade: "71%",
    desc: "I completed my class 12 education from Gurukul School, Dhamnod, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 3,
    img: gurukullogo,
    school: "Gurukul School Dhamnod",
    date: "June 2019 - March 2020",
    grade: "70.5%",
    desc: "I completed my class 10 education from Gurukul School Dhamnod, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Library Management System",
    description:
      "I developed this project using HTML, CSS, and JavaScript to practice frontend development and UI design. It features pages for managing books, users, and transactions with a clean, responsive layout. This project helped me improve form validation, DOM manipulation, and structuring multi-page applications.",
    image: jeclibrary,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Tusharsolanki33/tushars-library-management-system-JEC",
    webapp: "https://tusharsolanki33.github.io/tushars-library-management-system-JEC/",
  },
  {
    id: 1,
    title: "Simon Says Game",
    description:
      "I built a Simon Says memory game using HTML, CSS, and JavaScript to practice DOM manipulation and event handling.The game challenges users to remember and repeat sequences of colors and sounds, increasing in difficulty with each round.It was developed to sharpen my front-end skills and improve interactive UI design.",
    image: simonsaysgame,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Tusharsolanki33/simon-says",
    webapp: "https://tusharsolanki33.github.io/simon-says/",
  },
  // {
  //   id: 2,
  //   title: "Movie Recommendation App",
  //   description:
  //     "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
  //   image: movierecLogo,
  //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/codingmastr/Movie-Recommendation-App",
  //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
  // },

  // {
  //   id: 4,
  //   title: "Netflix Clone",
  //   description:
  //     "I created this frontend project using HTML, CSS, and JavaScript to practice responsive design, modern layouts, and dynamic content rendering. It mimics the look and feel of Netflix, including sections for trending, originals, and a custom video player UI. This project helped me improve my skills in CSS Flexbox/Grid and JavaScript DOM manipulation.",
  //   image: taskremLogo,
  //   tags: ["JavaScript","HTML", "CSS"],
  //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
  //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  // }, 
  {
    id: 5,
    title: "Gym Management System",
    description:
      "A responsive web app built using HTML, CSS, and JavaScript to manage gym-related features like member login, plans, and contact forms. I created this project to practice and improve my frontend skills, especially in layout design, form validation, and interactivity.",
    image: gym_management,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Tusharsolanki33/Gym-management",
    webapp: "https://tusharsolanki33.github.io/Gym-management/",
  },

];  