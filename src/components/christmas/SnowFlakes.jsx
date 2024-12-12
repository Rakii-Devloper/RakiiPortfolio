import React, { useEffect, useRef } from "react";

const Snowflakes = () => {
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
      init(); // Reinitialize particles on resize
    });

    // Snowflake particle object
    class Snowflake {
      constructor(x, y, size, color, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
      }
      draw() {
        ctx.font = `${this.size}px Arial`; // Set font size
        ctx.fillStyle = this.color; // Set color
        ctx.fillText("❅", this.x, this.y); // Draw snowflake
      }
      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        // Respawn snowflake when it goes out of bounds
        if (this.y - this.size > canvas.height) {
          this.y = 0 - this.size;
          this.x = Math.random() * canvas.width;
        }
        if (this.x + this.size < 0 || this.x - this.size > canvas.width) {
          this.x = Math.random() * canvas.width;
        }
      }
    }

    // Initialize snowflakes
    function init() {
      particlesArray.length = 0; // Clear existing particles
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 20 + 10; // Snowflake size
        const x = Math.random() * canvas.width; // Position X
        const y = Math.random() * canvas.height; // Position Y
        const color = `rgba(255, 255, 255, ${Math.random()})`; // Random opacity
        const velocityX = (Math.random() - 0.5) * 1; // Horizontal drift
        const velocityY = Math.random() * 1 + 0.5; // Vertical fall speed
        particlesArray.push(new Snowflake(x, y, size, color, velocityX, velocityY));
      }
    }

    // Animate snowflakes
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((snowflake) => {
        snowflake.draw();
        snowflake.update();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none"></canvas>;
};

export default Snowflakes;
