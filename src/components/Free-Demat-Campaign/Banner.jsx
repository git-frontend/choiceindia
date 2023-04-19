
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import NoAmc from '../../assets/images/free-demat-compaign/free-demat-account-with-no-annual-charges.svg';
import ResearchCalls from '../../assets/images/free-demat-compaign/free-demat-account-with-expert-research-calls.svg';
import ResearchTools from '../../assets/images/free-demat-compaign/open-demat-account-with-free-research-tools.svg';
import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Banner() {
  return (
    <div>
    <section className="free-dematbanner">
        <div className="container brd-bottom">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="banner-btn">
                        <span className="all-account">All in One Account</span>
                    </div>
                </div>
                <div className="col-lg-6 col-md-7">
                    <div className="free-banner-caption">
                        <h1 className="big-ttl">Free Demat Account<br /> Opening in <span className="clock">5</span> Minutes </h1>
                        <div className="campaign-banner-features">
                            <div className="campaign-features-list">
                                <span className="campaign-img">
                                    <LazyLoader src={NoAmc} className={'img-fluid'} width={"93"} height={"82"} alt={"Free Demat Account with No Annual Charges"}/>
                                </span>
                                <h3>No AMC for <br/>First Year</h3>
                            </div>
                            <div className="campaign-features-list">
                                <span className="campaign-img">
                                    <LazyLoader src={ResearchCalls} className={'img-fluid'} width={"90"} height={"85"} alt={"Free Demat Account with Expert Research Calls"}/>
                                </span>
                                <h3>Expert <br/>Research Calls</h3>
                            </div>
                            <div className="campaign-features-list">
                                <span className="campaign-img">
                                    <LazyLoader src={ResearchTools} className={'img-fluid'} width={"93"} height={"82"} alt={"Open Demat Account with Free Research Tools"}/>
                                </span>
                                <h3>Free <br/>Research Tools</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-5">
                    <div className="d-flex justify-content-end" id="campaignForm">
                        <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                            <DematAccountForm />
                        </GoogleReCaptchaProvider>
                    </div>
                </div>
            </div>
        </div>
    </section>

    

   
    
    </div>
  );
}

export default Banner;
