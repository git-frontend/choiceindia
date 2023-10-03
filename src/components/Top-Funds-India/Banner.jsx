import React, { useEffect, useState } from "react";
import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function Banner() {
   
  return (
    <>
     <section className="funds-bannersection banner-funds-india">
        <div className="container">
            <div className="row gx-5 align-items-center">
                <div className="col-xl-7 col-md-6 lft-sec">
                    <h1 className="big-ttl">Top Mutual Funds In India</h1>
                    <p className="para">Brought exclusively by Team Choice, here are the Best Mutual Funds across both, Equity and Debt Categories! They have been handpicked by our team by performing a Thorough Research, Robust Analysis and Curated Selection.</p>
                </div>
                <div className="col-xl-5 col-md-6">
                    <div className="d-flex justify-content-end" id="campaignForm">
                    <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                        <DematAccountForm />
                    </GoogleReCaptchaProvider>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner