
import React from "react";
import { useState } from "react";
// import LazyLoader from '../Common-features/LazyLoader';
import FlexitabVehLoan from './FlexitabVehLoan';
import DocumentrequiredVehLoan from './DocumentrequiredVehLoan';
import FeaturesVehLoan from './FeaturesVehLoan';
import Stepslider from './Stepslider';
import WhyFlexiVehLoan from './WhyFlexiVehLoan';
import AvailPurposeVehLoan from './AvailPurposeVehLoan';

import FlexitabIndivLoan from './FlexitabIndivLoan';
import DocumentrequiredIndivLoan from './DocumentrequiredIndivLoan';
import FeaturesIndivLoan from './FeaturesIndivLoan';
import AvailPurposeIndivLoan from './AvailPurposeIndivLoan';
import WhyFlexiIndivLoan from './WhyFlexiIndivLoan';
function Loantabs() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>


      <section className="Loan-tabs" >


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


        <div className="">
          <div className="">
            <div className="content-tabs">
              <div
                className={toggleState === 1 ? "content  active-content" : "content"}
              >

                <div id="flexitab">
                  <FlexitabIndivLoan />
                  <AvailPurposeIndivLoan/>
                  <Stepslider/>
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
                  <Stepslider/>
                  <DocumentrequiredVehLoan/>
                  <FeaturesVehLoan/>
                  <WhyFlexiVehLoan/>
              </div>

              <div
                className={toggleState === 3 ? "content  active-content" : "content"}
              >
                <h2>Content 3</h2>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                  nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                  Accusamus in quia odit aspernatur provident et ad vel distinctio
                  recusandae totam quidem repudiandae omnis veritatis nostrum
                  laboriosam architecto optio rem, dignissimos voluptatum beatae
                  aperiam voluptatem atque. Beatae rerum dolores sunt.
                </p>
              </div>
            </div>
          </div>
        </div>

        

        

      </section>







    </div>
  );
}

export default Loantabs;
