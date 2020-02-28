const activeEnv = process.env.ACTIVE_ENV | "development";
require("dotenv").config({
  path: `.env.${activeEnv}`
});
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.tsv-zorneding.de",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const title = `TSV Zorneding 1920 e.V.`;
module.exports = {
  siteMetadata: {
    title,
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
      options: { NETLIFY_ENV, title }
    }
  ]
};
