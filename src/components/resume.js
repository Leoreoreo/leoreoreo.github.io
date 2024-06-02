import React, { useState, useEffect } from 'react';
import pdf from '../Resume.pdf';
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
      <a className="download" href={pdf}>Download</a>
      <img src={resumeImg} alt="" className={`img-container ${fadeIn ? 'fade-in' : ''}`} />
    </div>
  );
};

export default Resume;