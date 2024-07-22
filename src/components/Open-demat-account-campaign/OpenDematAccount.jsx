
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
      <div className="mainwrapper mfi-main"> 
        <Banner />
         <InvestmentStrategies />
         <TrackRecord />
         <DematBenifits />
    </div>
  );
}

export default MutualFundsSEO;
