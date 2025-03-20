import React from "react";
import { motion } from "framer-motion";
import "../css/About.css";

const About = ({ id }) => {
  const motionSettings = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1.5, ease: "easeOut", delay: 0.3 },
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
      {/* Name with Slide-in Effect */}
      <motion.h1
        className="name-gradient"
        whileHover={{ scale: 1.1, textShadow: "0px 0px 12px rgba(198, 79, 40, 0.8)" }}
        {...motionSettings} // Apply shared animation settings
      >
        Shaunak Oza
      </motion.h1>

      {/* Typing Animation for About Info */}
      <motion.p className="about-text" {...motionSettings}>
        I am a <span className="highlight">Full Stack Developer</span> with{" "}
        <span className="highlight">6+ years</span> of experience in building scalable web applications, optimizing databases, and customizing enterprise solutions. Passionate about problem-solving, system performance, and developing AI-driven applications.
      </motion.p>
    </section>
  );
};

export default About;
