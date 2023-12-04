import React from 'react';
import './about.css';

export default function About() {
  const projects = [
    {
      "id": "R_kgDOK0lciA",
      "name": "Backend_LeyangLi",
      "description": "The Backend of this website.",
      "pic": null,
      "url": "https://github.com/Leoreoreo/Backend_LeyangLi",
      "techStack": "Flask.py, SQLite3"
    },
    {
      "id": "R_kgDOK0rHnA",
      "name": "leoreoreo.github.io",
      "description": "The Frontend of this website.",
      "pic": null,
      "url": "https://github.com/Leoreoreo/leoreoreo.github.io",
      "techStack": "React.js, HTML&CSS"
    },
    {
      "id": "R_kgDOKyY1cg",
      "name": "React_Practice",
      "description": "My repository of learning React.",
      "pic": null,
      "url": "https://github.com/Leoreoreo/react_practice",
      "techStack": "React.js, HTML&CSS"
    },
    {
      "id": "R_kgDOJVNUqA",
      "name": "Travel_Data_Viz",
      "description": "A data visualization website for users to gain travel insights.",
      "pic": null,
      "url": "https://github.com/Leoreoreo/EGcomp-Final-Project-Web",
      "techStack": "Pandas.py, HTML&CSS"
    },
    {
      "id": "R_kgDOKzpaHw",
      "name": "the_Kuiper_Frontier",
      "description": "A 2D plane-shooting game developed with Processing.",
      "pic": null,
      "url": "https://github.com/Leoreoreo/theKuiperFrontier",
      "techStack": "Processing, OOP (JAVA)"
    },
    {
      "id": "R_kgDOK1A_qg",
      "name": "Wine_Quality_Prediction",
      "description": "ML project predicting wine quality.",
      "pic": null,
      "url": "https://github.com/Leoreoreo/WineQualityPrediction",
      "techStack": "Sklearn.py (LogisticRegression), Pandas.py"
    }
  ]
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
                  {project.pic != null && <img src={project.pic} alt="" className="img" />}
                  <p>{project.techStack}</p> 
              </div>
          )
        })}
      </div>
    </div>
  );
};
