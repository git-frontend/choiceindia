import React from "react";
import SubBannerimage from '../../assets/images/sub-broker/sub-broker-franchise-without-deposit.webp';
import SubBrokerForm from './SubBrokerForm';
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
                                    <h1 className="tlt1 telagubanner">
                                        <span className="tlt2">సబ్ బ్రోకర్‌ని ప్రారంభించండి</span>
                                        ఫ్రాంచైజీలు
                                        <span className="tlt2">డిపాజిట్ లేకుండా*</span>
                                    </h1>
                                </div>
                                <div className="right-sec">
                                    <LazyLoader src={SubBannerimage} alt={"సబ్-బ్రోకర్ ఫ్రాంచైజ్ డిపాజిట్ లేకుండా"} className={"img-fluid"} width={"400"} height={"391"}/>
                                    {/* <img src={SubBannerimage} alt="Sub Broker Franchise" className="img-fluid" /> */}
                                </div>
                            </div>
                            <div className="caption-blue-bar">
                                <ul>
                                    <li>
                                       "అత్యధిక రాబడి వాటా"
                                    </li>
                                    <li>
                                    ఒక్కో అకౌంట్‌కి రూ.2100 వరకూ ప్రోత్సాహకం*
                                    </li>
                                    <li>
                                    "జీవితకాలఆదాయ వనరు"
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="franchise-form justify-content-end d-flex" id="form-banner">
                                <SubBrokerForm language='telagu'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
}

export default BannerSBroker;
