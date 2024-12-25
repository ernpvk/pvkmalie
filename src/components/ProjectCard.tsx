interface ProjectCardProps {
  project: {
    name: string;
    shortDescription: string;
    thumbnail: string;
    technologies: string[];
    type: string;
    colorAura: string;
  };
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group flex flex-col md:flex-row bg-white rounded-xl shadow-sm border border-stone-200 hover:shadow-lg transition-all duration-300 hover:cursor-pointer overflow-hidden"
    >
      <div className="md:hidden flex justify-center p-5 relative">
        <div className="absolute w-48 h-48 bg-blue-200/50 rounded-full blur-3xl" />
        <img
          src={project.thumbnail}
          alt={`${project.name} preview`}
          className="w-60 h-60 object-contain relative z-10"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col min-h-[200px] w-[400px] justify-between bg-white">
        <div>
          <h3 className="text-3xl font-headline text-stone-600">{project.name}</h3>
          <p className="text-stone-500 mt-2 line-clamp-3 font-body-light text-xl">
            {project.shortDescription}
          </p>
        </div>
        <div className="flex flex-wrap font-button text-xs items-center gap-4">
          <div className="flex gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <span className="flex text-xs items-center gap-4">
            <p className="text-stone-500">/</p>
            <p className="uppercase text-stone-600">{project.type} Project</p>
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center p-5 relative">
        <img
          src={project.thumbnail}
          alt={`${project.name} preview`}
          className="w-80 h-80 object-contain relative z-10 group-hover:scale-[1.05] transition-transform duration-300"
        />
        <div className={`absolute w-64 h-64 bg-${project.colorAura}-200/50 rounded-full blur-xl`} />
      </div>
    </div>
  );
}
