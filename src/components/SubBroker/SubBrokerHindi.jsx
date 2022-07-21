
import React from "react";
import BannerSBroker from './BannerSBroker';
import SubBrokerBenifits from './SubBrokerBenifits';
import SubBrokerSellMore from './SubBrokerSellMore';
import WhyBecomeSubBroker from './WhyBecomeSubBroker';
import WhoEligibleToSubBroker from './WhoEligibleToSubBroker';
import MoreContent from './MoreContent';
import SubBrokerOffers from './SubBrokerOffers';
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
    }
  }, [rendercount])

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
            <MoreContent />
            
          </div>
      }

    </div>
  );
}

export default SubBrokerHindi;
