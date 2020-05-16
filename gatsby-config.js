module.exports = {
  siteMetadata: {
    title: `Douchi-mon`,
    name: `douchimon`,
    siteUrl: `https://douchimon.io`,
    description: `A blog on personal development, book reviews, travels, game reviews and technology.`,
    hero: {
      heading: `Douchimon, The Black Bean Monster`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/cindysimxy`,
      },
      {
        name: `github`,
        url: `https://github.com/bubblybooblay`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/xiindiie.s`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};