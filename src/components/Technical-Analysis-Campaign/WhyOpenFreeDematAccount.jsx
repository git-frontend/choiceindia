
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import LowDPCharges from '../../assets/images/technical-analysis/free-demat-account-with-low-dp-charges.svg';
import PaisaBrokerage from '../../assets/images/technical-analysis/zero-amc-demat-account.svg';
import ZeroAutoSquare from '../../assets/images/technical-analysis/demat-account-with-free-research.svg';
import FreeCall from '../../assets/images/technical-analysis/demat-account-with-no-auto-square-off-charges.svg';

function WhyOpenFreeDematAccount() {
  return (
    <div>
    <section className="open-Demat-sec">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                   <h2 className="title-secnd text-center">Open 100% Free Demat Account</h2>
                  <div className="open-percent-row">
                      <div className="open-percent-item">
                       <div className="benefit-list">
                          <div className="benefit-img">
                            <LazyLoader src={LowDPCharges} className={'img-fluid'} width={"63"} height={"64"} alt={"Free Demat Account with Low DP Charges"}/>
                          </div>
                          <div className="benefit-item">
                            <h3 className="title-cam">Low DP Charges (Rs. 10 Only)</h3>
                          </div>
                       </div>
                      </div>
                      <div className="open-percent-item">
                        <div className="benefit-list">
                            <div className="benefit-img">
                              <LazyLoader src={PaisaBrokerage} className={'img-fluid'} width={"63"} height={"64"} alt={"Zero AMC Demat Account"}/>
                            </div>
                            <div className="benefit-item">
                              <h3 className="title-cam">Free AMC for First Year</h3>
                            </div>
                        </div>
                      </div>
                      <div className="open-percent-item">
                        <div className="benefit-list">
                            <div className="benefit-img">
                              <LazyLoader src={ZeroAutoSquare} className={'img-fluid'} width={"63"} height={"64"} alt={"Demat Account with Free Research"}/>
                            </div>
                            <div className="benefit-item">
                              <h3 className="title-cam">Free Research Advisory</h3>
                            </div>
                        </div>
                      </div>
                      <div className="open-percent-item">
                        <div className="benefit-list">
                            <div className="benefit-img">
                              <LazyLoader src={FreeCall} className={'img-fluid'} width={"63"} height={"64"} alt={"Demat Account with No Auto Sqare Off Charges"}/>
                            </div>
                            <div className="benefit-item">
                              <h3 className="title-cam">No Auto Square-off fee</h3>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div className="text-center">
                    <a target="_blank" class="cursor-pointer"><span class="btn-bg btn-bg-dark">Open My Account</span></a>
                  </div>
               </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default WhyOpenFreeDematAccount;
