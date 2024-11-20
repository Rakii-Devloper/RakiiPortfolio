import { useState, useEffect } from 'react';

const HomePage = () => {
  const [animateImage, setAnimateImage] = useState(false);

  useEffect(() => {
    // Trigger image animation after component mounts
    setAnimateImage(true);
  }, []);

  return (
    <section id="home" className="w-full min-h-screen m-0 flex flex-col lg:flex-row">
      {/* Section A (Name) */}
      <div className="bg-white w-full lg:w-[15%] h-100vh flex justify-center items-center">
        <h1
          className={`text-black text-4xl m-5 font-extrabold leading-none tracking-tighter xl:text-6xl
            ${/* For XL and above (vertical and rotated) */ 
            "xl:writing-mode[vertical-rl] xl:rotate-[270deg] xl:line-height[1] lg:writing-mode[vertical-tb] lg:rotate-[0deg] "}`}
        >
          RAKESH ANTONY
        </h1>
      </div>

      {/* Sections B & C (Text and Animated Image) */}
      <div className="w-full lg:w-[85%] h-100vh flex flex-col lg:flex-row">
      {/* Section B (Text) */}
        <div className="bg-black w-full lg:w-[50%] h-full flex flex-col text-white py-8">
          <h1 className="text-5xl text-white m-5 pt-5">Hi there!, I'm</h1>
          <h2 className="text-6xl mt-4 font-extrabold text-black text-shadow m-5">
            UI/UX Designer
          </h2>
          <p className="text-2xl p-5 max-w-xl mx-auto">
            Passionate about creating seamless user experiences and building scalable, responsive web applications.
          </p>
        </div>

        {/* Section C (Animated Image) */}
        <div
          className={`bg-yellow-500 w-full lg:w-[50%] h-100vh flex items-center justify-center transition-all duration-700 ease-out ${animateImage ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src="../src/assets/images/devloper1.png"
            alt="Animated Developer"
            className="w-auto h-auto lg:w-[80%] md:w-[50%] sm:w-[40%]"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
