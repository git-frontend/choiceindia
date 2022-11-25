
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import Flexitab from './flexitab';
import Features from './Features';
import Stepslider from './Stepslider';
import WhyFlexi from './WhyFlexi';
import AvailPurpose from './AvailPurpose';
import NBFCMenu from '../Common-features/NBFCMenu';
import Documentrequired from './Documentrequired';

function Loantabs() {

  return (
    <div>
      
     
      <section className="Loan-tabs" >
       
        <div className="d-flex align-items-center">
          <div className="loan-bloc-tabs">
            <div className="loanbtn active" onClick={() => { chapterScroll('flexitab') }}> Flexi Credit</div>
            <div className="loanbtn "> Vehicle Loan</div>
            <div className="loanbtn"> Study Loan</div>
          </div>
          <div className="menu">
              <NBFCMenu />
          </div>
        </div>
          

          <div id="flexitab">
			      <Flexitab />
            <AvailPurpose/>
            <Stepslider/>
            <Documentrequired/>
            <Features/>
            <WhyFlexi/>
		      </div>
         

         
        
                         
                         

                          
                         
      </section>

    

   
    
    </div>
  );
}

export default Loantabs;
