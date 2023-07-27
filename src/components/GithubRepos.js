import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import RepoItem from './RepoItem';

const classes = {
  container: "container mx-auto max-w-7xl px-4 sm:px-6 mt-6 py-10",
  centeredText: "text-center",
  title: "text-3xl tracking-tight leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10",
};

const GithubRepos = () => {
  const data = useStaticQuery(graphql`
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
              stargazerCount
              forkCount
            }
          }
        }
      }
    }
  `);
  const { github: { viewer: { repositories: { nodes } } } } = data;

  const excludedRepos = process.env.GATSBY_EXCLUDED_REPOS ? process.env.GATSBY_EXCLUDED_REPOS.split(',') : [];
  const repos = nodes.filter(repo => !excludedRepos.includes(repo.name));

  return (
    <section id="github-repos" className={classes.container}>
      <div className={classes.centeredText}>
        <h2 className={classes.title}>Repos</h2>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, index) => (
          <RepoItem key={index} repo={repo} />
        ))}
      </div>
    </section>
  );
};

export default GithubRepos;
