import React, { useState, useEffect } from "react";
import "../css/Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="header-nav">
        <a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")}>Projects</a>
        <a href="#skills" onClick={(e) => handleSmoothScroll(e, "#skills")}>Skills</a>
        <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
