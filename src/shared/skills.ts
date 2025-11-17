interface TechItem {
  id: number;
  name: string;
  logo: string;
}

export const LANGUAGES: TechItem[] = [
  { id: 0, name: "JavaScript", logo: "js" },
  { id: 6, name: "TypeScript", logo: "typescript" },
  { id: 1, name: "Java", logo: "java" },
  { id: 2, name: "HTML", logo: "html5" },
  { id: 3, name: "CSS", logo: "css3" },
  { id: 5, name: "SQL", logo: "mysql" },
];

export const TOOLS: TechItem[] = [
  { id: 0, name: "Figma", logo: "figma" },
  { id: 1, name: "Git", logo: "git" },
  { id: 2, name: "GitHub", logo: "github" },
  { id: 3, name: "Firebase", logo: "firebase" },
  { id: 4, name: "Postman", logo: "postman" },
  { id: 5, name: "MySQL", logo: "mysql" },
  { id: 6, name: "Selenium", logo: "selenium" },
  { id: 7, name: "Jaspersoft Studio", logo: "jaspersoft" },
];

export const FRAMEWORKS: TechItem[] = [
  { id: 0, name: "React.js", logo: "reactjs" },
  { id: 7, name: "Java Spring Boot", logo: "spring" },
  { id: 1, name: "Bootstrap", logo: "bootstrap4" },
  { id: 3, name: "MUI", logo: "materialui" },
  { id: 4, name: "Tailwind CSS", logo: "tailwindcss" },
  { id: 5, name: "Node.js", logo: "nodejs" },
  { id: 6, name: "Jest", logo: "jest" },
  { id: 8, name: "Express.js", logo: "express" },
];
