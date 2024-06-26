
import React from "react";
import BannerMFDistributorHindi from './BannerMFDistributorHindi';
import MFDistributorBenifitsHindi from './MFDistributorBenifitsHindi';
import MFDistributorSellMoreHindi from './MFDistributorSellMoreHindi';
import WhyMFDistributorHindi from './WhyMFDistributorHindi';
import EligibleToMFDistributorHindi from './EligibleToMFDistributorHindi';
import MoreContentHindi from './MoreContentHindi';
import MFDistributorOffersHindi from './MFDistributorOffersHindi';
import MFDistributorFaqsHindi from './MFDistributorFaqsHindi';
import { useState } from "react";
import Template5 from '../Common-features/Template5';
import "./mf-distributor.scss";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import { useEffect } from "react";

function MutualFundDistributor() {

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
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      if (document.getElementById('link1') == null) {
        let sitemap1 = document.createElement('link');
        sitemap1.rel = "alternate";
        sitemap1.id = "link1";
        sitemap1.href = meta_tags[window.location.pathname.replace("/", "")].link1 || "";
        sitemap1.hreflang = meta_tags[window.location.pathname.replace("/", "")].href1|| "";
        document.head.appendChild(sitemap1);

        let sitemap2 = document.createElement('link');
        sitemap2.rel = "alternate";
        sitemap2.id = "link2";
        sitemap2.href = meta_tags[window.location.pathname.replace("/", "")].link2 || "";
        sitemap2.hreflang = meta_tags[window.location.pathname.replace("/", "")].href2|| "";
        document.head.appendChild(sitemap2);

        let sitemap3 = document.createElement('link');
        sitemap3.rel = "alternate";
        sitemap3.id = "link3";
        sitemap3.href = meta_tags[window.location.pathname.replace("/", "")].link3 || "";
        sitemap3.hreflang = meta_tags[window.location.pathname.replace("/", "")].href3|| "";
        document.head.appendChild(sitemap3);
     }
    }
  }, [rendercount])

  

  return (
    <div>

      {
        skeleton ? <Template5 /> :

          <div className="sub-broker-skeleton-parent">

            <BannerMFDistributorHindi />
            <MFDistributorBenifitsHindi />
            <MFDistributorSellMoreHindi />
            <WhyMFDistributorHindi />
            <EligibleToMFDistributorHindi />
            <MFDistributorOffersHindi />
            <MFDistributorFaqsHindi />
            {/* <MoreContentHindi /> */}
            
          </div>
      }

    </div>
  );
}

export default MutualFundDistributor;
