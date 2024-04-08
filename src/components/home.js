import React from 'react';
import HomePic from "./../img/HomePic.webp"
import './home.css';

const Home = () => {
    return (
        <div className="home">
          <h1>Hi! I'm Leyang!</h1>
          <br/>
          <h1>Welcome to My Personal Website :D</h1>
          <br/>
          <br/>
          <br/>
          <img src={HomePic} className="img" />
        </div>
    );
}

export default Home;
