import React from 'react';
import { skills } from '@data/skillsData';
import SkillItem from './SkillItem';

const classes = {
  container: "container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6",
  centeredText: "text-center",
  title: "text-3xl tracking-tight leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10",
  skillsGrid: "mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none",
};

const Skills = () => {
  const sortedSkills = [...skills].sort((a, b) => b.items.length - a.items.length);

  return (
    <div id='skills' className="bg-white py-4">
      <div className={classes.container}>
        <div className={classes.centeredText}>
          <h2 className={classes.title}>Skills</h2>
        </div>
        <div className={classes.skillsGrid}>
          {sortedSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
