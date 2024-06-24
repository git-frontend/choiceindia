
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

import FlexitabSolarFinanace from '../NBFC-Individual-Solar/FlexitabSolarFinanace';
import DocumentrequiredSolarFinanace from '../NBFC-Individual-Solar/DocumentrequiredSolarFinanace';
import FeaturesSolarFinanace from '../NBFC-Individual-Solar/FeaturesSolarFinanace';
import AvailPurposeSolarFinanace from '../NBFC-Individual-Solar/AvailPurposeSolarFinanace';
import StepsliderSolarFinanace from '../NBFC-Individual-Solar/StepsliderSolarFinanace';
import AdvantagesPersonal from '../NBFC-Individual-Personal/AdvantagesPersonal';
import AvailPurposePersonalFinanace from '../NBFC-Individual-Personal/AvailPurposePersonalFinanace';
import EligiblePersonal from '../NBFC-Individual-Personal/EligiblePersonal';
import PurposePersonal from '../NBFC-Individual-Personal/PurposePersonal';
import StepsliderPersonalFinanace from '../NBFC-Individual-Personal/StepsliderPersonalFinanace';
import DocumentrequiredPersonalFinanace from '../NBFC-Individual-Personal/DocumentrequiredPersonalFinanace';
import FeaturesPersonalFinanace from '../NBFC-Individual-Personal/FeaturesPersonalFinanace';
import nbfcFormPage from "../../Data/nbfcformpage";
import NBFCMenu from '../Common-features/NBFCMenu';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import NbfcForm from "../Common-features/NbfcForm";
function Loantabs() {
  const [toggleState, setToggleState] = useState(1);
  const [data, setData] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  
  return (
    <div>


      <section className="Loan-tabs" >




        <div className="d-flex align-items-center tabwrapper" >
          <div className="loan-bloc-tabs bloc-tabs">
            <button
              className={toggleState === 1 ? "loanbtn tabs active" : "loanbtn"}
              onClick={() => { toggleTab(1); setData(0) }}
            >
              Flexi Credit
            </button>
            <button
              className={toggleState === 2 ? "loanbtn tabs active" : "loanbtn"}
              onClick={() => { toggleTab(2); setData(1) }}
            >
              Vehicle Loan
            </button>
            <button
              className={toggleState === 3 ? "loanbtn tabs active" : "loanbtn"}
              onClick={() => { toggleTab(3); setData(2) }}
            >
              Solar Finance
            </button>
            <button
              className={toggleState === 4 ? "loanbtn tabs active" : "loanbtn"}
              onClick={() => { toggleTab(4); setData(3) }}
            >
              Personal Loan
            </button>
          </div>
          <div className="menu-sub-tabs">
            <NBFCMenu />
          </div>
        </div>

        <section className="flexitabcontent" >
          <div className="container">
            <div className="row ">
              <div className=" col-md-7">
                {
                  toggleState == 4 ? <div className="heading-sec ">
                    <h2 className="title-first flexititle">{nbfcFormPage[data].title}</h2>
                    <p className="para">{nbfcFormPage[data].content}</p>
                    <br /> <p className="para"> {nbfcFormPage[data].content2}<br /><br/></p>
                    <p className="para"> {nbfcFormPage[data].content3} <span className="psnl-click"><a href="https://www.hdfcbank.com/personal/borrow/popular-loans/personal-loan" target="_blank">Click here</a></span> to know more <br/><br/><br/>
                      <a href={nbfcFormPage[data].Link}><span className="aply-btn">{nbfcFormPage[data].button}</span></a></p>
                  </div> : 
                  <div className="heading-sec ">
                    <h2 className="title-first flexititle">{nbfcFormPage[data].title}</h2>
                    <p className="para">{nbfcFormPage[data].content}</p>
                    <br /> <p className="para"> {nbfcFormPage[data].content2}<br />
                    <br/>
                      <br /><a href={nbfcFormPage[data].Link}><span className="aply-btn">{nbfcFormPage[data].button}</span></a></p>
                  </div>}
                

              </div>
              <div className=" col-md-5" id="nbfcForm">
              {
                        toggleState === 4 ?
                                <div className="formwrap float-rights">
                                <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                            <NbfcForm  ispersonal={true}/> 
                                </GoogleReCaptchaProvider>  
                                </div>:

                                <div className="formwrap float-rights">
                                <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                            <NbfcForm /> 
                                </GoogleReCaptchaProvider>  
                                </div>
                    }
              </div>

            </div>

          </div>
        </section>


        <div className="indiv-tabs-cont">
          <div className="">
            <div className="content-tabs">
              <div
                className={toggleState === 1 ? "content  active-content" : "content"}
              >

                {/* <div id="flexitab"> */}
                <FlexitabIndivLoan />
                <AvailPurposeIndivLoan />
                <StepsliderIndivLoan />
                <DocumentrequiredIndivLoan />
                <FeaturesIndivLoan />
                <WhyFlexiIndivLoan />
                {/* </div> */}

              </div>

              <div
                className={toggleState === 2 ? "content  active-content" : "content"}
              >
                <FlexitabVehLoan />
                <AvailPurposeVehLoan />
                <StepsliderVehLoan />
                <DocumentrequiredVehLoan />
                <FeaturesVehLoan />
                <WhyFlexiVehLoan />
              </div>

              <div
                className={toggleState === 3 ? "content  active-content" : "content"}
              >
                <FlexitabSolarFinanace />
                <AvailPurposeSolarFinanace />
                <StepsliderSolarFinanace />
                <DocumentrequiredSolarFinanace />
                <FeaturesSolarFinanace />
              </div>
              <div
                className={toggleState === 4 ? "content  active-content" : "content"}
              >
                <AdvantagesPersonal/>
                <AvailPurposePersonalFinanace />
                <EligiblePersonal/>
                <PurposePersonal/>
                <StepsliderPersonalFinanace/>
                <DocumentrequiredPersonalFinanace />
                <FeaturesPersonalFinanace />
              </div>
            </div>
          </div>
        </div>





      </section>







    </div>
  );
}

export default Loantabs;
