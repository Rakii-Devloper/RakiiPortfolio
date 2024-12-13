import React, { useRef, useEffect } from "react";

const Blast = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle configuration (blast particles)
    const particles = [];
    const numParticles = 200; // Number of particles in the blast
    let explosionCenterX = width / 2;
    let explosionCenterY = height / 2;

    // Generate particles for the blast effect
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: explosionCenterX,
        y: explosionCenterY,
        speedX: Math.random() * 4 - 2, // Random speed in X direction
        speedY: Math.random() * 4 - 2, // Random speed in Y direction
        radius: Math.random() * 3 + 3, // Particle size
        opacity: Math.random() * 0.8 + 0.2, // Random opacity
        color: `hsl(${Math.random() * 360}, 100%, 50%)`, // Random color
        life: Math.random() * 20 + 30, // Life duration of the particle
        rotation: Math.random() * 360, // Random rotation for particles
        rotationSpeed: Math.random() * 0.1 + 0.05, // Rotation speed
        scale: Math.random() * 0.5 + 0.5, // Random scaling effect
      });
    }

    // Draw function for the particles (explosion animation)
    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height); // Clear the canvas

      // Add a shockwave or ripple effect (background wave)
      ctx.beginPath();
      ctx.arc(explosionCenterX, explosionCenterY, 100, 0, Math.PI * 2);
      ctx.lineWidth = 4;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.stroke();
      ctx.globalAlpha = 0.2;
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fill();

      particles.forEach((particle, index) => {
        // Move the particles based on their speed
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Apply rotation to particles
        particle.rotation += particle.rotationSpeed;

        // Gradually decrease the life of the particle
        particle.life -= 0.1;

        // If the particle's life is over, reset it to the center for a new blast
        if (particle.life <= 0) {
          particle.x = explosionCenterX;
          particle.y = explosionCenterY;
          particle.life = Math.random() * 20 + 30;
          particle.speedX = Math.random() * 4 - 2;
          particle.speedY = Math.random() * 4 - 2;
        }

        // Particle scaling effect
        const scaleEffect = Math.max(particle.scale - (particle.life / 100), 0.5);

        // Draw the particle
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180); // Apply rotation
        ctx.beginPath();
        ctx.arc(0, 0, particle.radius * scaleEffect, 0, Math.PI * 2); // Apply scaling effect
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        ctx.restore();
      });

      requestAnimationFrame(drawParticles); // Keep animating
    };

    drawParticles(); // Start the animation

    // Resize handling
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      explosionCenterX = width / 2; // Recalculate center after resize
      explosionCenterY = height / 2;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 50,
        pointerEvents: "none",
      }}
    />
  );
};

export default Blast;
