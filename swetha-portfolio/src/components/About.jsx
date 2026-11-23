
import React from "react";

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Python",
    "Java",
    "C Programming",
    "Machine Learning"
  ];

  return (
    <section className="content-section">

      <div className="section-heading">
        <p className="welcome">GET TO KNOW ME</p>
        <h1>About <span>Me</span></h1>
        <p>Discover my background, interests and technical skills.</p>
      </div>

      <div className="about-card">
        <h2>Who Am I?</h2>
        <p>
          I am Swetha, a Computer Science and Engineering student
          currently pursuing my B.E degree through lateral entry.
          I completed my Diploma in Computer Engineering in 2025
          with First Class and 83.5%.
        </p>

        <p>
          I am interested in web development, programming,
          artificial intelligence and problem solving.
          My goal is to improve my technical knowledge and
          develop useful real-world applications.
        </p>
      </div>

      <h2 className="sub-heading">My Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span>✦</span>
            {skill}
          </div>
        ))}
      </div>

      <div className="about-card">
        <h2>My Interests</h2>
        <div className="interest-list">
          <p>Web Development</p>
          <p>Artificial Intelligence</p>
          <p>Software Development</p>
          <p>Learning New Technologies</p>
        </div>
      </div>

    </section>
  );
}

export default About;
