
import React from "react";
import { useState,useEffect } from "react";
import meta_tags from "../../Data/MetaTags";
import "./trading-strategies.scss";
import Banner from './Banner';
import CreateBacktestStrategies from "./CreateBacktestStrategies";
import WhyOpenFreeDematAccount from "./WhyOpenFreeDematAccount";


function TradingStrategies() {
  return (
    <div>
      <div>
          <Banner />
          <CreateBacktestStrategies/>
          <WhyOpenFreeDematAccount/>
       </div> 
    </div>
  );
}

export default TradingStrategies;
