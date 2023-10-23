
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
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      window.addEventListener('scroll', getPositionnew);
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
