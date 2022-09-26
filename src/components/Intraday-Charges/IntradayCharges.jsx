
import React from "react";
import BannerIntraCharges from './BannerIntraCharges';
import MFDistributorBenifits from './MFDistributorBenifits';
import MFDistributorSellMore from './MFDistributorSellMore';
import WhyMFDistributor from './WhyMFDistributor';
import EligibleToMFDistributor from './EligibleToMFDistributor';
import MoreContent from './MoreContent';
import MFDistributorOffers from './MFDistributorOffers';
import MFDistributorFaqs from './MFDistributorFaqs';
import { useState } from "react";
import Template5 from '../Common-features/Template5';
import "./mf-distributor.scss";
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
