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
                                    <h1 className="tlt1 marathititle">
                                        <span className="tlt2">सुरु करा सब ब्रोकर</span>
                                        फ्रँचायझी
                                        <span className="tlt2">विना डिपॉझिट</span>
                                    </h1>
                                </div>
                                <div className="right-sec">
                                    <LazyLoader src={SubBannerimage} alt={"सब ब्रोकर फ्रँचायझी डिपॉझिट शिवाय"} className={"img-fluid"} width={"400"} height={"391"}/>
                                    {/* <img src={SubBannerimage} alt="Sub Broker Franchise" className="img-fluid" /> */}
                                </div>
                            </div>
                            <div className="caption-blue-bar">
                                <ul>
                                    <li>
                                        <span>सर्वोच्च </span> ब्रोकरेज शेअरिंग
                                    </li>
                                    <li>
                                        <span>प्रति खाते</span>इन्सेंटिव्ह ११०० रुपयापर्यंत
                                    </li>
                                    <li>
                                        <span>लाईफटाईम</span>  इनकम स्रोत
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="franchise-form justify-content-end d-flex" id="form-banner">
                                <SubBrokerForm language='marathi'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
}

export default BannerSBroker;
