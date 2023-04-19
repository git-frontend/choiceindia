
import React from "react";
import Banner from './Banner';
import CreateBacktestStrategies from "./CreateBacktestStrategies";
import { useState,useEffect } from "react";
import meta_tags from "../../Data/MetaTags";
import "./free-demat-compaign.scss";


function FreeDematCompaign() {
  return (
    <div>
      
      <div>
          <Banner />
        <CreateBacktestStrategies/>
       </div> 
      
    </div>
  );
}

export default FreeDematCompaign;
