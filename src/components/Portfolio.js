import React from 'react';
import Skill from './Skill';

const Portfolio = () => {
  const skills = [
    { skill: 'HTML', percentage: 90 },
    { skill: 'CSS', percentage: 80 },
    { skill: 'JavaScript', percentage: 75 },
    // Add more skills and their respective percentages
  ];

  return (
    <div>
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <Skill key={index} skill={skill.skill} percentage={skill.percentage} />
      ))}
    </div>
  );
};

export default Portfolio;
