// ─────────────────────────────────────────────────────────────
// PORTFOLIO DATA
// Edit this file to make the site yours — every component below
// reads from here, so this is the only place you need to touch
// for content changes.
//
// 👉 PROJECT LINKS: each project object below has a `github` and
//    a `demo` field. Replace the "#" placeholders with your real
//    GitHub repo URL and deployed/live demo URL for each project.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Muhammad Bilal Arshad",
  initials: "MA",
  roles: ["Software Engineer", "Web Developer", "Data Scientist", "Agentic AI Enthusiast"],
  location: "Lahore, Pakistan",
  intro:
    "Software Engineering student building across the stack — from React interfaces to data pipelines to agentic AI systems that actually do things.",
  avatar: "WhatsApp Image 2026-07-11 at 22.10.25.jpeg", // put an image path in /public and reference it here, e.g. "/avatar.jpg"
  resumeUrl: "#", // replace with a link to your resume PDF (e.g. hosted in /public/resume.pdf)
  email: "abilal.barshad@gmail.com", // ← replace with your real email
  phone: "+92 310 3101312", // ← replace with your real phone number
  socials: {
    github: "https://github.com/MuhammadBilalArshad102", // ← replace with your GitHub profile
    linkedin: "https://www.linkedin.com/in/mbilalarshad-", // ← replace with your LinkedIn profile
    // ← replace or remove if unused
  },
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm a Software Engineering student at COMSATS University Islamabad, Lahore Campus, working across web development, data science, and agentic AI/ML — three areas that keep bleeding into each other in the best way.",
    "On the web side, I build with React, TypeScript, and MongoDB, alongside a solid computer networking foundation from coursework. On the data side, I work with Python for data science and machine learning, and I'm increasingly focused on agentic AI — systems built from LLMs that can plan, use tools, and carry out multi-step tasks.",
    "I like projects that force me to connect these pieces: a web app backed by a real data pipeline, or an agent that needs a proper interface. That intersection is where I do my best work, and where I want my career to head.",
  ],
  facts: [
    { label: "Based in", value: "Lahore, PK" },
    { label: "Studying", value: "Software Engineering, COMSATS" },
    { label: "Focus", value: "Web, Data Science & Agentic AI" },
    { label: "Currently", value: "Open to internships & Jobs" },
  ],
};

export const skills = {
  heading: "Skills",
  subheading: "Tools and technologies I build with",
  groups: [
    {
      name: "Web Devalopment",
      items: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 88 },
        { name: "JavaScript (ES6+)", level: 87 },
        { name: "TypeScript", level: 78 },
        { name: "React.js", level: 85 },
        { name: "bootstrap", level: 85 },
        { name: "MongoDB", level: 78 },
        { name: "PostMan", level: 60 },
      ],
    },
    {
      name: "DATA and AI",
      items: [
        { name: "Python", level: 85 },
        { name: "Data Science (Pandas/NumPy)", level: 80 },
        { name: "Machine Learning", level: 75 },
        { name: "Agentic AI / LLMs", level: 72 },
      ],
    },
    {
      name: "Tools and Systems",
      items: [
        
        { name: "Git & GitHub", level: 85 },
        { name: "Computer Networking", level: 76 },
        { name: "Vite", level: 80 },
      ],
    },
  ],
};

