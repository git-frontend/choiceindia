
import React from "react";
import Banner from './Banner';
import ServiceTabs from './ServiceTabs';
import { useState } from "react";
// import WealthManagement from './WealthManagement';
// import Insurance from './Insurance';
// import Loans from './Loans';
// import CapitalAdvisory from './CapitalAdvisory';
// import ManagementConsultancy from './ManagementConsultancy';
// import GovernmentAdvisory from './GovernmentAdvisory';
// import TaxAdvisory from './TaxAdvisory';
import Template2 from '../Common-features/Template2';

import "../home-page/style.scss"
import "./services.scss";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function Services() {

  const [skeleton, setSkeleton] = useState(() => true);
  // const myTimeout = setTimeout(myGreeting, 2000);
  // function myGreeting() {
  //   setSkeleton(() => false);
  // }
  const [rendercount, setRenderCount] = useState(() => false);
  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  const location = useLocation();
  // document.getElementsByTagName("META")[2].name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
  // document.getElementsByTagName("META")[2].content=meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].content : '';

  document.title = meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : '' ;
  // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
  document.getElementById('meta-tags').content= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].content : ''  ;
  document.getElementById('canonical-link').href= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].link : ''  ;
  document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
  return (
    <div>

      {
        skeleton ? <Template2 /> :
          <div className="mainwrapper services-parent">
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
