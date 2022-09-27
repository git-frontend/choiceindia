
import React from "react";
import { Link } from "react-router-dom";
import Bannerimage from '../../assets/images/services/equity-broking-services.webp';
import Researchbanner from "../../assets/images/equity-broking/rollingCoin.mp4"
import LazyLoader from "../Common-features/LazyLoader";

function EquityBroking() {

    return (
        <div>


            <section className="bannersection service-tab-cont" id="EquityBroking">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="heading-sec">
                                <h3 className="title-first ">Equity Broking </h3>
                                <p className="nm-text">Choice allows you to trade in equities at your fingertips with best in className technology & unbeatable research calls.  Invest in Capital Markets with smart insights &amp; recommendations from our research desk to get returns in multifolds</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5 align-items-top">
                        <div className="col-md-4">
                            <div className="rightsec">
                                <video className='img-fluid' autoPlay loop muted width={"700"} height={"650"}>
                                    <source src={Researchbanner} type='video/mp4' />
                                </video>
                                
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row gx-5 benifit-list">
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Public Offer</h5>
                                    <p>Our team understands the dynamics of various industries for assisting our clients looking for going public.</p>
                                </div>
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Portfolio Management Services</h5>
                                    <p>It’s a division responsible for growing your business while partnering with your firm for a progressive synergy.</p>
                                </div>
                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Financial Planning</h5>
                                    <p>We provide a gamut of services to address every requirement of the corporates.</p>
                                </div>

                                <div className="benifit-list-itm">
                                    <h5 className="title-fourth">Bonds &amp; Derivatives</h5>
                                    <p>We have advised numerous companies across industries and concluded dozens of transactions. </p>
                                </div>
                            </div>
                            {/* <Link to="/equity-broking" className="btn-bg">Explore</Link> */}
                        </div>
                    </div>

                </div>
            </section>


        </div>
    );
}

export default EquityBroking;
