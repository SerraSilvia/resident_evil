import React, { useEffect, useRef } from "react";

const Snowstorm = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    let particles = [];
    const numParticles = 500; // menos densidad para más espacio entre copos
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.3, // copos más pequeños (0.3 a 2.3)
        speedX: Math.random() * 4 + 3,   // más velocidad horizontal
        speedY: Math.random() * 2 + 1,   // caída rápida
        opacity: Math.random() * 0.5 + 0.3,
        layer: Math.random() * 2
      });
    }

    let wind = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let p of particles) {
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      update();
    };

    const update = () => {
      wind = Math.sin(Date.now() / 2000) * 1; // viento más fuerte

      for (let p of particles) {
        p.x += p.speedX + wind * p.layer;
        p.y += p.speedY + p.layer * 0.5;

        // reciclar partículas
        if (p.x > canvas.width + 5) p.x = -5;
        if (p.y > canvas.height + 5) p.y = -5;
      }
    };

    const loop = () => {
      draw();
      requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-10 pointer-events-none"
    />
  );
};

export default Snowstorm;
