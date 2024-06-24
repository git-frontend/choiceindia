
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
import { useState,useEffect} from "react";
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
      if(!(document.getElementById('link1')==null)){
        document.getElementById('link1').remove();
      document.getElementById('link2').remove();
      document.getElementById('link3').remove();
      document.getElementById('link4').remove();
      document.getElementById('link5').remove();
      document.getElementById('link6').remove();
      
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
        <MFInvestment />
       </div> 
    </div>
  );
}

export default MutualFundsSEO;
