import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import MediumPost from './MediumPost';

const classes = {
  container: "container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6",
  centeredText: "text-center",
  title: "text-3xl tracking-tight leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10",
  postsGrid: "mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none",
};

const MediumPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMediumPost(sort: { createdAt: DESC }) {
        edges {
          node {
            id
            uniqueSlug
            title
            createdAt(formatString: "MMM YYYY")
            virtuals {
              subtitle
              previewImage {
                imageId
              }
            }
            author {
              username
            }
          }
        }
      }
    }
  `);
  const { allMediumPost: { edges } } = data;

  return (
    <div id='medium-posts' className="bg-white py-4">
      <div className={classes.container}>
        <div className={classes.centeredText}>
          <h2 className={classes.title}>Posts</h2>
        </div>
        <div className={classes.postsGrid}>
          {edges.map(({ node: post }, index) => (
            <MediumPost key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediumPosts;
