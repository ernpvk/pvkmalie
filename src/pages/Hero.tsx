function Hero() {
  return (
    <div className="container mx-auto px-6 h-screen flex items-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8">Frontend Developer specializing in React</p>

        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Hero;
