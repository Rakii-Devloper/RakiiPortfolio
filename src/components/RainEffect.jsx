import React, { useRef, useEffect, useState } from "react";

const RainEffect = () => {
  const canvasRef = useRef(null);
  const [isThunder, setIsThunder] = useState(false); // State to track thunder visibility

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const raindrops = Array.from({ length: 300 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 20 + 10,
      speed: Math.random() * 5 + 2,
      opacity: Math.random() * 0.5 + 0.3,
    }));

    const drawRain = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(174,194,224,0.5)";
      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";

      raindrops.forEach((drop) => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();

        drop.y += drop.speed;
        if (drop.y > height) {
          drop.y = -20; // Reset drop position
          drop.x = Math.random() * width;
        }
      });

      // Thunder effect: Flash white for a moment, then fade out
      if (isThunder) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)"; // White for thunder
        ctx.fillRect(0, 0, width, height); // Flash full screen
      }

      requestAnimationFrame(drawRain);
    };

    // Trigger thunder effect every 5-7 seconds
    const thunderInterval = setInterval(() => {
      setIsThunder(true); // Make thunder visible
      setTimeout(() => {
        setIsThunder(false); // Hide thunder after 200ms
      }, 200);
    }, Math.random() * (7000 - 5000) + 5000); // Thunder every 5-7 seconds

    drawRain();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(thunderInterval); // Cleanup the interval on unmount
    };
  }, [isThunder]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 2, // Ensure it's behind everything
        pointerEvents: "none", // Let interactions go through canvas
      }}
    />
  );
};

export default RainEffect;
