import React, { useState, useEffect } from 'react';
import './resume.css';
import resumeImg from "./../img/resume.webp"

const Resume = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
      setFadeIn(true);
  }, []);
  return (
    <div className="resume">
      <h1>My Resume</h1>
      <br></br>
      <a className="view" href={"https://drive.google.com/file/d/1437jfSTKExZ-6k8WQot7VKXagfG7-4BY/view?usp=sharing"}>Request View</a>
      <img src={resumeImg} alt="" className={`img-container ${fadeIn ? 'fade-in' : ''}`} />
    </div>
  );
};

export default Resume;