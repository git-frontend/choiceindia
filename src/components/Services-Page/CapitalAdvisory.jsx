
import React from "react";
import Bannerimage from '../../assets/images/services/capital-advisory-banner.webp';
import LazyLoader from "../Common-features/LazyLoader";

function CapitalAdvisory() {

    return (
        <div>


            <section className="bannersection service-tab-cont bg-rightsection" id="CapitalAdvisory">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="heading-sec">
                                <h3 className="title-first ">Capital Advisory</h3>
                                <p className="nm-text">Build a tough and developing business with our experienced team of professionals for Investment Banking, Corporate Finance and Merchant Banking</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5 mb-5 align-items-center">
                        <div className="col-md-4">
                            <div className="rightsec">
                            <LazyLoader src={Bannerimage} alt={"Banner Images"} className={"img-fluid"} width={"410"} height={"550"} />
                                {/* <img src={Bannerimage} alt="Banner Images" className="img-fluid " width={"410"} height={"550"}></img> */}
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="benifit-list">
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Investment Banking</h5>
                                    <p>We have advised numerous companies across industries and concluded dozens of transactions. </p>
                                </div>
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Corporate Finance</h5>
                                    <p>We provide a gamut of services to address every requirement of the corporates.</p>
                                </div>
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Merchant Banking</h5>
                                    <p>It’s a division responsible for growing your business while partnering with your firm for a progressive synergy.</p>
                                </div>
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">IPO Readiness</h5>
                                    <p>Our team understands the dynamics of various industries for assisting our clients looking for going public.</p>
                                </div>
                            </div>
                            <a href="/" className="btn-bg">Explore</a>
                        </div>
                    </div>

                </div>
            </section>


        </div>
    );
}

export default CapitalAdvisory;
