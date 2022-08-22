
import React from "react";
import Banner from './Banner';
import IPOStocks from './IPOStocks';
import IPOBenifits from './IPOBenifits';
import IPOProcess from './IPOProcess';
import WhyChoiceIPO from './WhyChoiceIPO';
import IPOFaq from './IPOFaq';

import "./ipo-investment.scss";


function EquityBrokingMain() {

  

  

  return (
    <div>
      
      <div className="mainwrapper brokerage-charges-temp">
         
         <Banner />
         <IPOStocks />
         <IPOBenifits />
         <IPOProcess />
         <WhyChoiceIPO />
         <IPOFaq />
        
         
       </div> 
      
    
    </div>
  );
}

export default EquityBrokingMain;
