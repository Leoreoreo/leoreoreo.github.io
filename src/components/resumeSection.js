import React from 'react';

const ResumeSection = ({ activity, location, date, items }) => {
  return (
    <div>
      <h3>{activity}</h3>
      <div className="timeAndLocation">{location} | {date}</div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeSection;
