import React, { useState, useEffect } from 'react';
import './about.css';
// import ReactImg from "./../img/about/React.png"
import theoryImg from "./../img/about/theory.webp"
import PrivacySandboxImg from "./../img/about/PrivacySandbox.webp"
import theKuiperFrontier from "./../img/about/theKuiperFrontier.webp"
import travelData from "./../img/about/travelData.webp"
import WineQualityPrediction from "./../img/about/wineQualityPrediction.webp"
import A11yVate from "./../img/about/A11yVate.webp"
import icon from "./../img/about/favicon.ico"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  const projects = [
    {
      "name": "leoreoreo.github.io",
      "description": "Frontend of this website",
      "pic": icon,
      "url": "https://github.com/Leoreoreo/leoreoreo.github.io",
      "techStack": "React"
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
      "description": "Module for Ad Auditing",
      "pic": PrivacySandboxImg,
      "url": "https://github.com/Leoreoreo/relatedPosts",
      "techStack": "React, Flask, Senmatic-Search, word2vec, D3"
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
      "techStack": "Processing, OOP (JAVA)"
    },
    {
      "name": "WineQualityPrediction",
      "description": "Wine quality prediction",
      "pic": WineQualityPrediction,
      "url": "https://github.com/Leoreoreo/WineQualityPrediction",
      "techStack": "Sklearn, Pandas"
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
    "SQL", "MongoDB", "RESTful API", "Docker", "Kubernetes", "SQLite3", 
    "Java", "Hadoop HDFS", "Apache Flink", "Apache Kafka", 
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
      <h1>About Me</h1>
      <h2>My Projects</h2>
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
                <p>{project.description}</p>
                {project.pic != null && <img src={project.pic} alt="" className="img-container" height={100}/>}
                <p>{project.techStack}</p> 
              </div>
          )
        })}
      </div>
      <h2>I have worked with</h2>
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
      <br/>
      <h3>... And I'm learning!</h3>
      <br/><br/>
      <h2>More</h2> 
      <div align='center'>My name is Leyang Li. I am a junior pursuing a Bachelor of Science in Computer Science at the University of Notre Dame. I am also a Frank Reilly Scholar and have earned Dean’s List recognition with a cumulative GPA of 3.958. Alongside my primary major, I am studying Applied and Computational Mathematics and Statistics as a supplementary field.</div><br/>
      <div align='center'>In terms of working experience, I have interned as a Software Engineer at China Construction Bank Fintech, where I worked on maintaining and optimizing big data systems based on Kafka, Flink, Phoenix, Elasticsearch, and TiDB. Additionally, I interned as a Machine Learning Engineer at Everbright Securities Asset Management, focusing on improving the investment model's performance.</div><br/>
      <div align='center'>In the academia, I serve as a Full-Stack Developer and Research Assistant at the SaNDwich Lab in the field of Human-Computer Interactions. I developed interactive systems on projects like Ad Auditing and Privacy Sandbox for generating internet user personas and exploring privacy data usage. In the projects, I applied web-development technologies such as NodeJS, Flask, and sanic, as well as machine learning models such as LLM, word2vec, and sentence transformer.</div><br/>
      <div align='center'>Moreover, I have participated in various competitions and projects, including game development with the Notre Dame Video Game Development Club, software development in Hesburgh Libraries Hackathon, and data analysis for CourseKata during the American Statistical Association DataFest.</div><br/>
      <div align='center'>My interests lie in Software Development and Engineering, Machine Learning, Data Science, Human-Computer Interaction, and Big Data. I am enthusiastic in working in an industry where I can continuously solve emerging real-world problems with cutting-edge technologies.</div><br/>
    </div>
  );
};
