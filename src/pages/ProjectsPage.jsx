import { useState, useEffect } from "react";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("freelancing");
  const [loaded, setLoaded] = useState(false);

  const projects = {
    freelancing: [
      {
        title: "Instakart",
        description: "An e-commerce platform tailored for the Caribbean market.",
        image: "./public/assets/images/projectsimages/instakart.jpg",
      },
      {
        title: "Nuwav",
        description: "A mobile app delivering sports news and fantasy leagues.",
        image: "./public/assets/images/projectsimages/nuwab.webp",
      },
      {
        title: "Doodle",
        description: "A platform for conducting interviews via video.",
        image: "./public/assets/images/projectsimages/doodle.png",
      },
    ],
    company: [
      {
        title: "Kachyng",
        description: "An e-commerce solution similar to Shopify.",
        image: "./public/assets/images/projectsimages/kachyng.png",
      },
      {
        title: "Field Ambassador",
        description: "A platform for managing field ambassador operations.",
        image: "./public/assets/images/projectsimages/karunya.jpg",
      },
    ],
    ongoing: [
      {
        title: "PlaneIt",
        description: "A task planning app with customizable themes.",
        image: "./public/assets/images/projectsimages/planeit.webp",
      },
      {
        title: "Divine Meet",
        description: "A meeting platform for Bible sharing with video chat.",
        image: "./public/assets/images/projectsimages/devinemeet.png",
      },
    ],
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section  id="projects" className="w-full mt-2 min-h-screen flex flex-col">
      {/* Common Header */}
      <div className="w-full text-center py-4">
        <h1 className="text-4xl font-bold text-gray-800">My Projects</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Side - Intro and Categories */}
        <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-between">
          <div className=" p-8 flex flex-col items-center justify-center h-screen md:h-[80vh] sm:h-auto">
            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center">
              <a href="/" className="hover:underline">
                Rakesh Antony
              </a>
            </h1>

            {/* Subheading */}
            <h2 className="mt-10 font-medium tracking-tight sm:text-3xl text-center">
              Full Stack Developer /
            </h2>
            <h2 className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl text-center">
              React Developer
            </h2>

            {/* Description */}
            <p className="mt-10 text-xl max-w-md leading-normal text-center">
              I build accessible, pixel-perfect digital experiences for the web.
              <span className="block mt-7 text-1xl font-medium text-slate-400">
                Let’s craft something extraordinary together!
              </span>
            </p>

            {/* Category Navigation */}
            <div className="flex pt-10 justify-center items-center md:h-screen">
              <div className="hidden md:block flex flex-col items-start space-y-10">
                {Object.keys(projects).map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
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

              {/* Navbar for Mobile */}
              <div className="block md:hidden w-full p-10 justify-center items-center">
                <div className="space-x-10 flex">
                  {Object.keys(projects).map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
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
            </div>
          </div>
        </div>

        {/* Right Side - Project Cards */}
        <div className="w-full md:w-1/2 p-8 grid grid-cols-1 gap-6 overflow-y-auto">
          {projects[selectedCategory].map((project, index) => (
            <div
              key={index}
              className={`flex bg-white rounded-lg shadow-lg hover:shadow-xl transition-all ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ease-in-out duration-1000`}
            >
              {/* Image Section */}
              <div className="w-full md:w-2/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full rounded-l-lg"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-3/5 p-4 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
