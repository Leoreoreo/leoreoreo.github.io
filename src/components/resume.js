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
      <a className="view" href={"https://drive.google.com/file/d/1zgd--h7mRN1pzdWXizAg2WvHbe0G_W6d/view?usp=sharing"}>Request View</a>
      <img src={resumeImg} alt="" className={`img-container ${fadeIn ? 'fade-in' : ''}`} />
    </div>
  );
};

export default Resume;