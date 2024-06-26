
import React from "react";
import ChannelFinanceBanner from './ChannelFinanceBanner.jsx'
import AnchorSpoke from './AnchorSpokeChannelFin.jsx'
import TimelineStepsSlider from './TimelineStepsSlider.jsx'
import ChannelFinanceDocument from './ChannelFinanceDocument.jsx'
import Features from './Features.jsx'
import WhyChoose from './WhyChoose.jsx'
import "../Invoice-Financing/nbfc-common.scss";
import "./channel-finance.scss";
import { useState,useEffect } from "react";
import meta_tags from "../../Data/MetaTags";
function ChannelFinance() {
  
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
        <ChannelFinanceBanner/>
        <AnchorSpoke/>
        <TimelineStepsSlider/>
        <ChannelFinanceDocument/>
        <Features/>
        <WhyChoose/>
    </div>
  );
}

export default ChannelFinance;
