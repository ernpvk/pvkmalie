import { useState, useEffect } from "react";

const TypeWriter = ({ text = "", speed = 100, delay = 1000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      } else {
        clearInterval(intervalId);
        // Restart
        setTimeout(() => {
          setDisplayText("");
          setCurrentIndex(0);
        }, delay);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [currentIndex, text, speed, delay]);

  return (
    <div className="font-headline text-xl md:text-4xl ">
      {displayText}
      {<span className="inline-block w-2 h-6 md:h-8 bg-red-400 ml-1 animate-pulse" />}
    </div>
  );
};

export default TypeWriter;
