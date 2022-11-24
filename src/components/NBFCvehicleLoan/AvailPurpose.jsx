
import React from "react";
import LazyLoader from "../Common-features/LazyLoader";
import avail from '../../assets/images/nbfc-indivial-loan/avail-man.webp';

import vehiclepurpose from '../../assets/images/NBFCvehicleLoan/vehiclepurpose.svg';
import Kyc from '../../assets/images/nbfc-indivial-loan/kyc.webp';
import incomeProof from '../../assets/images/nbfc-indivial-loan/incomeproof.webp';

function Features() {

    return (
        <div>


            <section className="avail">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 heading-sec ">
                            <h4 className="title-third mb-5">Who can avail?</h4>
                            <p className="">Salaried individuals from Government and Private Sector.</p>
                        </div>
                        <div className="col-md-6">
                            <LazyLoader src={avail} alt={"Avail"} className={"img-fluid img"} width={"627"} height={"538"} />
                        </div>
                    </div>

                </div>
            </section>
            <section className="avail">
                <div className="container">
                    <div className="row purpose d-flex align-items-center">

                        <div className="col-md-6 order-sm-first order-last">
                            <LazyLoader src={vehiclepurpose} alt={"Avail"} className={"img-fluid img"} width={"627"} height={"538"} />
                        </div>
                        <div className="col-md-6 heading-sec ">
                            <h4 className="title-third mb-5">For what purposes?</h4>
                            <p className="">The loan amount can be used to Purchase new and used Passenger vehicles, Refinance on existing
                                Passenger vehicles for personal purposes.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Doc-rqrd-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="Doc-rqrd-heading">
                                <h2 className="title-first">Bring Home Your Vehicle <br/> with a Vehicle Loan </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <div className="Doc-rq-card">
                                <div className="text-left">
                                    <div className="img-height">
                                        <LazyLoader src={Kyc} className={'img-fluid'} width={"320"} height={"240"} alt={"KYC"} />
                                    </div>
                                    <h3 className="title-doc">New Vehicle Loan</h3>
                                </div>
                                <ul className="list-item">
                                    <li>Starts at 50k</li>
                                    <li>Attractive interest rates</li>
                                    <li>Flexible tenure</li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-md-5">
                            <div className="Doc-rq-card">
                                <div className="text-left">
                                    <div className="img-height">
                                        <LazyLoader src={incomeProof} className={'img-fluid'} width={"267"} height={"267"} alt={"Income Proof"} />
                                    </div>
                                    <h3 className="title-doc">Used Vehicle Loan</h3>
                                </div>
                                <ul className="list-item">

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

export default Features;
