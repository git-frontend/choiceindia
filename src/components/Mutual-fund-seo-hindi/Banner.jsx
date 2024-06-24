
import React,{useState} from "react";

import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Banner() {
    const [selected, setSelected] = useState(0);
   
    return (
        <div>
            <section className="mfi-bannersection">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-md-6 lft-sec">
                            <h1 className="big-ttl"><span>म्यूचुअल फंड</span> में निवेश करें चॉइस के साथ</h1>
                        </div>
                        <div className="col-md-6">
                            <div className="rightsec d-flex justify-content-end" id="mutualid">
                                <GoogleReCaptchaProvider reCaptchaKey={(window.location.pathname.indexOf('mutual-funds-investment') > -1) ? "6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz" : "6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz"} >
                                    <DematAccountForm language='hindimutualfund' />
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