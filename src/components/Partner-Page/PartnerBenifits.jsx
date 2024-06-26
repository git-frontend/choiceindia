
import React from "react";
import BenefitsBanner from '../../assets/images/partner/benifit-banner.webp';
import NoCash from '../../assets/images/partner/no-cash.svg';
import Service from '../../assets/images/partner/service.svg';
import ZeroRupees from '../../assets/images/partner/zero-rupees.svg';
import CashFlow from '../../assets/images/partner/cash-flow.svg';
import Clock from '../../assets/images/partner/clock.svg';
import LazyLoader from "../Common-features/LazyLoader";



function PartnerBenifits() {



  return (
    <div>



      <section className="benefits-partnering">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-sec text-center">
                <h3 className="title-first">Benefits of Partnering with Us</h3>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 d-none d-sm-block">
            <LazyLoader src={BenefitsBanner} alt={"Benefits of Partnering with Us"} className={"img-fluid"} width={"642"} height={"671"} />
            </div>
            <div className="col-md-6">
              <div className="partnering-list">
                <div className="partnering-list-itm">
                  <div className="list-itm-img">
                  <LazyLoader src={NoCash} alt={""} className={"img-fluid"} width={"41"} height={"41"} />
                  </div>
                  <div className="list-itm-descr">
                    <h5>No Registration Charges</h5>
                    <p>Register for free and begin your entrepreneurship journey as a CBA with Choice.</p>
                  </div>
                </div>
                <div className="partnering-list-itm">
                  <div className="list-itm-img">
                  <LazyLoader src={Service} alt={""} className={"img-fluid"} width={"41"} height={"41"} />
                  </div>
                  <div className="list-itm-descr">
                    <h5>One Platform - Multiple Services</h5>
                    <p>Access and offer multiple financial services under one roof to your clients and thus earn more from each of your clients.</p>
                  </div>
                </div>
                <div className="partnering-list-itm">
                  <div className="list-itm-img">
                  <LazyLoader src={ZeroRupees} alt={""} className={"img-fluid"} width={"41"} height={"41"} />
                  </div>
                  <div className="list-itm-descr">
                    <h5>Zero Investment Required</h5>
                    <p>With Choice, you can earn money without investment; with no limit on how much you earn.</p>
                  </div>
                </div>
                <div className="partnering-list-itm">
                  <div className="list-itm-img">
                  <LazyLoader src={CashFlow} alt={""} className={"img-fluid"} width={"41"} height={"41"} />
                  </div>
                  <div className="list-itm-descr">
                    <h5>Earn for a Lifetime</h5>
                    <p>Get a customer once and earn on their transactions for a lifetime. This gives you an opportunity to create a separate second source of income without disturbing your current occupation.</p>
                  </div>
                </div>
                <div className="partnering-list-itm">
                  <div className="list-itm-img">
                  <img src={Clock} alt={""} className={"img-fluid"} width={"41"} height={"41"} />
                  </div>
                  <div className="list-itm-descr">
                    <h5>Work Anytime, Anywhere</h5>
                    <p>As a CBA, we empower you to start your own full-time or part- time business, with the liberty to work at your own convenience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="middle-main-cont">
        <div className="container">
          <div className="middle-bar-cont">
            <div className="bar-cont-des">
              <h3 className="title-fourth">Begin your Entrepreneurial Journey with Choice</h3>
              
              <a href="https://choiceconnect.in/register" target="_blank" className="btn-bg btn-bg-dark">Get Started</a>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default PartnerBenifits;
