import { useState } from "react";

const projects = [
  {
    title: "Hotel Management System",
    description: "Developed a hotel management system that automates room booking, guest management, and billing operations. Implemented real-time room availability, CRUD operations, and secure data handling to improve efficiency and reduce manual errors..",
    video:
      "https://ik.imagekit.io/rohan19/WhatsApp%20Video%202025-12-31%20at%201.41.23%20PM.webm",
    live: "#",
    github: "#",
  },
  {
    title: "Resume Building Website",
    description: "Developed a resume builder web application that enables users to generate ATS-optimized resumes using dynamic templates. Implemented real-time preview, form-based input, responsive design, and PDF export functionality to enhance usability and performance.",
    video:" https://ik.imagekit.io/rohan19/WhatsApp%20Video%202026-01-01%20at%2011.42.20%20PM.mp4", 
    live: "#",
    github: "#",
  },
  {
    title: "",
    description: "Personal portfolio to showcase projects and skills.",
    video: "", // add later
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  const [videoError, setVideoError] = useState({});

  return (
    <section id="projects" className="max-w-7xl  mx-auto p-[2px] px-6 py-20">
      {/* Glass Container */}
      <div
        className="bg-white/5 backdrop-blur  p-8 border rounded-2xl p-10 shadow-xl  border-white/10"
        style={{
          border: "2px fill",
          borderImage: "linear-gradient(to right, #60a5fa, #a855f7) 1",
        }}
      >
        {/* Title */}
        <h2 className="text-3xl text-white font-bold mb-12 text-center">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur text-white rounded-2xl border border-white/10 overflow-hidden hover:scale-105 transition duration-300 hover:border-blue-500 hover:border-2"
            >
              {/* Video Section */}
              <div className="relative h-44 overflow-hidden">
                {project.video && !videoError[index] ? (
                  <video
                    autoPlay
                    loop
                    muted
                    controls
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                    ref={(video) => {
                      if (video) {
                        video.playbackRate = 2; // 🔥 2x speed
                        video.play().catch(() => {}); // Safari fix
                      }
                    }}
                    onError={() =>
                      setVideoError((prev) => ({
                        ...prev,
                        [index]: true,
                      }))
                    }
                  >
                    <source
                      src={project.video}
                      type={
                        project.video.endsWith(".webm")
                          ? "video/webm"
                          : "video/mp4"
                      }
                    />
                  </video>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-black/60 text-gray-400 text-sm">
                    Video coming soon
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 text-sm">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-1 rounded bg-indigo-500/20 hover:bg-indigo-500/40 transition"
                  >
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-1 rounded bg-white/10 hover:bg-white/20 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
