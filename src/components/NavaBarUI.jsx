import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaHome, FaUser, FaServicestack, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const NavaBarUI = () => {
  const nav = [
    { link: "#home", icon: FaHome },
    { link: "#skills", icon: FaUser },
    { link: "#services", icon: FaServicestack },
    { link: "#projects", icon: FaProjectDiagram },
    { link: "#hireme", icon: FaEnvelope },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  const handleMenuClick = (index) => {
    setActive(index);
    setShowMenu(false);
  };

  return (
    <div className="w-full flex justify-center">
      {/* Menu Toggle Button */}
      <div
        className="sm:cursor-pointer fixed top-10 left-10 z-50 rounded-lg bg-white/40 p-2 hover:scale-110 transition-transform duration-300"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={24} />
      </div>

      {/* Navigation Menu */}
      <nav
        className={`fixed z-50 flex items-center gap-5 bg-gray-200/70 px-6 py-3 backdrop-blur-md rounded-full text-gray-800 transition-all ease-in-out duration-700 ${
          showMenu ? "bottom-10 animate-slideUp" : "bottom-[-200px] animate-slideDown"
        }`}
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link} // Regular anchor tag for navigation
            onClick={() => handleMenuClick(i)} // Close the menu when clicked
            className={`relative flex items-center p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-6 ${
              i === active ? "bg-blue-500 text-white" : "text-gray-700"
            } hover:animate-shake`}
          >
            <item.icon size={24} />
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavaBarUI;
