
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
                        <div className="col-md-12">
                            <div className="veh-bnr-list">
                                <div className="bnr-list-itm">
                                    <div className="bnr-list-right d-flex justify-content-end">
                                        <LazyLoader src={avail} alt={"Flexi Loan Eligibility"} className={"img-fluid img"} width={"660"} height={"444"} />
                                    </div>
                                    <div className="bnr-list-left">
                                        <h2 className="title-secnd">Who can avail?</h2>
                                        <p>Self-Employed non-professional (SENP) like businessmen, shop keepers etc. and Self-Employed
                                            professional (SEP) like Doctors,Architect, Consultant etc.</p>
                                    </div>

                                </div>
                                <div className="bnr-list-itm">
                                    <div className="bnr-list-right">
                                        <LazyLoader src={Multitasking} alt={"Get Flexi Business Loan"} className={"img-fluid img"} width={"539"} height={"539"} />
                                    </div>
                                    <div className="bnr-list-left">
                                        <h2 className="title-secnd">For what purposes?</h2>
                                        <p>The funds from Flexi Credit can be used to meet the working capital and capital expenditure
requirements of the business, general business purposes, business Expansion capital requirements,
setting up of business.</p>
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
