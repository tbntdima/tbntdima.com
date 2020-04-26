module.exports = {
  siteMetadata: {
    title: `Dima An`,
    description: `Dima An - Front end web developer`,
    author: `@tbnt_dima`,
    socials: {
      twitter: "https://twitter.com/tbnt_dima",
      github: "https://github.com/tbntdima",
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:400,600,700`, `Roboto`],
        display: "swap",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dima An`,
        short_name: `Dima An`,
        start_url: `/`,
        background_color: `#0057FF`,
        theme_color: `#0057FF`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-theme-ui`,
  ],
}
