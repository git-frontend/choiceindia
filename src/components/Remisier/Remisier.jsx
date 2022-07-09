
import React from "react";
import BannerSBroker from '../SubBroker/BannerSBroker';
import SubBrokerBenifits from '../SubBroker/SubBrokerBenifits';
import SubBrokerSellMore from '../SubBroker/SubBrokerSellMore';
import WhyBecomeSubBroker from '../SubBroker/WhyBecomeSubBroker';
import WhoEligibleToSubBroker from '../SubBroker/WhoEligibleToSubBroker';
import SubBrokerOffers from '../SubBroker/SubBrokerOffers';
import { useState } from "react";
import Template5 from '../Common-features/Template5';
import "../SubBroker/subbroker.scss";
import "./Remisier.scss";

function Remisier() {

  const [skeleton, setSkeleton] = useState(() => true);
  // const myTimeout = setTimeout(myGreeting, 900);
  // function myGreeting() {
  //   setSkeleton(() => false);
  // }

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

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

export default Remisier;
