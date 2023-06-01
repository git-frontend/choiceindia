
import React from "react";
import { useState, useEffect, useRef } from "react";
import meta_tags from "../../Data/MetaTags";
import "./technical-analysis.scss";
import Banner from './Banner';
import WhyOpenFreeDematAccount from "./WhyOpenFreeDematAccount";
import DevelopYourOwnStrategy from "./DevelopYourOwnStrategy";
import WhyStrategies from "./WhyStrategies";


function TechnicalAnalysis() {
  const [rendercount, setRenderCount] = useState(() => false);
  const [isCheck, setIsCheck] = useState(false)
  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      window.addEventListener('scroll', getPositionnew);
    }
  }, [rendercount])
  const myRef1 = useRef(null);
    const getPositionnew = () => {
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
      <div onScroll={getPositionnew} ref={myRef1} id="branch1" onMouseOver={() => setIsCheck(true)}>
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

export default TechnicalAnalysis;
