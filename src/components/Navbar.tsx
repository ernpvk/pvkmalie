import { useState, useEffect } from "react";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
        if (sectionId === "hero" && window.scrollY <= sectionTop) {
          setShowNav(false);
        } else if (sectionId === "hero" && window.scrollY > sectionTop) {
          setShowNav(true);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      (element as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-5 py-2 lg:p-0 transition-all duration-500 ${
        showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-10 md:h-14">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            LOGO
          </a>

          <div className="hidden md:flex items-center space-x-8 font-button">
            {navLinks.map(({ title, href }) => (
              <button
                key={href}
                onClick={() => scrollToSection(href)}
                className={`text-sm transition-colors duration-300 ${
                  activeSection === href.slice(1)
                    ? "text-primary-2 font-button-bold"
                    : "text-stone-600 hover:text-primary-2 "
                }`}
              >
                {title}
              </button>
            ))}
            <button
              className="text-sm transition-colors duration-300 
                text-stone-500 hover:text-secondary hover:bg-secondary-neon bg-secondary px-2 py-1"
            >
              resume
            </button>
          </div>

          {/* Responsive menu */}
          <button className="md:hidden text-gray-600 hover:text-gray-900">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
