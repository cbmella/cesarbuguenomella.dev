require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: process.env.GATSBY_PAGE_TITLE || 'yourwebtitle.dev',
    siteUrl: process.env.GATSBY_SITE_URL || `https://www.yourdomain.tld`,
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
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: process.env.MEDIUM_USERNAME || '', 
      },
    },  
  ],
};
