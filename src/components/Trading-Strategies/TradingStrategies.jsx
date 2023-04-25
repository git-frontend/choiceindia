
import React from "react";
import { useState,useEffect } from "react";
import meta_tags from "../../Data/MetaTags";
import "./trading-strategies.scss";
import Banner from './Banner';
import WhyOpenFreeDematAccount from "./WhyOpenFreeDematAccount";
import DevelopYourOwnStrategy from "./DevelopYourOwnStrategy";


function TradingStrategies() {
  return (
    <div>
      <div>
          <Banner />
          <DevelopYourOwnStrategy/>
          <WhyOpenFreeDematAccount/>
       </div> 
    </div>
  );
}

export default TradingStrategies;
