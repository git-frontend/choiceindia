
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import StepsBanner from '../../assets/images/free-demat-compaign/how-to-open-demat-account-with-choice.webp';

function DematAccountOnlineSteps() {
  return (
    <div>
    <section className="open-account-steps">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                   <h2 className="title-secnd text-center">Open a Demat Account Online in 4 Steps</h2>
                </div>
                <div className="account-steps-list">
                    <div className="left-sec">
                        <div className="steps-card">
                          <div className="steps-card-list">
                            <div className="count-circle">
                            <div className="list-itm-num">
                                  <span>01</span>
                              </div>
                            </div>
                            <div className="list-itm-descr">
                              <h5>Personal Details</h5>
                              <p className="detail-show">Submit your Mobile number, Email, PAN, address and Aadhar Card.</p>
                            </div>
                          </div>
                          <div className="steps-card-list">
                          <div className="count-circle">
                            <div className="list-itm-num">
                                  <span>02</span>
                              </div>
                            </div>
                            <div className="list-itm-descr">
                              <h5>Verify Bank Details</h5>
                              <p className="detail-show">Verify your account number by uploading your cancelled cheque.</p>
                            </div>
                          </div>
                          <div className="steps-card-list">
                          <div className="count-circle">
                            <div className="list-itm-num">
                                  <span>03</span>
                              </div>
                            </div>
                            <div className="list-itm-descr">
                              <h5>Complete eSign</h5>
                              <p className="detail-show">eSign documents via mobile number and email address registered with Aadhar.</p>
                            </div>
                          </div>
                          <div className="steps-card-list">
                          <div className="count-circle">
                            <div className="list-itm-num">
                                  <span>04</span>
                              </div>
                            </div>
                            <div className="list-itm-descr">
                              <h5>Singed and Courier DDPI</h5>
                              <p className="detail-show">Courier us the signed copy of the Demat Debit and Pledge Instruction (DDPI) sent on your registered Email ID.</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-center pt-5">
                          <a target="_blank" class="cursor-pointer"><span class="btn-bg btn-bg-dark">Open Free Account</span></a>
                        </div>
                      </div>
                    <div className="right-sec">
                      <div className="step-banner">
                       <LazyLoader src={StepsBanner} className={'img-fluid'} width={"796"} height={"522"} alt={"How to Open Demat Account with Choice"}/>
                      </div>
                    </div>
                </div>
              </div>
        </div>
    </section>
    </div>
  );
}

export default DematAccountOnlineSteps;
