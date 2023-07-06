import React from 'react';

const Skill= ({ skill, percentage }) => {
  return (
    <div className=" items-center ">
      <div className=" mr-4 text-white">{skill}</div>
      <div className="bg-gray-200 h-3  rounded">
        <div className="bg-blue-500 h-full" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="ml-4">{percentage}%</div>
    </div>
  );
};

export default Skill;
