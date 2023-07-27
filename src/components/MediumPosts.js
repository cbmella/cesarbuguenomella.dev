import React, { useState, useEffect } from 'react';
import MediumPost from './MediumPost';

const classes = {
  container: "container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6",
  centeredText: "text-center",
  title: "text-3xl tracking-tight leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10",
  postsGrid: "mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none",
};

const MediumPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/.netlify/functions/medium')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const items = Array.from(xmlDoc.getElementsByTagName("item"));
        const jsonPosts = items.map(item => {
          return {
            title: item.getElementsByTagName("title")[0].textContent,
            link: item.getElementsByTagName("link")[0].textContent,
            pubDate: item.getElementsByTagName("pubDate")[0].textContent,
            // Agrega aquí cualquier otro campo que necesites
          };
        });
        setPosts(jsonPosts);
      });
  }, []);

  return (
    <div id='medium-posts' className="bg-white py-4">
      <div className={classes.container}>
        <div className={classes.centeredText}>
          <h2 className={classes.title}>Posts</h2>
        </div>
        <div className={classes.postsGrid}>
          {posts.map((post, index) => (
            <MediumPost key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediumPosts;

