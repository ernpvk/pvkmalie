function About() {
  return (
    <div className="flex flex-col bg-whitePale p-4 md:p-12 lg:p-16">
      <div className="w-full min-h-screen overflow-hidden flex flex-col md:flex-row justify-center items-center ">
        <div className=" transition-transform	cursor-grab hover:rotate-6 hover:rotate-6 w-full md:w-1/3 flex justify-center md:justify-end">
          <img
            src="src/assets/images/about/profile_pic.png"
            alt="pavika picture"
            className="h-[300px] md:h-4/5 object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 p-4 md:p-0 space-y-6">
          <h1 className="text-2xl lg:text-4xl font-bold text-primary font-headline">About me</h1>
          <div className="text-stone-500 text-md lg:text-2xl font-body-light md:w-4/5">
            Hi! I'm Pavika Malipan (Earn), a <span className="ordinal">3rd</span> year computer
            science student at KMUTT. I'm passionate about creating meaningful solutions through
            code, creating beautiful visuals, and not missing to transform them into engaging
            experiences that people enjoy to use.
          </div>
          <div className="flex justify-end md:w-4/5">
            <button className="hover:animate-none group flex items-center gap-2 mt-1 md:mt-6 text-xs md:text-sm font-button-italic text-primary-2 hover:text-primary-2/80 transition-colors duration-300 border-b-2 border-primary-2">
              🌟 Read more about me
              <span className="transform group-hover:translate-x-3 transition-all duration-300">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <p
          className="w-1/2 md:w-1/6 text-center p-2 font-body-medium shadow-md text-stone-600"
          style={{
            background:
              "repeating-linear-gradient(135deg, #fffa92, #fffa92 10px, white 10px, white 20px)",
          }}
        >
          MY SKILLS
        </p>
      </div>
    </div>
  );
}
export default About;
