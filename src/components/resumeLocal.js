import React from 'react';
import ResumeSection from './resumeSection';
import { resumeData } from './resumeData.js';
import pdf from '../Resume.pdf';
import './resume.css';

const Resume = () => {
    
    let displayedTitle = '';
    return (
        <div className="resume">
          <h1>Welcome to My Resume</h1>
          <a className="download" href={pdf} style={{ float: 'right' }}>Download</a>
          { resumeData && resumeData.map((section, sectionIndex) => {

            const [title, activity, location, date, ...items] = section;
            const isNewTitle = title !== displayedTitle;
            displayedTitle = title;

            return (
              <div>
                <div key={sectionIndex}>
                  {isNewTitle && <h2>{title}</h2>}
                  <ResumeSection
                    activity={activity}
                    location={location}
                    date={date}
                    items={items.filter(item => item !== null)} // Filter out null items
                  />
                </div>
              </div>
            );

            })}
        </div>
    );
}

export default Resume;
