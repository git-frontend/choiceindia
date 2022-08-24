
import React from "react";
import Banner from './Banner';
import SectionTabs from './SectionTabs';
import Faqs from './Faqs';
import BChargesMoreContent from './BChargesMoreContent';
import GlossaryCharges from './GlossaryCharges';
import OpenFreeAccount from './../Pricing/OpenFreeAccount';
import { useState,useEffect } from "react";
import meta_tags from "../../Data/MetaTags";
import "./brokerage.scss";
import "./../Pricing/pricing.scss";
import "./../OpenDematAccount/DematPage.scss";


function BrokerageCharges() {
  const [rendercount, setRenderCount] = useState(() => false);

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
    }
  }, [rendercount])


  

  return (
    <div>
      
      <div className="mainwrapper brokerage-charges-temp">
         
         <Banner />
         <SectionTabs />
         <OpenFreeAccount />
         <GlossaryCharges />
         <Faqs />
         <BChargesMoreContent/>
         
       </div> 
      
    
    </div>
  );
}

export default BrokerageCharges;
