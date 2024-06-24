
import React from "react";
import { useState } from "react";


import SBDesk from './SBDesk';
import CQuant from './CQuant';





function ShortTermResearch() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div id="shortTermSection">

        <section className="research-banner-tabs short-term-research">
        <div className="container">
            
        <div className="row">
						<div className="col-md-12">
							<div className="heading-sec heading-sec-top" id="shortterm-scroll">
								<h3 className="title-first" >Short Term Research </h3>
							</div>
						</div>
					</div>
        <div className="research-bloc-tabs SB-bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Sumeet Bagadia’s Desk
                
              </button>
            </div>

            <div className="content-tabs SB-content-tab">
            {toggleState === 1 ?  <div
                className="content  active-content"
              >
                  <SBDesk />
              </div>:<div
                className="content  active-content"
              >
                <CQuant />
              </div>}

              

              
            </div>

            
          </div>
        </section>

        

        
    
    </div>
  );
}

export default  ShortTermResearch;
