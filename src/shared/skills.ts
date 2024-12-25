interface TechItem {
  id: number;
  name: string;
  logo: string;
}

export const LANGUAGES: TechItem[] = [
  { id: 0, name: "HTML", logo: "html5" },
  { id: 1, name: "CSS", logo: "css3" },
  { id: 2, name: "JavaScript", logo: "js" },
  { id: 3, name: "Java", logo: "java" },
  { id: 4, name: "Dart", logo: "dart" },
];

export const TOOLS: TechItem[] = [
  { id: 0, name: "Figma", logo: "figma" },
  { id: 1, name: "Git", logo: "git" },
  { id: 2, name: "GitHub", logo: "github" },
  { id: 3, name: "Firebase", logo: "firebase" },
  { id: 4, name: "Postman", logo: "postman" },
  { id: 5, name: "MySQL", logo: "mysql" },
];

export const FRAMEWORKS: TechItem[] = [
  { id: 0, name: "React.js", logo: "reactjs" },
  { id: 1, name: "Bootstrap", logo: "bootstrap4" },
  { id: 2, name: "Flutter", logo: "flutter" },
  { id: 3, name: "MUI", logo: "materialui" },
  { id: 4, name: "Tailwind CSS", logo: "tailwindcss" },
];
