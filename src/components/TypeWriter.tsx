import React, { useState, useEffect } from "react";

const TypeWriter = ({ text = "", speed = 100, delay = 1000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setIsTyping(false);
    setIsDeleting(false);

    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay, text]);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = isDeleting ? displayText.length - 1 : displayText.length;
    const intervalId = setInterval(
      () => {
        if (!isDeleting && currentIndex < text.length) {
          // Typing phase
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else if (isDeleting && currentIndex > 0) {
          // Deleting phase
          setDisplayText(text.slice(0, currentIndex));
          currentIndex--;
        } else if (!isDeleting) {
          // After first typing, start delete
          clearInterval(intervalId);
          setTimeout(() => {
            setIsDeleting(true);
            setIsTyping(true);
          }, 2000);
        } else if (isDeleting) {
          // After first deletion, continue with typing only
          clearInterval(intervalId);
          setIsDeleting(false);
          setTimeout(() => {
            setDisplayText("");
            setIsTyping(true);
          }, 1000);
        } else {
          // Regular typing loop after first run
          clearInterval(intervalId);
          setIsDeleting(false);
          setTimeout(() => {
            setDisplayText("");
            setIsTyping(true);
          }, 2000);
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearInterval(intervalId);
  }, [text, speed, isTyping, isDeleting, displayText]);

  const showCursor = isTyping || isDeleting;

  return (
    <div className="font-headline drop-shadow-lg text-2xl md:text-4xl mb-12">
      {displayText}
      {showCursor && <span className="inline-block w-1 h-6 md:h-8 bg-black ml-1 animate-pulse" />}
    </div>
  );
};

export default TypeWriter;
