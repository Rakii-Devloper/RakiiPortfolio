import React from "react";
import { FaTwitter, FaFacebook, FaGooglePlusG, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Twitter",
      href: "#",
      bgColor: "hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600",
      icon: <FaTwitter />,
    },
    {
      name: "Facebook",
      href: "#",
      bgColor: "hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800",
      icon: <FaFacebook />,
    },
    {
      name: "Google Plus",
      href: "#",
      bgColor: "hover:bg-gradient-to-r hover:from-red-400 hover:to-red-600",
      icon: <FaGooglePlusG />,
    },
    {
      name: "Instagram",
      href: "#",
      bgColor: "hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-600",
      icon: <FaInstagram />,
    },
  ];

  return (
    <div className="fixed top-1/3 transform -translate-x-[270px] transition-transform duration-1000">
      <ul className="space-y-6">
        {socialLinks.map((link, index) => (
          <li
            key={index}
            className={`group flex items-center justify-end w-[300px] bg-yellow-500 text-white p-3 rounded-r-[30px] transition-transform duration-700 hover:translate-x-[110px] ${link.bgColor}`}
          >
            <a href={link.href} className="flex items-center space-x-3 no-underline">
              <span className="text-lg font-semibold">{link.name}</span>
              <div className="flex items-center justify-center bg-white text-black rounded-full w-10 h-10 text-2xl group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                {link.icon}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
