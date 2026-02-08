import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map(link => {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        return { id, element };
      });

      const currentSection = sections.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) {
        setActive(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? "py-4 bg-black/80 backdrop-blur-md"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          onClick={(e) => scrollToSection(e, '#home')}
        >
          Rohan<span className="text-white">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${active === link.href.substring(1)
                    ? "text-blue-400"
                    : "text-neutral-300"
                    }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="w-px h-6 bg-white/10" />

          <div className="flex gap-4">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-blue-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ top: "0" }}
      >
        <div className="flex flex-col h-full items-center justify-center space-y-8">
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-2xl font-light ${active === link.href.substring(1)
                ? "text-blue-400"
                : "text-white"
                }`}
            >
              {link.name}
            </a>
          ))}

          <div className="flex gap-8 mt-8">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

