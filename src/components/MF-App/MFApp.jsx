
import React,{useState, useEffect} from "react";
import BannerApp from './BannerApp';
import AppNeed from './AppNeed';
import ValueTrust from './ValueTrust';
import "./mf-app.scss";
import "./../OpenDematAccount/DematPage.scss";
import Template3  from '../Common-features/Template3';
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import TrackInvest from "./TrackInvest";
import WhyChoose from "./WhyChoose";
import MfTestimonials from "./MfTestimonials";
import Faqs from "./Faqs";
import Download from "./Download";

function MFApp() {
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
        <BannerApp />
        <AppNeed />
        <TrackInvest/>
        <WhyChoose/>
        <ValueTrust />
        <MfTestimonials/>
        <Faqs/>
        <Download/>
      </div>
    }
    </div>
  );
}

export default MFApp;
