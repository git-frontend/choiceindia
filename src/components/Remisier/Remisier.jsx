
import React from "react";
import RemisierBanner from './RemisierBanner';
import RemisierBenifits from './RemisierBenifits';
import RemisierSellMore from './RemisierSellMore';
import WhyBecomeRemisier from './WhyBecomeRemisier';
import WhoEligibleToRemisier from './WhoEligibleToRemisier';
import RemisierOffers from './RemisierOffers';
import RemisierMoreContent from './RemisierMoreContent';
import RemisierFaq from './RemisierFaq';
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

            <RemisierBanner />
            <RemisierBenifits />
            <RemisierSellMore />
            <WhyBecomeRemisier />
            <WhoEligibleToRemisier />
            <RemisierFaq />
            <RemisierMoreContent />
            {/* <RemisierOffers /> */}
          </div>
      }

    </div>
  );
}

export default Remisier;
