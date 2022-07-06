import { useState } from "react";
import React from "react";
import BannerCareer from './BannerCareer';
import BenefitsPerks from './BenefitsPerks';
//import CareerTeam from './CareerTeam';
//import CareerJobs from './CareerJobs';
import "./career.scss";
// import CareerHeader from './CareerHeader.jsx';
import Template1 from '../Common-features/Template1';

function Career() {

  const [skeleton, setSkeleton] = useState(() => true);

  setTimeout(() => {
    setSkeleton(() => false);
  }, 1000)
  
  return (
    <div>
      {
        skeleton ? <Template1 /> :
          <div className="career-parent">
            <BannerCareer />
            <BenefitsPerks />
            {/*<CareerTeam />
      <CareerJobs />*/}
          </div>
      }
    </div>
  );
}

export default Career;
