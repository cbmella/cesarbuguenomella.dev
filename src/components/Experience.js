import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { experiences } from '@data/experienceData';

const classes = {
  container: "container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6",
  title: "text-3xl font-semibold text-center mb-6",
  listItem: "transition-colors duration-200 ease-in-out hover:bg-gray-100 p-4 rounded-md",
  timelineLine: "absolute top-4 left-4 -ml-px h-full w-0.5 bg-royal-blue",
  flexContainer: "relative flex space-x-3",
  iconContainer: "h-8 w-8 rounded-full bg-white flex items-center justify-center ring-8 ring-white shadow-lg",
  icon: "h-5 w-5 text-royal-blue",
  textContainer: "min-w-0 flex-1 pt-1.5 flex justify-between space-x-4",
  experienceTitle: "text-sm text-gray-500",
  experienceDescription: "mt-0.5 text-lg font-semibold text-gray-900 text-justify",
};

const ExperienceItem = ({ experience, isLast }) => (
  <li className={classes.listItem}>
    <div className="relative pb-8">
      {!isLast && <span className={classes.timelineLine} aria-hidden="true" />}
      <div className={classes.flexContainer}>
        <div>
          <span className={classes.iconContainer}>
            <FaCalendar className={classes.icon} aria-hidden="true" />
          </span>
        </div>
        <div className={classes.textContainer}>
          <div>
            <p className={classes.experienceTitle}>{experience.title}</p>
            <p className={classes.experienceDescription}>{experience.description}</p>
          </div>
        </div>
      </div>
    </div>
  </li>
);

const Experience = () => {
  return (
    <div id='exp' className={classes.container}>
      <h2 className={classes.title}>Experiencia Profesional</h2>
      <div className="flow-root">
        <ul className="space-y-4">
          {experiences.map((experience, idx) => (
            <ExperienceItem key={idx} experience={experience} isLast={idx === experiences.length - 1} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;







