import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaLightbulb } from "react-icons/fa";
import "../css/About.css";

const About = ({ id }) => {
  const letterAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" }
    })
  };

  const textReveal = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 2, ease: "easeOut", delay: 1.2 }
    },
  };

  return (
    <section
      id={id}
      className="about-section"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Full Name with Smooth Letter-by-Letter Reveal Effect */}
      <motion.h1
        className="name-gradient"
        initial="hidden"
        animate="visible"
      >
        {[..."Shaunak Oza"].map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={letterAnimation}
            style={{ display: "inline-block", marginRight: char === ' ' ? '8px' : '0' }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Typing Animation for About Info */}
      <motion.p
        className="about-text"
        initial="initial"
        animate="animate"
        variants={textReveal}
      >
        <FaLaptopCode className="icon" /> I am a <span className="highlight">Full Stack Developer</span> with
        <span className="highlight"> 6+ years</span> of experience in building scalable web applications,
        optimizing databases, and customizing enterprise solutions. Passionate about <span className="highlight">problem-solving</span>,
        <span className="highlight"> system performance</span>, and developing <span className="highlight">AI-driven applications</span>.
      </motion.p>

      {/* Inspirational Quote */}
      <motion.p
        className="quote"
        initial="initial"
        animate="animate"
        variants={textReveal}
      >
        <FaLightbulb className="icon" /> "Code is like humor. When you have to explain it, it’s bad." - <span className="highlight">Cory House</span>
      </motion.p>
    </section>
  );
};

export default About;