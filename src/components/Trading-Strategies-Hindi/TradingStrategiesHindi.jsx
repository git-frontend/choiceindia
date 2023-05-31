
import React from "react";
import { useState,useEffect } from "react";
import meta_tags from "../../Data/MetaTags";
import "./trading-strategies-hindi.scss";
import Banner from './Banner';
import WhyOpenFreeDematAccount from "./WhyOpenFreeDematAccount";
import DevelopYourOwnStrategy from "./DevelopYourOwnStrategy";
import WhyStrategies from "./WhyStrategies";


function TradingStrategiesHindi() {
  const [rendercount, setRenderCount] = useState(() => false);

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
    }
  }, [rendercount])
  return (
    <div>
      <div>
          <Banner />
          <DevelopYourOwnStrategy/>
          <WhyStrategies/>
          <WhyOpenFreeDematAccount/>
       </div> 
    </div>
  );
}

export default TradingStrategiesHindi;
