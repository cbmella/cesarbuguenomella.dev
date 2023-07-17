import React from 'react';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';

const classes = {
  repoItem: "w-full p-4",
  repoCard: "bg-white rounded-xl shadow-md p-6 h-full transition-all duration-500 ease-in-out transform hover:scale-105",
  repoTitle: "text-xl font-bold",
  repoLink: "text-blue-500 hover:text-blue-800",
  repoDesc: "text-gray-500",
  repoStats: "mt-2",
};

const RepoItem = ({ repo }) => (
  <div className={classes.repoItem}>
    <div className={classes.repoCard}>
      <h3 className={classes.repoTitle}>
        <a href={repo.url} target="_blank" rel="noopener noreferrer" className={classes.repoLink}>
          <FaGithub className="inline" /> {repo.name}
        </a>
      </h3>
      <p className={classes.repoDesc}>{repo.description}</p>
      <p className={classes.repoStats}>
        <FaStar className="inline text-yellow-400" /> {repo.stargazerCount}
        <FaCodeBranch className="inline ml-4 text-green-400" /> {repo.forkCount}
      </p>
    </div>
  </div>
);

export default RepoItem;
