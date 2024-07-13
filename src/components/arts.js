import React, { useState, useEffect } from 'react';
import './arts.css';

export default function Arts() {
  return (
    <div>
      <h1>Gallery</h1>
      <br/>
      <h3>I Draw for Fun :)</h3>

      <div className="art-container">
        <div className="gif-container">
            <div className='gif-mask-portrait'><img src={"/arts/guard.gif"} alt="guard" /></div>
            <h3>Guard</h3>
        </div>
        <div className="gif-container"> 
            <div className='gif-mask-portrait'><img src={"/arts/life.gif"} alt="Life" /></div>
            <h3>Life</h3>
        </div>
        <div className="gif-container"> 
            <div className='gif-mask-portrait'><img src={"/arts/DV.gif"} alt="DV" /></div>
            <h3>Cosplayer</h3>
        </div>
        <div className="gif-container">
            <div className='gif-mask'><img src={"/arts/Hannibal.gif"} alt="DV" /></div>
            <h3>Hannibal</h3><a href="https://www.tvtime.com/fr/show/259063" className="links">Drawn from Hannibal Stills</a>
        </div>

        <div className="gif-container"> 
            <div className='gif-mask'><img src={"/arts/cat.gif"} alt="cat" /></div>
            <h3>Cat</h3>
        </div>
        <div className="gif-container"> 
            <div className='gif-mask'><img src={"/arts/Edinburgh.gif"} alt="Edinburgh" /></div>
            <h3>Edinburgh</h3>
        </div>
      </div>
    </div>
  );
}
