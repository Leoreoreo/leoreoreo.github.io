import React, { useState, useEffect } from 'react';
import './resume.css';
import resumeImg from "./../img/resume.png"

const Resume = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
      setFadeIn(true);
  }, []);
  return (
    <div className="resume">
      <h1>My Resume</h1>
      <br></br>
      <a className="view" href={"https://drive.google.com/file/d/15QeXpUtedV5l781KFZOvZArfNnF03xzb/view?usp=sharing"}>Request View</a>
      <img src={resumeImg} alt="" className={`img-container ${fadeIn ? 'fade-in' : ''}`} />
    </div>
  );
};

export default Resume;