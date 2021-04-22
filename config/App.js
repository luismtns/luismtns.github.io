const env = process.env.APP_ENV || "development";
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 4000;
const cookieName = "app";

const config = {
  development: {
    path: "/",
    baseUrl: `http://${host}:${port}`,
    endpoint: "https://figurate-desks.000webhostapp.com/wp-json",
  },
  test: {
    path: "/",
    baseUrl: `http://${host}:${port}`,
    endpoint: "https://figurate-desks.000webhostapp.com/wp-json",
  },
  production: {
    path: "/",
    baseUrl: "",
    endpoint: "https://figurate-desks.000webhostapp.com/wp-json",
  },
};

module.exports = {
  ...config[env],
  env,
  cookieName,
};
