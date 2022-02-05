module.exports = {
  siteMetadata: {
    title: `Smit M.`,
    description: `Full-stack frontend developer with over 5 years of industry experience`,
    image: `src/images/social.png`,
    siteUrl: `https://devsmit.in/`,
    author: `@devsmitin`,
    twitterUsername: `@devsmitin`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Smit's personal homepage`,
        short_name: `Smit's homepage`,
        start_url: `/`,
        background_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-source-gravatar`,
    // {
    //   resolve: `gatsby-source-gravatar`,
    //   options: {
    //     emails: [
    //       `first@example.com`,
    //     ],
    //     query: `?size=200&m=dp`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
