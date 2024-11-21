import React from 'react';
import '../pages/Home.css'; 

export const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>
          <span>CRAFT YOUR DIGITAL</span> <br />
          <span className="highlight">VISION WITH PRECISION</span>
        </h1>
        <p>
          Specializing in <strong>custom software</strong> and <strong>mobile applications</strong>, our IT firm expertly transforms your digital visions with precision at every step.
        </p>
        <button>Get In Touch</button>
      </div>
      <div className="video-container">
        <video width="100%" height="auto" autoPlay muted>
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
