import React, { useState, useRef } from 'react';
import icon1 from './images/stratezy-page/own-stratezy.svg';
import slider1 from './images/stratezy-page/Optimize_your_Risk_Reward.webp';
import slider2 from './images/stratezy-page/Backtest_in_Jiffy.webp';
import slider3 from './images/stratezy-page/Create_your_own_Strategy.webp';
import slider4 from './images/stratezy-page/LiveTrade.webp';
import slider5 from './images/stratezy-page/VirtualTrade.webp';
import icon3 from './images/stratezy-page/live-trade.svg';
import icon5 from './images/stratezy-page/virtual-trade.svg';
import icon4 from './images/stratezy-page/backtest-trading-strategy.svg';
import icon2 from './images/stratezy-page/optimise-trading-strategy.svg';
import LazyLoader from "../Common-features/LazyLoader";



function WhyStrategy() {
    const environment = 'Live';
    const [valRight, setValRight] = useState(() => 0);


    const [dataObj, setdataObj] = useState(() => [
        {
            image: `${slider3}`,
            icon: `${icon1}`,
            heading: "Create your own Strategy",
            description: "Create unlimited strategies with a wide variety of Technical Indicators"
        },


        {
            image: `${slider1}`,
            icon: `${icon2}`,
            heading: "Optimize your Risk-reward ",
            description: "Optimize your strategy with Target & SL parameters for better returns"

        },

        {
            image: `${slider4}`,
            icon: `${icon3}`,
            heading: "Live Trade",
            description: "Automate your trades by going live with your optimised strategies"

        },

    ])

    const [counterRight, setcounterRight] = React.useState(() => 0);
    const [disableRight, setdisableRight] = React.useState(() => false);
    const [disableLeft, setdisableLeft] = React.useState(() => true);
    
  
  function toggleForward() {
    setcounterRight(() => counterRight + 1);
    
    if(counterRight == 1) {
      setdisableRight(true);
      setdisableLeft(false);
    }else{
      setdisableLeft(false);
      setdisableRight(false);
    }
     
  }
  
  
  function toggleBackward() {
    setcounterRight(() => counterRight - 1);
    
    if (counterRight == 1) {
      setdisableLeft(true)
      setdisableRight(false);
    }else{
      setdisableLeft(false);
      setdisableRight(false);
    }
  }
  
  
  
    const config = {
      UATURL: 'https://betajiffy.choicebroking.in/auth/login?redirectUrl=https://stratezy.choiceindia.com/dashboard',
      LiveURL: 'https://finx.choiceindia.com/auth/login?redirectUrl=https://stratezy.choiceindia.com/dashboard'
  };
  const checkURL = config[environment + 'URL'];
  
  
  
  
    return (
  
      <section className="why-stratezy">
        <div className="container">
        
          <div className="row" id="explore" >
            <div className="col-md-7 order2" >
              <div className="screen">
                <img src={dataObj[counterRight].image}  className="img-fluid" alt="Why Stratezy" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="rightwrap">
                <div className="heading-sec text-center">
                  <h2 className="title">Why Stratezy?</h2>
                </div>
  
                <div className="sliderwrap">
                   <div className="slider-item active">
                    <img src={dataObj[counterRight].icon} className="slider-icon" alt="Create Your Own Trading Strategy" />
                    <p className="heading">{dataObj[counterRight].heading}</p>
                    <p className="subtext">{dataObj[counterRight].description}</p>
                  </div>
                </div>
                <div className="sliderbtn">
  
                <button className="next-button round-shape" disabled={disableLeft} onClick={toggleBackward}><svg id="baseline-arrow_forward-24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">	
                    <path id="Path_1980" data-name="Path 1980" d="M24,0H0V24H24Z" fill="none"/>	
                    <path className="white" id="Path_1981" data-name="Path 1981" d="M12,4l1.41,1.41L7.83,11H20v2H7.83l5.58,5.59L12,20,4,12Z" fill="#221F20"/>	
                    </svg></button>
                <button className="previous-button round-shape" disabled={disableRight} onClick={toggleForward} ><svg id="baseline-arrow_forward-24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">	
                  <path id="Path_1980" data-name="Path 1980" d="M0,0H24V24H0Z" fill="none"/>	
                  <path className="white" id="Path_1981" data-name="Path 1981" d="M12,4,10.59,5.41,16.17,11H4v2H16.17l-5.58,5.59L12,20l8-8Z" fill="#221F20"/>	
                </svg></button>
              </div>
              </div>
            
            </div>
            <div className="col-md-12 mt-5 d-flex justify-content-center">
                  <a href={`${checkURL}`} className="btn-bg btn-banner">Let's get Started</a>
            </div>
          </div>
          
        </div>
      </section>
  
    )
  }
export default WhyStrategy;