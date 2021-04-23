const env = process.env.APP_ENV || "development";
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 4000;
const cookieName = "app";

const TumblrAPI = {
  consumerKey: process.env.REACT_APP_CONSUMER_KEY || secrets.REACT_APP_CONSUMER_KEY,
  consumerSecret: process.env.REACT_APP_CONSUMER_SECRET || secrets.REACT_APP_CONSUMER_SECRET,
  oauthToken: process.env.REACT_APP_OAUTH_TOKEN || secrets.REACT_APP_OAUTH_TOKEN,
  oauthTokenSecret: process.env.REACT_APP_OAUTH_TOKEN_SECRET || secrets.REACT_APP_OAUTH_TOKEN_SECRET
 }

const config = {
  development: {
    path: "/",
    baseUrl: `http://${host}:${port}`,
    endpoint: "https://api.tumblr.com/v2/",
    ...TumblrAPI
  },
  test: {
    path: "/",
    baseUrl: `http://${host}:${port}`,
    endpoint: "https://api.tumblr.com/v2/",
  },
  production: {
    path: "/",
    baseUrl: "",
    endpoint: "https://api.tumblr.com/v2/",
  },
};

module.exports = {
  ...config[env],
  env,
  cookieName,
};
