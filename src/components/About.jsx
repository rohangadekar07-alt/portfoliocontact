const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="about">
      
      {/* About Card with Border Only */}
      <div
        className="bg-white/5 backdrop-blur p-8 rounded-2xl"
        style={{
          border: "2px solid",
          borderImage: "linear-gradient(to right, #60a5fa, #a855f7) 1",
        }}
      >
        <h2 className="text-3xl text-white font-bold mb-8 text-center">
          About Me
        </h2>

        {/* Two Container Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center">
            
            {/* Circular Photo Border */}
            <div
              className="p-[3px] rounded-full"
              style={{
                background: "linear-gradient(to right, #60a5fa, #a855f7)",
              }}
            >
              <img
                src="/Rohanphoto.jpeg"
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-semibold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Rohan Gadekar
            </h3>

            <p className="text-gray-400">
              Web Developer
            </p>
          </div>

          {/* Info Section */}
          <div>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a passionate Web Developer and recent Bachelor of Engineering
              (BE) graduate from Savitribai Phule Pune University (SPPU). I
              specialize in building modern, responsive web applications using
              React and Tailwind CSS.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My journey in web development began with curiosity about how
              websites work, which evolved into a deep passion for creating
              clean, user-friendly, and performant digital experiences.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;
