
import React from "react";
import { useState,useEffect } from "react";
import meta_tags from "../../Data/MetaTags";
import "./free-demat-compaign.scss";
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
       </div> 
      
    </div>
  );
}

export default FreeDematCompaign;
