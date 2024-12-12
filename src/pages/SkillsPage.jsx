import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SkillsPage = () => {
  const categories = ['Languages', 'Libraries', 'Tools', 'Databases'];

  const [selectedCategory, setSelectedCategory] = useState('Languages');
  const [hovered, setHovered] = useState(null);

  const skillsData = {
    Languages: [
      { name: 'JavaScript', 
        level: 95, 
        logo: '../src/assets/images/logos/javascript.png', 
        color: '#f7df1e',      
         backgroundImage: 'url("../src/assets/images/backgrounds/js-bg.jpg")' 
      },
      { name: 'C#', level: 85, logo: '../src/assets/images/logos/Csharp.png', color: '#68217a' ,backgroundImage: 'url("../src/assets/images/backgrounds/b.jpg")' },
      { name: 'SQL', level: 80, logo: '../src/assets/images/logos/sql.png', color: '#00758f' },
      { name: 'HTML5', level: 90, logo: '../src/assets/images/logos/html5.png', color: '#e44d26' },
      { name: 'CSS3', level: 90, logo: '../src/assets/images/logos/css3.png', color: '#264de4' },
      { name: 'Sass', level: 80, logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg', color: '#c69e5d' },
    ],
    Libraries: [
      { name: 'React', level: 95, logo: '../src/assets/images/logos/react.png', color: '#61dafb' },
      { name: 'Redux', level: 85, logo: '../src/assets/images/logos/rr.png', color: '#764abc' },
      { name: 'React Query', level: 80, logo: '../src/assets/images/logos/rq.png', color: '#ff4154' },
      { name: 'Material UI', level: 90, logo: '../src/assets/images/logos/mi.png', color: '#0078d4' },
      { name: 'Bootstrap', level: 85, logo: '../src/assets/images/logos/bs.png', color: '#563d7c' },
      { name: 'TailwindCSS', level: 90, logo: '../src/assets/images/logos/tcss.png', color: '#06b6d4' },
      { name: 'React Bootstrap', level: 80, logo: '../src/assets/images/logos/rb.png', color: '#7952b3' }, // React Bootstrap
    ],
    Tools: [
      { name: 'Git', level: 95, logo: '../src/assets/images/logos/git.png', color: '#f34f29' },
      { name: 'Postman', level: 85, logo: '../src/assets/images/logos/postman.png', color: '#ff6a00' },
      { name: 'Swagger', level: 80, logo: '../src/assets/images/logos/swagger.png', color: '#85ea2d' }, // Swagger
      { name: 'Webpack', level: 75, logo: '../src/assets/images/logos/wp.png', color: '#8dd6f7' },
      { name: 'VS Code', level: 90, logo: '../src/assets/images/logos/vsc.png', color: '#0078d4' },
      { name: 'Jira', level: 85, logo: '../src/assets/images/logos/jira.png', color: '#0065ff' },
      { name: 'Visual Studio', level: 80, logo: '../src/assets/images/logos/vs.png', color: '#5c2d91' },
    ],
    Databases: [
      { name: 'MongoDB', level: 80, logo: '../src/assets/images/logos/mdb.png', color: '#47a248' },
      { name: 'SQL Server', level: 85, logo: '../src/assets/images/logos/ss.png', color: '#cc2927' },
    ],
  };
  
  // Chart.js options
  const options = {
    responsive: true,
    cutout: '70%',
    plugins: {
      tooltip: {
        backgroundColor: '#1f2937',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
      },
      legend: {
        position: 'top',
        labels: {
          color: 'gold',
          font: {
            size: 16,
          },
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  // Hook arrays for animation
  const [animatedPercentages, setAnimatedPercentages] = useState(
    skillsData[selectedCategory].map(() => 0)
  );

  useEffect(() => {
    setAnimatedPercentages(skillsData[selectedCategory].map(() => 0));
  }, [selectedCategory]);

  useEffect(() => {
    if (hovered !== null) {
      const end = skillsData[selectedCategory][hovered].level;
      let current = 0;

      const interval = setInterval(() => {
        if (current < end) {
          current++;
          setAnimatedPercentages((prev) => {
            const updated = [...prev];
            updated[hovered] = current;
            return updated;
          });
        } else {
          clearInterval(interval);
        }
      }, 10);

      return () => clearInterval(interval);
    }
  }, [hovered, selectedCategory]);

  return (
    <section 
    id="skills"
    className="flex flex-col md:flex-row w-full min-h-screen text-center py-20">
      {/* Sidebar */}
      <div className=" hidden md:block w-full md:w-1/4 p-10 justify-center items-center">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="space-y-10 ">
          {categories.map((category) => (
            <button
            key={category}
              onClick={() => setSelectedCategory(category)}
            className={`group flex items-center py-3 w-max text-left px-4 rounded-2xl border-4 ${
              selectedCategory === category
                ? "bg-gray-800 text-white border-gray-800"
                : "bg-gray-100 text-gray-700 border-gray-300"
            } hover:bg-gray-800 hover:text-white transition-all`}
          >
            <span
              className="nav-indicator mr-4 h-px w-8 bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-200 group-hover:mr-10 group-focus-visible:w-16 group-focus-visible:bg-gray-200"
            ></span>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
          ))}
        </div>
      </div>
{/* {navabar} */}
      <div className=" block md:hidden w-full md:w-1/4 p-10 justify-center items-center">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="space-x-10 flex">
          {categories.map((category) => (
            <button
            key={category}
              onClick={() => setSelectedCategory(category)}
            className={`group flex items-center py-3 w-max text-left px-4 rounded-2xl border-4 ${
              selectedCategory === category
                ? "bg-gray-800 text-white border-gray-800"
                : "bg-gray-100 text-gray-700 border-gray-300"
            } hover:bg-gray-800 hover:text-white transition-all`}
          >
            <span
              className="nav-indicator mr-4 h-px w-8 bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-200 group-hover:mr-10 group-focus-visible:w-16 group-focus-visible:bg-gray-200"
            ></span>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
          ))}
        </div>
      </div>
      {/* Skills */}
      <div className="w-full md:w-3/4 p-6">
        <h3 className="text-2xl font-semibold mb-6">{selectedCategory}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillsData[selectedCategory].map((skill, index) => {
            const data = {
              labels: ['Skill %'],
              datasets: [
                {
                  data: [
                    hovered === index ? animatedPercentages[index] : 0,
                    100 - skill.level,
                  ],
                  backgroundColor: [
                    hovered === index ? skill.color : 'rgba(255, 255, 255, 0.1)',
                    'rgba(255, 255, 255, 0.1)',
                  ],
                  borderWidth: 1,
                },
              ],
            };

            return (
<div
  key={index}
  className={`p-4 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105`}
  onMouseEnter={() => setHovered(index)}
  onMouseLeave={() => setHovered(null)}
  style={{
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    borderRadius: '24px', 
    // backgroundColor: hovered === index ? skill.color : 'initial', // Set hover color as background

    boxShadow: hovered === index
      ? `0 0 12px 4px ${skill.color}, 0 0 25px 8px ${skill.color}`
      : 'none',
  }}
>
  <div
    className="flex flex-col bg-gradient-to-r from-teal-600 to-purple-600 shadow-sm shadow-teal-500/50 p-4 rounded-3xl"
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Add overlay for readability
      backdropFilter: 'blur(4px)', // Optional blur effect 
      borderRadius: 'inherit', // Match the card's border-radius
    }}
  >
    <div className="flex items-center justify-between mb-4">
      <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
        {skill.name}
      </h4>
      <img
        src={skill.logo}
        alt={skill.name}
        className="object-contain"
        style={{
          width: `${hovered === index ? 60 : 48}px`,
          height: `${hovered === index ? 60 : 48}px`,
          transition: 'all 0.3s ease',
          borderRadius: '8px',
        }}
      />
    </div>
    <div className="flex items-center justify-between">
      <div className="relative w-24 h-24">
        <Doughnut data={data} options={options} />
      </div>
      <div className="flex flex-col justify-center text-center">
        <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
          {animatedPercentages[index]}%
        </p>
      </div>
    </div>
  </div>
</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
