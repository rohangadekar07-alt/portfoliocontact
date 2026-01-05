import { useState } from "react";
import { Award, Briefcase, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Full Stack Web Development",
    org: "Kiran Academy",
    date: "Aug 2025",
    description:
      "Comprehensive course covering modern web development technologies and frameworks.",
    skills: [
      "Angular",
      "Java",
      "MySql",
      "Springboot",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    icon: <Award className="w-6 h-6 text-white" />,
    image: "/certificates/fullstack.jpg",
  },
  {
    title: "Internship Completion Letter",
    org: "Sumago Infotech",
    date: "July 2023",
    description:
      "Advanced training on integrating AI tools and services into web applications.",
    skills: ["Python", "Django", "MongoDB", "Projects", "HTML", "CSS"],
    icon: <Briefcase className="w-6 h-6 text-white" />,
    image: "/certificates/internship.jpg",
  },
];

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="certifications">
      {/* Glass Container */}
      <div
        className="bg-white/5 backdrop-blur p-10 rounded-2xl border border-white/10"
        style={{
          border: "2px solid",
          borderImage: "linear-gradient(to right, #60a5fa, #a855f7) 1",
        }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuous learning and skill development through various courses
            and certifications
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:scale-[1.02] transition hover:border-blue-400"
            >
              {/* Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {item.org}
                  </p>
                  <p className="text-sm text-gray-400">{item.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6">
                {item.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <p className="text-white font-medium mb-3">
                  Skills Covered:
                </p>
                <div className="flex flex-wrap gap-3">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 text-sm rounded-full backdrop-blur-xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Certificate */}
              <button
                onClick={() => setSelectedImage(item.image)}
                className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition"
              >
                <ExternalLink size={16} />
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full p-4">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Certificate"
              className="rounded-xl w-full border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
