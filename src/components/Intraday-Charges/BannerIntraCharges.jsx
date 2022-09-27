import React from "react";
import SubBannerimage from '../../assets/images/intraday-charges/banner-person.webp';
import img1 from '../../assets/images/intraday-charges/ratio-icon.svg';

import LazyLoader from "../Common-features/LazyLoader";

function BannerIntraCharges() {

    return (
        <div>
            <section className="intrc-banner" >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-6 col-lg-8 ">
                            <div className="caption-banner">
                                <div className="left-sec">
                                    <h1 className="tlt1">
                                         Don’t Pay Extra Brokerage
                                    </h1>
                                    <p className="des-nm">Save upto <strong>33% brokerage</strong> on intraday trades with Choice</p>
                                    <a href="/">
                                        <span className="btn-bg">Know How?
                                        <svg xmlns="http://www.w3.org/2000/svg" id="baseline-arrow_forward-24px" width="24" height="24" viewBox="0 0 24 24">
  <path id="Path_1980" data-name="Path 1980" d="M0,0H24V24H0Z" fill="none"/>
  <path id="Path_1981" data-name="Path 1981" d="M12,4,10.59,5.41,16.17,11H4v2H16.17l-5.58,5.59L12,20l8-8Z" fill="#231f20"/>
</svg> 
                                        </span>
                                        
                                    </a>
                                </div>
                                <div className="right-sec">
                                    <span className="itm-first">
                                        <LazyLoader src={img1} alt={"Sub Broker Franchise Without Deposit"} className={"img-fluid"} width={"24"} height={"24"}/>
                                    </span>
                                    <span className="itm-scnd">
                                        33<em>%</em>
                                    </span>
                                    <span className="itm-third">
                                        <LazyLoader src={img1} alt={"Sub Broker Franchise Without Deposit"} className={"img-fluid"} width={"24"} height={"24"}/>
                                    </span>
                                    <LazyLoader src={SubBannerimage} alt={"Sub Broker Franchise Without Deposit"} className={"img-fluid"} width={"432"} height={"500"}/>
                                    {/* <img src={SubBannerimage} alt="Sub Broker Franchise" className="img-fluid" /> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-6 col-lg-4 ">
                            <div className="franchise-form justify-content-end d-flex" id="form-banner">
                                <SubBrokerForm />
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>



        </div>

    );
}

export default BannerIntraCharges;
