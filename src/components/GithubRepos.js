import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const GithubRepos = () => {
  const { github: { viewer: { repositories: { nodes } } } } = useStaticQuery(graphql`
    query {
      github {
        viewer {
          repositories(
            first: 100
            ownerAffiliations: OWNER
            privacy: PUBLIC
            isFork: false
            isLocked: false
            orderBy: { field: UPDATED_AT, direction: DESC }
          ) {
            nodes {
              name
              description
              url
            }
          }
        }
      }
    }
  `);

  const excludedRepos = process.env.GATSBY_EXCLUDED_REPOS ? process.env.GATSBY_EXCLUDED_REPOS.split(',') : [];
  const repos = nodes.filter(repo => !excludedRepos.includes(repo.name));

  // CSS classes
  const containerClass = "container mx-auto my-12";
  const titleClass = "text-4xl font-bold";
  const repoTitleClass = "text-2xl font-bold";
  const repoContainerClass = "mt-6";

  return (
    <section id="github-repos" className={containerClass}>
      <h2 className={titleClass}>Repositorios de GitHub</h2>
      {repos.map((repo, index) => (
        <div key={index} className={repoContainerClass}>
          <h3 className={repoTitleClass}>
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </h3>
          <p>{repo.description}</p>
        </div>
      ))}
    </section>
  );
};

export default GithubRepos;



