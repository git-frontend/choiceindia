
import React from "react";
import { useState } from "react";
import EconomicAnalysis from './EconomicAnalysis';
import CompanyFundamentals from './CompanyFundamentals';
import IndustryAnalysis from './IndustryAnalysis';
import IpoNfoAnalysis from './IpoNfoAnalysis';
import ResearchService from "../../Services/ResearchService";




function LongTermResearch() {

  const [toggleState, setToggleState] = useState(1);
  const [list,setList] = useState([]);
  const [data,setData] = useState('')
  let Eco='41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad';

  const toggleTab = (index) => {
    setToggleState(index);
  };

  function loadResearch() {
    ResearchService.commodityRes(Eco).then(
      res => {
        setList(res);
      }
    )
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
                onClick={() => {toggleTab(1);setData('41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad'); loadResearch(data)}}
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
