import { useEffect, useRef } from "react";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width, height;
    let particles = [];

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(width * 0.15), 150);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#020617");
      gradient.addColorStop(1, "#0f172a");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      ctx.fillStyle = "rgba(148, 163, 184, 0.5)";

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 200, 255, ${p.alpha})`; // Light blue tint
        ctx.fill();
      });

      // Draw connecting lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(148, 163, 184, ${0.15 * (1 - dist / 100)})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden pt-20"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10 bg-[#020617]"
      />

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-8 pt-12 md:pt-20">

        {/* Intro Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium animate-fade-in-up hover:bg-blue-500/20 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Ready to Innovate
        </div>

        {/* Headlines */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight font-heading leading-tight">
            Transforming Concepts into
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
              High-Impact Digital Solutions
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            I am <span className="text-white font-semibold">Rohan Gadekar</span>, a Full-Stack Developer building scalable web applications. Currently driving innovation as a <span className="text-blue-400 font-semibold">Software Developer</span> at <span className="text-purple-400 font-semibold">Synture Solutions</span>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a
            href="/resume.pdf"
            download="Rohan_Gadekar_Resume.pdf"
            className="group relative px-8 py-3.5 bg-white text-slate-900 font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center gap-2"
          >
            <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
            Download Resume
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="#contact"
            className="group px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all hover:border-white/30 flex items-center gap-2"
          >
            Hire Me
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-blue-400" />
          </a>
        </div>

        {/* Tech Stack Hint */}
        <div className="pt-10 border-t border-white/5 mt-12 w-full max-w-4xl mx-auto">
          <p className="text-sm text-slate-500 mb-6 font-medium uppercase tracking-wider">Trusted Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Just text representations for cleaner look, icons can clutter hero */}
            <span className="text-xl font-bold text-slate-300 hover:text-cyan-400 transition-colors">React</span>
            <span className="text-xl font-bold text-slate-300 hover:text-yellow-400 transition-colors">JavaScript</span>
            <span className="text-xl font-bold text-slate-300 hover:text-blue-500 transition-colors">Tailwind</span>
            <span className="text-xl font-bold text-slate-300 hover:text-green-500 transition-colors">Node.js</span>
            <span className="text-xl font-bold text-slate-300 hover:text-orange-500 transition-colors">Git</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
