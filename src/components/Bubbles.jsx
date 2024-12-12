import React, { useRef, useEffect } from "react";

const Bubbles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Bubbles configuration
    const bubbles = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 15 + 5, // Bubble size
      speed: Math.random() * 2 + 1, // Speed of rise
      opacity: Math.random() * 0.5 + 0.5, // Random opacity for border
    }));

    // Draw function for bubbles
    const drawBubbles = () => {
      ctx.clearRect(0, 0, width, height); // Clear the canvas on each frame

      bubbles.forEach((bubble) => {
        // Update bubble position
        bubble.y -= bubble.speed;

        // Reset bubble if it moves out of the screen
        if (bubble.y < -bubble.radius) {
          bubble.y = height + bubble.radius;
          bubble.x = Math.random() * width; // Reset horizontal position
        }

        // Draw the bubble (border only, transparent inside)
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = "transparent"; // Transparent inside
        ctx.fill();

        // Set the border (stroke) color and width
        ctx.lineWidth = 2; // Set border thickness
        ctx.strokeStyle = `rgba(255, 255, 255, ${bubble.opacity})`; // White border with varying opacity
        ctx.stroke();
      });

      // Keep the animation going
      requestAnimationFrame(drawBubbles);
    };

    drawBubbles(); // Start the animation

    // Resize handling
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

export default Bubbles;
