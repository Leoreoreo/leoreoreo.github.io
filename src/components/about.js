import React from 'react';
import './about.css';
import ReactImg from "./../img/React.png"
import flaskImg from "./../img/flask.svg"
import PrivacySandboxImg from "./../img/PrivacySandbox.webp"
import theKuiperFrontier from "./../img/theKuiperFrontier.webp"
import travelData from "./../img/travelData.webp"
import WineQualityPrediction from "./../img/wineQualityPrediction.webp"
// import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
// import { setContext } from '@apollo/client/link/context';

export default function About() {
  const projects = [
    {
      "id": "1",
      "name": "Backend_LeyangLi",
      "description": "Backend of this website.",
      "pic": flaskImg,
      "url": "https://github.com/Leoreoreo/Backend_LeyangLi",
      "techStack": "Flask.py, SQLite3"
    },
    {
      "id": "2",
      "name": "leoreoreo.github.io",
      "description": "Frontend of this website.",
      "pic": ReactImg,
      "url": "https://github.com/Leoreoreo/leoreoreo.github.io",
      "techStack": "React.js, HTML&CSS"
    },
    {
      "id": "3",
      "name": "relatedPosts",
      "description": "Module for Ad Auditing",
      "pic": PrivacySandboxImg,
      "url": "https://github.com/Leoreoreo/relatedPosts",
      "techStack": "React.js, HTML&CSS, Flask.py, Senmatic-Search"
    },
    {
      "id": "4",
      "name": "Travel_Data_Viz",
      "description": "Travel insights data visualization.",
      "pic": travelData,
      "url": "https://github.com/Leoreoreo/EGcomp-Final-Project-Web",
      "techStack": "Pandas.py, HTML&CSS"
    },
    {
      "id": "5",
      "name": "the_Kuiper_Frontier",
      "description": "2D plane-shooting game.",
      "pic": theKuiperFrontier,
      "url": "https://github.com/Leoreoreo/theKuiperFrontier",
      "techStack": "Processing, OOP (JAVA)"
    },
    {
      "id": "6",
      "name": "Wine_Quality_Prediction",
      "description": "Wine quality prediction.",
      "pic": WineQualityPrediction,
      "url": "https://github.com/Leoreoreo/WineQualityPrediction",
      "techStack": "Sklearn.py (LogisticRegression), Pandas.py"
    }
  ];
  const teckStacks = [
    "Python", "Flask", "Sanic", "PyTorch", "Sklearn", "Tensorflow", "Java", "JavaScript", "React.js", "Next.js", "HTML&CSS", "Tailwind CSS", "SQLite3", "C", "Matlab", "Procreate", "Processing", "Unity C#", "SolidWorks", "Fusion360", "Excel"
  ];
  return (
    <div className="about">
      <h1>About Me</h1>
      <h3>I'm currently a sophomore at the University of Notre Dame, majoring in CS with an ACMS Suppl.</h3>
      <h2>My Projects</h2>
      <div className="project-container">
        {projects.map( (project) => {
          return (
              <div key = {project.id} className="project">
                  <h3><a href={project.url} className="links">{project.name}</a></h3>
                  <p>{project.description}</p>
                  {project.pic != null && <img src={project.pic} alt="" className="img-container" />}
                  <p>{project.techStack}</p> 
              </div>
          )
        })}
      </div>
      <h2>I have working experience with:</h2>
      <br/>
      <div className="tech-stack-container">
        {teckStacks.map( (teckStack) => {
          return (
              <div className="tech-stack">
                  <p>{teckStack}</p>
              </div>
          )
        })}
      </div>
      <br></br>
      <h3>...And I'm learning more!</h3>
    </div>
  );
};
