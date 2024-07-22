
import React, { useRef } from "react";
import { useState } from "react";
import  ImageSub2  from '../../assets/images/icons/stock-market-investing.svg';
import  ImageSub3  from '../../assets/images/icons/mutual-funds-investment.svg';
import  ImageSub4  from '../../assets/images/icons/insurance.svg';
import  ImageSub5  from '../../assets/images/icons/equity.svg';

import PricingStocks from './PricingStocks';
import PricingEquity from './PricingEquity';
import PricingCurrency from './PricingCurrency';
import PricingCommodity from './PricingCommodity';
import LazyLoader from "../Common-features/LazyLoader";
import { ref } from "yup";



function PricingBannerTab() {

  const [toggleState, setToggleState] = useState(() => 1);
  const myRef = useRef(null); 

  const toggleTab = (index) => {
    setToggleState(index);
    changeSection();
  };

  function changeSection(){
    if(toggleState == 1){
      var element = document.getElementById('scrollstocks');
      var headerOffset = 140;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    if(toggleState == 2){
      var element = document.getElementById('scrollequity');
      var headerOffset = 140;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    if(toggleState == 3){
      var element = document.getElementById('scrollcurrency');
      var headerOffset = 140;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    if(toggleState == 4){
      var element = document.getElementById('scrollcommodity');
      var headerOffset = 140;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  

  return (
    <div>

        <section className="pricing-banner-tabs">
        <div className="container">
            
        <div className="row">
						<div className="col-md-12">
							<div className="heading-sec heading-sec-top">
								<h3 className="title-first" >Pricing, Returns &amp; Calculators</h3>
							</div>
						</div>
					</div>
        <div className="pricing-bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                <div className="bloc-tabs-sub">
                <LazyLoader src={ImageSub2} alt={"Mutual Funds"} className={"tab-ico img-fluid"} width={"50"} height={"50"} />
                    <h4>Stocks</h4>
                    <p>Explore intraday and delivery pricing for equity stocks and calculate net returns</p>
                </div>
                
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                <div className="bloc-tabs-sub">
                <LazyLoader src={ImageSub5} alt={"Mutual Funds"} className={"tab-ico"} width={"50"} height={"50"} />
                    <h4>Equity F &amp; O</h4>
                    <p>Try brokerage and returns calculators for futures and options in equity segment</p>
                </div>
                
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >

                  <div className="bloc-tabs-sub">
                  <LazyLoader src={ImageSub3} alt={"Mutual Funds"} className={"tab-ico"} width={"50"} height={"50"} />
                    <h4>Currency</h4>
                    <p>Explore currency options and futures brokerage, pricing and returns with calculators</p>
                  </div>
                
              </button>
              <button
                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
              >
                  <div className="bloc-tabs-sub">
                  <LazyLoader src={ImageSub4} alt={"Mutual Funds"} className={"tab-ico"} width={"50"} height={"50"}/>
                    <h4>Commodity</h4>
                    <p>Calculate commodity market rates and returns with futures and options calculators</p>
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
                <PricingEquity />
              </div>

              <div
                className={toggleState === 3 ? "content  active-content" : "content"}
              >
                <PricingCurrency />
              </div>

              <div
                className={toggleState === 4 ? "content  active-content" : "content"}
              >
                <PricingCommodity />
              </div>
            </div>

            
          </div>
        </section>

        

        
    
    </div>
  );
}

export default  PricingBannerTab;
