import React, { useEffect, useState } from "react";
import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function Banner() {
   
  return (
    <>
     <section className="funds-bannersection">
        <div className="container">
            <div className="row gx-5 align-items-center">
                <div className="col-xl-7 col-md-6 lft-sec">
                    <h1 className="big-ttl">HDFC Mutual Fund AMC</h1>
                    <p className="para">Experience ‘The Joy of Earning’ by investing in HDFC Mutual Fund Online and see your Wealth Grow over time!</p>
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