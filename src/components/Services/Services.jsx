
import React from "react";
import Banner from './Banner';
import ServiceTabs from './ServiceTabs';
import EquityBroking from './EquityBroking';
import WealthManagement from './WealthManagement';
import Insurance from './Insurance';
import Loans from './Loans';
import CapitalAdvisory from './CapitalAdvisory';
import ManagementConsultancy from './ManagementConsultancy';
import GovernmentAdvisory from './GovernmentAdvisory';
import TaxAdvisory from './TaxAdvisory';

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
          <Loans />
          <CapitalAdvisory />
          <ManagementConsultancy />
          <GovernmentAdvisory />
          <TaxAdvisory />
       </div>
      
    
    </div>
  );
}

export default Services;
