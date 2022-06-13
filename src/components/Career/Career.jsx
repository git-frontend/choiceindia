
import React from "react";
import BannerCareer from './BannerCareer';
import BenefitsPerks from './BenefitsPerks';
import CareerTeam from './CareerTeam';
import CareerJobs from './CareerJobs';
import "./career.scss";
import Template1 from '../Common-features/Template1';
import { useState } from 'react';
// import CareerHeader from './CareerHeader.jsx';

function Career() {

  const [skeleton, setSkeleton] = useState(true);

  const myTimeout = setTimeout(myGreeting, 1000);

  
  function myGreeting() {
    setSkeleton(() => false);
  }
  
  return (
    <div>
      {
        skeleton ? <Template1 /> :
          <div>
            <BannerCareer />
            <BenefitsPerks />
            <CareerTeam />
            <CareerJobs />
          </div>
      }
    </div>
  );
}

export default Career;
