
import React from "react";
import Banner from './Banner';
import InvestmentStrategies from './InvestmentStrategies';
import TrackRecord from './TrackRecord';
import DematBenifits from './DematBenifits';
import "./open-demat-account.scss";
import { useState,useEffect,useRef } from 'react';
import meta_tags from "../../Data/MetaTags";


function MutualFundsSEO() {
  const [rendercount, setRenderCount] = useState(() => false);
  const [isCheck, setIsCheck] = useState(false);
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

  useEffect(() => {
    window.addEventListener('scroll', getPositionnew);
}, []);
  const getPositionnew = () => {
    const element = document.getElementById("branch1");
    if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top.toFixed() < 300) {
            setIsCheck(true);
        }

    }
}
const myRef1 = useRef(null);


  

  return (
      <div className="mainwrapper mfi-main"> 
        <div onScroll={getPositionnew} ref={myRef1} id="branch1" onMouseOver={() => setIsCheck(true)}>
          <Banner />
        </div>
        {
          isCheck ?
        <div>
         <InvestmentStrategies />
         <TrackRecord />
         <DematBenifits />
       </div>
       :
       ""
     }
    </div>
  );
}

export default MutualFundsSEO;
