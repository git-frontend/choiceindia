
import React from "react";
import BannerSBrokerHindi from './BannerSBrokerHindi';
import SubBrokerBenifitsHindi from './SubBrokerBenifitsHindi';
import SubBrokerSellMoreHindi from './SubBrokerSellMoreHindi';
import WhyBecomeSubBrokerHindi from './WhyBecomeSubBrokerHindi';
import WhoEligibleToSubBrokerHindi from './WhoEligibleToSubBrokerHindi';
import MoreContent from './MoreContent';
import SubBrokerOffersHindi from './SubBrokerOffersHindi';
import { useState } from "react";
import Template5 from '../Common-features/Template5';
import "./subbroker.scss";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import { useEffect } from "react";

function SubBrokerHindi() {

  const [skeleton, setSkeleton] = useState(() => true);
  // const myTimeout = setTimeout(myGreeting, 900);
  // function myGreeting() {
  //   setSkeleton(() => false);
  // }
  const [rendercount, setRenderCount] = useState(() => false);

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  const location = useLocation();

  // let parser = new DOMParser();
  // let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');

  // useEffect(() => {
  //   let parser = new DOMParser();
  //   let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
  //   document.body.appendChild(doc.getElementsByTagName('script')[0]);
  // }, [])

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('canonical-link').hreflang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
    }
  }, [rendercount])

  return (
    <div>

      {
        skeleton ? <Template5 /> :

          <div className="sub-broker-skeleton-parent">

            <BannerSBrokerHindi />
            <SubBrokerBenifitsHindi />
            <SubBrokerSellMoreHindi />
            <WhyBecomeSubBrokerHindi />
            <WhoEligibleToSubBrokerHindi />
            <SubBrokerOffersHindi />
            {/* <MoreContent /> */}
            
          </div>
      }

    </div>
  );
}

export default SubBrokerHindi;
