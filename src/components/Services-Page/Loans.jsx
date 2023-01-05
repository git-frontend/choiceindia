
import React from "react";
import Bannerimage from '../../assets/images/services/loan-services.webp';
import LazyLoader from "../Common-features/LazyLoader";
import { Link } from "react-router-dom";

function Loans() {

    return (
        <div>


            <section className="bannersection service-tab-cont" id="EquityBroking">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="heading-sec">
                                <h3 className="title-first ">Loans</h3>
                                <p className="nm-text">Choice loans team covers ambit of loan requirements under one single umbrella to provide a complete and cohesive solution to every loan requisite.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5 mb-5 align-items-center">
                        <div className="col-md-4">
                            <div className="rightsec">
                                <LazyLoader src={Bannerimage} alt={"loan services"} className={"img-fluid"} width={"410"} height={"431"} />
                                {/* <img src={Bannerimage} alt="Banner Images" className="img-fluid " width={"410"} height={"431"}></img> */}
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="benifit-list">
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Solar Finance</h5>
                                    <p>A loan that allows you to purchase your solar
                                       power system and then repay the loan over time.</p>
                                </div>
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Business Loans</h5>
                                    <p>We help businesses  to cover thier financing needs through our easy business loans with competitive interest rates.</p>
                                </div>
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Vehicle Loan</h5>
                                    <p>We offer affordable vehicle loans making sure that you own your dream wheels.</p>
                                </div>
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Loan Against Securities</h5>
                                    <p>We offer our clients the chance to raise quick funds by pledging their investments.</p>
                                </div>

                            </div>
                            <Link to='/loan' className="btn-bg">Explore</Link>
                            {/* <a href="/" >Explore</a> */}
                        </div>
                    </div>

                </div>
            </section>


        </div>
    );
}

export default Loans;
