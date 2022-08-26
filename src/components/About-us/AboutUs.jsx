import { useState, useEffect } from "react";
import React from "react";
import Banner from './Banner';
import Vissionmission from './Vissionmission';
import Team from './Team';
import Clients from './Clients';
import Journey from './Journey';
import CoreValues from './CoreValues';
import WhatWeOffer from './WhatWeOffer';
// import AboutHeader from './AboutHeader';
import Template2  from '../Common-features/Template2';
import Template6 from "../Common-features/Template6";

import "./aboutus.scss";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function AboutUs() {

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
    skeleton? <Template6/>:
    <div className="mainwrapper">
         
    <Banner />
    <Team />
    <Journey />
    <Vissionmission />
    <CoreValues />
    <WhatWeOffer />
    {/* <Clients /> */}
    
  </div>
   }  
      
    
    </div>
  );
}

export default AboutUs;
