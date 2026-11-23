
import React from "react";

function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering",
      department: "Computer Science and Engineering",
      year: "Currently Pursuing - 3rd Year",
      score: "Overall CGPA: 9.36",
      icon: "🎓"
    },
    {
      degree: "Diploma",
      department: "Computer Engineering",
      year: "Completed in 2025",
      score: "83.5% - First Class",
      icon: "📘"
    }
  ];

  return (
    <section className="content-section">

      <div className="section-heading">
        <p className="welcome">MY ACADEMIC JOURNEY</p>
        <h1>My <span>Education</span></h1>
        <p>My educational qualifications and academic achievements.</p>
      </div>

      <div className="education-grid">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <div className="card-icon">{item.icon}</div>

            <h2>{item.degree}</h2>
            <h3>{item.department}</h3>

            <p>{item.year}</p>

            <div className="score">
              {item.score}
            </div>
          </div>
        ))}
      </div>

      <h2 className="sub-heading">Academic Performance</h2>

      <div className="performance-grid">
        <div className="performance-card">
          <h2>9.21</h2>
          <p>3rd Semester CGPA</p>
        </div>

        <div className="performance-card">
          <h2>9.52</h2>
          <p>4th Semester CGPA</p>
        </div>

        <div className="performance-card">
          <h2>9.36</h2>
          <p>Overall CGPA</p>
        </div>
      </div>

    </section>
  );
}

export default Education;
