import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 85 },
  { name: "JavaScript", percent: 70 },
  { name: "React", percent: 75 },
  { name: "Tailwind CSS", percent: 85 },
  { name: "Git", percent: 70 },
  
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
    id="skills"
      ref={sectionRef}
      className="max-w-6xl mx-auto px-6 py-20 text-white"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => {
          const radius = 50;
          const circumference = 2 * Math.PI * radius;

          return (
            <div
              key={index}
              className="animated-border group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-black/80 rounded-xl p-6 flex flex-col items-center gap-4 backdrop-blur">
                {/* Progress Circle */}
                <div className="relative w-28 h-28">
                  <svg className="w-full h-full -rotate-90">
                    {/* Background Circle */}
                    <circle
                      cx="56"
                      cy="56"
                      r={radius}
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="8"
                      fill="none"
                    />

                    {/* Progress Circle */}
                    <circle
                      cx="56"
                      cy="56"
                      r={radius}
                      stroke="url(#skillGradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={
                        visible
                          ? circumference -
                            (circumference * skill.percent) / 100
                          : circumference
                      }
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>

                  {/* SVG Gradient */}
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient
                        id="skillGradient"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Percentage */}
                  <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-cyan-400 group-hover:text-pink-400 transition">
                    {visible ? skill.percent : 0}%
                  </span>
                </div>

                {/* Skill Name */}
                <p className="text-sm font-semibold group-hover:text-indigo-400 transition">
                  {skill.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
