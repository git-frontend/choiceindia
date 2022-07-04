
import React from "react";
import { useState } from "react";
import  ImageSub2  from '../../assets/images/icons/stock.svg';
import  ImageSub3  from '../../assets/images/icons/money-bag.svg';
import  ImageSub4  from '../../assets/images/icons/insurance.svg';
import  ImageSub5  from '../../assets/images/icons/equity.svg';

import PricingStocks from './PricingStocks';
import PricingEquity from './PricingEquity';
import PricingCurrency from './PricingCurrency';
import PricingCommodity from './PricingCommodity';




function LongTermResearch() {

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
								<h3 className="title-first" >Long Term Research </h3>
							</div>
						</div>
					</div>
        <div className="research-bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                <div className="bloc-tabs-sub">
                    <h4>Economic Analysis</h4>
                </div>
                
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                <div className="bloc-tabs-sub">
                    <h4>Company Fundamentals</h4>
                </div>
                
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >

                  <div className="bloc-tabs-sub">
                    <h4>Industry Analysis</h4>
                  </div>
                
              </button>
              <button
                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
              >
                  <div className="bloc-tabs-sub">
                    <h4>IPO/NFO Analysis</h4>
                  </div>
                
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

export default  LongTermResearch;
