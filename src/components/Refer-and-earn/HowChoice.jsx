
import React from "react";
import Client from '../../assets/images/refer-earn/open-demat-account-for-refer-and-earn.webp';
import Incentive from '../../assets/images/refer-earn/receive-referral-incentive.webp';
import Generate from '../../assets/images/refer-earn/generate-demat-account-refer-and-earn-link.webp';
import Register from '../../assets/images/refer-earn/share-demat-account-referral-link.webp';
import NewImg from '../../assets/images/receive-referral-incentive.webp';
import LazyLoader from '../Common-features/LazyLoader';

function HowChoice() {

    return (
        <div>
            <section className="program-works">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="title-first">How a Demat Refer and <br/>Earn Program Works </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="reset-list">
                                <li className="step-box">
                                    <span className="count">
                                        1
                                    </span>
                                    <div className="step-cont">
                                        <LazyLoader src={Client} alt={"Open Demat Account for Refer and Earn"} className={"img-fluid"} width={"201"} height={"174"} />
                                        <h4>Become a Choice <br /> Client</h4>
                                    </div>
                                </li>
                                <li className="step-box">
                                    <span className="count">
                                        2
                                    </span>
                                    <div className="step-cont">
                                        <LazyLoader src={Generate} alt={"Generate Demat Account Refer and Earn Link"} className={"img-fluid"} width={"201"} height={"174"} />
                                        <h4>Generate Your <br /> Referral Link &amp; Share</h4>
                                    </div>
                                </li>
                                <li className="step-box">
                                    <span className="count">
                                        3
                                    </span>
                                    <div className="step-cont">
                                        <LazyLoader src={Register} alt={"Share Demat Account Referral Link"} className={"img-fluid"} width={"201"} height={"174"} />
                                        <h4>Ask to Register with <br />Your Referral Link</h4>
                                    </div>
                                </li>
                                <li className="step-box">
                                    <span className="count">
                                        4
                                    </span>
                                    <div className="step-cont">
                                        <LazyLoader src={NewImg} alt={"Receive Referral Incentive"} className={"img-fluid"} width={"201"} height={"174"} />
                                        <h4>Receive an Incentive <br />Per Referral</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default HowChoice;
