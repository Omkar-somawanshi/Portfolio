// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/techmet.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/college.png';
import bsaLogo from './assets/education_logo/BCA.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/QUICK.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/Razorpay.png';
import cmLogo from './assets/work_logo/Dentify.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Backend Developer",
      company: "Webverse Digital",
      date: "January 2025 - Present",
      desc: "Developed low-code web applications using Node.js, Express.js, and MongoDB, resulting in increased operational efficiency and streamlined internal workflows. Collaborated with cross-functional teams to design,build,and deploy scalable RESTAPIs, ensuring seamless data management and system integration.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Express JS",
        " Postman",
        "VS Code",
      ],
    },
   
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: " R. H. Sapat College of Engineering, Management Studies and Research,Nashik",
      date: "Apr 2023 - Apr 2025",
      grade: "7.40 CGPA",
      desc: "I had completed my Master's degree (MCA) in Computer Applications from Savitribai Phule Pune University (SPPU). The program has equipped me with a comprehensive understanding of core computer science subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Technologies, and Software Engineering. Throughout my academic journey, I have participated in seminars, coding competitions, and practical projects that have helped me strengthen my problem-solving and development skills. My experience at SPPU continues to enhance both my technical proficiency and professional outlook.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "K.K. Wagh College of Arts, Commerce, and Science, Nashik",
      date: "Aug 2020 - Aug 2023",
      grade: "7.25 CGPA",
      desc: "I completed my Bachelor's degree in Computer Applications (BCA) from K.K. Wagh College of Arts, Commerce, and Science, Nashik. During this time, I developed a solid foundation in core areas such as Programming Fundamentals, Data Structures, Web Development, Networking, and Database Management Systems. The curriculum and project work helped me apply theoretical knowledge to practical scenarios, enhancing both my technical skills and logical thinking. My experience at K.K. Wagh College laid a strong groundwork for my career in the field of computer science.",
      degree: "Bachelor of Computer Application - BCA (Computer Application)",
    },
   
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Urban-Nest",
      description:
        "A full-featured MERN stack house rental website with user authentication ,property listings,CRUD operations,and image management",
      image: githubdetLogo,
      tags: [ "CSS", "JavaScript", "React JS", "API", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Omkar-somawanshi/Urban-Nest",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Explore-Nashik",
      description:
        "It features a dynamic public-facing frontend showcasing local attractions, culinary delights, and essential city information, complemented by a robust admin panel for seamless content management.",
      image: csprepLogo,
      tags: ["React JS",  "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Omkar-somawanshi/Explore-Nashik",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "QUICK-SHOW",
      description:
        "Quick Show is a full-stack online movie ticket booking application built using Node.js, Express.js, MongoDB, and React.js. The platform allows users to browse movies, view showtimes, check seat availability, and book movie tickets in real-time.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB",],
      github: "https://github.com/Omkar-somawanshi/QUICK-SHOW",
      webapp: "https://quickshow-server-iota-lilac.vercel.app/",
    },
    {
      id: 3,
      title: "Ai-image-Genrator", 
      description:
        "Built a fullstack AI Image Generation Web Application that allows users to generate images from text prompts using AI-powered image generation APIs (like OpenAI’s DALL·E or Stability AI). The platform provides a simple and user-friendly interface where users can enter descriptive text and get AI-generated images in real time.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "React", "Express", "MongoDB", "API",],
      github: "hhttps://github.com/Omkar-somawanshi/Ai-image-Genrator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    
    {
      id: 5,
      title: "Tailwind-Razor-Pay-project",
      description:
        "A sleek and responsive clone of the Razorpay landing page, built with React and Tailwind CSS. This project replicates the core design and layout of Razorpay's official website, focusing on modern UI, responsiveness, and interactive components.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
      github: "https://github.com/Omkar-somawanshi/Tailwind-Razor-Pay-project",
      webapp: "https://webversedigital.com/",
    },
    {
      id: 6,
      title: "Dentytech",
      description:
        "Developed a modern, responsive frontend website UI for Dentytech, a fictional Teeth Care and Dental Technology brand, using React.js and Tailwind CSS. The project focused purely on UI/UX design, without backend functionality, showcasing a visually appealing landing page and product sections with advanced CSS effects.",
      image: cmLogo,
      tags: ["React JS",  "Tailwind CSS", "HTML", "CSS", "JavaScript"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
   
    
  ];  