
import React from "react";
import Banner from './Banner';
import SectionTabs from './SectionTabs';
import Faqs from './Faqs';
import OpenFreeAccount from './../Pricing/OpenFreeAccount';


import "./brokerage.scss";
import "./../Pricing/pricing.scss";
import "./../OpenDematAccount/DematPage.scss";


function BrokerageCharges() {

  

  return (
    <div>
      
      <div className="mainwrapper">
         
         <Banner />
         <SectionTabs />
         <OpenFreeAccount />
         <Faqs />
         
       </div> 
      
    
    </div>
  );
}

export default BrokerageCharges;
