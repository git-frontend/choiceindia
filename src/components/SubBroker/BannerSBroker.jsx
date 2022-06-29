import React from "react";
import SubBannerimage from '../../assets/images/sub-broker/banner-subbroker.webp';


function BannerSBroker() {

    return (
        <div>


            <section className="franchise-banner" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-8 ">
                            <div className="caption-banner">
                                <div className="left-sec">
                                    <h2 className="tlt2">Start Sub Broker</h2>
                                    <h1 className="tlt1">Franchise</h1>
                                    <h2 className="tlt2">without Deposit*</h2>
                                </div>
                                <div className="right-sec">
                                   {/* <img src={SubBannerimage} alt="Sub Broker Franchise" className="img-responsive" />*/}
                                </div>
                            </div>
                            <div className="caption-blue-bar">
                                <ul>
                                    <li>
                                        <span>Highest</span><br /> Revenue Sharing
                                    </li>
                                    <li>
                                        Upto ₹ <span>1000</span> Per Account Incentive*
                                    </li>
                                    <li>
                                        <span>Lifetime</span><br /> Income Source
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="franchise-form" id="form-banner">
                               {/* <OpenAccountForm />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
}

export default BannerSBroker;
