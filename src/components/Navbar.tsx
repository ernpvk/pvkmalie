import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#footer" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const [showNav, setShowNav] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
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
    } else {
      // If not on home page, always show navbar
      setShowNav(true);
      setActiveSection("");
    }
  }, [location.pathname]); // Added location.pathname as dependency

  const handleNavigation = (href: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          (element as HTMLElement).scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        (element as HTMLElement).scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
      }`}
    >
      <div className="container mx-auto">
        <div className="mx-4 my-2 bg-white/20 backdrop-blur-sm rounded-xl">
          <div className="flex items-center justify-between h-10 px-4 py-6">
            <button
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
              className="flex items-center"
            >
              <img src="/assets/images/logo.png" alt="logo" className="w-7 h-7" />
            </button>

            <div className="hidden md:flex items-center space-x-8 font-button">
              {navLinks.map(({ title, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavigation(href)}
                  className={`text-sm transition-colors duration-300 ${
                    activeSection === href.slice(1)
                      ? "text-primary-2 font-button-bold"
                      : "text-stone-600 hover:text-primary-2"
                  }`}
                >
                  {title}
                </button>
              ))}
              {/* <button className="text-sm text-white bg-secondary-neon/80 px-3 py-1">resume</button> */}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-stone-600">
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

          {isMenuOpen && (
            <div
              className="md:hidden px-4 py-2 border-t border-gray-200
           animate-[slideDown_0.3s_ease-out]"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map(({ title, href }) => (
                  <button
                    key={href}
                    onClick={() => handleNavigation(href)}
                    className={`text-sm text-left py-1 font-button ${
                      activeSection === href.slice(1)
                        ? "text-primary-2 font-button-bold"
                        : "text-stone-600"
                    }`}
                  >
                    {title}
                  </button>
                ))}
                {/* <button className="text-sm text-white bg-secondary-neon/80 px-3 py-1 w-fit font-button">
                  resume
                </button> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
