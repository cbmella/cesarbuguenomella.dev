import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const GithubRepos = () => {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          repositories(first: 10) {
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

  const repos = data.github.viewer.repositories.nodes;

  return (
    <section id="github-repos" className="container mx-auto my-12">
      <h2 className="text-4xl font-bold">Repositorios de GitHub</h2>
      {repos.map((repo, index) => (
        <div key={index} className="mt-6">
          <h3 className="text-4xl font-bold">
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
