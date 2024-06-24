
import React from "react";
import FlexiCreditBusinessBanner from './FlexiCreditBusinessBanner.jsx';
import TimelineStepsSlider from './TimelineStepsSlider.jsx';
import FlexiCreditBusinessDocument from './FlexiCreditBusinessDocument.jsx';
import FlexiCreditFeatures from './FlexiCreditFeatures.jsx';
import FlexiCreditWhyChoose from './FlexiCreditWhyChoose.jsx';
import AvailPurpose from './AvailPurpose.jsx';
import "./FlexiCreditBusinessDocument.scss";
import "../Invoice-Financing/nbfc-common.scss";
import { useState,useEffect } from "react";
import meta_tags from "../../Data/MetaTags";
function FlexiCreditBusiness() {
  
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
        <FlexiCreditBusinessBanner/>
        <AvailPurpose/>
        <TimelineStepsSlider/>
        <FlexiCreditBusinessDocument/>
        <FlexiCreditFeatures/>
        <FlexiCreditWhyChoose/>
        
    </div>
  );
}

export default FlexiCreditBusiness;
