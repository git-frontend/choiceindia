
import React from "react";
import bannerimg from '../../assets/images/nbfc-indivial-loan/flexi-credit-banner.webp';
import LazyLoader from '../Common-features/LazyLoader';
import NbfcForm from "../Common-features/NbfcForm";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Banner() {

  return (
    <div>
      
     
    <section className="inv-fin-banner individual-loans-banner">
        <div className="container">
            <div className="row gx-5">
                <div className="col-md-7">
                    <div className="fin-banner-caption">
                    <h1 className="big-ttl">Individual Loan</h1>
                    <p className="para">At Choice Finserv we understand the value of personal aspirations and the value of assistance that is often required to fulfil such aspirations. That’s why we offer various individual loans with easy terms.</p>
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

export default Banner;
