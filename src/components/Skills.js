import React from "react";
import skillsData from "../data/skills.json";
import "../css/Skills.css";
import "../App.css";

const Skills = ({ id }) => {
  return (
    <section id={id} className="skills-section">
      <h1 className="sections-heading">SKILLS</h1>
      <ul className="skills-list">
        {skillsData.map((skill, index) => (
          <li key={index} className="skill-item">
            <strong>{skill.name}</strong> - {skill.level}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
