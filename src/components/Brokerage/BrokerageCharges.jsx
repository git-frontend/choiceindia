
import React from "react";
import Banner from './Banner';
import SectionTabs from './SectionTabs';
import OpenFreeAccount from './../Pricing/OpenFreeAccount';


import "./brokerage.scss";
import "./../Pricing/pricing.scss";


function BrokerageCharges() {

  

  return (
    <div>
      
      <div className="mainwrapper">
         
         <Banner />
         <SectionTabs />
         <OpenFreeAccount />
         
       </div> 
      
    
    </div>
  );
}

export default BrokerageCharges;
