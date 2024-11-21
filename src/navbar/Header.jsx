import React, { useState } from "react";
import "../navbar/Header.css";

export const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Top Strip */}
      <div className="top-strip">
        <div className="contact-info">
          <span>Contact Us:</span>
          <span>+91 93957 48804</span>
          <span>+91 90994 68492</span>
          <span>+91 93805 24083</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="logo">
          <img src="/logo.webp" alt="DIGI9 Logo" />
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <nav className="menu">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Blogs</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="menu">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Blogs</a>
          <a href="#">Contact Us</a>
        </nav>

        {/* CTA Button */}
        <div className="cta-button">
          <a href="#" className="btn">
            Get In Touch
          </a>
        </div>
      </header>
    </>
  );
};
