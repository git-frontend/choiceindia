
import React from "react";
import { useState } from "react";
// import LazyLoader from '../Common-features/LazyLoader';
import FlexitabVehLoan from '../NBFC-Individual-Vehicle/FlexitabVehLoan';
import DocumentrequiredVehLoan from '../NBFC-Individual-Vehicle/DocumentrequiredVehLoan';
import FeaturesVehLoan from '../NBFC-Individual-Vehicle/FeaturesVehLoan';
import WhyFlexiVehLoan from '../NBFC-Individual-Vehicle/WhyFlexiVehLoan';
import AvailPurposeVehLoan from '../NBFC-Individual-Vehicle/AvailPurposeVehLoan';
import StepsliderVehLoan from '../NBFC-Individual-Vehicle/StepsliderVehLoan';

import FlexitabIndivLoan from './FlexitabIndivLoan';
import DocumentrequiredIndivLoan from './DocumentrequiredIndivLoan';
import FeaturesIndivLoan from './FeaturesIndivLoan';
import AvailPurposeIndivLoan from './AvailPurposeIndivLoan';
import WhyFlexiIndivLoan from './WhyFlexiIndivLoan';
import StepsliderIndivLoan from './StepsliderIndivLoan';

import NBFCMenu from '../Common-features/NBFCMenu';

function Loantabs() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>


      <section className="Loan-tabs" >


       

        <div className="d-flex align-items-center tabwrapper">
          <div className="loan-bloc-tabs bloc-tabs">
          <button
            className={toggleState === 1 ? "loanbtn tabs active" : "loanbtn"}
            onClick={() => toggleTab(1)}
          >
            Flexi Credit
          </button>
          <button
            className={toggleState === 2 ? "loanbtn tabs active" : "loanbtn"}
            onClick={() => toggleTab(2)}
          >
            Vehicle Loan
          </button>
          <button
            className={toggleState === 3 ? "loanbtn tabs active" : "loanbtn"}
            onClick={() => toggleTab(3)}
          >
            Study Loan
          </button>
          </div>
          <div className="menu-sub-tabs">
              <NBFCMenu />
          </div>
        </div>


        <div className="indiv-tabs-cont">
          <div className="">
            <div className="content-tabs">
              <div
                className={toggleState === 1 ? "content  active-content" : "content"}
              >

                <div id="flexitab">
                  <FlexitabIndivLoan />
                  <AvailPurposeIndivLoan/>
                  <StepsliderIndivLoan/>
                  <DocumentrequiredIndivLoan/>
                  <FeaturesIndivLoan/>
                  <WhyFlexiIndivLoan/>
                </div>

              </div>

              <div
                className={toggleState === 2 ? "content  active-content" : "content"}
              >
                  <FlexitabVehLoan />
                  <AvailPurposeVehLoan/>
                  <StepsliderVehLoan/>
                  <DocumentrequiredVehLoan/>
                  <FeaturesVehLoan/>
                  <WhyFlexiVehLoan/>
              </div>

              <div
                className={toggleState === 3 ? "content  active-content" : "content"}
              >
                <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <h2 className="title-first text-center"> Study Loan</h2>
                      </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>

        

        

      </section>







    </div>
  );
}

export default Loantabs;