export const projects = {
  heading: "Projects",
  subheading: "A mix of web apps, data science and Machine Learning",
  items: [
    {
      id: "portfolio",
      name: "Lunaire Website Full stack",
      tag: "Web · Featured",
      description:
        "This site. A fully responsive React + Tailwind portfolio with a componentized structure, real interactivity, and a proper Git-tracked deployment.",
      stack: ["React", "Tailwind CSS", "Vite", "JavaScript","MongoDb","Postman"],
      github: "https://github.com/MuhammadBilalArshad102/Lunaire.git", // ← put this project's GitHub repo link here
      demo: "https://lunaire.vercel.app/", // ← put this project's live/deployed link here
      featured: true,
    },
    
    {
      id: "Parallel and Distributed Computing",
      name: "Parallel Sorting Visualizer",
      tag: "",
      description:
        "Parallel Sorting Visualizer is a web-based application that visually demonstrates and compares sorting algorithms. It uses HTML, CSS, JavaScript, and Python Flask to display the sorting process through animated data bars while showing algorithm performance and execution time. The project focuses on understanding sorting algorithms and the benefits of parallel processing"
,
      stack: ["Python", "Html", "Css", "JavaScript"],
      github: "https://github.com/MuhammadBilalArshad102/Parallel-Sorting-Visualizer.git", // ← put this project's GitHub repo link here
      demo: "https://parallel-sorting-visualizer.vercel.app/", // ← put this project's live/deployed link here (e.g. a notebook viewer or write-up)
      featured: true,
    },
    {
  id: "weather-monitoring",
  name: "Weather Monitoring App",
  tag: "Web",
  description:
    "A weather monitoring application built with React that uses a weather API to fetch and display real-time weather information, including temperature, conditions, and other weather details.",
  stack: ["React", "JavaScript", "Weather API", "HTML", "CSS"],
  github: "https://github.com/MuhammadBilalArshad102/FentixTechTask10.git",
  demo: "https://fentix-tech-task10-five.vercel.app/",
  featured: false,
},
{
  id: "data-science-project",
  name: "Data Science Projects",
  tag: "Data Science",
  description:
    "A collection of data science tasks involving data cleaning, exploratory data analysis, visualization, feature engineering, and machine learning to extract insights and build predictive models.",
  stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Machine Learning"],
  github: "https://github.com/MuhammadBilalArshad102/NextGenTask1Week1.git",
  taskpart2: "https://github.com/MuhammadBilalArshad102/Week2NextGen.git",
  taskpart3:"https://github.com/MuhammadBilalArshad102/NextGenWeek3Task.git",
  taskpart4:"https://github.com/MuhammadBilalArshad102/NextGenweek4.git",
  featured: true,
},
{
  id: "furniture-hub",
  name: "Furniture Hub",
  tag: "Web",
  description:
    "A responsive furniture website designed using HTML, CSS, and Bootstrap, featuring a clean product layout, navigation, responsive sections, and a user-friendly interface.",
  stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  github: "https://github.com/MuhammadBilalArshad102/FentixTechTask8.git",
  demo: "https://fentix-tech-task8.vercel.app/",
  featured: false,
},,
  ],
};

export const timeline = {
  heading: "Education & Experience",
  subheading: "A running log of what I've built and learned",
  entries: [
   {
  date: "2023 — Present",
  type: "edu",
  title: "BS Software Engineering",
  org: "COMSATS University Islamabad, Lahore Campus",
  description:
    "Studying software engineering with coursework covering programming, data structures, databases, computer networks, web technologies, parallel and distributed systems, and software engineering practices.",
},

{
  date: "2024 — Present",
  type: "job",
  title: "Web Development",
  org: "Projects & Coursework",
  description:
    "Developed responsive and interactive web applications using HTML, CSS, Bootstrap, JavaScript, React, and modern web development practices.",
},

{
  date: "2024 — Present",
  type: "cert",
  title: "Database & SQL Development",
  org: "Academic Projects",
  description:
    "Worked with relational databases and SQL, including database design, queries, normalization, relationships, and management systems for academic projects.",
},



{
  date: "2024 — Present",
  type: "edu",
  title: "Computer Networking",
  org: "Coursework & Practical Learning",
  description:
    "Studied computer networking concepts including network configuration, IP addressing, subnetting, switches, network diagrams, protocols, and basic network troubleshooting.",
},

{
  date: "2025 — Present",
  type: "job",
  title: "Web Scraping & Data Collection",
  org: "Python Projects",
  description:
    "Built data collection and web scraping projects using Python to extract, organize, and prepare product and other publicly available website data for analysis.",
},

{
  date: "2025 — Present",
  type: "cert",
  title: "Data Science & Machine Learning",
  org: "Projects & Self-Directed Learning",
  description:
    "Worked on data cleaning, exploratory data analysis, visualization, feature engineering, and machine learning models using Python and popular data science libraries.",
},

{
  date: "2025 — Present",
  type: "achievement",
  title: "Parallel & Distributed Systems",
  org: "Academic Project",
  description:
    "Worked on parallel computing concepts and developed a Parallel Sorting Visualizer to demonstrate sorting algorithms and visualize their execution and performance.",
},

{
  date: "2025 — Present",
  type: "edu",
  title: "Technical & Business Writing",
  org: "Academic Coursework",
  description:
    "Developed technical and business communication skills through documentation, software requirements, project reports, professional correspondence, and structured technical writing.",
},

{
  date: "2025 — Present",
  type: "job",
  title: "UI/UX & Figma Design",
  org: "Academic & Personal Projects",
  description:
    "Created interface designs and prototypes using Figma, focusing on user flows, layouts, usability, and translating design concepts into functional web interfaces.",
},

{
  date: "2025 — Present",
  type: "achievement",
  title: "Agentic AI Systems",
  org: "Self-Directed Learning & Projects",
  description:
    "Exploring AI systems and LLM-driven agents capable of planning, using tools, and completing multi-step tasks rather than generating single-turn responses.",
},,
  ],
};

export const contact = {
  heading: "Contact",
  subheading: "Let's build something",
  description:
    "Open to internships and junior software engineering roles across web development, data science, and AI. The fastest way to reach me is email.",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];