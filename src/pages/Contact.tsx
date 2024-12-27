import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  const contact = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "pvkmalie@gmail.com",
      description: "Drop me an email",
      link: "mailto:pvkmalie@gmail.com",
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: "@ernpvk",
      description: "Check my repos",
      link: "https://github.com/ernpvk",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "Pavika Malipan",
      description: "Let's connect",
      link: "https://www.linkedin.com/in/pavika-malipan/",
    },
  ];

  return (
    <div className="bg-secondary-yellow/80 flex flex-col items-center p-4 md:p-12 lg:p-16">
      <div className="max-w-4xl w-full">
        {/* Contact Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-headline text-stone-600 mb-4">Get in Touch</h1>
          <p className="text-lg text-stone-500 font-body-light max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out through
            any of these platforms!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contact.map((box, index) => (
            <a
              key={index}
              href={box.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-secondary-yellow/20 p-4 rounded-full group-hover:bg-secondary-yellow/40 transition-colors duration-300">
                  {box.icon}
                </div>
                <div>
                  <h2 className="text-lg font-headline text-stone-600 mb-2">{box.title}</h2>
                  <p className="text-stone-500 text-base font-body-light">{box.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full max-w-4xl mt-12 pt-8 border-t border-stone-300/30">
        <div className="flex flex-col md:flex-row justify-end ">
          <div className="text-stone-500 font-body-light text-sm">
            © {new Date().getFullYear()} Pavika Malipan • Made with ❤️
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
