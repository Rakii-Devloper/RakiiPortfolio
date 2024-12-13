import React from "react";

const ResumeViewButton = () => {
    return (
        <div className="flex justify-center mt-10">
            <a
                href="../../src/assets/RakeshResume.pdf" // Path to your resume in the public folder
                target="_blank"    // Opens the resume in a new tab
                rel="noopener noreferrer" // For security
            className="p-8 py-3 border text-xl border-gray-300 text-white font-semibold rounded-lg bg-transparent hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-gradient-to-r hover:from-blue-500 hover:to-purple-500">
                View My Resume
            </a>
        </div>
    );
};



export default ResumeViewButton;
