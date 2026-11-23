
import React from "react";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Fake Profile Identification",
      category: "Machine Learning",
      description:
        "A machine learning based project designed to identify fake profiles on social media platforms.",
      technologies: "Python, Machine Learning, Django"
    },
    {
      number: "02",
      title: "LocalLearn AI",
      category: "Artificial Intelligence",
      description:
        "An AI-based doubt solving platform designed to help local language students understand technical concepts.",
      technologies: "React, AI, Python"
    },
    {
      number: "03",
      title: "Web Application",
      category: "Web Development",
      description:
        "A responsive web application developed using frontend technologies with a simple and user-friendly interface.",
      technologies: "HTML, CSS, JavaScript"
    }
  ];

  return (
    <section className="content-section">

      <div className="section-heading">
        <p className="welcome">WHAT I HAVE BUILT</p>
        <h1>My <span>Projects</span></h1>
        <p>Some of my academic and development projects.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.number}>

            <div className="project-number">
              {project.number}
            </div>

            <p className="project-category">
              {project.category}
            </p>

            <h2>{project.title}</h2>

            <p className="project-description">
              {project.description}
            </p>

            <div className="technology">
              {project.technologies}
            </div>

          </div>
        ))}
      </div>

      <div className="project-note">
        <h2>Always Building Something New!</h2>
        <p>
          I enjoy transforming ideas into practical applications
          and exploring new technologies through projects.
        </p>
      </div>

    </section>
  );
}

export default Projects;
