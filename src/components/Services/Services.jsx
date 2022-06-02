
import React from "react";
import Banner from './Banner';
import ServiceTabs from './ServiceTabs';
import EquityBroking from './EquityBroking';
import WealthManagement from './WealthManagement';
import Insurance from './Insurance';

import "./services.scss";

function Services() {

  return (
    <div>
      
     
       <div className="mainwrapper">
          <Banner />
          <ServiceTabs />
          <EquityBroking />
          <WealthManagement />
          <Insurance />
       </div>
      
    
    </div>
  );
}

export default Services;
