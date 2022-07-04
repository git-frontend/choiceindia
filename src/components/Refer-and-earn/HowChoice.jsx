
import React from "react";
import Client from '../../assets/images/refer-earn/client.webp';
import Incentive from '../../assets/images/refer-earn/incentive.webp';
import Generate from '../../assets/images/refer-earn/generate.webp';
import Register from '../../assets/images/refer-earn/register.webp';
import LazyLoader from '../Common-features/LazyLoader';

function HowChoice() {

    return (
        <div>
            <section className="program-works">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="title-first">How Choice Demat Account <br/> Refer and Earn Program Works?</h2>
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
                                        <LazyLoader src={Client} alt={"Banner Images"} className={"img-fluid"} width={"201"} height={"174"} />
                                        <h4>Become a Choice <br /> Client</h4>
                                    </div>
                                </li>
                                <li className="step-box">
                                    <span className="count">
                                        2
                                    </span>
                                    <div className="step-cont">
                                        <LazyLoader src={Generate} alt={"Banner Images"} className={"img-fluid"} width={"201"} height={"174"} />
                                        <h4>Generate Your <br /> Referral Link &amp; Share</h4>
                                    </div>
                                </li>
                                <li className="step-box">
                                    <span className="count">
                                        3
                                    </span>
                                    <div className="step-cont">
                                        <LazyLoader src={Register} alt={"Banner Images"} className={"img-fluid"} width={"201"} height={"174"} />
                                        <h4>Ask to Register with <br />Your Referral Link</h4>
                                    </div>
                                </li>
                                <li className="step-box">
                                    <span className="count">
                                        4
                                    </span>
                                    <div className="step-cont">
                                        <LazyLoader src={Incentive} alt={"Banner Images"} className={"img-fluid"} width={"201"} height={"174"} />
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