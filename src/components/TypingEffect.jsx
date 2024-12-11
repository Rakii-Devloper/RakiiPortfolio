import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const professions = [
    "UI/UX Designer",
    "Front-End Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "Mobile App Developer",
  ];

  const [currentProfession, setCurrentProfession] = useState(""); // Current text being displayed
  const [professionIndex, setProfessionIndex] = useState(0); // Index of the current profession
  const [charIndex, setCharIndex] = useState(0); // Index of the current character
  const [isTyping, setIsTyping] = useState(true); // Typing or erasing state

  const typingSpeed = 200;
  const erasingSpeed = 100;
  const delayBetweenWords = 1000;

  useEffect(() => {
    let timer;

    if (isTyping) {
      // Typing logic
      if (charIndex < professions[professionIndex].length) {
        timer = setTimeout(() => {
          setCurrentProfession((prev) =>
            prev + professions[professionIndex][charIndex]
          );
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // Pause before erasing
        timer = setTimeout(() => setIsTyping(false), delayBetweenWords);
      }
    } else {
      // Erasing logic
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCurrentProfession((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, erasingSpeed);
      } else {
        // Move to the next profession
        setIsTyping(true);
        setProfessionIndex((prev) => (prev + 1) % professions.length);
      }
    }

    return () => clearTimeout(timer); // Clean up the timeout on unmount or re-render
  }, [charIndex, isTyping, professionIndex, professions]);

  return (
    <h2>
      {currentProfession}
    </h2>
  );
};

export default TypingEffect;
