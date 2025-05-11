import React, { useState, useEffect } from "react";
import "./Sidebar.css";

export const Sidebar = () => {
  const [showContacts, setShowContacts] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

  const handleResize = () => {
    const mobile = window.innerWidth <= 1100;
    setIsMobile(mobile);
    setShowContacts(!mobile); // Always show on desktop, toggle on mobile
  };

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleContacts = () => {
    setShowContacts(prev => !prev);
  };

  return (
    <aside className="sidebar">
      <section className="info-section">
        <div className="info-img">
          <img src="/img/my-avatar.png" alt="" />
        </div>
        <div className="info-quote">
          <h1>Abhisek Pattanayak</h1>
          <div className="info-role">
            <h3>Frontend Developer</h3>
          </div>
        </div>
      </section>

      {/* Show button only in mobile view */}
      {isMobile && (
        <div className="toggle-button-wrapper">
          <button className="toggle-button" onClick={toggleContacts}>
            {showContacts ? "×" : "⁞⁞"}
          </button>
        </div>
      )}

      {/* Conditional rendering of contact info */}
      {showContacts && (
        <>
          <section className="info-contacts">
            <div className="email">
              <i className="fa-regular fa-envelope"></i>
              <div className="email-info">
                <h3>Email</h3>
                <a href="mailto:abhisekpattanayak07@gmail.com">
                  <p>abhisekpattanayak07...</p>
                </a>
              </div>
            </div>
            <div className="phone">
              <i className="fa-solid fa-phone"></i>
              <div className="phone-info">
                <h3>Phone</h3>
                <p>7609090022</p>
              </div>
            </div>
            <div className="birthday">
              <i className="fa-regular fa-calendar-days"></i>
              <div className="birth-info">
                <h3>Birthday</h3>
                <p>08/07/2002</p>
              </div>
            </div>
            <div className="location">
              <i className="fa-solid fa-location-dot"></i>
              <div className="location-info">
                <h3>Location</h3>
                <p>Balangir, Odisha, India</p>
              </div>
            </div>
          </section>

          <section>
            <div className="social-links">
              <a href="https://x.com/abhisssek07"><i className="fa-brands fa-twitter"></i></a>
              <a href="https://www.linkedin.com/in/abhisek-pattanayak-b51331244/"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/Abhisssek"><i className="fa-brands fa-github"></i></a>
            </div>
          </section>
        </>
      )}
    </aside>
  );
};
