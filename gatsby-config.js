module.exports = {
  siteMetadata: {
    title: "Covid Track",
    description:
      "A simple Covid 19 informative website",
    url: "https://covidtrack-netlify.com", // No trailing slash allowed!
    image: "src/images/about.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@SatvikVirmani",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Covid Track`,
        short_name: `CovidTrack`,
        start_url: `/`,
        background_color: `#171726`,
        theme_color: `#171726`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      }
    }
  ],
};
