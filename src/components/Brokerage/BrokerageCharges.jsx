
import React from "react";
import Banner from './Banner';
import SectionTabs from './SectionTabs';
import Faqs from './Faqs';
import BChargesMoreContent from './BChargesMoreContent';
import GlossaryCharges from './GlossaryCharges';
import OpenFreeAccount from './../Pricing/OpenFreeAccount';


import "./brokerage.scss";
import "./../Pricing/pricing.scss";
import "./../OpenDematAccount/DematPage.scss";


function BrokerageCharges() {

  

  return (
    <div>
      
      <div className="mainwrapper brokerage-charges-temp">
         
         <Banner />
         <SectionTabs />
         <OpenFreeAccount />
         <GlossaryCharges />
         <Faqs />
         <BChargesMoreContent/>
         
       </div> 
      
    
    </div>
  );
}

export default BrokerageCharges;
