
import React from "react";
import { useState, useEffect,useRef } from "react";
import meta_tags from "../../Data/MetaTags";
import "./free-demat-compaign.scss";
import "./../OpenDematAccount/DematPage.scss";
import Banner from './Banner';
import CreateBacktestStrategies from "./CreateBacktestStrategies";
import GetFreeResearchCall from "./GetFreeResearchCall";
import OurTrackRecordSaysAll from "./OurTrackRecordSaysAll";
import WhyOpenFreeDematAccount from "./WhyOpenFreeDematAccount";
import OneAccountFinancialNeeds from "./OneAccountFinancialNeeds";
import OpenLowBrokerageDematAccount from "./OpenLowBrokerageDematAccount";
import DematAccountOnlineSteps from "./OpenDematAccountOnlineSteps";
import DocumentsRequiredDematAccountOpeningOnline from "./DocumentsRequiredDematAccountOpeningOnline";
import WhyChoiceOpenDematAccount from "./WhyChoiceOpenDematAccount";

import BChargesMoreContent from "./BChargesMoreContent";
import Faq from "./Faqs";
import OpenAccountEasySteps from "./OpenAccountEasySteps";


function FreeDematCompaign() {
  const [ischeck, setIscheck] = useState(false);
  const [rendercount, setRenderCount] = useState(() => false);
  const myRef1 = useRef(null);
  const getPositionnew = () => {
    const element = document.getElementById("branch1");
    
    if (element) {
      const rect = element.getBoundingClientRect();
      // console.log("checkmate", rect.top.toFixed())
      if (rect.top.toFixed() < 350) {
        setIscheck(true);
        // console.log('inside name', name);
      }

    }
  }
  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
        let parser = new DOMParser();
        let doc = parser.parseFromString(meta_tags[location.pathname.replace('/', "")].faqscript, 'text/html');
        document.body.appendChild(doc.getElementsByTagName('script')[0]||[]? doc.getElementsByTagName('script')[0]||[]: '' );
        document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      if(document.getElementById('link1')==null){
      
      //   document.getElementById('link1').remove();
      // document.getElementById('link2').remove();
      // document.getElementById('link3').remove();
      // document.getElementById('link4').remove();
      // document.getElementById('link5').remove();
      // document.getElementById('link6').remove();
    
        const sitemap1 = document.createElement('link');
        sitemap1.rel = "alternate";
        sitemap1.id = "link1";
        sitemap1.href = meta_tags[location.pathname.replace('/', "")].link1||'';
        sitemap1.hreflang = meta_tags[location.pathname.replace('/', "")].href1||'';
        document.head.appendChild(sitemap1);

        const sitemap2 = document.createElement('link');
        sitemap2.rel = "alternate";
        sitemap2.id = "link2";
        sitemap2.href = meta_tags[location.pathname.replace('/', "")].link2||'';
        sitemap2.hreflang = meta_tags[location.pathname.replace('/', "")].href2||'';
        document.head.appendChild(sitemap2);

        const sitemap3 = document.createElement('link');
        sitemap3.rel = "alternate";
        sitemap3.id = "link3";
        sitemap3.href = meta_tags[location.pathname.replace(`/`, "")].link3 || '';
        sitemap3.hreflang = meta_tags[location.pathname.replace('/', "")].href3 || '';
        document.head.appendChild(sitemap3);

        const sitemap4 = document.createElement('link');
        sitemap4.rel = "alternate";
        sitemap4.id = "link4";
        sitemap4.href = meta_tags[location.pathname.replace('/', "")].link4 || '';
        sitemap4.hreflang = meta_tags[location.pathname.replace('/', "")].href4 || '';
        document.head.appendChild(sitemap4);
    }
      
    }
  }, [rendercount])

  return (
    <div>

              <Banner/>
        {/* <CreateBacktestStrategies/> */}
              <GetFreeResearchCall />
              <OurTrackRecordSaysAll />
              <WhyOpenFreeDematAccount />
              <OneAccountFinancialNeeds />
              <OpenLowBrokerageDematAccount />
              <OpenAccountEasySteps/>
              {/* <DematAccountOnlineSteps /> */}
              <DocumentsRequiredDematAccountOpeningOnline />
              <WhyChoiceOpenDematAccount />
              <Faq/>
              <BChargesMoreContent/>
      </div>

  
  );
}

export default FreeDematCompaign;
