import React, { useState } from "react";
import projectsData from "../data/projects.json";
import "../css/Projects.css";
import { color } from "framer-motion";
import "../App.css";
const Projects = ({ id }) => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id={id} className="projects-section">
      <h2 className="sections-heading">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`project-card ${flippedIndex === index ? "flipped" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="project-card-inner">
              <div className="project-card-front" style={{backgroundImage: `url(${project.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center"}}>
              <h3 style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.8)", padding: "5px 10px", borderRadius: "5px" }}>{project.title}</h3>              </div>

              <div className="project-card-back">
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
