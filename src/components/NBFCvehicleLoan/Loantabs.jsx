
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import Flexitab from './flexitab';

function Loantabs() {

  return (
    <div>
      
     
      <section className="Loan-tabs" >
       
        
          <div className="loan-bloc-tabs">
            <div className="loanbtn " onClick={() => { chapterScroll('flexitab') }}> Flexi Credit</div>
            <div className="loanbtn active "> Vehicle Loan</div>
            <div className="loanbtn"> Study Loan</div>
          </div>


          <div id="flexitab">
			<Flexitab />
		</div>
         

         
        
                         
                         

                          
                         
      </section>

    

   
    
    </div>
  );
}

export default Loantabs;
