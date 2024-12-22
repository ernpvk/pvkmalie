function Hero() {
  return (
    <div className="mx-auto px-6 h-screen w-screen flex items-center justify-center bg-background">
      <div className="max-w-6xl">
        {/* Name */}
        <h1 className="font-besley-medium text-6xl md:text-8xl mb-8 leading-tight text-primary">
          pavika
          <span className="block text-4xl md:text-6xl mt-4">
            is a <span className="italic">frontend developer</span>
          </span>
        </h1>

        {/* Description */}
        <div className="max-w-4xl font-besley text-2xl md:text-4xl text-primary tracking-wide ">
          <p className="">
            ₊* she crafts beautiful digital spaces & fast with experiments ˗ˋ bringing ideas to life
            with code & cool CSS ⋆｡˚ she started learning backend ꕤ & when not coding, you'll find
            her playing with cats and dogs ꕁ
          </p>
        </div>
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-16 bg-gray-900 text-white font-metallophile font-medium px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Discover More
        </button>
      </div>
    </div>
  );
}

export default Hero;
