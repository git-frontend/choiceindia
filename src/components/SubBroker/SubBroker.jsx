
import React from "react";
import BannerSBroker from './BannerSBroker';
import SubBrokerBenifits from './SubBrokerBenifits';
import SubBrokerSellMore from './SubBrokerSellMore';
import WhyBecomeSubBroker from './WhyBecomeSubBroker';
import WhoEligibleToSubBroker from './WhoEligibleToSubBroker';
import SubBrokerOffers from './SubBrokerOffers';
import "./subbroker.scss";

function SubBroker() {

  return (
    <div>
     
          <BannerSBroker />
          <SubBrokerBenifits />
          <SubBrokerSellMore />
          <WhyBecomeSubBroker />
          <WhoEligibleToSubBroker />
          <SubBrokerOffers />
    
    </div>
  );
}

export default SubBroker;
