import React, { useState, useEffect } from 'react';
import './about.css';
import p2pHashtableImg from "./../img/about/p2pHashTable.jpg"
import TimIMG from "./../img/about/TIM.jpg"
import AROMA from "./../img/about/AROMA.png"
import theoryImg from "./../img/about/theory.png"
import PrivacySandboxImg from "./../img/about/PrivacySandbox.png"
import theKuiperFrontier from "./../img/about/theKuiperFrontier.png"
import travelData from "./../img/about/travelData.png"
import WineQualityPrediction from "./../img/about/wineQualityPrediction.png"
import A11yVate from "./../img/about/A11yVate.png"
import mindEcho from "./../img/about/mindEcho.png"
import icon from "./../img/about/favicon.ico"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  const projects = [
    {
      "name": "MindEcho",
      "description": "Meeting assistant for hearing and speaking disabled people",
      "pic": mindEcho,
      "url": "https://github.com/Leoreoreo/Meeting_Assistant",
      "techStack": "Vite, React, OpenAI API, ReactFlow, React-Speech-Recognition"
    },
    {
      "name": "AROMA",
      "description": "Cooking assistant for visually impaired people",
      "pic": AROMA,
      "url": null,
      "techStack": "Next, React, TypeScript, OpenAI Realtime API, Gemini Multi-Modal API"
    },
    {
      "name": "P2P Hashtable",
      "description": "Scalabe and persistent distributed hashtable",
      "pic": p2pHashtableImg,
      "url": "https://github.com/Leoreoreo/p2pHashtable",
      "techStack": "Chord Protocol, RPC, log & checkpoint, chain replication"
    },
    {
      "name": "TIM",
      "description": "Trip scheduling and planning assistant",
      "pic": TimIMG,
      "url": "https://github.com/Leoreoreo/TravelItineraryManager",
      "techStack": "PostgreSQL, React, Flask, Google Maps API"
    },
    {
      "name": "leoreoreo.github.io",
      "description": "Frontend of this website",
      "pic": icon,
      "url": "https://github.com/Leoreoreo/leoreoreo.github.io",
      "techStack": "React, CSS, HTML"
    },
    {
      "name": "myBlog",
      "description": "My personal tech blog",
      "pic": icon,
      "url": "https://github.com/Leoreoreo/myBlog",
      "techStack": "Markdown, Python, JavaScript"
    },
    {
      "name": "A11yVate",
      "description": "Crowdsourcing Info Map",
      "pic": A11yVate,
      "url": null,
      "techStack": "React, Flask, OpenAI API, Google Maps API"
    },
    {
      "name": "relatedPosts",
      "description": "Module for Privacy Sandbox",
      "pic": PrivacySandboxImg,
      "url": "https://github.com/Leoreoreo/relatedPosts",
      "techStack": "React, Flask, Senmatic-Search, word2vec, sentence-transformer, D3"
    },
    {
      "name": "SAT_Solver",
      "description": "NFA, regex, sed, TM, SAT",
      "pic": theoryImg,
      "url": "https://github.com/Leoreoreo/SAT_Solver",
      "techStack": "Theory of Computing, Python"
    },
    {
      "name": "theKuiperFrontier",
      "description": "2D plane-shooting game",
      "pic": theKuiperFrontier,
      "url": "https://github.com/Leoreoreo/theKuiperFrontier",
      "techStack": "OOP (JAVA)"
    },
    {
      "name": "WineQualityPrediction",
      "description": "Wine quality prediction",
      "pic": WineQualityPrediction,
      "url": "https://github.com/Leoreoreo/WineQualityPrediction",
      "techStack": "Sklearn, MatPlotLib, Pandas"
    },
    {
      "name": "Travel_Data_Viz",
      "description": "Travel insights data",
      "pic": travelData,
      "url": "https://github.com/Leoreoreo/EGcomp-Final-Project-Web",
      "techStack": "Pandas, HTML&CSS"
    },
  ];
  const teckStacks = [
    "Python", "Flask", "Sanic", "PyTorch", "Sklearn", "Genism", "Word2Vec", "sentence-transformer", "Tensorflow", "Pandas", "Matplotlib",
    "JavaScript","TypeScript", "React", "Next", "HTML&CSS", "Vite", "Tailwind CSS", "scss", "D3",
    "SQL", "MongoDB", "RESTful API", "Docker", "Kubernetes", "SQLite3", "PostgreSQL",
    "Java", "Hadoop HDFS", "Apache Flink", "Apache Kafka", "Spring Boot", "Elasticsearch", "TiDB", "Phoenix",
    "C", "Bash", "Markdown", "Unix",
    "AWS EC2", "VMware", "Git", "Github"," Figma", "VS Code", "Jupyter", "IntelliJ",
    "OpenAI API", "GoogleMaps API", 
    "Matlab", "Procreate", "Processing", "Unity C#", "SolidWorks", "Fusion360"
  ];
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
      setFadeIn(true);
  }, []);
  return (
    <div className="about">
      <h1>My Projects</h1>
      <br/>
      <div className="project-container">
        {projects.map( (project) => {
          return (
              <div key = {project.name} className={`project ${fadeIn ? 'fade-in' : ''}`}>
                {project.url != null ? (
                  <div>
                    <h3><a href={project.url} className="links" ><FontAwesomeIcon icon={faGithub} size='l'/> {project.name}</a></h3>
                  </div>
                ) : (
                  <div>
                    <h3>{project.name}</h3>
                  </div>
                )}
                <br/> 
                <div className="project-description-container">     
                  {project.description}
                </div>
                {project.pic != null && <img src={project.pic} alt="" className="img-container"/>}
                <div className="project-tech-container">
                  {project.techStack}
                </div>
              </div>
          )
        })}
      </div>
      {/* <h2>I have worked with</h2>
      <br/>
      <div className="tech-stack-container">
        {teckStacks.map( (teckStack) => {
          return (
              <div key = {teckStack} className="tech-stack">
                  <p>{teckStack}</p>
              </div>
          )
        })}
      </div>
      <br/> */}
      {/* <h3>... And I'm learning!</h3> */}
    </div>
  );
};
