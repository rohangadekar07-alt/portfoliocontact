import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import CanvasBackground from "./components/CanvasBackground";
import Certifications from "./components/Certifications";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔐 Change credentials here
  const LOGIN_ID = "rohan";
  const LOGIN_PASSWORD = "portfolio123";

  const handleLogin = () => {
    if (userId === LOGIN_ID && password === LOGIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid ID or Password");
    }
  };

  // 🔒 LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="w-full max-w-sm p-8 rounded-2xl border border-white/20 backdrop-contrast-75 bg-white/5">
          <h2 className="text-2xl font-bold text-center mb-6 
      bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio Login
          </h2>
          <input
            type="text"
            placeholder="Enter ID"
            className="w-full mb-4 px-4 py-2 bg-transparent border border-white/30 rounded-lg focus:outline-none"
            onChange={(e) => setUserId(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full mb-4 px-4 py-2 bg-transparent border border-white/30 rounded-lg focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-500 text-sm mb-3 text-center">
              {error}
            </p>
          )}

          <button
            onClick={handleLogin}
            className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-black rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // 🔓 PORTFOLIO AFTER LOGIN
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contacts />
      <Footer />
      <CanvasBackground />
    </>
  );
}

export default App;
