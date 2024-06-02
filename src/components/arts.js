import React, { useState, useEffect } from 'react';
import './arts.css';

export default function Arts() {
  return (
    <div>
      <h1>Gallery</h1>
      <br/>
      <h3>I Draw for Fun :)</h3>
      <div className="art-container">
        <div className="video-container">
            <video controls className='video-mask'>
                <source src={"/Videos/guard.mp4"} type="video/mp4"/>
            </video>
            <h3>Guard</h3>
        </div>
        <div className="video-container">
            <video controls className='video-mask'>
                <source src={"/Videos/Hannibal.mp4"} type="video/mp4"/>
            </video>
            <h3>Hannibal</h3><a href="https://www.tvtime.com/fr/show/259063" className="links">Drawn from Hannibal Stills</a>
        </div>
        <div className="video-container"> 
            <video controls className='video-mask'>
                <source src={"/Videos/DV.mp4"} type="video/mp4"/>
            </video>
            <h3>Cosplayer</h3>
        </div>
        <div className="video-container"> 
            <video controls className='video-mask'>
                <source src={"/Videos/cat.mp4"} type="video/mp4"/>
            </video>
            <h3>Cat</h3>
        </div>
        <div className="video-container"> 
            <video controls className='video-mask'>
                <source src={"/Videos/life.mp4"} type="video/mp4"/>
            </video>
            <h3>Life</h3>
        </div>
        <div className="video-container"> 
            <video controls className='video-mask'>
                <source src={"/Videos/light.mp4"} type="video/mp4"/>
            </video>
            <h3>light</h3>
        </div>
        <div className="video-container"> 
            <video controls className='video-mask'>
                <source src={"/Videos/Edinburgh.mp4"} type="video/mp4"/>
            </video>
            <h3>Edinburgh</h3>
        </div>
        <div className="video-container"> 
            <video controls className='video-mask'>
                <source src={"/Videos/fall.mp4"} type="video/mp4"/>
            </video>
            <h3>Fall</h3>
        </div>
        {/* <VideoPlayer src="/Videos/2023-09-18.mp4" /> 
        <br/>
        <VideoPlayer src="/Videos/2023-10-10.mp4" /> */}
      </div>
    </div>
  );
}

function VideoPlayer({ src }) {
  const videoRef = React.useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div className="video-player">
      <video
        width="200"
        ref={videoRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
