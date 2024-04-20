import React, { useState, useEffect } from 'react';
import HomePic from "./../img/HomePic.webp"
import './home.css';

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
      setFadeIn(true);
  }, []);
  
  return (
      <div className="home">
        <h1>Hi! I'm Leyang!</h1>
        <br/>
        <h1>Welcome to My Personal Website :D</h1>
        <br/>
        <br/>
        <br/>
        <img src={HomePic} className={`img ${fadeIn ? 'fade-in' : ''}`} />
      </div>
  );
}

export default Home;
