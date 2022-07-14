
import React from "react";
import Bannerimage from '../../assets/images/services/wealth-management-services.webp';
import LazyLoader from "../Common-features/LazyLoader";

function WealthManagement() {

    return (
        <div>


            <section className="bannersection service-tab-cont bg-rightsection" id="EquityBroking">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="heading-sec">
                                <h3 className="title-first ">Wealth Management </h3>
                                <p className="nm-text">From asset allocation support, trading of securities to specialized investment vehicles, Choice wealth management offers a range of financial products and services designed to cater to a range of investments needs of its clients.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5 align-items-center mb-5">
                        <div className="col-md-4">
                            <div className="rightsec">
                                <LazyLoader src={Bannerimage} alt={"wealth management services"} className={"img-fluid"} width={"410"} height={"459"} />
                                {/* <img src={Bannerimage} alt="Banner Images" className="img-fluid " width={"410"} height={"459"}></img> */}
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="benifit-list">
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Asset Allocation</h5>
                                    <p>We have advised numerous companies across industries and concluded dozens of transactions.</p>
                                </div>
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Investment Products</h5>
                                    <p>We provide a gamut of services to address every requirement of the corporates.</p>
                                </div>
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Risk Management</h5>
                                    <p>It’s a division responsible for growing your business while partnering with your firm for a progressive synergy.</p>
                                </div>
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Estate Planning</h5>
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

export default WealthManagement;
