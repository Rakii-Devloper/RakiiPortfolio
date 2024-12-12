import React, { useRef, useEffect } from "react";

const ConstellationEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Stars configuration
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1, // Random size of stars
      opacity: Math.random() * 0.5 + 0.5, // Random opacity for twinkle effect
      speedX: Math.random() * 0.5 - 0.25, // Random horizontal speed
      speedY: Math.random() * 0.5 - 0.25, // Random vertical speed
      rotation: Math.random() * 2 * Math.PI, // Random starting rotation angle
      rotationSpeed: Math.random() * 0.02 - 0.01, // Random rotation speed for each star
    }));

    // Function to draw stars
    const drawStars = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        // Update the star's position based on its speed
        star.x += star.speedX;
        star.y += star.speedY;

        // If a star goes off-screen, reset its position
        if (star.x > width) star.x = 0;
        if (star.x < 0) star.x = width;
        if (star.y > height) star.y = 0;
        if (star.y < 0) star.y = height;

        // Rotate the star by its rotation speed
        star.rotation += star.rotationSpeed;

        // Drawing the star (circle)
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Twinkling effect: change opacity randomly
        star.opacity += Math.random() * 0.1 - 0.05;
        if (star.opacity > 1 || star.opacity < 0.5) {
          star.opacity = Math.random() * 0.5 + 0.5; // Reset opacity randomly
        }
      });

      // Add random lines between stars to simulate constellations
      for (let i = 0; i < stars.length - 1; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const star1 = stars[i];
          const star2 = stars[j];

          const distance = Math.hypot(star1.x - star2.x, star1.y - star2.y);
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(star1.x, star1.y);
            ctx.lineTo(star2.x, star2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 120})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Call drawStars again for animation
      requestAnimationFrame(drawStars);
    };

    // Start the animation
    drawStars();

    // Handle window resizing
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
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

export default ConstellationEffect;
