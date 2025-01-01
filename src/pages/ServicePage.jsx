import React, { useState, useEffect } from 'react';
import { FaCode, FaMobileAlt, FaUserAlt, FaServer, FaLaptopCode } from 'react-icons/fa';
import ProfileCard from '../components/ProfileCard';
import SocialLinks from '../components/features/SocialLinks'; // Import your SocialLinks component

const services = [
  {
    id: 1,
    icon: <FaCode className="text-4xl text-red-500" />,
    title: "UI/UX Designer",
    description: "I have 3 years of experience in UI/UX Design, working on mobile and web projects.",
  },
  {
    id: 2,
    icon: <FaUserAlt className="text-4xl text-red-500" />,
    title: "Frontend Developer",
    description: "I specialize in creating responsive and dynamic websites with React.js and Tailwind CSS.",
  },
  {
    id: 3,
    icon: <FaServer className="text-4xl text-red-500" />,
    title: "Backend Developer",
    description: "I build scalable backends using Node.js, Express, and work with databases like MongoDB.",
  },
  {
    id: 4,
    icon: <FaMobileAlt className="text-4xl text-red-500" />,
    title: "Mobile Developer",
    description: "I develop mobile applications for iOS and Android using React Native and Flutter.",
  },
  {
    id: 5,
    icon: <FaLaptopCode className="text-4xl text-red-500" />,
    title: "Full Stack Developer",
    description: "I design and develop end-to-end applications using both frontend (React.js) and backend (Node.js) technologies.",
  },
];

const ServicesPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoMove, setAutoMove] = useState(true);

  const moveNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  useEffect(() => {
    if (autoMove) {
      const interval = setInterval(() => {
        moveNext();
      }, 3000); // auto move every 3 seconds
      return () => clearInterval(interval); // cleanup interval
    }
  }, [autoMove]);

  // Get the current 3 items for the carousel
  const displayedServices = [
    services[currentIndex % services.length],
    services[(currentIndex + 1) % services.length],
    services[(currentIndex + 2) % services.length],
  ];

  return (
    <section  id="services"
    className="w-full min-h-screen bg-white/50 backdrop-blur-lg flex flex-col">
      {/* Section A */}
      <div className="flex-1 flex justify-center items-center">
        <ProfileCard />
      </div>

      {/* Section B */}
      <div className="relative w-full m-7 hidden lg:block">
        <SocialLinks /> {/* Social Links */}
      </div>

      {/* Section C */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="service-card bg-[#2F2F2F] p-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out h-80 max-w-xs"
            >
              <div className="flex flex-col items-center">
                {/* Icon */}
                <div className="mb-4">{service.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-4 text-center">{service.title}</h3>

                {/* Description */}
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
