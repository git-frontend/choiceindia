import React from 'react'

import { useState } from "react";
import "./mf-details.scss";
import ScemeName from './ScemeName';
import PerformaceGraph from './PerformaceGraph';
import PortfolioAnalysis from './PortfolioAnalysis';
import FundManager from './FundManager';
import SchemeComparison from './SchemeComparison';
import SchemePerformance from './SchemePerformance';
import MfCalculator from './MfCalculator';



function MFTopFunds() {

  const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [exchangeToggle, setExchangeToggle] = useState(false);

    const onToggleChange = () => {
        setExchangeToggle(!exchangeToggle);
    };

  return (
    <div>
        <section className="fund-listing-details">
          <div className="container">
              <div className="row gx-5 align-items-center">
                  <div className="col-xl-12">
                      <ScemeName />
                      <PerformaceGraph />
                      <PortfolioAnalysis />
                      <FundManager />
                      <SchemeComparison />
                      <SchemePerformance />
                      <MfCalculator />
                    </div>
              </div>
          </div>
      </section>

      <section className='details-more-cont'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-10'>
                        <div className='more-cont-dcr'>
                            <h2 className='title-secnd'>Invest in Quant Tax Plan Growth <span>Online</span></h2>
                            <p>With Choice, grow your wealth in mutual funds as we enable you to buy Quant Tax Plan Growth online. We help you understand all the important details to Invest in Quant Tax Plan Growth Scheme such as its Value, NAV, AUM, Performance, Exit Load, etc. along with its Historical Returns. Also, you can calculate the Expected Future Returns of this scheme using our Lumpsum & SIP Calculator and access its Sector-wise, Company- wise and Category-wise Holdings!</p>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    </div>
  )
}

export default MFTopFunds