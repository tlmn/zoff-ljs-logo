module.exports = {
  siteMetadata: {
    name: "Logo Generator – linksjugend ['solid]",
    title: "Logo Generator – linksjugend ['solid]",
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `linksjugend ['solid] – Logo Generator`,
        short_name: `linksjugend ['solid] – Logo Generator`,
        start_url: `/`,
        background_color: `#00ffc2`,
        theme_color: `#00ffc2`,
        display: `standalone`,
        icon: `static/assets/images/icon.png`,
      },
    },
  ],
};
