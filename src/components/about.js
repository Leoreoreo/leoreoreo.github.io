import React from 'react';


export default function About() {
  const projects = [
    {
      "id": "R_kgDOK0lciA",
      "name": "Backend_LeyangLi",
      "description": "The Backend of this website.",
      "url": "https://github.com/Leoreoreo/Backend_LeyangLi"
    },
    {
      "id": "R_kgDOK0rHnA",
      "name": "leoreoreo.github.io",
      "description": "The Frontend of this website.",
      "url": "https://github.com/Leoreoreo/leoreoreo.github.io"
    },
    {
      "id": "R_kgDOKyY1cg",
      "name": "react_practice",
      "description": "My repository of learning React.",
      "url": "https://github.com/Leoreoreo/react_practice"
    },
    {
      "id": "R_kgDOJVNUqA",
      "name": "EGcomp-Final-Project-Web",
      "description": "A data visualization website for users to gain travel insights.",
      "url": "https://github.com/Leoreoreo/EGcomp-Final-Project-Web"
    },
    {
      "id": "R_kgDOKzpaHw",
      "name": "theKuiperFrontier",
      "description": "A 2D plane-shooting game developed with Processing.",
      "url": "https://github.com/Leoreoreo/theKuiperFrontier"
    },
    {
      "id": "R_kgDOK1A_qg",
      "name": "WineQualityPrediction",
      "description": "ML project predicting wine quality.",
      "url": "https://github.com/Leoreoreo/WineQualityPrediction"
    }
  ]
  return (
    <div className="about">
      <h1>About Me</h1>
      <h3>I'm currently a sophomore at the University of Notre Dame, majoring in CS with an ACMS Suppl.</h3>
      <h2>My Projects</h2>
      {projects.map( (project) => {
        return (
            <div key = {project.id}>
                <h3><a href={project.url} className="links">{project.name}</a></h3>
                <p>{project.description}</p>
            </div>
        )
        })}
    </div>
  );
};
