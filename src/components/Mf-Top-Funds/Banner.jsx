import React, { useEffect, useState } from "react";
import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function Banner() {
   
  return (
    <>
     <section className="funds-bannersection">
        <div className="container">
            <div className="row gx-5 align-items-center">
                <div className="col-xl-6 col-md-6 lft-sec">
                    <h1 className="big-ttl">Top Mutual Fund AMC's</h1>
                    <p className="para">With Choice, empower yourself to invest in mutual funds across all the AMC's i.e. Asset Management Companies in India and see your money grow over time!</p>
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-end" id="campaignForm">
                        <DematAccountForm />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner