
import React from "react";
import LazyLoader from "../Common-features/LazyLoader";
import avail from '../../assets/images/nbfc-flexi-credit-business/flexi-credit-avail.svg';
import Multitasking from '../../assets/images/nbfc-flexi-credit-business/flexi-credit-purpose.svg';

import NBFCMenu from '../Common-features/NBFCMenu';
function AvailPurpose() {

    return (
        <div>
 

            <section className="avail">
                <div className="container">
                <div className="row justify-content-end">
                        <div className="col-md-12">
                            <div className="menu">
                            <NBFCMenu />
                            </div>
                       
                        </div>
                          
                    </div>
                    <div className="row whoavail d-flex align-items-center">
                        <div className="col-md-6 heading-sec ">
                            <h4 className="title-third mb-5">Who can avail?</h4>
                            <p className="">Self-Employed non-professional (SENP) like businessmen, shop keepers etc. and Self-Employed
                                professional (SEP) like Doctors,Architect, Consultant etc.</p>
                        </div>
                        <div className="col-md-6">
                            <LazyLoader src={avail} alt={"Avail"} className={"img-fluid img"} width={"660"} height={"444"} />
                        </div>
                    </div>
                    <div className="row purpose d-flex align-items-center">
                       
                       <div className="col-md-6 order-sm-first order-last">
                           <LazyLoader src={Multitasking} alt={"Avail"} className={"img-fluid img"} width={"539"} height={"539"} />
                       </div>
                       <div className="col-md-6 heading-sec ">
                           <h4 className="title-third mb-5">For what purposes?</h4>
                           <p className="">The loan amount can be used to fulfil any needs like purchase of goods &amp; services, asset creation, housing (purchase/renovation), investments in financial
assets, events expenses etc.</p>
                       </div>
                   </div>
                </div>
            </section>
           

        </div>
    );
}

export default AvailPurpose;
