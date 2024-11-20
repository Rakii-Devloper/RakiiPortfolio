const ModalPopUP = ({ project, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-96">
          <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
            ✖️
          </button>
          <h2 className="text-3xl font-semibold text-gray-800">{project.title}</h2>
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover mt-4" />
          <p className="mt-4 text-gray-600">{project.description}</p>
          <div className="mt-4">
            <span className="font-medium text-gray-700">Tech Stack: </span>
            {project.techStack.join(", ")}
          </div>
          <div className="mt-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalPopUP;