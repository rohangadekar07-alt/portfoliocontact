import { useEffect, useRef, useState } from "react";
import { Code2, Palette, Layout, Atom, GitGraph, Terminal } from "lucide-react";

const skills = [
  {
    name: "HTML5",
    percent: 90,
    icon: Layout,
    color: "text-orange-400",
    desc: "Semantic Structure & SEO"
  },
  {
    name: "CSS3",
    percent: 85,
    icon: Palette,
    color: "text-blue-400",
    desc: "Animations & Responsive Layouts"
  },
  {
    name: "JavaScript",
    percent: 75,
    icon: Code2,
    color: "text-yellow-400",
    desc: "ES6+, DOM Manipulation, Async/Await"
  },
  {
    name: "React",
    percent: 80,
    icon: Atom,
    color: "text-cyan-400",
    desc: "Functional Components, Hooks, Context"
  },
  {
    name: "Tailwind CSS",
    percent: 85,
    icon: Terminal,
    color: "text-teal-400",
    desc: "Utility-First, Dark Mode, Custom Themes"
  },
  {
    name: "Git",
    percent: 70,
    icon: GitGraph,
    color: "text-red-400",
    desc: "Version Control, Branching, Merging"
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 inline-block">
            Technical Proficiency
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Harnessing modern technologies to build scalable, interactive, and high-performance web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`
                group relative bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden
                hover:border-white/20 hover:bg-white/10 transition-all duration-300
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl bg-black/50 border border-white/10 ${skill.color}`}>
                  <skill.icon size={28} />
                </div>
                <span className="text-2xl font-bold text-white/10 group-hover:text-white/30 transition-colors select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="relative mb-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                  {skill.desc}
                </p>
              </div>

              {/* Linear Progress Bar */}
              <div className="relative w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-1000 ease-out`}
                  style={{ width: visible ? `${skill.percent}%` : '0%' }}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute top-0 right-0 bottom-0 width-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                </div>
              </div>

              <div className="flex justify-end mt-2">
                <span className="text-xs font-medium text-neutral-400">
                  {skill.percent}% Proficiency
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
