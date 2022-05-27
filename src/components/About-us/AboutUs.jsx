
import React from "react";
import Banner from './Banner';
import Vissionmission from './Vissionmission';
import Team from './Team';
import Clients from './Clients';
import Journey from './Journey';
import CoreValues from './CoreValues';
import WhatWeOffer from './WhatWeOffer';
import AboutHeader from './AboutHeader';

import "./aboutus.scss";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

function AboutUs() {

  return (
    <div>
      
     
       <div className="mainwrapper">
         <AboutHeader />
         <Banner />
         <Team />
         <Journey />
         <Vissionmission />
         <CoreValues />
         <WhatWeOffer />
         <Clients />
         
       </div>
      
    
    </div>
  );
}

export default AboutUs;
