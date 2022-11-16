
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
      // let doc = parser.parseFromString(meta_tags[location.pathname.replace('/', "")].faqscript, 'text/html');
      // document.body.appendChild(doc.getElementsByTagName('script')[0]||[]? doc.getElementsByTagName('script')[0]||[]: '' );
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      if(!(document.getElementById('link1')==null)){
      if(!(document.getElementById('link1').hreflang == "")){
        document.getElementById('link1').remove();
      document.getElementById('link2').remove();
      document.getElementById('link3').remove();
      document.getElementById('link4').remove();
      document.getElementById('link5').remove();
      document.getElementById('link6').remove();
      }
      }
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
