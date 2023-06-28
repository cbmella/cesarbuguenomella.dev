/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `cbuguenomella.dev`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    // Aquí se agrega el plugin gatsby-source-graphql
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },    
  ],
};
