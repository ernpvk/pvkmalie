import { useParams } from "react-router-dom";
import { PROJECTS } from "../shared/projects";
import { getAuraColor } from "../utils/getAuraColor";
import { ExternalLink, Figma, Github } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-headline text-stone-500">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-10 md:py-18 mt-20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center ">
        <div className="flex flex-col w-full items-center bg-white z-20 ">
          <h1 className="font-headline text-primary text-4xl lg:text-6xl mb-6  ">{project.name}</h1>
          <hr className="w-2/3 md:w-full " />
        </div>
        <div className="w-full max-w-4xl relative m-20">
          <div className="flex p-5 items-center justify-center">
            {project.id === "jodjai" ? (
              <img
                src={project.thumbnailDetail}
                alt={`${project.name} preview`}
                className="w-full sm:w-96 md:w-[32rem] lg:w-[40rem] xl:w-[48rem] 
       object-contain relative z-20
       hover:scale-110 transition-transform duration-300 ease-in-out 
       cursor-pointer"
              />
            ) : (
              <img
                src={project.thumbnailDetail}
                alt={`${project.name} preview`}
                className="w-full sm:w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] 
       object-contain relative z-20
       hover:scale-110 transition-transform duration-300 ease-in-out 
       cursor-pointer"
              />
            )}

            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-full sm:w-96 md:w-[30rem] lg:w-[38rem] xl:w-[46rem] 
                     h-72 sm:h-80 md:h-96 lg:h-[30rem] xl:h-[34rem]
                     ${getAuraColor(project.colorAura)} rounded-full blur-2xl  z-10`}
            />
          </div>
        </div>

        <div className="w-full max-w-4xl shadow-md rounded-lg p-8 mb-8 font-body-light bg-white relative z-30 border-[1px] border-stone-200">
          <h2 className="text-xl md:text-3xl font-headline text-stone-600 mb-4">
            {project.shortDescription}
          </h2>
          <p className="text-stone-500 md:text-lg leading-relaxed whitespace-pre-line">
            {project.fullDescription}
          </p>
        </div>

        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 border-[1px] border-stone-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-headline text-stone-600 mb-4">Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2 text-stone-500 font-body-light">
                  {project.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Detail */}
            <div>
              <h3 className="text-xl font-headline text-stone-600 mb-4">Project Details</h3>
              <div className="space-y-2 text-stone-500">
                <p className="font-body-light">
                  <span className="font-body-medium">Type:</span> {project.type} Project
                </p>
                {project.role && (
                  <p className="font-body-light">
                    <span className="font-body-medium">Role:</span> {project.role}
                  </p>
                )}
              </div>
            </div>

            {/* Responsi*/}
            <div>
              <h3 className="text-xl font-headline text-stone-600 mb-4">TechStacks</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-stone-100 text-stone-500 rounded-full text-sm font-button"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* link */}
        <div className="relative right-0">
          {(project.links.github || project.links.live) && (
            <div className="flex gap-4 mt-10">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary-2/80  text-white rounded-md  hover:bg-primary-2 transition-colors items-center font-button flex gap-2"
                >
                  <ExternalLink size={20} />
                  View Live
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-primary-2 text-primary-2 rounded-md hover:bg-primary-2 hover:text-white transition-colors font-button flex gap-2 items-center"
                >
                  <Github size={20} />
                  Github Repo
                </a>
              )}
              {project.links.figma && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-primary-2 text-primary-2 rounded-md hover:bg-primary-2 hover:text-white transition-colors font-button flex gap-2 items-center"
                >
                  <Figma />
                  Figma
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
