import { Mail, Github, Linkedin } from "lucide-react";
import { contact } from "../shared/contact";

function Contact() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "Github":
        return <Github className="w-4 h-4" />;
      case "Mail":
        return <Mail className="w-4 h-4" />;
      case "Linkedin":
        return <Linkedin className="w-4 h-4" />;
    }
  };
  return (
    <div className="bg-secondary-yellow/60 flex flex-col items-center pt-14 p-8 md:p-10 lg:p-12">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-headline text-stone-600 mb-3">
            ｡⋆˚ Get in Touch ˚ ˚⋆
          </h1>
          <span className="text-base text-stone-500 font-body-light max-w-2xl mx-auto text-lg md:text-xl">
            <p>If you have questions or want to chat, I'm happy to connect! </p>
            <p> You can find all my contacts below </p>
          </span>
        </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 mb-8 place-items-center">
          {contact.map((box, index) => (
            <a
              key={index}
              href={box.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[200px] md:min-w-[280px] bg-white p-4 rounded-xl shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`bg-primary-2/30 p-2 rounded-full group-hover:bg-primary-2/50 transition-colors duration-300`}
                >
                  {getIcon(box.icon)}
                </div>
                <div className="flex flex-col items-start">
                  <h2 className="text-sm md:text-base font-headline text-stone-600">{box.title}</h2>
                  <p className="text-xs md:text-sm text-stone-500 font-body-light">
                    {box.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer*/}
      <div className="w-full max-w-4xl mt-8 pt-6 border-t border-stone-300">
        <div className="flex flex-row justify-end">
          <div className="text-stone-500 font-body-light text-sm">
            © {new Date().getFullYear()} Pavika Malipan • Made with ❤️
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
