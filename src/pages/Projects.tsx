import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../shared/projects";
import { ChevronRight } from "lucide-react";

function Projects() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center  p-4 md:p-12 lg:p-16 ">
      <div className="flex flex-col items-center mt-40 mb-16">
        <h1 className="text-3xl lg:text-6xl font-bold text-primary font-headline">PROJECTS</h1>
        <p className="uppercase mt-2 font-button text-center text-stone-500 text-md md:text-lg">
          A collection of my course and personal projects
        </p>
      </div>
      <div className="grid grid-col  divide-y-2 divide-dashed">
        {PROJECTS.slice(0, 4).map((project) => (
          <div key={project.id} className="py-8">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/projects")}
        className="mt-8 px-8 py-2 rounded-3xl border-2 border-primary font-button
        flex items-center justify-center gap-2 text-primary hover:bg-primary hover:text-white
        transition-all duration-300 group"
      >
        <span>View More</span>
        <ChevronRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </div>
  );
}

export default Projects;
