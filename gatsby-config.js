const activeEnv = process.env.ACTIVE_ENV | "development";
require("dotenv").config({
  path: `.env.${activeEnv}`
});
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://relaxed-pike-9236a1.netlify.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: `TSV Zorneding 1920 e.V.`,
    section: `TSV Zorneding 1920 e.V.`,
    description: ``,
    author: `TSV Zorneding 1920 e.V.`,
    social: {
      facebook: ``,
      instagram: ``,
      twitter: ``,
      youtube: ``
    },
    siteUrl
  },
  plugins: [
    {
      resolve: `gatsby-theme-tsv-zorneding`,
      options: { NETLIFY_ENV: NETLIFY_ENV }
    }
  ]
};
