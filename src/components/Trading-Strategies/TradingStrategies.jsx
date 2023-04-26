
import React from "react";
import { useState,useEffect } from "react";
import meta_tags from "../../Data/MetaTags";
import "./trading-strategies.scss";
import Banner from './Banner';
import WhyOpenFreeDematAccount from "./WhyOpenFreeDematAccount";
import DevelopYourOwnStrategy from "./DevelopYourOwnStrategy";
import WhyStrategies from "./WhyStrategies";


function TradingStrategies() {
  return (
    <div>
      <div>
          <Banner />
          <DevelopYourOwnStrategy/>
          <WhyStrategies/>
          <WhyOpenFreeDematAccount/>
       </div> 
    </div>
  );
}

export default TradingStrategies;
