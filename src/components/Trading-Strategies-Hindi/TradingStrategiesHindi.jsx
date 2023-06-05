
import React from "react";
import { useRef, useState, useEffect } from "react";
import meta_tags from "../../Data/MetaTags";
import "./trading-strategies-hindi.scss";
import Banner from './Banner';
import WhyOpenFreeDematAccount from "./WhyOpenFreeDematAccount";
import DevelopYourOwnStrategy from "./DevelopYourOwnStrategy";
import WhyStrategies from "./WhyStrategies";


function TradingStrategiesHindi() {
  const [rendercount, setRenderCount] = useState(() => false);
  const [isCheck, setIsCheck] = useState(false)

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      window.addEventListener('scroll', getPosition);
    }
  }, [rendercount])
  const myRef1 = useRef(null);
  const getPosition = () => {
    const element = document.getElementById("branch1");
    if (element) {
      const rect = element.getBoundingClientRect();
      // console.log("checkmate", rect.top.toFixed())
      if (rect.top.toFixed() < 350) {
        setIsCheck(true);
        // console.log('inside name', name);
      }

    }
  }
  return (
    <div>
      <div onScroll={getPosition} ref={myRef1} id="branch1" onMouseOver={() => setIsCheck(true)}>
        <Banner />
      </div>
      {
        isCheck ?
          <div>
            <DevelopYourOwnStrategy />
            <WhyStrategies />
            <WhyOpenFreeDematAccount />
          </div> : ""}


    </div>
  );
}

export default TradingStrategiesHindi;
