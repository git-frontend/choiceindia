import React from "react";
import SubBannerimage from '../../assets/images/sub-broker/sub-broker-franchise-without-deposit.webp';
import SubBrokerForm from './../SubBroker/SubBrokerForm'

function AuthorizeBanner() {

    return (
        <div>


            <section className="franchise-banner" >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-6 col-lg-8 ">
                            <div className="caption-banner">
                                <div className="left-sec">
                                <h1 className="tlt1"><span className="tlt2">Become a Choice</span>
                                    Authorised Person</h1>
                                </div>
                                <div className="right-sec">
                                    <img src={SubBannerimage} alt="Sub Broker Franchise Without Deposit" className="img-fluid"  />
                                </div>
                            </div>
                            <div className="caption-blue-bar">
                                <ul>
                                    <li>
                                        <span>Highest</span> Revenue Sharing
                                    </li>
                                    <li>
                                    <span>Upto ₹ 2100 Per</span> Account Incentive*
                                    </li>
                                    <li>
                                        <span>Lifetime</span> Income Source
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 " id="sub-broker-form">
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

export default AuthorizeBanner;
