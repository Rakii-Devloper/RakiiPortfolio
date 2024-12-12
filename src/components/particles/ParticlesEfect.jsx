import React, { useEffect, useRef } from "react";

const ParticlesEfect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const particlesArray = [];
    const numberOfParticles = 100;

    // Adjust canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Particle object
    class Particle {
      constructor(x, y, size, color, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        // Bounce off walls
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.velocityX *= -1;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.velocityY *= -1;
        }
      }
    }

    // Initialize particles
    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 5 + 2; // Particle size
        const x = Math.random() * canvas.width; // Position X
        const y = Math.random() * canvas.height; // Position Y
        const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        }, 0.7)`; // Random color
        const velocityX = (Math.random() - 0.5) * 2; // Horizontal velocity
        const velocityY = (Math.random() - 0.5) * 2; // Vertical velocity
        particlesArray.push(new Particle(x, y, size, color, velocityX, velocityY));
      }
    }

    // Animate particles
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        particle.draw();
        particle.update();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none"></canvas>;
};

export default ParticlesEfect;
