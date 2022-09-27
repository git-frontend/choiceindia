
import React from "react";
import BannerIntraCharges from './BannerIntraCharges';
import ChargesComparison from './ChargesComparison';
import SmartTrader from './SmartTrader';
import IntraChargesBenifits from './IntraChargesBenifits';
import { useState } from "react";
import Template5 from '../Common-features/Template5';
import "./intraday-charges.scss";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import { useEffect } from "react";

function IntradayCharges() {

  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  const location = useLocation();


  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
    }
  }, [rendercount])



  return (
    <div>

      {
        skeleton ? <Template5 /> :

          <div className="sub-broker-skeleton-parent">

            <BannerIntraCharges />
            <ChargesComparison />
            <SmartTrader />
            <IntraChargesBenifits />
            {/* <MFDistributorBenifits />
            <MFDistributorSellMore />
            <WhyMFDistributor />
            <EligibleToMFDistributor />
            <MFDistributorOffers />
            <MFDistributorFaqs />
            <MoreContent /> */}
            
          </div>
      }

    </div>
  );
}

export default IntradayCharges;
