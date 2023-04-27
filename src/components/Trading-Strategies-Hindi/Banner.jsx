
import React from "react";
import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Banner() {
  return (
    <div>
    <section className="trading-Stratebanner">
        <div className="container brd-bottom">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-md-7">
                    <div className="trading-banner-caption">
                        <h1 className="big-ttl">क्या आपकी टेक्निकल अनॅलिसिस <br/>स्कील्स नहीं  देते हैं रिटर्न्स ?</h1>
                       <p className="para">अपने पैसे न गवाइए, 5 मिनट में अपनी खुद की स्ट्रेटेजी बनाएं, उच्च लाभदायक स्ट्रेटेजी विकसित करें</p>
                       <div class="btn-open"><a target="_blank" class="cursor-pointer"><span class="btn-bg">स्ट्रेटेजी बनाएं</span></a></div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-5">
                    <div className="d-flex justify-content-end" id="campaignForm">
                        <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                            <DematAccountForm  language='hindi'/>
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
