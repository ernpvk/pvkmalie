import StackIcon from "tech-stack-icons";

type Skill = { id: number; name: string; logo: string };

interface SkillSetsProps {
  skill: Skill[];
  skillSetName: string;
}

export default function SkillSets({ skill, skillSetName }: SkillSetsProps) {
  return (
    <div className="w-full">
      <div className="font-body-medium text-base sm:text-lg lg:text-xl mb-2 text-stone-700">
        {skillSetName}
      </div>
      <div className="flex flex-row flex-wrap gap-2 sm:gap-3 md:gap-4">
        {skill.map((skill) => (
          <div
            key={skill.id}
            className="flex font-body-light items-center gap-1.5 sm:gap-2 
                     bg-stone-100 p-1.5 sm:p-2 
                     border-[1px] border-stone-200
                      hover:shadow-md hover:scale-110
                     transition-all duration-300 ease-in-out
                     cursor-pointer"
          >
            <StackIcon name={skill.logo} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <p className="text-sm sm:text-base md:text-md text-stone-600">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}