
import React from "react";
import Banner from './Banner';
import InsuranceList from './InsuranceList';
import HowItWorks from './HowItWorks';
import Benefits from './Benefits';



import "./insurance.scss";


function Insurance() {

  

  return (
    <div>
      
      <div className="mainwrapper brokerage-charges-temp">
         
         <Banner />
         <InsuranceList />
         <HowItWorks />
         <Benefits />
        
         
       </div> 
      
    
    </div>
  );
}

export default Insurance;
