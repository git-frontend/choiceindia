
import React from "react";
function CreateBacktestStrategies() {

  return (
    <div>
    <section className="create-backtest-sec" id="showForm">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                   <h2 className="title-first text-center">Create and Backtest Your Strategies <br/>Free of Cost</h2>
                </div>
               <div className="col-md-12">
               <div className="row justify-content-between create-backtest">
                <div className="col-xl-4 col-md-6">
                  <div className="create-backtest-list">
                     <div className="backtest-item">
                        <h4 className="single-ttl">Create a Trading Strategy</h4>
                      </div>
                     <div className="backtest-item">
                        <h4 className="single-ttl">Backtest Your Strategy</h4>
                      </div>
                      <div className="backtest-item">
                        <h4 className="single-ttl">Virtual and Auto Trade Strategy</h4>
                      </div>
                      <div className="backtest-item">
                        <h4 className="single-ttl">Advanced Scanners</h4>
                      </div>
                      <div className="backtest-item">
                        <h4 className="single-ttl">Connect with TradingView</h4>
                        </div>
                  </div>
                    
                    </div>
                    <div className="col-xl-7 col-md-6">
                      <div className="video-height">
                      <iframe src="https://www.youtube.com/embed/8PTpITpHSMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="video-width"></iframe>
                      </div>
                    </div>
               </div>
               </div>
               <div className="col-md-12">
                  <div className="text-center btn2">
                    <a onClick={()=>{chapterScroll3('dematform')}} className="btn-bg btn-bg-dark cursor-pointer"><span>Get Free Access Now</span></a>
                  </div>
               </div>
            </div>
        </div>
    </section>

    

   
    
    </div>
  );
}

export default CreateBacktestStrategies;
