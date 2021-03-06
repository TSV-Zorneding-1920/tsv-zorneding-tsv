const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

const fs = require("fs");
let settings = JSON.parse(fs.readFileSync("src/data/settings.json"));

module.exports = {
  siteMetadata: {
    ...settings,
    siteUrl: process.env.GATSBY_SITE_URL,
  },
  plugins: [
    {
      resolve: `gatsby-theme-tsv-zorneding`,
      options: {
        ENV: activeEnv,
        title: settings.title,
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        www: true,
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://tischtennis.tsv-zorneding.de/rss.xml`,
        name: `Tischtennis`,
      },
    },
  ],
};
