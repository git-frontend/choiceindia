
import React from "react";
import Banner from './Banner';
import InvestmentStrategies from './InvestmentStrategies';
import TrackRecord from './TrackRecord';
import DematBenifits from './DematBenifits';
import "./open-demat-account.scss";
import { useState,useEffect } from 'react';
import meta_tags from "../../Data/MetaTags";


function MutualFundsSEO() {
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
      
      <div className="mainwrapper mfi-main">
         
         <Banner />
         <InvestmentStrategies />
         <TrackRecord />
         <DematBenifits />
        
         
       </div> 
      
    
    </div>
  );
}

export default MutualFundsSEO;
