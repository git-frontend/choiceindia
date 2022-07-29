
import React from "react";
import Banner from './Banner';
import InsuranceList from './InsuranceList';



import "./insurance.scss";


function Insurance() {

  

  return (
    <div>
      
      <div className="mainwrapper brokerage-charges-temp">
         
         <Banner />
         <InsuranceList />
        
         
       </div> 
      
    
    </div>
  );
}

export default Insurance;
