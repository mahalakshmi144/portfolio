"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 150;
          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `transition ${
      active === id
        ? "text-green-400 font-semibold"
        : "text-gray-300 hover:text-green-400"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-green-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-green-400 font-bold text-lg">
          Mahalaxmi<span className="animate-pulse">|</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#about" className={linkClass("about")}>About</a>
          <a href="#skills" className={linkClass("skills")}>Skills</a>
          <a href="#projects" className={linkClass("projects")}>Projects</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>
          <a href="/resume.pdf" download className="border border-green-500 px-3 py-1 rounded hover:bg-green-500 hover:text-black transition">Resume</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-400 text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-green-500 p-4 space-y-4 text-center">
          <a href="#about" onClick={() => setMenuOpen(false)} className={linkClass("about")}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className={linkClass("skills")}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className={linkClass("projects")}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className={linkClass("contact")}>Contact</a>
        </div>
      )}
    </nav>
  );
}