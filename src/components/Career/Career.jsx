
import React from "react";
import BannerCareer from './BannerCareer';
import BenefitsPerks from './BenefitsPerks';
import CareerTeam from './CareerTeam';
import CareerJobs from './CareerJobs';
import "../../assets/css/career.scss";
import CareerHeader from './CareerHeader.jsx';

function Career() {

  return (
    <div>
      <CareerHeader />
      <BannerCareer />
      <BenefitsPerks />
      <CareerTeam />
      <CareerJobs />
     
    
    
    </div>
  );
}

export default Career;
