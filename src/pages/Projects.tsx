import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../shared/projects";

function Projects() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center  p-4 md:p-12 lg:p-16 ">
      <div className="flex flex-col items-center mt-40 mb-16">
        <h1 className="text-2xl lg:text-6xl font-bold text-primary font-headline">PROJECTS</h1>
        <p className="uppercase mt-2 font-button text-center text-stone-500">
          A collection of my course and personal projects
        </p>
      </div>
      <div className="grid grid-col  divide-y">
        {PROJECTS.slice(0, 4).map((project) => (
          <div key={project.id} className="py-8">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/projects");
        }}
      >
        {" "}
        view more projects
      </button>
    </div>
  );
}

export default Projects;
