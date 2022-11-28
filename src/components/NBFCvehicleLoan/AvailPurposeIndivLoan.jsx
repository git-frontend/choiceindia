
import React from "react";
import LazyLoader from "../Common-features/LazyLoader";
import avail from '../../assets/images/nbfc-indivial-loan/avail-man.webp';
import Multitasking from '../../assets/images/nbfc-indivial-loan/multitasking.png';
function AvailPurpose() {

    return (
        <div>


<section className="veh-bnr-btm">
      <div className="container">
       
        <div className="row">
            <div className="col-md-12">
                <div className="veh-bnr-list">
                      <div className="bnr-list-itm">
                        <div className="bnr-list-right d-flex justify-content-end">
                              <LazyLoader src={avail} alt={"Avail"} className={"img-fluid img"} width={"627"} height={"538"} />
                          </div>
                          <div className="bnr-list-left">
                              <h2 className="title-secnd">Who can avail?</h2>
                              <p>Self-Employed non-professional (SENP) like businessmen, shop keepers etc. and Self-Employed
                                professional (SEP) like Doctors,Architect, Consultant etc.</p>
                          </div>
                          
                      </div>
                      <div className="bnr-list-itm">
                      <div className="bnr-list-right">
                              <LazyLoader src={Multitasking} alt={"Avail"} className={"img-fluid img"} width={"627"} height={"538"} />
                          </div>
                          <div className="bnr-list-left">
                              <h2 className="title-secnd">For what purposes?</h2>
                              <p>The loan amount can be used to fulfil any needs like purchase of goods & services, asset creation, housing (purchase/renovation), investments in financial
assets, events expenses etc.</p>
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
