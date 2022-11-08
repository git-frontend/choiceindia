
import React from "react";
import Banner from './Banner';
import WhyInvestMF from './WhyInvestMF';
import MfBenifits from './MfBenifits';
import WhyChoiceInvestment from './WhyChoiceInvestment';
import ExploreBestMF from './ExploreBestMF';
import MFTestimonials from './MFTestimonials';
import MFPartner from './MFPartner';
import MFFaq from './MFFaq';
import MFInvestment from './MFInvestment';
import meta_tags from "../../Data/MetaTags";
import { useState,useEffect } from "react";
import "./mf-investment.scss";


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
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
    }
  }, [rendercount])

  

  return (
    <div>
      
      <div className="mainwrapper mfi-main">
         
         <Banner />
         <WhyInvestMF />
         <MfBenifits />
         <WhyChoiceInvestment />
         <ExploreBestMF />
         <MFTestimonials />
         <MFPartner />
         <MFFaq />
          <MFInvestment />
          
       </div> 
      
    
    </div>
  );
}

export default MutualFundsSEO;
