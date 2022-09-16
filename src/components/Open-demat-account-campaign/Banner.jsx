
import React,{useState} from "react";
// import videoBg from '../../assets/images/insurance/insuringShield.mp4'
import icon1 from '../../assets/images/ipo/icon1.svg'
import icon2 from '../../assets/images/ipo/icon2.svg'
import icon3 from '../../assets/images/ipo/icon3.svg'
import LazyLoader from '../Common-features/LazyLoader';
import Equity from "../../Data/Equity";
import DematAccountForm from '../Common-features/DematAccountForm'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function OpenDematAccount() {
    const [selected, setSelected] = useState(0);

    return (
        <div>
            <section className="demat-camp-bannersection">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-md-6 lft-sec">
                            <h1 className="big-ttl">one demat account with <span>Multiple benefits</span></h1>
                            <div class="zero-ban-caption">
                                <div class="textwrap">
                                <p className="rotate"> <span>E</span><br/><span>E</span><br/><span>R</span><br/><span>F</span> </p>
                                <ul>
                                    <li>Free Demat Account</li>
                                    <li>Expert Research Advisory</li>
                                    <li>Free AMC for First Year</li>
                                    <li>Research Tools Worth Rs 50,000</li>
                                </ul>
                            </div>
                    </div>
                        </div>
                        <div className="col-md-6">
                            <div className="rightsec d-flex justify-content-end" id="campaignForm">
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

export default OpenDematAccount;