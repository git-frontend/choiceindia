
import React from "react";
import Banner from './Banner';
import Vissionmission from './Vissionmission';
import Team from './Team';
import Clients from './Clients';
import Journey from './Journey';
import CoreValues from './CoreValues';
import WhatWeOffer from './WhatWeOffer';

function AboutIndex() {

  return (
    <div>
      
     
       <div className="mainwrapper">
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

export default AboutIndex;
