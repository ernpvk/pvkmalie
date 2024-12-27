export interface ProjectInfo {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail?: string;
  thumbnailDetail?: string;
  images?: string[];
  colorAura: string;

  technologies: string[];

  links: {
    github?: string;
    live?: string;
    figma?: string;
  };

  type: "Personal" | "Academic";
  course?: string;

  role?: string;
  responsibilities?: string[];
}
export const PROJECTS: ProjectInfo[] = [
  {
    id: "pvkmalie-port",
    name: "PvkMalie Website",
    shortDescription: "Personal website to showcase my projects, skills, and myself",
    fullDescription:
      "A portfolio website that presents my work, abilities, creativity, and express myself throughout this digital space built with React and Tailwind CSS.",
    thumbnail: "/src/assets/images/projects/pvkmalie/thumbnail.png",
    thumbnailDetail: "/src/assets/images/projects/pvkmalie/thumbnail.png",
    colorAura: "blue",
    images: [
      "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
      "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
      "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    ],
    technologies: ["TypeScript", "ReactJS", "Tailwind CSS"],
    links: {
      github: "https://github.com/username/portfolio",
      live: "https://github.com/ernpvk/pvkmalie",
    },
    type: "Personal",
    responsibilities: [
      "Designed and implemented responsive UI components",
      "Implemented smooth animations and transitions",
    ],
  },
  {
    id: "jodjai",
    name: "JodJai",

    shortDescription:
      "Journal your thoughts and moods, and track your emotional well-being with our intuitive app",

    fullDescription:
      "A comprehensive mood tracking application that promotes SDG3 Good Health and Well-being mental well-being and emotional awareness. The app features daily mood logging, weekly mood summaries, and journal, all designed with user engagement and accessibility in mind.",
    thumbnail: "/src/assets/images/projects/jodjai/jodjai_thumbnail.png",
    thumbnailDetail: "/src/assets/images/projects/jodjai/jodjai_thumbnailDetail.png",
    colorAura: "purple",
    technologies: ["Flutter", "Node.js", "Azure SQL", "Figma"],
    links: {
      github: "https://github.com/kayjirat/JodJai",
      figma:
        "https://www.figma.com/design/hNdvPij38kxgN7EaYrxinA/JodJai-(Copy)?node-id=4-20&t=xMbszyJ5WvULqGzr-1",
    },

    type: "Academic",
    course: "CS22 Integrated project II",
    role: "Front-end Developer",
    responsibilities: [
      "Developed the frontend using Flutter",
      "Designed UI/UX using Figma",
      "Enhanced user engagement and accessibility",
    ],
  },

  {
    id: "jonghong",
    name: "JongHong",
    shortDescription: "Helping KMUTT students efficiently discover and book campus workspaces",
    fullDescription:
      "A mobile application for booking KMUTT workspace facilities. The app focuses on promoting efficient use of campus resources while giving a convenient booking experience for users.",
    thumbnail: "/src/assets/images/projects/jonghong/thumbnail.png",
    thumbnailDetail: "/src/assets/images/projects/jonghong/thumbnail.png",
    colorAura: "orange",

    technologies: ["Flutter", "Firebase", "Node.js", "Figma"],
    links: { github: "https://github.com/kayjirat/JongHong" },

    type: "Academic",
    course: "CSC234 User-Centered Mobile App. Dev. & CSC231 Agile Software Engineering",
    role: "Front-end Developer",
    responsibilities: [
      "Developed the frontend using Flutter",
      "Contributed in designed UX/UI using Figma",
      "Enhanced overall user experience",
    ],
  },
  {
    id: "cvkraft",
    name: "CVKraft",
    shortDescription:
      "Interactive CV builder for creating professional cv or resume with real-time preview",
    fullDescription:
      "CVKraft(ซีวีครัฟ) is a web application that enables users to create, edit, and manage their professional CV/résumé. Including sections for general information, work experience, educational background, and skills with real-time preview. Users also can export to pdf.",
    thumbnail: "/src/assets/images/projects/cvkraft/thumbnail.png",
    thumbnailDetail: "/src/assets/images/projects/cvkraft/thumbnail.png",
    colorAura: "blue",
    technologies: ["React.js", "Tailwind CSS"],
    links: { live: "https://cv-kraft.vercel.app/", github: "https://github.com/ernpvk/CVKraft" },
    type: "Personal",
    role: "Front-end Developer",
    responsibilities: ["Developed the website with React and Tailwind"],
  },
  {
    id: "clima",
    name: "Clima",
    shortDescription: "Real-time weather forecast application with location-based weather search",
    fullDescription:
      "A weather application that lets users search for weather conditions by location using the Visual Crossing API. Users can view current temperature, weather conditions, and other essential weather data.",
    thumbnail: "/src/assets/images/projects/clima/thumbnail.png",
    thumbnailDetail: "/src/assets/images/projects/clima/thumbnail.png",
    colorAura: "gray",
    technologies: ["JavaScript", "CSS", "HTML", "Webpack"],
    links: {
      live: "https://ernpvk.github.io/clima/",
      github: "https://github.com/ernpvk/clima",
    },
    type: "Personal",
    role: "Front-end Developer",
    responsibilities: [
      "Implemented weather data fetching using Visual Crossing API",
      "Created dynamic UI that responds to weather conditions",
      "Developed responsive design for mobile and desktop views",
    ],
  },

  {
    id: "majorapp",
    name: "Major App",
    shortDescription: "Enabling moviegoers to seamlessly browse and book cinema tickets",
    fullDescription:
      "Part of the larger Harmoni app ecosystem, Major is a web application for booking movie tickets. Developed in collaboration with 40+ computer science students, the application provides a seamless movie ticket booking experience.",

    colorAura: "red",

    technologies: ["TypeScript", "React.js", "Chakra UI", "Node.js", "MariaDB"],
    links: { github: "https://github.com/CS23-IntegrateProject-1/Major-App" },

    type: "Academic",
    course: "CS22 Integrated project I",
    role: "Front-end Developer",
    responsibilities: [
      "Developed frontend using TypeScript and React.js",
      "Implemented responsive UI with Chakra UI",
      "Collaborated with large development team",
    ],
  },
  {
    id: "helmet-detection",
    name: "AI Helmet Detection",
    shortDescription: "Enhancing road safety through AI real-time helmet detection and monitoring",
    fullDescription:
      "An application that uses YOLOv8 for real-time helmet detection, featuring a web interface for interaction with the AI model.",
    thumbnail: "/src/assets/images/projects/helmet/thumbnail.png",
    thumbnailDetail: "/src/assets/images/projects/helmet/thumbnail.png",
    colorAura: "yellow",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "OpenCV", "Roboflow", "YOLOv8"],
    links: { github: "https://github.com/ernpvk/Helmet_Detection" },
    type: "Academic",
    course: "CSC340 Artificial Intelligence",
    role: "Full Stack Developer",
    responsibilities: [
      "Designed UX/UI and system workflow",
      "Developed AI model using YOLOv8",
      "Built frontend with HTML, CSS, and JavaScript",
      "Implemented backend using Flask",
    ],
  },
  {
    id: "kaggle-store-sales",
    name: "Store Sales Forecasting",
    shortDescription: "Time series forecasting model to predict store sales in Ecuador",
    fullDescription:
      "A data science project that predicts store sales using time series data, including factors like promotions, oil prices, and holidays to forecast future sales.",
    thumbnail: "/src/assets/images/projects/kaggle/thumbnail.png",
    thumbnailDetail: "/src/assets/images/projects/kaggle/thumbnail.png",
    colorAura: "blue",
    technologies: ["Python", "XGBoost", "Matplotlib", "Pandas", "NumPy", "Scikit-learn"],
    links: {},
    type: "Academic",
    course: "CSC345 Data Science",
    role: "Data Scientist",
    responsibilities: [
      "Achieved 180th place in Kaggle store sales competition with team of 4",
      "Implemented time series techniques including moving averages and feature engineering",
      "Developed prediction models with hyperparameter optimization",
      "Handled data preparation including missing values and outlier detection",
      "Evaluated model performance using RMSE metrics",
    ],
  },
  {
    id: "carepaw",
    name: "CarePaw",
    shortDescription:
      "Helping pet owners manage and track their pets' card and learn pet tips for their lovely one",
    fullDescription:
      "A first solo project focused on creating a web application for managing pet information and providing care tips. The full-stack application features CRUD operations for pet cards and pet care guidance.",
    colorAura: "green",
    technologies: ["React.js", "Node.js", "MariaDB", "Figma"],
    links: { github: "https://github.com/ernpvk/MiniProject_105" },

    type: "Academic",
    course: "CSC105 Web Application Development",
    role: "Full Stack Developer",
    responsibilities: [
      "Designed UX/UI using Figma",
      "Developed frontend with React.js",
      "Implemented backend using Node.js",
      "Managed MariaDB database integration",
    ],
  },
];
