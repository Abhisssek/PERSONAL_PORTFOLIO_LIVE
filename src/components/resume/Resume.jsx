import React from "react";
import "./Resume.css";
import { FaBook } from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";

export const Resume = () => {
  const educationData = [
    {
      school: "Gangadhar Meher University",
      year: "2023 — 2025",
      description: "Currently pursuing Master of Computer Applications (MCA).",
    },
    {
      school: "Sambalpur University",
      year: "2019 — 2022",
      description: "Completed Bachelor’s degree in Physics.",
    },
  ];

  const skills = [
    { name: "MERN", level: 80 },
    { name: "Backend", level: 70 },
    { name: "Frontend", level: 90 },
    { name: "Javascript", level: 70 },
    { name: "Solidity", level: 75 },
  ];

  return (
    <div className="resume main-article">
      
        <h1>Resume</h1>
        <hr className="small-horizontal" />
      
      <div className="education-container">
        <div className="education-header">
          <FaBook className="education-header-icon" />
          <h2 className="education-title">Education</h2>
        </div>
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-dot"></div>
              <h3 className="education-school">{edu.school}</h3>
              <p className="education-year">{edu.year}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>

        <div className="skills-container">
          <div className="skill-header">
            <SiHyperskill className="skill-icon" />
            <h2 className="skills-title">My Skills</h2>
          </div>
          <div className="skill-timeline">
          <div className="skills-card">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-label">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
