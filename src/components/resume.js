import React, { useState, useEffect } from 'react';
import ResumeSection from './resumeSection';
import useFetch from "./useFetch";

const Resume = (props) => {
    const { data: resumeData, isPending, error } = useFetch(`${props.url}/about`);
    let displayedTitle = '';

    return (
        <div className="about">
          <h1>Welcome to My Resume</h1>
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
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
