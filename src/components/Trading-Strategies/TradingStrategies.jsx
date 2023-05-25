
import React from "react";
import { useState,useEffect,useRef } from "react";
import meta_tags from "../../Data/MetaTags";
import "./trading-strategies.scss";
import Banner from './Banner';
import WhyOpenFreeDematAccount from "./WhyOpenFreeDematAccount";
import DevelopYourOwnStrategy from "./DevelopYourOwnStrategy";
import WhyStrategies from "./WhyStrategies";


function TradingStrategies() {
  const [rendercount, setRenderCount] = useState(() => false);
  const [isCheck, setIsCheck] = useState(false)
  const myRef1 = useRef(null);
  const getPosition = () => {
    const element = document.getElementById("branch1");
    if (element) {
      const rect = element.getBoundingClientRect();
console.log("rect.top.toFixed()",rect.top.toFixed())
      if (rect.top.toFixed() < 350) {
      setIsCheck(true)
    }
  }
  };
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
  return (
    <div>
      <div  onScroll={getPosition}>
          <Banner />
          <div ref={myRef1} id="branch1">
            {
              isCheck ?
              <div>
              <DevelopYourOwnStrategy/>
              <WhyStrategies/>
              <WhyOpenFreeDematAccount/>
              </div>
              :""
            }
         

          </div>
          
       </div> 
    </div>
  );
}

export default TradingStrategies;
