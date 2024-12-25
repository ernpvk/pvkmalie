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

  category: "web" | "mobile" | "desktop" | "other";
  type: "Personal" | "academic" | "client" | "collaborative";
  role: string;
  responsibilities: string[];

  keyFeatures: string[];
}

export const PROJECTS: ProjectInfo[] = [
  {
    id: 0,
    name: "PvkMalie Website",
    shortDescription: "Personal portfolio showcasing my projects, skills and myself using React",
    fullDescription:
      "A modern, responsive portfolio website built with React and Tailwind CSS. With smooth animations, dark mode support, and a clean, minimalist design that effectively presents my work, abilities, creativity, and myself",
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
    category: "web",
    type: "Personal",
    role: "Full-stack Developer",
    responsibilities: [
      "Designed and implemented responsive UI components",
      "Implemented smooth animations and transitions",
    ],
    keyFeatures: [
      "Responsive design for all devices",
      "Smooth page transitions and animations",
      "Dark/Light mode theme switching",
    ],
  },
];
