
import React,{useState, useEffect} from "react";
import SMABannerApp from './SMABannerApp';
import SMABannerBottom from './SMABannerBottom';
import SMAStrategies from './SMAStrategies';
import SMAMultipleBenefits from './SMAMultipleBenefits';
import SMATradeBenefits from './SMATradeBenefits';
import SMAFaq from './SMAFaq';
import SMAMoreContent from './SMAMoreContent';
import SMATestimonial from './SMATestimonial';
import SMADownloadJiffy from './SMADownloadJiffy';
import "./../OnlineTradingApp/online-trading-app.scss";
import "./../ShareMarketApp/sharemarket-app.scss";
import Template3  from '../Common-features/Template3';

// import AppHeader from './AppHeader.jsx';
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function ShareMarketApp() {
  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);
  const location = useLocation();

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

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
    {
      skeleton? <Template3></Template3>:
      <div className="app-skeleton-parent">
        <SMABannerApp />
        <SMABannerBottom />
        <SMAStrategies />
        <SMATradeBenefits />
        <SMAMultipleBenefits/> 
        <SMATestimonial/>
        <SMAFaq/>
        <SMADownloadJiffy/>
        <SMAMoreContent/>
      </div>
    }
    </div>
  );
}

export default ShareMarketApp;
