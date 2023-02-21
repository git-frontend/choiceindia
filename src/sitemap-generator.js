// import fableServices from './Services/fableServices';

require("babel-register")({
  presets: ["es2015", "react"]
});

const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

const AWSAmplify = require("aws-amplify");
const Amplify = AWSAmplify.default;
const API = AWSAmplify.API;


async function generateSitemap() {
  let idMap = [{}];

  try {
    fetch('https://choiceindia.com/fables/ghost/api/v3/content/posts/?key=280c55197998a010569e5d612a&limit=1000').then(res => {
      return res.json();
    })
      .then(data => {
        for (var i = 0; i < data.posts.length; i++) {
          idMap.push({ id: data.posts[i].slug });
        }

        const paramsConfig = {
          "/blog/:id": idMap

        };

        console.log(idMap, "data2");
        return (
          new Sitemap(router)
            .applyParams(paramsConfig)
            .build("https://dev.choiceindia.com/")
            .save("./public/sitemap-posts.xml")
        );
      })
  } catch (e) {
    console.log(e);
  }
}

generateSitemap();