
// import React from 'react';
import React from "react";
import Bannerimage from '../../assets/images/fno-trading/fno-trading.webp';
import LazyLoader from '../Common-features/LazyLoader';
import NewDematAccountForm from "../Common-features/NewDematAccountForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
function FnoTradingBanner() {

    // function scrollToId(id) {
    //     var element = document.getElementById(id);
    //     var headerOffset = 140;
    //     var elementPosition = element.getBoundingClientRect().top;
    //     var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    //     window.scrollTo({
    //         top: offsetPosition,
    //         behavior: "smooth"
    //     });
    // }
    
    return (
        <>
            <section className="fno-banner">
                <div className="container">
                    <div className="row gx-5 justify-content-between">
                        <div className="col-md-6">
                            <div className="ban-caption">
                                {/* <h5>Choice: Options Trader’s Delight</h5> */}
                                <h1 className="title">Master the <br/> Art of Trading</h1>
                                <p className="para">Leverage our advanced platform, tools, and <br/> expertise to make the most of your trading.</p>
                                {/* <a href="javascript:void(0)" className="btn-bg btn-new" onClick={() => scrollToId('campaignForm')}>Start Now</a> */}
                            </div>
                            
                        </div>
                        <div className="col-md-6 d-sm-block" id="demat-form-section">
                     
                            <div className="rightsec">
                            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                        <NewDematAccountForm/>
                        </GoogleReCaptchaProvider>
                                {/* <LazyLoader src={Bannerimage} alt={"F & O Trading"} className={"img-fluid"} width={"609"} height={"476"} />
                                <img src={Bannerimage} alt="Banner Images" className="img-fluid "></img> */}
                            </div>
                        </div>
                    </div>
                </div>

                
            </section>
            
            <section className="count-fno-members">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="inner-count">
                                <div className="count-itm">
                                    <h3><span class="hvr-txt"><span>30</span></span><small>+</small></h3>
                                    <h5>Year of Experience</h5>
                                </div>
                                <div className="count-itm">
                                    <h3><span class="hvr-txt"><span>110</span></span><small>+</small></h3>
                                    <h5>Local Branches</h5>
                                </div>
                                <div className="count-itm">
                                    <h3><span class="hvr-txt"><span>975K</span></span><small>+</small></h3>
                                    <h5>Happy Clients</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
export default FnoTradingBanner;