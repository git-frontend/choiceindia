// import fableServices from './Services/fableServices';
require("babel-register")({
  presets: ["es2015", "react"]
});

const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;
const { streamToPromise, SitemapStream } = require('sitemap')
const AWSAmplify = require("aws-amplify");
const Amplify = AWSAmplify.default;
const API = AWSAmplify.API;


async function generateSitemap() {
  let idMap = [{}];
  let idaddress = [{}];



  try {
    fetch('https://choiceindia.com/fables/ghost/api/v3/content/posts/?key=280c55197998a010569e5d612a&limit=1000').then(res => {
      return res.json();
    })
      .then(data => {
        for (var i = 0; i < data.posts.length; i++) {
          idMap.push({ id: data.posts[i].slug });
          idaddress.push({ changefreq: data.posts[i].updated_at });




        }

        const paramsConfig = {
          "/blog/:id": idMap,
          "changefreq": idaddress, 
         


        };
        const paramsConfig2 = {
          "lastmod": idaddress

        };

        // var mySitemap = new Sitemap(router).build("https://dev.choiceindia.com/");
        // for (let i = 0; i < mySitemap.sitemaps[0].urls.length; i++) {
        //   mySitemap.sitemaps[0].urls[i].changefreq =  'daily';
        //   mySitemap.sitemaps[0].urls[i].priority = 0.8;
        // }

        // for (const entry of idMap.id) {
        //   // entry.lastmod = date;
        //   entry.changefreq = 'weekly';
        //   entry.priority = 0.8;
        // }
        console.log(paramsConfig, "router");
    
        const mySitemap = new Sitemap(router)
        .applyParams(paramsConfig)
        .build("https://dev.choiceindia.com/");
        
        for (let i = 0; i < mySitemap.sitemaps[0].urls.length; i++) {
        mySitemap.sitemaps[0].urls[i].changefreq = "weekly"; // set desired value here
        mySitemap.sitemaps[0].urls[i].priority = 0.75; // set desired value here lastmod
        
        }
        
        return mySitemap.save("./public/sitemap-posts.xml");

       

      })


  } catch (e) {
    console.log(e);
  }
}

generateSitemap();