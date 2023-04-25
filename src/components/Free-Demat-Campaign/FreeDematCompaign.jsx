
import React from "react";
import { useState,useEffect } from "react";
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


function FreeDematCompaign() {
  return (
    <div>
      
      <div>
          <Banner />
          <CreateBacktestStrategies/>
          <GetFreeResearchCall/>
          <OurTrackRecordSaysAll/>
          <WhyOpenFreeDematAccount/>
          <OneAccountFinancialNeeds/>
          <OpenLowBrokerageDematAccount/>
          <DematAccountOnlineSteps/>
          <DocumentsRequiredDematAccountOpeningOnline/>
          <WhyChoiceOpenDematAccount/>
          {/* <Faq/>
          <BChargesMoreContent/> */}
       </div> 
      
    </div>
  );
}

export default FreeDematCompaign;
