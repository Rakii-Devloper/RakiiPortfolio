import { useState, useEffect } from 'react';
import ModalPopUP from '../components/ModalPopup';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('freelancing'); // Default category
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = {
    freelancing: [
      {
        title: "Instakart",
        description: "E-commerce website focused on the Caribbean market.",
        link: "https://example.com/instakart",
        image: "https://via.placeholder.com/600x400",
        techStack: ["React", "Sass", "Bootstrap", "Redux", "Node.js", "AWS"]
      },
      {
        title: "NUwav",
        description: "Mobile app with sports news, fantasy, and sports views.",
        link: "https://example.com/nuwav",
        image: "https://via.placeholder.com/600x400",
        techStack: ["React Native", "Expo", "UI Libraries"]
      },
      {
        title: "Dodle",
        description: "Online interview platform using video technology.",
        link: "https://example.com/dodle",
        image: "https://via.placeholder.com/600x400",
        techStack: ["React", "Video.js"]
      }
    ],
    company: [
      {
        title: "Kachng",
        description: "E-commerce website like Shopify, worked on UI and page speed.",
        link: "https://example.com/kachng",
        image: "https://via.placeholder.com/600x400",
        techStack: ["React", "Node.js", "MongoDB"]
      },
      {
        title: "Field Ambassador",
        description: "Website for managing field ambassador data.",
        link: "https://example.com/fieldambassador",
        image: "https://via.placeholder.com/600x400",
        techStack: ["React", "Node.js", "SQL"]
      }
    ],
    ongoing: [
      {
        title: "PlaneIt",
        description: "Task planner app with daily tasks and customizable features.",
        link: "https://example.com/planeit",
        image: "https://via.placeholder.com/600x400",
        techStack: ["React", "Tailwind CSS", "Node.js", "AWS"]
      },
      {
        title: "Divine Meet",
        description: "Video chat and meeting platform for Bible sharing.",
        link: "https://example.com/divinemeet",
        image: "https://via.placeholder.com/600x400",
        techStack: ["React", "Tailwind CSS", "Node.js", "AWS"]
      },
      {
        title: "Click Blast",
        description: "Brain teaser game, fun click-based puzzles.",
        link: "https://example.com/clickblast",
        image: "https://via.placeholder.com/600x400",
        techStack: ["React", "JavaScript", "CSS"]
      }
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % projects[selectedCategory].length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [selectedCategory]); // Re-run when selectedCategory changes

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentSlide(0); // Reset slide to the first one
  };

  return (
    <section id="projects" className="w-full min-h-screen bg-gray-100 py-20 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-gray-800">My Projects</h2>
      <p className="text-xl text-gray-600 mt-4">A collection of my work:</p>

      {/* Category Selection */}
      <div className="flex gap-4 mt-6">
        <button onClick={() => handleCategoryChange('freelancing')} className="btn">Freelancing</button>
        <button onClick={() => handleCategoryChange('company')} className="btn">Company</button>
        <button onClick={() => handleCategoryChange('ongoing')} className="btn">Ongoing</button>
      </div>

      <div className="flex flex-col md:flex-row mt-8 gap-6 px-4 w-full">
        {/* Left side - Carousel */}
        <div className="w-full md:w-8/12 h-auto max-h-[500px] sm:max-h-[400px] lg:max-h-[600px] xl:max-h-[700px] relative overflow-hidden">
  <div
    className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
  >
    {projects[selectedCategory].map((project, index) => (
      <div key={index} className="flex-shrink-0 w-full h-full">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full cursor-pointer"
          onClick={() => handleProjectClick(project)}
        />
      </div>
    ))}
  </div>
</div>


        {/* Right side - Project Names */}
        <div className="w-full md:w-4/12 mt-6 md:mt-0">
          {projects[selectedCategory].map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 mb-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition duration-300"
              onClick={() => handleProjectClick(project)}
            >
              <h3 className="text-4xl font-bold text-gray-800 tracking-wide">{project.title}</h3>
              <p className="mt-2 text-gray-600 text-lg">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup for Project Details */}
      {selectedProject && (
        <ModalPopUP
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsPage;
