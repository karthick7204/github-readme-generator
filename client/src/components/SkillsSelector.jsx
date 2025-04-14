import React, { useState } from 'react';
import { skills } from './skillsData';

const SkillsSelector = ({ onChange }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleSkill = (skill) => {
    const updated = selectedSkills.includes(skill)
      ? selectedSkills.filter((s) => s !== skill)
      : [...selectedSkills, skill];

    setSelectedSkills(updated);
    onChange(updated); // Send selected to parent
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-6 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`cursor-pointer border-2 rounded-xl p-2 flex flex-col items-center transition ${
              selectedSkills.includes(skill.name)
                ? 'border-purple-600'
                : 'border-gray-300'
            }`}
            onClick={() => toggleSkill(skill.name)}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 mb-2"
            />
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSelector;
    