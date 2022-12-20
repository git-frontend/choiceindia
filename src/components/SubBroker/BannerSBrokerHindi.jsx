import React from "react";
import SubBannerimage from '../../assets/images/sub-broker/sub-broker-franchise-without-deposit.webp';
import SubBrokerForm from './SubBrokerForm'
import LazyLoader from "../Common-features/LazyLoader";

function BannerSBrokerHindi() {

    return (
        <div>
            <section className="franchise-banner" >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-6 col-lg-8 ">
                            <div className="caption-banner caption-hindi">
                                <div className="left-sec">
                                 <h1 className="tlt1"><span className="tlt2">शूरू करे सब ब्रोकर</span>
                                    फ्रेंचाइजी
                                    <span className="tlt2">बिना डिपोजिट</span></h1>
                                </div>
                                <div className="right-sec">
                                    <LazyLoader src={SubBannerimage} alt={"Sub Broker Franchise Without Deposit"} className={"img-fluid"} width={"400"} height={"391"} />
                                    {/* <img src={SubBannerimage} alt="Sub Broker Franchise" className="img-fluid" /> */}
                                </div>
                            </div>
                            <div className="caption-blue-bar">
                                <ul>
                                    <li>
                                        <span>उच्चतम</span> ब्रोकरेज शेयरिंग
                                    </li>
                                    <li>
                                        <span>इंसेन्टीव्ह प्रति खाता</span> रु. 2100 तक*
                                    </li>
                                    <li>
                                        <span>लाईफटाइम</span> इनकम स्रोत
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="franchise-form justify-content-end d-flex" id="form-banner">
                                <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                    <SubBrokerForm language='hindi' />
                                </GoogleReCaptchaProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
}

export default BannerSBrokerHindi;
