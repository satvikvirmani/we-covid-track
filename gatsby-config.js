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
      'gatsby-plugin-postcss',
      `gatsby-plugin-sass`,
      {
        resolve: `gatsby-plugin-minify`,
        options: {
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          processConditionalComments: true
        }
      },
      {
        resolve: `gatsby-plugin-purgecss`,
        options: {
          printRejected: true, // Print removed selectors and processed file names
          // develop: true, // Enable while using `gatsby develop`
          tailwind: true,
          // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
          // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
          purgeCSSOptions: {
            // https://purgecss.com/configuration.html#options
            // safelist: ['safelist'], // Don't remove this selector
          },
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Covid Track`,
          short_name: `CovidTrack`,
          start_url: `/`,
          background_color: `#161625`,
          theme_color: `#161625`,
          // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
          // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
          display: `standalone`,
          icon: `src/images/icon.png`, // This path is relative to the root of the site.
        }
      },
      {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [
            "G-PF89N10G4S", // Google Analytics / GA // Google Ads / Adwords / AW// Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
          ],
          // This object gets passed directly to the gtag config command
          // This config will be shared across all trackingIds
          // This object is used for configuration specific to this plugin
          pluginConfig: {
            // Puts tracking script in the head instead of the body
            head: false,
            // Setting this parameter is also optional
            respectDNT: true,
            // Avoids sending pageview hits from custom paths
            exclude: ["/preview/**", "/do-not-track/me/too/"],
          },
        },
      }
    ],
  }
  