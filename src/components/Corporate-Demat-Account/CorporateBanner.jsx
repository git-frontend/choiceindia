import React,{useState,useEffect} from "react";
import NewDematAccountForm from '../Common-features/NewDematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function CorporateBanner() {
    const[ischeck,setIscheck]=useState(false);
    function scrollToId(id) {
        var element = document.getElementById(id);
        var headerOffset = 140;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    return (
        <>
            <section className="corporate-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="corporate-banner-headings">
                                <h1 className="para-first">Open Corporate Demat Account</h1>
                                <p className="title"><span>EMPOWER</span>
                                    Your Business</p>
                                <p className="para-scnd">Trade easily across all segments on NSE, BSE, and MCX with our all-in-one Corporate Demat account.</p>
                            </div>
                        </div>
                        <div className="col-md-6"> 
                       
                        <div className="rightsec d-flex justify-content-end" id="campaignForm">
                         <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                            <NewDematAccountForm dataLayerValues={'corporate_lead_initiated'}/>
                                        </GoogleReCaptchaProvider>
                        </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CorporateBanner;