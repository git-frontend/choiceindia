
import React from "react";
import Banner from './Banner';
import ServiceTabs from './ServiceTabs';
import Template2 from '../Common-features/Template2';
import { useState } from 'react';

// import WealthManagement from './WealthManagement';
// import Insurance from './Insurance';
// import Loans from './Loans';
// import CapitalAdvisory from './CapitalAdvisory';
// import ManagementConsultancy from './ManagementConsultancy';
// import GovernmentAdvisory from './GovernmentAdvisory';
// import TaxAdvisory from './TaxAdvisory';


import "../home-page/style.scss"
import "./services.scss";

function Services() {


  const [skeleton, setSkeleton] = useState(() => true);

  const myTimeout = setTimeout(myGreeting, 2000);

  function myGreeting() {
    setSkeleton(() => false);
  }
  
  return (
    <div className="mainwrapper">

      {
        skeleton ? <Template2 /> :
          <div className="mainwrapper">
            <Banner />
            <ServiceTabs />

            {/** <WealthManagement />
          <Insurance />
          <Loans />
          <CapitalAdvisory />
          <ManagementConsultancy />
          <GovernmentAdvisory />
          <TaxAdvisory />*/ }
          </div>

      }

    </div>
  );
}

export default Services;
