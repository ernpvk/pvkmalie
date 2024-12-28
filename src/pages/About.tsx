import { FRAMEWORKS, LANGUAGES, TOOLS } from "../shared/skills";
import { useNavigate } from "react-router-dom";
import SkillSets from "../components/SkillSet";

function About() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-whitePale p-4 md:p-12 lg:p-16">
      <div className="w-full flex flex-col md:flex-row justify-center items-center mb-14">
        <div className="transition-transform cursor-grab hover:rotate-6 w-full md:w-1/3 flex justify-center md:justify-end">
          <img
            src="/assets/images/about/profile_pic.PNG"
            alt="pavika picture"
            className="h-[300px] md:h-4/5 object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 p-4 md:p-0 space-y-6">
          <h1 className="text-2xl lg:text-6xl font-bold text-primary font-headline">About me</h1>
          <div className="text-stone-500 text-md lg:text-xl font-body-light md:w-4/5">
            Hi! I'm Pavika Malipan (Earn), a <span className="ordinal">3rd</span> year computer
            science student at KMUTT. I'm passionate about creating meaningful solutions through
            code, transforming beautiful visuals into tangible interfaces, crafting experiences that
            people enjoy to use.
          </div>
          <div className="flex justify-end md:w-4/5">
            <button
              onClick={() => navigate("/about")}
              className="hover:animate-none group flex items-center gap-2 mt-1 md:mt-6 text-xs md:text-sm font-button-italic text-primary-2 hover:text-primary-2/80 transition-colors duration-300 border-b-2 border-primary-2"
            >
              🌟 Read more about me
              <span className="transform group-hover:translate-x-3 transition-all duration-300">
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full pl-2 md:pl-40 lg:pl-64 pb-20">
        <div>
          <p
            className="inline-block text-md lg:text-xl px-2 py-1 md:px-4 md:py-2 font-body-medium border-[1px] text-stone-600"
            style={{
              background:
                "repeating-linear-gradient(135deg, #fff4be, #fff4be 10px, white 10px, white 20px)",
            }}
          >
            MY SKILLS
          </p>
        </div>
        <div className="space-y-8 mt-8">
          <div className="space-y-5">
            <SkillSets skill={LANGUAGES} skillSetName="Language" />
          </div>
          <div className="space-y-5">
            <SkillSets skill={FRAMEWORKS} skillSetName="Framework" />
          </div>
          <div className="space-y-5">
            <SkillSets skill={TOOLS} skillSetName="Tools" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
