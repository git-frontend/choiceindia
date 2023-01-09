
import React from "react";
import NBFCMenu from '../Common-features/NBFCMenu';
import Whocanavail from '../../assets/images/com-vehicle-loan/who-can-avail.webp';
import forwhatpurposes from '../../assets/images/com-vehicle-loan/for-what-purposes.webp';
import LazyLoader from "../Common-features/LazyLoader";

function AvailPurpose() {
  return (
    <div>
      
    <section className="veh-bnr-btm" id="showForm">
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="Anchor-heading">
                  <NBFCMenu />
                </div>
            </div>
        </div>
        <div className="row" >
            <div className="col-md-12">
                <div className="veh-bnr-list">
                      <div className="bnr-list-itm">
                        <div className="bnr-list-right d-flex justify-content-end">
                              <LazyLoader src={Whocanavail} alt={"Commercial Vehicle Loan Eligibility"} className={"img-fluid img"} width={"450"} height={"406"} />
                          </div>
                          <div className="bnr-list-left">
                              <h2 className="title-secnd">Who can avail?</h2>
                              <p>Self-Employed non-professional (SENP) like businessmen, shop keepers etc. and Self-Employed
professional (SEP) like Doctors,Architect, Consultant etc. </p>
                          </div>
                          
                      </div>
                      <div className="bnr-list-itm">
                      <div className="bnr-list-right">
                              <LazyLoader src={forwhatpurposes} alt={"Apply for Commercial Vehicle Loan"} className={"img-fluid img"} width={"560"} height={"328"} />
                          </div>
                          <div className="bnr-list-left">
                              <h2 className="title-secnd">For what purposes?</h2>
                              <p>The funds from commercial vehicle loan can be used to meet the Purchase requirements of used
commercial vehicles, Refinance on existing commercial vehicles, for commercial purposes.</p>
                          </div>
                         
                      </div>
                </div>
            </div>
        </div>
        
      </div>
    </section>
    </div>
  );
}

export default AvailPurpose;
