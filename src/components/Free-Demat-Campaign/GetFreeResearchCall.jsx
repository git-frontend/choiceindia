
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import DailyResearchCalls from '../../assets/images/free-demat-compaign/open-demat-account-with-daily-research-calls.webp';
import AutomatedTradingCalls from '../../assets/images/free-demat-compaign/open-demat-account-with-automated-trading-calls.webp'

function GetFreeResearchCall() {
  return (
    <div>
    <section className="get-research-call" id="showForm">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                   <h2 className="title-first text-center">Open Demat Account to Get <br/><span>Free Research Calls</span></h2>
                </div>
               <div className="daily-automated-call">
                  <div className="daily-automated-card left-sec">
                  <div>
                  <h3>Daily Research Calls</h3>
                       <p>Get access to Expert research calls for intraday, F&O, Commodity and Currency Calls from the experts within the Choice FinX app.</p>
                  </div>
                       <div className="text-center">
                        <LazyLoader src={DailyResearchCalls} className={'img-fluid'} width={"370"} height={"588"} alt={"Open Demat Account with Daily Research Calls"}/>
                      </div>
                  </div>
                  <div className="daily-automated-card right-sec"> 
                   <div>
                   <h3>Automated Trading Calls</h3>
                      <p>Our AI based trading signal delivers your real time trading calls in multi time frame breakouts.</p>
                   </div>
                      <div className="text-center">
                        <LazyLoader src={AutomatedTradingCalls} className={'img-fluid'} width={"370"} height={"588"} alt={"Open Demat Account with Automated Trading Calls"}/>
                      </div>
                  </div>
               </div>
            </div>
        </div>
    </section>

    

   
    
    </div>
  );
}

export default GetFreeResearchCall;
