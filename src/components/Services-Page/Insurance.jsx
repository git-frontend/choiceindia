
import React from "react";
import { Link } from "react-router-dom";
import Bannerimage from '../../assets/images/services/insurance-services.webp';
import LazyLoader from "../Common-features/LazyLoader";

function Insurance() {

    

    return (
        <div>


            <section className="bannersection service-tab-cont" id="EquityBroking">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="heading-sec">
                                <h3 className="title-first ">Insurance</h3>
                                <p className="nm-text">Choice aims to simplify the complex world of insurance for its customers. It has entered into strategic alliances with all the insurance companies, and has access to the best products &amp; solutions in the insurance market. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5 align-items-center mb-5">
                        <div className="col-md-4">
                            <div className="rightsec">
                                <LazyLoader src={Bannerimage} alt={" insurance  services"} className={"img-fluid"} width={"410"} height={"294"} />
                                {/* <img src={Bannerimage} alt="Banner Images" className="img-fluid " width={"410"} height={"294"}></img> */}
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="benifit-list">
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Health Insurance</h5>
                                    <p>Compare and find policies which will help you cover the rising medical expenses during medical emergencies.</p>
                                </div>
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Life Insurance</h5>
                                    <p>We provide all kinds of term and life insurance plans from different insurers.</p>
                                </div>
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Commercial Insurance</h5>
                                    <p>Safeguard your office from all possible risks of damage like theft, fire and other threats.</p>
                                </div>
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Vehicle Insurance</h5>
                                    <p>Get accidental damage cover, third party car insurance, comprehensive car insurance, as per your needs.</p>
                                </div>
                            </div>
                            <a href="https://choiceinsurance.in/" className="btn-bg">Explore</a>
                        </div>
                    </div>

                </div>
            </section>


        </div>
    );
}

export default Insurance;
