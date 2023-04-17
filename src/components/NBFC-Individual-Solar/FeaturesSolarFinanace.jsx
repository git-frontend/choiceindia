
import React from "react";
import { Link } from "react-router-dom";
function FeaturesSolarFinanace() {

    return (
        <div>


            <section className="features features-nbfc">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className=" title-first text-center mb-5">Features</h2>
                            <ul>
                                <li>This collateral-free solar loan comes with a one-time investment for lifetime returns.</li>
                                <li>You can enjoy its various government perks in the form of various subsidies, other tax benefits, and Lower Utility Bills.</li>
                                <li>You can easily get maximized funding for your environmental investment.</li>
                                <li>Solar Panels are manufactured with high-quality materials and have to comply with strict health and safety standards, making them safer than other sources of electricity.</li>
                                <li>Keeping up with our green responsibility towards our planet, we make it a point to keep your loan process paperless and minimal.</li>
                                <li>We help offer the best quality material &amp; lowest pricing on Quotation verification by CFPL engineers.</li>
                                <li>Get convenient and fastening installation and subsidy approval with the expertise of impaneled EPCs</li>
                                <li>You can now obtain assistance and services to far-flung places with our wide branch reach.</li>
                                <li>Get hands-on experience with self/ Assistance Onboarding through our app.</li>
                                <li>You can keep your mind at ease as we help offer the availability of long repayment tenures.</li>
                            </ul>
                        </div>
                        <div className="col-md-12 text-center"> <Link to="/" className=" text-center cursor-pointer" >
                            <span className="btn-bg">Apply Now</span>
                        </Link>
                        <br/>
                            <Link to="https://cmsapi.choiceindia.com/assets/49dfa23f-9910-4c78-ae63-57f49e5af157" className="soc-links" target="_blank">To view our Schedule of Charges, click here!</Link>
                        </div>

                    </div>

                </div>
            </section>


        </div>
    );
}

export default FeaturesSolarFinanace;
