import axios from "../../config/Axios";
require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

async function generateSitemap() {
  try {
    const res = await axios.get(
      `https://api.tumblr.com/v2/blog/luisbovo/posts?api_key={apikey}`
    );
    const posts = res.data.response.posts;

    let mapPosts = posts.map((e) => ({ projectSlug: e.slug }));

    const config = {
      "/:projectSlug": mapPosts,
    };
    console.log(config);
    return new Sitemap(router)
      .applyParams(config)
      .applyParams()
      .build("https://luisbovo.com.br")
      .save("./public/sitemap.xml");
  } catch (ex) {
    console.log("error", ex);
  }
}

generateSitemap();
