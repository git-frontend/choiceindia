import { useState } from "react";
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

import "./aboutus.scss";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

function AboutUs() {

  const [skeleton, setSkeleton] = useState(() => true);

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  return (
    <div>
      
   {
    skeleton? <Template2/>:
    <div className="mainwrapper">
         
    <Banner />
    <Team />
    <Journey />
    <Vissionmission />
    <CoreValues />
    <WhatWeOffer />
    <Clients />
    
  </div>
   }  
      
    
    </div>
  );
}

export default AboutUs;
