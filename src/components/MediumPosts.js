import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const MediumPosts = () => {
  const {
    allMediumPost: { edges },
  } = useStaticQuery(graphql`
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

  // CSS classes
  const containerClass = "container mx-auto my-12";
  const titleClass = "text-4xl font-bold";
  const postTitleClass = "text-2xl font-bold";
  const postContainerClass = "mt-6";

  return (
    <section id="medium-posts" className={containerClass}>
      <h2 className={titleClass}>Publicaciones de Medium</h2>
      {edges.map(({ node: post }, index) => {
        const mediumLink = `https://medium.com/${post.author.username}/${post.uniqueSlug}`;
        const imageUrl = `https://cdn-images-1.medium.com/max/350/${post.virtuals.previewImage.imageId}`;

        return (
          <div key={index} className={postContainerClass}>
            <h3 className={postTitleClass}>
              <a href={mediumLink} target="_blank" rel="noopener noreferrer">
                {post.title}
              </a>
            </h3>
            <p>{post.virtuals.subtitle}</p>
            <img src={imageUrl} alt={post.title} />
          </div>
        );
      })}
    </section>
  );
};

export default MediumPosts;


