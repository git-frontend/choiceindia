
import React,{useState, useEffect} from "react";
import OTBannerApp from './OTBannerApp';
import AppOTBannerBottom from './AppOTBannerBottom';
import AppOTStrategies from './AppOTStrategies';
import AppOTBenefits from './AppOTBenefits';
import AppOTradeBenefits from './AppOTradeBenefits';
import "./online-trading-app.scss";
import Template3  from '../Common-features/Template3';
// import AppHeader from './AppHeader.jsx';
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function App() {

  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);

  const location = useLocation();

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

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
    }
  }, [rendercount])

  return (
    <div>
    {
      skeleton? <Template3></Template3>:
      <div className="app-skeleton-parent">
      <OTBannerApp />
      <AppOTBannerBottom />
      <AppOTBenefits />
      <AppOTStrategies />
      <AppOTradeBenefits />
      </div>
    }
    </div>
  );
}

export default App;
