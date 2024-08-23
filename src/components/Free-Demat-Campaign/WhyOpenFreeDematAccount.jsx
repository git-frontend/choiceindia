
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import LowDPCharges from '../../assets/images/free-demat-compaign/free-demat-account-opening-with-low-dp-charges.svg';
import PaisaBrokerage from '../../assets/images/free-demat-compaign/open-low-brokerage-demat-account.svg';
import ZeroAutoSquare from '../../assets/images/free-demat-compaign/free-demat-account-with-zero-auto-square-off-charges.svg';
import FreeCall from '../../assets/images/free-demat-compaign/open-demat-account-with-free-call-for-trade-facility.svg';

function WhyOpenFreeDematAccount() {
  function chapterScroll(id) {
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
  return (
    <div>
    <section className="why-open-freedematac">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                   <h2 className="title-first text-center">Free Demat with <span>Low Trading Costs</span></h2>
                  <div className="row justify-content-center row-pd">
                      <div className="col-md-3 col-sm-12">
                       <div className="benefit-list">
                          <div className="benefit-img">
                            <LazyLoader src={LowDPCharges} className={'img-fluid'} width={"76"} height={"109"} alt={"Free Demat Account Opening with Low DP Charges"}/>
                          </div>
                          <div className="benefit-item">
                            <h3 className="title-cam">Low DP Charges</h3>
                          </div>
                       </div>
                      </div>
                      <div className="col-md-3 col-sm-12">
                        <div className="benefit-list">
                            <div className="benefit-img">
                              <LazyLoader src={PaisaBrokerage} className={'img-fluid'} width={"109"} height={"109"} alt={"Open a Low Brokerage Demat Account"}/>
                            </div>
                            <div className="benefit-item">
                              <h3 className="title-cam">2 Paisa Brokerage for Intraday Trades</h3>
                            </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-12">
                        <div className="benefit-list">
                            <div className="benefit-img">
                              <LazyLoader src={ZeroAutoSquare} className={'img-fluid'} width={"109"} height={"109"} alt={"Free Demat Account with Zero Auto Sqare Off Charges"}/>
                            </div>
                            <div className="benefit-item">
                              <h3 className="title-cam">Zero Auto Square off Charges</h3>
                            </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-12">
                        <div className="benefit-list">
                            <div className="benefit-img">
                              <LazyLoader src={FreeCall} className={'img-fluid'} width={"110"} height={"108"} alt={"Open Demat Account with Free Call for Trade Facility"}/>
                            </div>
                            <div className="benefit-item">
                              <h3 className="title-cam">Free Call for Trade Facility</h3>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div className="text-center">
                    <a onClick={()=>{chapterScroll('dematform')}} className="cursor-pointer"><span className="btn-bg btn-bg-dark">Open Now</span></a>
                  </div>
               </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default WhyOpenFreeDematAccount;
