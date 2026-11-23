
import React from "react";

function Contact() {
  const contacts = [
    {
      icon: "💼",
      title: "LinkedIn",
      description: "Connect with me professionally",
      link: "https://www.linkedin.com/"
    },
    {
      icon: "💻",
      title: "GitHub",
      description: "Explore my coding projects",
      link: "https://github.com/"
    },
    {
      icon: "📸",
      title: "Instagram",
      description: "Follow my profile",
      link: "https://www.instagram.com/"
    }
  ];

  return (
    <section className="content-section">

      <div className="section-heading">
        <p className="welcome">LET'S CONNECT</p>
        <h1>Contact <span>Me</span></h1>
        <p>Feel free to connect with me through these platforms.</p>
      </div>

      <div className="contact-intro">
        <h2>Have an Idea or Opportunity?</h2>
        <p>
          I would love to connect, learn and collaborate
          with people who share an interest in technology.
        </p>
      </div>

      <div className="contact-grid">

        {contacts.map((contact, index) => (
          <a
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            key={index}
          >
            <div className="contact-icon">
              {contact.icon}
            </div>

            <h2>{contact.title}</h2>

            <p>{contact.description}</p>

            <span className="visit-link">
              Visit Profile →
            </span>
          </a>
        ))}

      </div>

      <div className="contact-bottom">
        <h2>Thank You for Visiting!</h2>
        <p>Let's learn, grow and build something amazing.</p>
      </div>

    </section>
  );
}

export default Contact;
