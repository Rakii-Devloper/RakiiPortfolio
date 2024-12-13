import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <div
      className="mx-auto my-8 flex max-w-screen-lg flex-col items-center gap-3 rounded-xl border border-gray-200 bg-gradient-to-r from-blue-100 via-blue-200 to-white p-8 text-gray-600 shadow-lg transition-all duration-500 hover:shadow-2xl sm:flex-row sm:gap-8 transform hover:scale-105 hover:bg-gradient-to-l hover:from-blue-300 hover:to-white"
    >
      {/* Profile Image with black background */}
      <div
  className="flex items-center justify-center "
>
  <img
    className=" w-[50%] lg:w-[90%] md:w-[90%] sm:w-[100%] h-auto rounded-full object-cover transition-all duration-500 transform hover:scale-125 hover:shadow-xl"
    src="./public\assets\images\rakii.jpg"
    alt="Profile picture"
  />
</div>
      <div className="flex flex-col items-center text-center sm:items-stretch sm:text-left">
        <div className="mb-4 flex flex-col justify-between sm:flex-row sm:items-center">
          <h4 className="text-3xl font-semibold text-gray-800 mb-4 sm:m-0 transition-all duration-200">
            Hello There, I'm Rakesh Antony
          </h4>
          <div className="flex items-center space-x-4 transition-all duration-300">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border text-lg transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white transform hover:scale-110"
              title="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border text-lg transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white transform hover:scale-110"
              title="Github"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border text-lg transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white transform hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <p className="text-xl text-gray-700 leading-relaxed">
          With over 5 years of experience, I began my journey as a UI/UX Designer, transitioned into React and React Native development, and later became a Full Stack Developer, leading teams and delivering comprehensive solutions.
        </p>
        <p className="text-xl text-gray-800 mt-5">
          Let's Do something Great!!
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
