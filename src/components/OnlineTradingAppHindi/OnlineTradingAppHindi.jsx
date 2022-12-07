
import React,{useState, useEffect} from "react";
import OTBannerApp from './OTBannerApp';
import AppOTBannerBottom from './AppOTBannerBottom';
import AppOTStrategies from './AppOTStrategies';
import AppOTMultipleBenefits from './AppOTMultipleBenefits';
import AppOTradeBenefits from './AppOTradeBenefits';
import OTAppFaq from './OTAppFaq';
import OTAppMoreContent from './OTAppMoreContent';
import AppOTradeTestimonial from './AppOTradeTestimonial';
import AppOTDownloadJiffy from './AppOTDownloadJiffy';
import "./online-trading-app.scss";
import Template3  from '../Common-features/Template3';
// import AppHeader from './AppHeader.jsx';
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function TradingHindiApp() {

  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);

  const location = useLocation();

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(meta_tags[location.pathname.replace('/', "")].faqscript, 'text/html');
      document.head.appendChild(doc.getElementsByTagName('script')[0]||[]? doc.getElementsByTagName('script')[0]||[]: '' );
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
    {
      skeleton? <Template3></Template3>:
      <div className="app-skeleton-parent">
      <OTBannerApp />
      <AppOTStrategies />
      <AppOTBannerBottom />
      <AppOTradeBenefits />
       <AppOTMultipleBenefits/> 
      <AppOTradeTestimonial/>
      <OTAppFaq/>
      <AppOTDownloadJiffy/>
      <OTAppMoreContent/>
      
      </div>
    }
    </div>
  );
}

export default TradingHindiApp;
