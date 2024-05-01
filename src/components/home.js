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
        <img src={HomePic} className={`img ${fadeIn ? 'fade-in' : ''}`} />
        <picture>
          <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/Leoreoreo/Leoreoreo/output/github-contribution-grid-snake.svg"/>
          <p>generated with <a href="https://github.com/Platane/snk" className="links">Platane/snk</a></p>
        </picture>
      </div>
  );
}

export default Home;
