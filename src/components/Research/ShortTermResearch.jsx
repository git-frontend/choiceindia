
import React from "react";
import { useState } from "react";


import PricingStocks from './PricingStocks';





function ShortTermResearch() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>

        <section className="research-banner-tabs">
        <div className="container">
            
        <div className="row">
						<div className="col-md-12">
							<div className="heading-sec heading-sec-top">
								<h3 className="title-first" >Short Term Research </h3>
							</div>
						</div>
					</div>
        <div className="research-bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Sumeet Bagadia’s Desk
                
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                C-Quant
                
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={toggleState === 1 ? "content  active-content" : "content"}
              >
                  <PricingStocks />
              </div>

              <div
                className={toggleState === 2 ? "content  active-content" : "content"}
              >
                {/* <PricingEquity /> */}
              </div>

              <div
                className={toggleState === 3 ? "content  active-content" : "content"}
              >
                {/* <PricingCurrency /> */}
              </div>

              <div
                className={toggleState === 4 ? "content  active-content" : "content"}
              >
                {/* <PricingCommodity /> */}
              </div>
            </div>

            
          </div>
        </section>

        

        
    
    </div>
  );
}

export default  ShortTermResearch;
