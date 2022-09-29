﻿import React from "react";
import SubBannerimage from '../../assets/images/mutual-fund-distributor/mutual-fund-distributor.webp';
import SubBrokerForm from '../SubBroker/SubBrokerForm';
import LazyLoader from "../Common-features/LazyLoader";

function BannerMFDistributorHindi() {

    return (
        <div>
            <section className="franchise-banner" >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-6 col-lg-8 ">
                            <div className="caption-banner">
                                <div className="left-sec">
                                    <h1 className="tlt1">
                                        {/* <span className="tlt2">म्यूचुअल फंड वितरक बनें </span> */}
                                        म्यूचुअल फंड वितरक बनें 
                                    </h1>
                                </div>
                                <div className="right-sec">
                                    <LazyLoader src={SubBannerimage} alt={"म्यूचुअल फंड वितरक"} className={"img-fluid"} width={"562"} height={"562"}/>
                                    {/* <img src={SubBannerimage} alt="Sub Broker Franchise" className="img-fluid" /> */}
                                </div>
                            </div>
                            <div className="caption-blue-bar">
                                <ul>
                                    <li>
                                        <span>ज्यादा </span> कमीशन
                                    </li>
                                    <li>
                                        कमाई के <span> कई स्रोत</span> 
                                    </li>
                                    <li>
                                        <span>आजीवन </span> आय स्रोत

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="franchise-form justify-content-end d-flex" id="form-banner">
                                <SubBrokerForm language="mutualDistributorhindi"/>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
}

export default BannerMFDistributorHindi;
