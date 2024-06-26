
import React from "react";
import Banner from './Banner';
import ServiceTabs from './ServiceTabs';
import { useState,useEffect } from "react";
import Template2 from '../Common-features/Template2';

import "../home-page/style.scss"
import "./services.scss";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function Services() {

  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);
  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  const location = useLocation();
  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
   
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
    if(!(document.getElementById('link1')==null)){
      if(!(document.getElementById('link1').hreflang == "" || document.getElementById('link1').hreflang)){
        document.getElementById('link1').remove();
        document.getElementById('link2').remove();
        document.getElementById('link3').remove();
        document.getElementById('link4').remove();
        document.getElementById('link5').remove();
        document.getElementById('link6').remove();
      
        }

    }
     
     
    }
  }, [rendercount])

  
  return (
    <div>

      {
        skeleton ? <Template2 /> :
          <div className="mainwrapper services-parent">
            <Banner />
            <ServiceTabs />

          </div>
      }


    </div>
  );
}

export default Services;
