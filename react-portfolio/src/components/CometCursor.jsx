import React, { useEffect, useRef } from "react";

export default function CometCursor() {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width / 2, y: height / 2 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      createParticles();
    };
    window.addEventListener("mousemove", handleMouseMove);

    function createParticles() {
      for (let i = 0; i < 3; i++) {
        particles.current.push({
          x: mouse.x,
          y: mouse.y,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          life: 60,
          color: Math.random() < 0.5 ? "aqua" : "violet", // azul aqua ou lilás
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.current.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life--;
        p.size *= 0.96;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color === "aqua" ? "0,255,255" : "238,130,238"}, ${p.life / 20})`;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0 || p.size <= 0.1) {
          particles.current.splice(i, 1);
        }
      });
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}
