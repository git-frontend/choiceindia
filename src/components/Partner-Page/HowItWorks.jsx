
import React from "react";
import RegisterCBA from '../../assets/images/partner/sign.svg';
import QuickApproval from '../../assets/images/partner/out-of-time.svg';
import GetClients from '../../assets/images/partner/group.svg';
import TrackStatus from '../../assets/images/partner/aim.svg';
import ReceiveEarnings from '../../assets/images/partner/rupee.svg';
import LazyLoader from "../Common-features/LazyLoader";



function HowItWorks() {



  return (
    <div>



      <section className="partner-work">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-sec text-center">
                <h3 className="title-first">How it Works ?</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="partner-work-steps">
                <div className="work-steps-itm">
                  <span>
                  <LazyLoader src={RegisterCBA} className={'img-fluid'} width={"61"} height={"61"} alt={""} />
                  </span>
                  <h5>Register as a CBA</h5>
                </div>
                <div className="work-steps-itm">
                  <span>
                  <LazyLoader src={QuickApproval} className={'img-fluid'} width={"61"} height={"61"} alt={""} />
                  </span>
                  <h5>Quick Approval</h5>
                </div>
                <div className="work-steps-itm">
                  <span>
                  <LazyLoader src={GetClients} className={'img-fluid'} width={"60"} height={"61"} alt={""} />
                  </span>
                  <h5>Get Clients</h5>
                </div>
                <div className="work-steps-itm">
                  <span>
                  <LazyLoader src={TrackStatus} className={'img-fluid'} width={"61"} height={"61"} alt={""} />
                  </span>
                  <h5>Track Status</h5>
                </div>
                <div className="work-steps-itm">
                  <span>
                  <LazyLoader src={ReceiveEarnings} className={'img-fluid'} width={"61"} height={"61"} alt={""} />
                  </span>
                  <h5>Receive Earnings</h5>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}

export default HowItWorks;
