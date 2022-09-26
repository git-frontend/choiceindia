import React from "react";
import SubBannerimage from '../../assets/images/mutual-fund-distributor/mutual-fund-distributor.webp';
import SubBrokerForm from './SubBrokerForm';
import LazyLoader from "../Common-features/LazyLoader";

function BannerMFDistributor() {

    return (
        <div>
            <section className="franchise-banner" >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-6 col-lg-8 ">
                            <div className="caption-banner">
                                <div className="left-sec">
                                    <h1 className="tlt1">
                                        <span className="tlt2">Become a</span>
                                        Mutual Fund Distributor
                                    </h1>
                                </div>
                                <div className="right-sec">
                                    <LazyLoader src={SubBannerimage} alt={"Sub Broker Franchise Without Deposit"} className={"img-fluid"} width={"562"} height={"562"}/>
                                    {/* <img src={SubBannerimage} alt="Sub Broker Franchise" className="img-fluid" /> */}
                                </div>
                            </div>
                            <div className="caption-blue-bar">
                                <ul>
                                    <li>
                                        <span>High</span> Commision
                                    </li>
                                    <li>
                                        <span>Multiple</span> Sources of Earnings
                                    </li>
                                    <li>
                                        <span>Lifetime</span> Income Source
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="franchise-form justify-content-end d-flex" id="form-banner">
                                <SubBrokerForm page='mutual-fund-distributor'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
}

export default BannerMFDistributor;
