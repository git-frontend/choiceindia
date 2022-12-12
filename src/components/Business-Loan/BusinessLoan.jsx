
import React from "react";
import Banner from './Banner.jsx'
import LoansFinance from './LoansFinance.jsx'
import TypesOfCommercial from './TypesOfCommercial.jsx'
import TypeSolarFinance from './TypeSolarFinance.jsx'
import "../Invoice-Financing/nbfc-common.scss";
import "./business-loan.scss";
import { useState,useEffect } from "react";
import meta_tags from "../../Data/MetaTags";
function BusinessLoan() {
  
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
        <Banner/>
        <LoansFinance/>
        <TypesOfCommercial/>
        <TypeSolarFinance/>
    </div>
  );
}

export default BusinessLoan;
