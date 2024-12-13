import { useState, useEffect } from "react";
import TypingEffect from "../components/TypingEffect";
import ResumeViewButton from "../components/ResumeViewButton";

const HomePage = () => {
  const [animateImage, setAnimateImage] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const [animateName, setAnimateName] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateImage(true), 300);
    setTimeout(() => setAnimateText(true), 600);
    setTimeout(() => setAnimateName(true), 900);
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-screen m-0 flex flex-col lg:flex-row transition-all ease-in-out"
    >
      <div className="bg-white w-full lg:w-[15%] md:w-full flex justify-center items-center transition-all duration-1000 ease-in-out">
        <h1
          className={`cursor-pointer text-3xl text-black whitespace-nowrap mt-10 m-5 font-extrabold leading-none tracking-tight  xl:text-6xl xl:writing-mode[vertical-rl] xl:rotate-[270deg] xl:line-height[1]  lg:text-5xl lg:writing-mode[vertical-rl] lg:rotate-[270deg] lg:line-height[1] sm:text-4xl md:text-5xl md:rotate-[0deg] md:writing-mode[unset]
    ${
      animateName
        ? "opacity-100 translate-x-0 transition-all duration-[1500ms] ease-in-out"
        : "opacity-0 translate-x-[-100%]"
    }`}
        >
          <span className="inline-block ml-1 hover:scale-150 hover:opacity-100 transition-all duration-1000 ease-out">
            R
          </span>
          <span className="inline-block ml-1 hover:scale-150 hover:opacity-100 transition-all duration-1000 ease-out">
            A
          </span>
          <span className="inline-block ml-1 hover:scale-150 hover:opacity-100 transition-all duration-1000 ease-out">
            K
          </span>
          <span className="inline-block ml-1 hover:scale-150 hover:opacity-100 transition-all duration-1000 ease-out">
            E
          </span>
          <span className="inline-block ml-1 hover:scale-150 hover:opacity-100 transition-all duration-1000 ease-out">
            S
          </span>
          <span className="inline-block ml-1 hover:scale-150 hover:opacity-100 transition-all duration-1000 ease-out">
            H
          </span>
          <span className="inline-block ml-6 hover:scale-150 hover:opacity-100 transition-all duration-1000 ease-out">
            A
          </span>
          <span className="inline-block ml-1 hover:scale-150 hover:opacity-100 transition-all duration-1000 ease-out">
            N
          </span>
          <span className="inline-block ml-1 hover:scale-150 hover:opacity-100 transition-all duration-1000 ease-out">
            T
          </span>
          <span className="inline-block ml-1 hover:scale-150 hover:opacity-100 transition-all duration-1000 ease-out">
            O
          </span>
          <span className="inline-block ml-1 hover:scale-150 hover:opacity-100 transition-all duration-1000 ease-out">
            N
          </span>
          <span className="inline-block ml-1 hover:scale-150 hover:opacity-100 transition-all duration-1000 ease-out">
            Y
          </span>
        </h1>
      </div>
      <div className="w-full lg:w-[87%] h-100vh flex flex-col lg:flex-row">
        <div
          className={`bg-black w-full lg:w-[55%] h-full flex flex-col text-white py-8 transition-all duration-1000 ease-in-out ${
            animateText
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <h1 className="text-5xl text-white m-5 pt-5">Hi there!, I'm</h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl h-[15%] lg:h-[10%] m-5 typewriter">
            <TypingEffect />
          </h2>
          <p className="text-2xl p-5 m-5 max-w-xl mx-auto">
            Passionate about creating seamless user experiences and building
            scalable, responsive web applications. Skilled in translating
            complex ideas into intuitive designs and ensuring cross-platform
            optimization.
          </p>
          <div className="mt-5 flex justify-center">
            
             <ResumeViewButton/>
          </div>
         
        </div>
        <div
          className={`bg-yellow-500 w-full lg:w-[45%] h-100vh flex items-center justify-center transition-all duration-700 ease-in ease-out ${
            animateImage
              ? "opacity-100 scale-105 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <img
            src="./public/assets/images/devloper1.png"
            alt="Animated Developer"
            className="w-[60%] h-auto lg:w-full md:w-[50%] transition-all duration-1000 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
