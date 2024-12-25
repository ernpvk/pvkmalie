export interface ProjectInfo {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  colorAura: string;

  technologies: string[];

  links: {
    github?: string;
    live?: string;
    demo?: string;
  };

  type: "Personal" | "Course";
  role: string;
  responsibilities: string[];
}
export const PROJECTS: ProjectInfo[] = [
  {
    id: 0,
    name: "PvkMalie Website",
    shortDescription: "Personal website to showcase my projects, skills, and myself",
    fullDescription:
      "A portfolio website that presents my work, abilities, creativity, and express myself throughout this digital device built with React and Tailwind CSS. With smooth animations, dark mode support, and a clean, minimalist design",
    thumbnail: "/src/assets/images/projects/pvkmalie/thumbnail.png",
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
    role: "Full-stack Developer",
    responsibilities: [
      "Designed and implemented responsive UI components",
      "Implemented smooth animations and transitions",
    ],
  },
  {
    id: 1,
    name: "JodJai",
    shortDescription:
      "Empowering users to track and understand their emotion by daily mood logging and daily journal",
    fullDescription:
      "A comprehensive mood tracking application that promotes SDG3 Good Health and Well-being mental well-being and emotional awareness. The app features daily mood logging capabilities, weekly mood summaries, and journal functionality, all designed with user engagement and accessibility in mind.",
    thumbnail: "/src/assets/images/projects/jodjai/thumbnail.png",
    colorAura: "purple",
    images: [
      "/src/assets/images/projects/jodjai/1.png",
      "/src/assets/images/projects/jodjai/2.png",
      "/src/assets/images/projects/jodjai/3.png",
    ],
    technologies: ["Flutter", "Figma"],
    links: {},

    type: "Course",
    role: "Front-end Developer",
    responsibilities: [
      "Developed the frontend using Flutter",
      "Designed UI/UX using Figma",
      "Enhanced user engagement and accessibility",
    ],
  },

  {
    id: 2,
    name: "JongHong",
    shortDescription: "Helping KMUTT students efficiently discover and book campus workspaces",
    fullDescription:
      "A mobile application for booking KMUTT workspace facilities. The app focuses on promoting efficient use of campus resources while giving a convenient booking experience for users.",
    thumbnail: "/src/assets/images/projects/jonghong/thumbnail.png",
    colorAura: "teal",
    images: [
      "/src/assets/images/projects/jonghong/1.png",
      "/src/assets/images/projects/jonghong/2.png",
    ],
    technologies: ["Flutter", "Figma"],
    links: {},

    type: "Course",
    role: "Front-end Developer",
    responsibilities: [
      "Developed the frontend using Flutter",
      "Designed UI/UX using Figma",
      "Enhanced overall user experience",
    ],
  },

  {
    id: 3,
    name: "Major App",
    shortDescription: "Enabling moviegoers to seamlessly browse and book cinema tickets",
    fullDescription:
      "Part of the larger Harmoni app ecosystem, Major is a web application for booking movie tickets. Developed in collaboration with 40+ computer science students, the application provides a seamless movie ticket booking experience.",
    thumbnail: "/src/assets/images/projects/major/thumbnail.png",
    colorAura: "red",
    images: ["/src/assets/images/projects/major/1.png", "/src/assets/images/projects/major/2.png"],
    technologies: ["TypeScript", "React.js", "Chakra UI"],
    links: {},

    type: "Course",
    role: "Front-end Developer",
    responsibilities: [
      "Developed frontend using TypeScript and React.js",
      "Implemented responsive UI with Chakra UI",
      "Collaborated with large development team",
    ],
  },
  {
    id: 4,
    name: "CarePaw",
    shortDescription:
      "Helping pet owners manage and track their pets' card and learn pet tips for their lovely one",
    fullDescription:
      "A first solo project focused on creating a web application for managing pet information and providing care tips. The full-stack application features CRUD operations for pet cards and comprehensive pet care guidance.",
    thumbnail: "/src/assets/images/projects/carepaw/thumbnail.png",
    colorAura: "green",
    images: [
      "/src/assets/images/projects/carepaw/1.png",
      "/src/assets/images/projects/carepaw/2.png",
    ],
    technologies: ["React.js", "Node.js", "MariaDB", "Figma"],
    links: {},

    type: "Course",
    role: "Full Stack Developer",
    responsibilities: [
      "Designed UX/UI using Figma",
      "Developed frontend with React.js",
      "Implemented backend using Node.js",
      "Managed MariaDB database integration",
    ],
  },
  {
    id: 5,
    name: "Helmet Detection",
    shortDescription:
      "Enhancing road safety through AI-powered real-time helmet detection and monitoring",
    fullDescription:
      "An application that uses YOLOv8 for real-time helmet detection, featuring a web interface for interaction with the AI model. The system combines frontend technologies with Python backend for efficient object detection.",
    thumbnail: "/src/assets/images/projects/helmet/thumbnail.png",
    colorAura: "yellow",
    images: [
      "/src/assets/images/projects/helmet/1.png",
      "/src/assets/images/projects/helmet/2.png",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "YOLOv8"],
    links: {},
    type: "Course",
    role: "Full Stack Developer",
    responsibilities: [
      "Designed UX/UI and system workflow",
      "Developed AI model using YOLOv8",
      "Built frontend with HTML, CSS, and JavaScript",
      "Implemented backend using Flask",
    ],
  },
];
