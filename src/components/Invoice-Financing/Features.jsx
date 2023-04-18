
import React from "react";
import { Link } from "react-router-dom";
function Features() {

    return (
        <div>


            <section className="features features-nbfc">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-md-12">
                            <h2 className=" title-first text-center mb-5">Features</h2>
                            <ul>
                                <li>Need-based instant &amp; hassle-free Credit</li>
                                <li>Working Capital Optimization</li>
                                <li>Credit is available at the doorstep from anywhere</li>
                                <li>Better Optimization of Collateral Securities</li>
                                <li>Prompt payment against unpaid invoices</li>
                                <li>Reduced early payment requests</li>
                                <li>Interest to be paid for usance period only</li>
                                <li>Customized tenure/ repayment frequency</li>
                                <li>Easy Reconciliation</li>
                            </ul>
                        </div>
                        <div className="col-md-12 text-center"> <Link to="/" className=" text-center cursor-pointer" >
                            <span className="btn-bg">Apply Now</span>
                        </Link><br/>
                            <Link to="https://cmsapi.choiceindia.com/assets/49dfa23f-9910-4c78-ae63-57f49e5af157" className="soc-links" target="_blank">To view our Schedule of Charges, click here!</Link>
                        </div>

                    </div>

                </div>
            </section>


        </div>
    );
}

export default Features;
