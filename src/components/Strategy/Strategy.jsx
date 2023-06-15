import React from "react";
import "./css/stratezy-landing-page.scss";
import FaqAccordion from "./StartegyFaq";
import WhyStrategy from "./Whystrategy";
import LazyLoader from "../Common-features/LazyLoader";
import Template2 from "../Common-features/Template2";
import StrategyBanner from "./strategyBanner";
import StrategyBody from "./StrategyBody";
import meta_tags from "../../Data/MetaTags";
import { useState,useEffect } from "react";
import{ useLocation} from 'react-router-dom';

function Strategy() {
  const [skeleton, setSkeleton] = React.useState(() => true);

  const [isFaq, setIsFaq] = useState(() => true);

  const [rendercount, setRenderCount] = useState(() => false);
  const location = useLocation();
  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      // let parser = new DOMParser();
      // let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
      // document.body.appendChild(doc.getElementsByTagName('script')[0]? doc.getElementsByTagName('script')[0]: '' );
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
    }
  }, [rendercount])


  setTimeout(() => {
    setSkeleton(() => false);
  }, 700)

  setTimeout(() => {
    setIsFaq(() => false);
  },5000)

  return (

    skeleton ?

      <Template2 />

      :

      <div>

        {/* <header className="camp-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <a href="https://choiceindia.com/" className="camp-logo">
                 
                  <LazyLoader src={"images/stratezy-page/logo.webp"} alt={"Banner Images"} width={"125"} height={"48"} className={"img-fluid"} />
                  
                </a>
              </div>
            </div>
          </div>
        </header> */}
        <main>
          <StrategyBanner></StrategyBanner>
          <WhyStrategy></WhyStrategy>
          <StrategyBody></StrategyBody>

          {/* {
            isFaq? <div className="stratezy-faq-temp"></div>: <FaqAccordion></FaqAccordion> 
          } */}
        

        </main>
      </div>
  )

}
export default Strategy;
