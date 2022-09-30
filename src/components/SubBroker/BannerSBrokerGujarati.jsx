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
                                    <h1 className="tlt1">
                                        <span className="tlt2">શરૂ કરો સબ બ્રોકર</span>
                                        ફ્રેન્ચાઇઝ
                                        <span className="tlt2">તે પણ વગર ડિપોઝિટ*</span>
                                    </h1>
                                </div>
                                <div className="right-sec">
                                    <LazyLoader src={SubBannerimage} alt={"Sub Broker Franchise Without Deposit"} className={"img-fluid"} width={"400"} height={"391"}/>
                                    {/* <img src={SubBannerimage} alt="Sub Broker Franchise" className="img-fluid" /> */}
                                </div>
                            </div>
                            <div className="caption-blue-bar">
                                <ul>
                                    <li>
                                        <span>સૌથી વધુ </span> રેવન્યુ શેરિંગ
                                    </li>
                                    <li>
                                        <span>₹ 1100 સુધી પ્રતિ</span> એકાઉન્ટ ઇન્સેન્ટિવ*
                                    </li>
                                    <li>
                                        <span>જીવનભર </span> કમાઓ
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="franchise-form justify-content-end d-flex" id="form-banner">
                                <SubBrokerForm language='gujarati'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
}

export default BannerSBroker;
