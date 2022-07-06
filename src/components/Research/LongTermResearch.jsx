
import React from "react";
import { useState } from "react";
import  ImageSub2  from '../../assets/images/icons/stock.svg';
import  ImageSub3  from '../../assets/images/icons/money-bag.svg';
import  ImageSub4  from '../../assets/images/icons/insurance.svg';
import  ImageSub5  from '../../assets/images/icons/equity.svg';

import EconomicAnalysis from './EconomicAnalysis';
import CompanyFundamentals from './CompanyFundamentals';
import IndustryAnalysis from './IndustryAnalysis';
import IpoNfoAnalysis from './IpoNfoAnalysis';




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
                Economic Analysis
                
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Company Fundamentals
                
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >

Industry Analysis
                
              </button>
              <button
                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
              >
                  IPO/NFO Analysis
                
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={toggleState === 1 ? "content  active-content" : "content"}
              >
                  <EconomicAnalysis />
              </div>

              <div
                className={toggleState === 2 ? "content  active-content" : "content"}
              >
                <CompanyFundamentals />
              </div>

              <div
                className={toggleState === 3 ? "content  active-content" : "content"}
              >
                <IndustryAnalysis />
              </div>

              <div
                className={toggleState === 4 ? "content  active-content" : "content"}
              >
                <IpoNfoAnalysis />
              </div>
            </div>

            
          </div>
        </section>

        

        
    
    </div>
  );
}

export default  LongTermResearch;
