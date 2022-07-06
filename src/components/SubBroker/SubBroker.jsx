
import React from "react";
import BannerSBroker from './BannerSBroker';
import SubBrokerBenifits from './SubBrokerBenifits';
import SubBrokerSellMore from './SubBrokerSellMore';
import WhyBecomeSubBroker from './WhyBecomeSubBroker';
import WhoEligibleToSubBroker from './WhoEligibleToSubBroker';
import SubBrokerOffers from './SubBrokerOffers';
import { useState } from "react";
import Template5 from '../Common-features/Template5';
import "./subbroker.scss";

function SubBroker() {

  const [skeleton, setSkeleton] = useState(() => true);
  const myTimeout = setTimeout(myGreeting, 2000);
  function myGreeting() {
    setSkeleton(() => false);
  }

  return (
    <div>

      {
        skeleton ? <Template5 /> :

          <div className="sub-broker-skeleton-parent">

            <BannerSBroker />
            <SubBrokerBenifits />
            <SubBrokerSellMore />
            <WhyBecomeSubBroker />
            <WhoEligibleToSubBroker />
            <SubBrokerOffers />
          </div>
      }

    </div>
  );
}

export default SubBroker;
