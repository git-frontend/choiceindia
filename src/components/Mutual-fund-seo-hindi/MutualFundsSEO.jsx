
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
      
      <div className="mainwrapper mfi-main">
         
         <Banner />
         <WhyInvestMF />
         <MfBenifits />
         <WhyChoiceInvestment />
         <ExploreBestMF />
         <MFTestimonials />
         <MFPartner />
         <MFFaq />
        {/* <MFInvestment /> */}
          
       </div> 
      
    
    </div>
  );
}

export default MutualFundsSEO;
