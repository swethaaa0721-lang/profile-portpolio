
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-section">

      <div className="home-content">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hello, I'm <span>Swetha S</span>
        </h1>

        <h2>Computer Science Engineering Student</h2>

        <p className="home-description">
          I am a passionate Computer Science student interested in
          programming, web development and emerging technologies.
          I enjoy learning new skills and building creative projects.
        </p>

        <div className="home-buttons">
          <Link to="/about" className="primary-btn">
            Explore More
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Me
          </Link>
        </div>

        <div className="home-stats">
          <div className="stat-card">
            <h2>9.36</h2>
            <p>CGPA</p>
          </div>

          <div className="stat-card">
            <h2>2025</h2>
            <p>Diploma Completed</p>
          </div>

          <div className="stat-card">
            <h2>3rd</h2>
            <p>Year B.E CSE</p>
          </div>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-circle">S</div>
        <h2>Swetha</h2>
        <p>Computer Science Student</p>
        <div className="profile-line"></div>
        <p className="profile-text">
          Learning | Creating | Innovating
        </p>
      </div>

    </section>
  );
}

export default Home;
