import { PROJECTS } from "../shared/projects";
import ProjectCard from "../components/ProjectCard";

function ProjectList() {
  return (
    <div className="flex flex-col items-center  p-4 md:p-12 lg:p-16 ">
      <div className="flex flex-col items-center mt-40 mb-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary font-headline">PROJECTS</h1>
        <p className="uppercase mt-2 font-button text-center text-sm md:text-md text-stone-500">
          A full collection of my academic and personal projects
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-x-10">
        {PROJECTS.map((project) => (
          <div key={project.id} className="py-8">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
