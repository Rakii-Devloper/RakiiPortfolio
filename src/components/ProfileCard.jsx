import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <div
      className="my-8 w-[90%] lg:w-[75%] h-auto flex flex-col lg:flex-row items-center rounded-xl border border-gray-200 bg-gradient-to-r from-blue-100 via-blue-200 to-white p-8 text-gray-600 shadow-lg transition-all duration-500 hover:shadow-2xl transform hover:scale-105 hover:bg-gradient-to-l hover:from-blue-300 hover:to-white"
    >
      {/* Image Section (A) */}
      <div className="w-full lg:w-[30%] flex items-center justify-center mb-6 lg:mb-0">
        <img
          className="w-[60%] lg:w-[80%] md:w-[50%] md:h-[40vh] sm:h-[30vh] h-auto rounded-full object-cover transition-all duration-500 transform hover:scale-125 hover:shadow-xl"
          src="\assets\images\rakii.jpg"
          alt="Profile picture"
        />
      </div>

      {/* Content Section (B) */}
      <div className="w-full lg:w-[60%] flex flex-col items-center text-center lg:items-start lg:text-left px-4">
        <h4 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-800 mb-4 transition-all duration-200">
          Hello There, I'm Rakesh Antony
        </h4>
        <p className="text-base sm:text-lg md:text-3xl lg:text-3xl 2xl:text-4xl text-gray-700 leading-relaxed">
          With over 5 years of experience, I began my journey as a UI/UX Designer, transitioned into React and React Native development, and later became a Full Stack Developer, leading teams and delivering comprehensive solutions.
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mt-5">
          Let's Do something Great!!
        </p>
      </div>

      {/* Icons Section (C) */}
      <div className="w-full lg:w-[10%] flex flex-row lg:flex-col items-center justify-center mt-6 lg:mt-0 space-y-0 lg:space-y-4 space-x-4 lg:space-x-0">
        <a
          href="#"
          className="flex h-20 w-20 items-center justify-center rounded-full border transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white transform hover:scale-110 text-5xl"
          title="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="flex h-20 w-20  items-center justify-center rounded-full border transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white transform hover:scale-110 text-5xl"
          title="Github"
        >
          <FaGithub />
        </a>
        <a
          href="#"
          className="flex h-20 w-20  items-center justify-center rounded-full border transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white transform hover:scale-110 text-5xl "
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
