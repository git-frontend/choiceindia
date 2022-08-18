
import React from "react";
import Banner from './Banner';
import WhyInvestMF from './WhyInvestMF';
import MfBenifits from './MfBenifits';
import WhyChoiceInvestment from './WhyChoiceInvestment';
import ExploreBestMF from './ExploreBestMF';
import MFTestimonials from './MFTestimonials';
import MFPartner from './MFPartner';
import MFFaq from './MFFaq';

import "./mf-investment.scss";


function MutualFundsSEO() {

  

  

  return (
    <div>
      
      <div className="mainwrapper mfi-main">
         
         <Banner />
         <WhyInvestMF />
         <MfBenifits />
         <WhyChoiceInvestment />
         <ExploreBestMF />
         <MFTestimonials />
         <MFPartner />
         <MFFaq />
        
         
       </div> 
      
    
    </div>
  );
}

export default MutualFundsSEO;
