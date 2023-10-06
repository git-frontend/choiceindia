import React from 'react'

import { useState, useEffect } from "react";
import "./mf-details.scss";
import ScemeName from './ScemeName';
import PerformaceGraph from './PerformaceGraph';
import PortfolioAnalysis from './PortfolioAnalysis';
import FundManager from './FundManager';
import SchemeComparison from './SchemeComparison';
import SchemePerformance from './SchemePerformance';
import MfCalculator from './MfCalculator';
import DematAccountForm from '../Common-features/DematAccountForm';
import FixedForm from './FixedForm';


function MFTopFunds() {

  const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [exchangeToggle, setExchangeToggle] = useState(false);

    const onToggleChange = () => {
        setExchangeToggle(!exchangeToggle);
    };
    const [name, setName] = useState('hideform');
    const getPosition = () => {
        const element = document.getElementById("showForm");
        if (element) {
            const rect = element.getBoundingClientRect();

            if (rect.top.toFixed() < 259) {
                setName('visibleform');
            } else {
                setName('hideform');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', getPosition);
    }, []);


    const [name2, setName2] = useState('hideform2');
  const getPosition2 = () => {
      const element = document.getElementById("showForm");
      if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top.toFixed() < 259) {
              setName2('visibleform2');
          } else {
              setName2('hideform2');
          }
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', getPosition2);
  }, []);




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
              <div className={name}>
                <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                    <a className="primary-orange-btn scroll-top-account openbtn" href='/open-free-demat-account'>Open Free Account</a>
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
      <div className={name2}>
        <FixedForm/>
        </div>
      
    </div>
  )
}

export default MFTopFunds