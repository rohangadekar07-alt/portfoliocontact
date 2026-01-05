import { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const dots = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: 2,
    }));

    const maxDistance = 120;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56, 189, 248, 0.9)";
        ctx.fill();
      });

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${1 - dist / maxDistance})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden" id="home">
      
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="font-bold text-white leading-tight
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Hi, I’m
          <span className="block mt-2
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Rohan Gadekar
          </span>
          <span className="block mt-3
            text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Web Developer
          </span>
        </h1>

        <p className="mt-6 text-gray-400
          text-sm sm:text-base md:text-lg lg:text-xl">
          Passionate about creating innovative web solutions with modern
          technologies. Recent BE graduate from Savitribai Phule Pune University
          (SPPU).
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-7 py-3 text-sm sm:text-base
            bg-gradient-to-r from-blue-500 to-purple-600
            rounded-lg hover:scale-105 transition text-white">
            View Projects
          </button>

          <button className="px-7 py-3 text-sm sm:text-base
            bg-gradient-to-r from-blue-500 to-purple-600
            rounded-lg hover:scale-105 transition text-white">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
