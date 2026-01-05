import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Certifications",
    "Contact",
  ];

  // 🔹 Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -80;
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsOpen(false);
  };

  // 🔹 Detect active section
  useEffect(() => {
    const handleScroll = () => {
      menuItems.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(item.toLowerCase());
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* Logo */}
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Rohan.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-3 text-sm">
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = active === id;

            return (
              <li key={item} className="w-24 h-9">
                <button
                  onClick={() => scrollToSection(id)}
                  className={`
                    w-full h-full flex items-center justify-center
                    font-semibold border-2 rounded-lg text-white
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-blue-500 border-blue-400 scale-105"
                        : "bg-[#0a1f44] border-blue-300 hover:bg-[#0f2a5f] hover:scale-105"
                    }
                  `}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black/60 backdrop-blur-lg border-t border-white/10 px-6 py-4 space-y-4 text-center">
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = active === id;

            return (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`
                    w-full py-2 font-semibold rounded-lg text-white
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-blue-500 scale-105"
                        : "bg-[#0a1f44] border-2 border-gray-400 hover:scale-105"
                    }
                  `}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

