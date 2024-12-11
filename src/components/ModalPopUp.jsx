import React from 'react';

const ModalPopUP = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-500"
        >
          X
        </button>
        <h2 className="text-3xl font-bold">{project.title}</h2>
        <p className="mt-4 text-lg">{project.description}</p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Tech Stack:</h3>
          <ul className="list-disc pl-5">
            {project.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-blue-500 text-white py-2 px-6 rounded-lg"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
};

export default ModalPopUP;
