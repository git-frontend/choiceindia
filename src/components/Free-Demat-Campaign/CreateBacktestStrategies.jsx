
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import NoAmc from '../../assets/images/free-demat-compaign/free-demat-account-with-no-annual-charges.svg';
import ResearchCalls from '../../assets/images/free-demat-compaign/free-demat-account-with-expert-research-calls.svg';
import ResearchTools from '../../assets/images/free-demat-compaign/open-demat-account-with-free-research-tools.svg';


function CreateBacktestStrategies() {
  return (
    <div>
    <section className="create-backtest-sec">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                   <h2 className="title-secnd text-center">Create and Backtest Your Strategies <br/>Free of Cost</h2>
                </div>
               <div className="create-backtest">
                <div className="left-sec">
                        <ul className="create-backtest-list">
                            <li className="backtest-item cursor-pointer">Create a Trading Strategy</li>
                            <li className="backtest-item cursor-pointer">Backtest Your Strategy</li>
                            <li className="backtest-item cursor-pointer">Virtual and Auto Trade Strategy</li>
                            <li className="backtest-item cursor-pointer">Advanced Scanners</li>
                            <li className="backtest-item cursor-pointer">Connect with TradingView</li>
                        </ul>
                    </div>
                    <div className="right-sec">
                    </div>
               </div>
            </div>
        </div>
    </section>

    

   
    
    </div>
  );
}

export default CreateBacktestStrategies;
