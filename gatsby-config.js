module.exports = {
  siteMetadata: {
    title: `Bean Musing`,
    name: `Bean Musing`,
    siteUrl: `https://www.beanmusing.com`,
    description: `This is where I blog about personal finance, book reviews, game reviews and my occassional dabble in technology.`,
    hero: {
      heading: `Count The Beans`,
      maxWidth: 500,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/moneymoniess`,
      },
      {
        name: `github`,
        url: `https://github.com/bubblybooblay`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/moneymoniess`,
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
        mailchimp: true,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "ANALYTICS_ID",
        anonymize: true,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://app.us18.list-manage.com/subscribe/post?u=15859562dbe26a22904ab25c1&amp;id=22022a4094",
      },
    },
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: "beanmusing",
      },
    },
  ],
};