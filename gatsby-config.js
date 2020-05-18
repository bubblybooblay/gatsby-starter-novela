module.exports = {
  siteMetadata: {
    title: `Bean Musing`,
    name: `Bean Musing`,
    siteUrl: `https://www.beanmusing.com`,
    description: `This is where I blog about personal development, book reviews, game reviews and my occassional dabble in technology.`,
    hero: {
      heading: `Musing Over Tea`,
      maxWidth: 800,
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