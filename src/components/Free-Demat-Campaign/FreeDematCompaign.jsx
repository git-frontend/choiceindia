
import React from "react";
import { useState,useEffect } from "react";
import meta_tags from "../../Data/MetaTags";
import "./free-demat-compaign.scss";
import Banner from './Banner';
import CreateBacktestStrategies from "./CreateBacktestStrategies";
import GetFreeResearchCall from "./GetFreeResearchCall";
import OurTrackRecordSaysAll from "./OurTrackRecordSaysAll";



function FreeDematCompaign() {
  return (
    <div>
      
      <div>
          <Banner />
          <CreateBacktestStrategies/>
          <GetFreeResearchCall/>
          <OurTrackRecordSaysAll/>
       </div> 
      
    </div>
  );
}

export default FreeDematCompaign;
