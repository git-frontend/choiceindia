
import React from "react";
import LazyLoader from "../Common-features/LazyLoader";
import avail from '../../assets/images/nbfc-indivial-loan/avail-man.webp';

import vehiclepurpose from '../../assets/images/NBFCvehicleLoan/vehiclepurpose.svg';
import bringvehicle from '../../assets/images/NBFCvehicleLoan/bringvehicle.svg';
import usedvehicle from '../../assets/images/NBFCvehicleLoan/usedvehicle.svg';

function AvailPurposeVehLoan() {

    return (
        <div>


            <section className="veh-bnr-btm" id="showForm3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="veh-bnr-list">
                                <div className="bnr-list-itm">
                                    <div className="bnr-list-right d-flex justify-content-end">
                                        <LazyLoader src={avail} alt={"Individual Loan Eligibility"} className={"img-fluid img"} width={"627"} height={"538"} />
                                    </div>
                                    <div className="bnr-list-left">
                                        <h2 className="title-secnd">Who can avail?</h2>
                                        <p>Salaried individuals from Government and Private Sector.</p>
                                    </div>

                                </div>
                                <div className="bnr-list-itm">
                                    <div className="bnr-list-right">
                                        <LazyLoader src={vehiclepurpose} alt={"Requirements for Individual Loan"} className={"img-fluid img"} width={"627"} height={"538"} />
                                    </div>
                                    <div className="bnr-list-left">
                                        <h2 className="title-secnd">For what purposes?</h2>
                                        <p>The loan amount can be used to Purchase new and used Passenger vehicles, Refinance on existing
                                            Passenger vehicles for personal purposes.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="Doc-rqrd-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="Doc-rqrd-heading">
                                <h2 className="title-first">Bring Home Your Vehicle <br /> with a Vehicle Loan </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-xl-5 col-md-6">
                            <div className="Doc-rq-card vehicle-right bringown">
                                <div className="text-left">
                                    <div className="img-height vehicle-imgheight">
                                        <LazyLoader src={bringvehicle} className={'img-fluid'} width={"441"} height={"294"} alt={"KYC"} />
                                    </div>
                                    <h3 className="title-doc">New Vehicle Loan</h3>
                                </div>
                                <ul className="list-item vehicle-listitem">
                                    <li>Starts at 50k</li>
                                    <li>Attractive interest rates</li>
                                    <li>Flexible tenure</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-6">
                            <div className="Doc-rq-card vehicle-left bringown">
                                <div className="text-left">
                                    <div className="img-height vehicle-imgheight">
                                        <LazyLoader src={usedvehicle} className={'img-fluid'} width={"307"} height={"294"} alt={"Income Proof"} />
                                    </div>
                                    <h3 className="title-doc">Used Vehicle Loan</h3>
                                </div>
                                <ul className="list-item vehicle-listitem">

                                    <li>  Up to 25 lacs</li>
                                    <li>Attractive interest rates</li>
                                    <li>More options in Less Budget</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default AvailPurposeVehLoan;
