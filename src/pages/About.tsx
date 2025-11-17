import { FRAMEWORKS, LANGUAGES, TOOLS } from "../shared/skills";
import { useNavigate } from "react-router-dom";
import SkillSets from "../components/SkillSet";
import { BriefcaseBusiness } from "lucide-react";

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
          <h1 className="text-3xl lg:text-6xl font-bold text-primary font-headline">
            About me
          </h1>
          <div className="text-stone-500 text-md lg:text-xl font-body-light md:w-4/5">
            Hi! I'm Pavika Malipan (Earn), a{" "}
            <span className="ordinal">4th</span> year computer science student
            at KMUTT. I'm passionate about creating meaningful solutions through
            code, transforming beautiful visuals into tangible interfaces,
            crafting experiences that people enjoy to use.
          </div>
          <div className="flex justify-end md:w-4/5">
            <button
              onClick={() => navigate("/about")}
              className="hover:animate-none group flex items-center gap-1.5 sm:gap-2 
               mt-1 md:mt-4 
               text-xs sm:text-sm md:text-sm 
               font-button-italic text-primary-2 hover:text-primary-2/80 
               transition-colors duration-300 
               border-b-2 border-primary-2"
            >
              🌟 Read more about me
              <span className="transform group-hover:translate-x-3 transition-all duration-300">
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Skills*/}
      <div className="w-full px-2 md:px-8 lg:px-64">
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
        <div className="space-y-6 md:space-y-8 mt-6 md:mt-8">
          <div className="space-y-4 md:space-y-5">
            <SkillSets skill={LANGUAGES} skillSetName="Language" />
          </div>
          <div className="space-y-4 md:space-y-5">
            <SkillSets skill={FRAMEWORKS} skillSetName="Framework" />
          </div>
          <div className="space-y-4 md:space-y-5">
            <SkillSets skill={TOOLS} skillSetName="Tools" />
          </div>
        </div>
      </div>
      <div className="w-full px-2 md:px-8 lg:px-64  mt-10 md:mt-16">
        <div>
          <div
            className="flex items-center gap-4 w-fit h-fit p-3"
            style={{
              backgroundColor: "hsl(34, 53%, 82%)",
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px, hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px, hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px, hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px, hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 120px, hsla(197, 62%, 11%, 0.5) 120px, hsla(197, 62%, 11%, 0.5) 140px), repeating-linear-gradient(135deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px, hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px, hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px, hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px, hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 140px, hsla(197, 62%, 11%, 0.5) 140px, hsla(197, 62%, 11%, 0.5) 160px)",
            }}
          >
            <BriefcaseBusiness
              size={30}
              className="text-stone-500 bg-white w-10 h-10 p-2 rounded-full"
            />
            <p className="bg-white inline-block shadow-md text-md lg:text-xl px-2 py-1 md:px-4 md:py-2 font-body-medium border-[1px] text-stone-600">
              MY WORK EXPERIENCE
            </p>
          </div>
          <div className="text-stone-500 text-md lg:text-xl font-body-light md:w-4/5 mt-4 md:mt-6 border p-2">
            <p className="font-bold text-stone-900">
              Silverlake Structured Services Limited
            </p>
            <p>Application Support Trainee (Jun 2025 - Aug 2025)</p>
            <p className="p-2">
              During my internship at Silverlake Structured Services Limited, I
              contributed to the development of a financial reporting module
              using Java Spring Boot and AngularJS. My work included building
              over 15 report templates with Jaspersoft Studio and implementing
              an Ad-hoc reporting screen with database design, mock data
              generation, and metadata setup. I also worked closely with
              international development teams to debug modules and support
              project delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
