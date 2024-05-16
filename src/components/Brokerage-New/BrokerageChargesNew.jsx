
import React from "react";
import { useState,useEffect} from "react";
import meta_tags from "../../Data/MetaTags";
import Banner from './Banner';
import CorporateCount from '../Corporate-Demat-Account/CorporateCount';
import BrokerageTabs from './BrokerageTabs';
import BrokerageCosts from "./BrokerageCosts";
import Applicablecharges from "./Applicablecharges";
import "./brokeragenew.scss"
import '../Corporate-Demat-Account/corporatedemat.scss';
function BrokerageCharges() {
  const [rendercount, setRenderCount] = useState(() => false);
  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      let parser = new DOMParser();
      // let doc = parser.parseFromString(meta_tags[location.pathname.replace('/', "")].faqscript, 'text/html');
      // document.body.appendChild(doc.getElementsByTagName('script')[0]||[]? doc.getElementsByTagName('script')[0]||[]: '' );
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      if(!(document.getElementById('link1')==null)){
        document.getElementById('link1').remove();
      document.getElementById('link2').remove();
      document.getElementById('link3').remove();
      if(document.getElementById('link4')!==null){
      document.getElementById('link4').remove();
      document.getElementById('link5').remove();
      document.getElementById('link6').remove();
      }
      }
    }
  }, [rendercount])
  const data = [
    {
      count: ["25", "PAN", "9 Lakh"],
      sign: ["+", "", "+"],
      title: ["Year of Experience", "Indian Service", "Happy Customer"],
    },
  ];
  return (
    <>
      <div className="brokerage-charges-new Corporate-main ">
        <Banner />
        <CorporateCount data={data} />
        <BrokerageTabs/>
        <BrokerageCosts/>
        <Applicablecharges/>
       </div> 
    </>
  );
}

export default BrokerageCharges;
