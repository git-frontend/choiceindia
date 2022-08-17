
import React from "react";
import Banner from './Banner';
import WhyInvestMF from './WhyInvestMF';
import IPOBenifits from './IPOBenifits';
import WhyChoiceInvestment from './WhyChoiceInvestment';
import ExploreBestMF from './ExploreBestMF';
import IPOFaq from './IPOFaq';

import "./mf-investment.scss";


function MutualFundsSEO() {

  

  

  return (
    <div>
      
      <div className="mainwrapper mfi-main">
         
         <Banner />
         <WhyInvestMF />
         <IPOBenifits />
         <WhyChoiceInvestment />
         <ExploreBestMF />
         {/* <IPOFaq /> */}
        
         
       </div> 
      
    
    </div>
  );
}

export default MutualFundsSEO;
