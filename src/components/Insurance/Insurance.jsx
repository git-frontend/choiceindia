
import React from "react";
import Banner from './Banner';
import InsuranceList from './InsuranceList';
import HowItWorks from './HowItWorks';
import Benefits from './Benefits';
import { useState,useEffect } from "react";
import meta_tags from "../../Data/MetaTags";

import "./insurance.scss";


function Insurance() {

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
      
      <div className="mainwrapper brokerage-charges-temp">
         
         <Banner />
         <InsuranceList />
         <HowItWorks />
         <Benefits />
        
         
       </div> 
      
    
    </div>
  );
}

export default Insurance;
