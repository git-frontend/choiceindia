
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import LowDPCharges from '../../assets/images/trading-strategies/free-demat-account-with-low-dp-charges.svg';
import PaisaBrokerage from '../../assets/images/trading-strategies/zero-amc-demat-account.svg';
import ZeroAutoSquare from '../../assets/images/trading-strategies/demat-account-with-free-research.svg';
import FreeCall from '../../assets/images/trading-strategies/demat-account-with-no-auto-square-off-charges.svg';

function WhyOpenFreeDematAccount() {
  return (
    <div>
    <section className="open-Demat-sec">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                   <h2 className="title-secnd text-center">100% मुफ्त डीमैट खाता खोलें</h2>
                  <div className="open-percent-row">
                      <div className="open-percent-item">
                       <div className="benefit-list">
                          <div className="benefit-img">
                            <LazyLoader src={LowDPCharges} className={'img-fluid'} width={"63"} height={"64"} alt={"Free Demat Account with Low DP Charges"}/>
                          </div>
                          <div className="benefit-item">
                            <h3 className="title-cam">कम डीपी शुल्क (केवल रुपये 10)</h3>
                          </div>
                       </div>
                      </div>
                      <div className="open-percent-item">
                        <div className="benefit-list">
                            <div className="benefit-img">
                              <LazyLoader src={PaisaBrokerage} className={'img-fluid'} width={"63"} height={"64"} alt={"Zero AMC Demat Account"}/>
                            </div>
                            <div className="benefit-item">
                              <h3 className="title-cam">पहले साल के लिए मुफ्त एएमसी</h3>
                            </div>
                        </div>
                      </div>
                      <div className="open-percent-item">
                        <div className="benefit-list">
                            <div className="benefit-img">
                              <LazyLoader src={ZeroAutoSquare} className={'img-fluid'} width={"63"} height={"64"} alt={"Demat Account with Free Research"}/>
                            </div>
                            <div className="benefit-item">
                              <h3 className="title-cam">फ्री रिसर्च एडवाइजरी</h3>
                            </div>
                        </div>
                      </div>
                      <div className="open-percent-item">
                        <div className="benefit-list">
                            <div className="benefit-img">
                              <LazyLoader src={FreeCall} className={'img-fluid'} width={"63"} height={"64"} alt={"Demat Account with No Auto Sqare Off Charges"}/>
                            </div>
                            <div className="benefit-item">
                              <h3 className="title-cam">कोई ऑटो स्क्वायर-ऑफ शुल्क नहीं</h3>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div className="text-center">
                    <a target="_blank" class="cursor-pointer"><span class="btn-bg btn-bg-dark">मेरा खाता खोलें</span></a>
                  </div>
               </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default WhyOpenFreeDematAccount;
