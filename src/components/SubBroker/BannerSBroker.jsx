﻿import React from "react";
import SubBannerimage from '../../assets/images/sub-broker/banner-subbroker.webp';
import SubBrokerForm from './SubBrokerForm'
import LazyLoader from "../Common-features/LazyLoader";

function BannerSBroker() {

    return (
        <div>


            <section className="franchise-banner" >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-6 col-lg-8 ">
                            <div className="caption-banner">
                                <div className="left-sec">
                                    <h2 className="tlt2">Start Sub Broker</h2>
                                    <h1 className="tlt1">Franchise</h1>
                                    <h2 className="tlt2">without Deposit*</h2>
                                </div>
                                <div className="right-sec">
                                <LazyLoader src={SubBannerimage} alt={"Sub Broker Franchise"} className={"img-fluid"} />
                                    {/* <img src={SubBannerimage} alt="Sub Broker Franchise" className="img-fluid" /> */}
                                </div>
                            </div>
                            <div className="caption-blue-bar">
                                <ul>
                                    <li>
                                        <span>Highest</span> Revenue Sharing
                                    </li>
                                    <li>
                                        <span>Upto ₹ 1000 Per</span> Account Incentive*
                                    </li>
                                    <li>
                                        <span>Lifetime</span> Income Source
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="franchise-form justify-content-end d-flex" id="form-banner">
                                <SubBrokerForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
}

export default BannerSBroker;
