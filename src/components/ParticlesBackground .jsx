// ParticlesBackground.jsx
import React from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesOptions = {
    background: { color: { value: "#f8f9fa" } },
    fpsLimit: 60,
    particles: {
      number: { value: 50 },
      color: { value: "#000" },
      shape: { type: "circle" },
      opacity: { value: 0.4 },
      size: { value: 3 },
      move: { enable: true, speed: 2, direction: "none" },
    },
    zIndex: { value: -1 },  // Ensures particles are behind the profile card and typewriter
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
    />
  );
};

export default ParticlesBackground;
