
import React from "react";
import InvoiceFinancingBanner from './InvoiceFinancingBanner.jsx'
import AnchorSpoke from './AnchorSpoke.jsx'
import TimelineStepsSlider from './TimelineStepsSlider.jsx'
import InvoiceFinancingDocument from './InvoiceFinancingDocument.jsx'
import Features from './Features.jsx'
import WhyChoose from './WhyChoose.jsx'
import "./inv-financing.scss";
import "./nbfc-common.scss";
import { useState,useEffect } from "react";
import meta_tags from "../../Data/MetaTags";
function InvoiceFinancing() {
  
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
        <InvoiceFinancingBanner/>
        <AnchorSpoke/>
        <TimelineStepsSlider/>
        <InvoiceFinancingDocument/>
        <Features/>
        <WhyChoose/>
        
        

    </div>
  );
}

export default InvoiceFinancing;
