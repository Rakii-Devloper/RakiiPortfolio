// src/components/Loader.js

import React from 'react';

const Loader = () => {
  return (
    <div id="load" className="absolute w-[600px] h-[36px] left-1/2 top-1/4 -ml-[300px] overflow-visible select-none cursor-default">
      <div className="absolute w-[20px] h-[36px] opacity-0 text-[#35C4F0] animate-move delay-0"></div>
      <div className="absolute w-[20px] h-[36px] opacity-0 text-[#35C4F0] animate-move delay-200"></div>
      <div className="absolute w-[20px] h-[36px] opacity-0 text-[#35C4F0] animate-move delay-400"></div>
      <div className="absolute w-[20px] h-[36px] opacity-0 text-[#35C4F0] animate-move delay-600"></div>
      <div className="absolute w-[20px] h-[36px] opacity-0 text-[#35C4F0] animate-move delay-800"></div>
      <div className="absolute w-[20px] h-[36px] opacity-0 text-[#35C4F0] animate-move delay-1000"></div>
      <div className="absolute w-[20px] h-[36px] opacity-0 text-[#35C4F0] animate-move delay-1200"></div>
    </div>
  );
};

export default Loader;
