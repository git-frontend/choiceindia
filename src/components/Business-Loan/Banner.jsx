
import React from "react";
import LazyLoader from "../Common-features/LazyLoader";
import banner from '../../assets/images/business-loan/business-loan.webp';
import NbfcForm from "../Common-features/NbfcForm";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function ChannelFinanceBanner() {
    
    return (
        <div>
            <section className="inv-fin-banner nbfc-business-loan">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-md-7">
                            <div className="fin-banner-caption">
                                <h1 className="big-ttl">Business Loan</h1>
                                <p>We at Choice Finserv understand and value the business needs and requirement of our customers.</p>
                                <p>We offer Business Loans to meet capital requirement and give you the financial push to make your business vision come true.</p>
                            </div>
                        </div>
                        <div className=" col-md-5">
                            <div className="formwrap">
                            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                            <NbfcForm/> 
                                </GoogleReCaptchaProvider>  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ChannelFinanceBanner;
