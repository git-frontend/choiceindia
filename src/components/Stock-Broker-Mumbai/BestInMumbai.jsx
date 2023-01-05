
import React, { useState } from "react";
import LazyLoader from '../Common-features/LazyLoader';
import BestMumbai from '../../assets/images/stock-broker-mumbai/best-in-mumbai.webp';
function BestInMumbai() {

  const [showterm, setshowterm]=useState(false);
  return (
    <div>
      
    <section className="best-in-mumbai">
      <div className="container">
        <div className="row">
    
            <div className="col-md-6">
              <div className="left-sec heading-sec">
                <h2 className="title-secnd mb-4">Best Stock Broker in Mumbai</h2>
               
               
              
              

                <div className="">
                <p className="para">
                Choice India comes with a legacy of two decades serving the financial sector and has earned its respect as one of the leading stock brokers in Mumbai. It extends its services in the space; of; broking &amp; distribution, wealth planning, insurance, loans, capital advisory, management consultancy, government advisory and tax advisory. 
                </p>
                <p className="para mt-2">
                The research advisory cell gives recommendations by experts, and Signal, the automated trading platform provides trading calls for investors without any human intervention. The Stratezy tool lets the traders create, backtest, and optimize live trades. Moreover, one can invest in handpicked baskets curated by experts.
                </p>

                  {!showterm ? <span onClick={()=>{setshowterm(true);console.log("hhh")}}>... <em className="btn-read">Read more</em></span>:""}
                  {showterm ?<span>&nbsp;  
                    <p className="para mt-3">
                Choice India, through its trading app, Choice FinX, aims to provide end-to-end financial solutions in one single app with equity, mutual funds, and insurance. It provides advanced features for an investor to make his investment journey seamless with the best trading facility and the lowest brokerage charges.
                </p>
                <p className="para mt-3 mb-0">
                The financial offerings are designed in a manner to simplify personal finances and investment stems that would help create wealth to each and every individual and experience ‘The Joy of Earning.’

                </p>
                  <span onClick={()=>{setshowterm(false);console.log("hhh")}}>&nbsp;<em className="btn-read">Read less</em></span></span>:""}</div>


              </div>

            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="right-sec  best-mumbai-img">
              <LazyLoader src={BestMumbai} alt={""} className={"img img-fluid"} width={"258"} height={"238"}/>
              </div>
            </div>
          
        </div>
      </div>
    </section>
      

    </div>
  );
}

export default BestInMumbai;
