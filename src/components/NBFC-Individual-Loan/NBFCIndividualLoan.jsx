
import React from "react";
import Banner from './Banner';
import Loantabs from './Loantabs';
import Documentrequired from './Documentrequired';
import Features from './Features';
import WhyFlexi from './WhyFlexi';
import AvailPurpose from './AvailPurpose';
import { useState,useEffect } from "react";
import meta_tags from "../../Data/MetaTags";

import "./NBFCIndividualLoan.scss";


function NBFCloan() {

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
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
    }
  }, [rendercount])


  

  return (
    <div>
      
      <div className="mainwrapper">
         
         <Banner />
          <Loantabs />
          
          <AvailPurpose/>
          <Documentrequired/>
          <Features/>
          <WhyFlexi/>
       </div> 
      
    
    </div>
  );
}

export default NBFCloan;
