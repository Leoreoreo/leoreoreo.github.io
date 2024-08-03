import React, { useState, useEffect } from 'react';
import HomePic from "./../img/HomePic.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
        <h2 align='center'>Welcome to My Personal Website :D</h2>
        <br/><br/><br/>
        <img src={HomePic} alt='' className={`img ${fadeIn ? 'fade-in' : ''}`} />
        <br/><br/>
        <picture>
        <a href="https://github.com/Leoreoreo"><FontAwesomeIcon icon={faGithub} className='icon' size='3x'/></a> 
          <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/Leoreoreo/Leoreoreo/output/github-contribution-grid-snake.svg"/>
          <p>generated with <a href="https://github.com/Platane/snk" className="links">Platane/snk</a></p>
        </picture>
      </div>
  );
}

export default Home;
