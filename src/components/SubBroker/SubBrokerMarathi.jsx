
import React from "react";
import BannerSBrokerMarathi from './BannerSBrokerMarathi';
import SubBrokerBenifitsMarathi from './SubBrokerBenifitsMarathi';
import SubBrokerSellMoreMarathi from './SubBrokerSellMoreMarathi';
import WhyBecomeSubBrokerMarathi from './WhyBecomeSubBrokerMarathi';
import WhoEligibleToSubBrokerMarathi from './WhoEligibleToSubBrokerMarathi';
import MoreContentMarathi from './MoreContentMarathi';
import SubBrokerOffersMarathi from './SubBrokerOffersMarathi';
import { useState } from "react";
import Template5 from '../Common-features/Template5';
import "./subbroker.scss";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import { useEffect } from "react";

function SubBroker() {

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
      // let parser = new DOMParser();
      // let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
      // document.body.appendChild(doc.getElementsByTagName('script')[0]? doc.getElementsByTagName('script')[0]: '' );
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('canonical-link').hreflang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
    }
  }, [rendercount])

  // console.log('HHHHHHH',meta_tags['sub-broker'].faqscript)
  // console.log('TTTT',doc.getElementsByTagName('script')[0]);  
  // document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
  // // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
  // document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
  // document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
  // // document.body.appendChild(doc.getElementsByTagName('script')[0]);

  return (
    <div>

      {
        skeleton ? <Template5 /> :

          <div className="sub-broker-skeleton-parent">

            <BannerSBrokerMarathi />
            <SubBrokerBenifitsMarathi />
            <SubBrokerSellMoreMarathi />
            <WhyBecomeSubBrokerMarathi />
            <WhoEligibleToSubBrokerMarathi />
            <SubBrokerOffersMarathi />
            {/* <MoreContentMarathi /> */}
            
          </div>
      }

    </div>
  );
}

export default SubBroker;
