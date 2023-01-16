
import React from "react";
import SolarFinanceBanner from './SolarFinanceBanner.jsx'
import AvailSolarFin from './AvailSolarFin';
import TimelineStepsSlider from './TimelineStepsSlider.jsx'
import SolarFinanceDocument from './SolarFinanceDocument.jsx'
import Features from './Features.jsx'
import "../Invoice-Financing/nbfc-common.scss";
import "./solar-finance.scss";
import { useState,useEffect } from "react";
import meta_tags from "../../Data/MetaTags";
function SolarFinance() {
  
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
        <SolarFinanceBanner/>
        <AvailSolarFin/>
        <TimelineStepsSlider/>
        <SolarFinanceDocument/>
        <Features/>
       
    </div>
  );
}

export default SolarFinance;
