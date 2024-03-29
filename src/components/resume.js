import React from 'react';
import pdf from '../Resume.pdf';
import './resume.css';
import resumeImg from "./../img/resume.webp"

const Resume = () => {

  return (
    <div className="resume">
      <h1>Welcome to My Resume</h1>
      <br></br>
      <a className="download" href={pdf}>Download</a>
      <img src={resumeImg} alt="" className="img-container" />
    </div>
  );
};

export default Resume;