import React, { useState, useEffect } from "react";
import { AiOutlineStop } from "react-icons/ai";
import { FaCloudMoonRain } from "react-icons/fa6";
import { GiPunchBlast } from "react-icons/gi";
import { HiOutlineSparkles } from "react-icons/hi";
import { IoSnowOutline } from "react-icons/io5";
import { LiaAtomSolid } from "react-icons/lia";
import { MdOutlineWaterDrop } from "react-icons/md";
import { TbChartBubble } from "react-icons/tb";

const Menu = ({ setBackground }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickAllowed, setClickAllowed] = useState(true);

  const toggleMenu = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleClick = (animationType, e) => {
    e.stopPropagation();
    if (!clickAllowed) return;

    if (animationType === "stop") {
      setBackground("");
    } else {
      setBackground(animationType);
    }

    setClickAllowed(false);
    setTimeout(() => {
      setIsOpen(false);
      setClickAllowed(true);
    }, 500);
  };

  const animations = [
    "bubbles",
    "snow",
    "particles",
    "raineffect",
    "consffect",
    "Blast",
    "stop",
  ];

  const icons = [
    <TbChartBubble size={35} style={{ filter: "drop-shadow(0 0 10px blue) drop-shadow(0 0 30px blue)", color: "blue" }} />,
    <IoSnowOutline size={35} style={{ filter: "drop-shadow(0 0 10px white) drop-shadow(0 0 20px white)", color: "white" }} />,
    <HiOutlineSparkles size={35} style={{ filter: "drop-shadow(0 0 20px purple) drop-shadow(0 0 30px purple)", color: "purple" }} />,
    <FaCloudMoonRain size={35} style={{ filter: "drop-shadow(0 0 20px lightblue) drop-shadow(0 0 30px lightblue)", color: "lightblue" }} />,
    <LiaAtomSolid size={35} style={{ filter: "drop-shadow(0 0 10px gold) drop-shadow(0 0 30px gold)", color: "gold" }} />,
    <GiPunchBlast size={35} style={{ filter: "drop-shadow(0 0 10px pink) drop-shadow(0 0 30px pink)", color: "pink" }} />,
    <AiOutlineStop size={35} style={{ filter: "drop-shadow(0 0 20px red) drop-shadow(0 0 30px purple)", color: "red" }} />
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.menu-container') && isOpen) {
        setIsOpen(false); // Close menu if clicked outside
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside); // Cleanup event listener on unmount
    };
  }, [isOpen]);

  return (
    <div
      className="menu-container fixed z-50 cursor-pointer sm:bottom-10 sm:right-10 md:bottom-14 md:right-14 lg:bottom-20 lg:right-20"
      style={{
        bottom: "20%",
        right: "10%",
        transform: "translate(-50%, -50%)",
        transition: "transform 0.3s ease",
      }}
    >
      <button
        aria-label="Toggle Menu"
        className="absolute z-20 w-10 h-1 bg-yellow-500 rounded-full cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all"
        onClick={toggleMenu}
      >
        <span
          className={`block absolute top-2 left-0 w-full h-1 bg-red-500 rounded-full transition-all duration-500 ${isOpen && "rotate-45 top-0"}`}
        ></span>
        <span
          className={`block absolute top-[-10px] left-0 w-full h-1 bg-black rounded-full transition-all duration-500 ${isOpen && "-rotate-45 top-0"}`}
        ></span>
      </button>

      <ul
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
      >
        {icons.map((icon, index) => (
          <li
            key={index}
            className={`absolute flex items-center justify-center w-20 h-20 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full shadow-lg transition-all duration-500 transform hover:scale-110 hover:rotate-[360deg]`}
            style={{
              transform: isOpen ? `rotate(${index * 51.5}deg) translateX(100px)` : "rotate(0deg) translateX(0px)",
              transitionDelay: `${index * 0.1}s`,
            }}
            onClick={(e) => handleClick(animations[index], e)}
          >
            {icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
