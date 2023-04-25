
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import CreateBacktestStrategie from '../../assets/images/free-demat-compaign/create-backtest-strategies.webp'

function CreateBacktestStrategies() {
  return (
    <div>
    <section className="create-backtest-sec">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                   <h2 className="title-secnd text-center">Develop Your Own Strategy in 5 Minutes!</h2>
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
                    <LazyLoader src={CreateBacktestStrategie} className={'img-fluid'} width={"800"} height={"600"} alt={""}/>
                    </div>
               </div>
               <div className="col-md-12">
                  <div className="text-center">
                    <a target="_blank" class="cursor-pointer"><span class="btn-bg btn-bg-dark">Get Free Access Now</span></a>
                  </div>
               </div>
            </div>
        </div>
    </section>

    

   
    
    </div>
  );
}

export default CreateBacktestStrategies;
