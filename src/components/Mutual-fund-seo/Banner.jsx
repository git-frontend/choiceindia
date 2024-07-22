
import React,{useState,useEffect} from "react";
import NewDematAccountForm from '../Common-features/NewDematAccountForm'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Banner() {
    const[ischeck,setIscheck]=useState(false);
    const [selected, setSelected] = useState(0);

   

    return (
        <div>
            <section className="mfi-bannersection" onMouseOver={()=>setIscheck(true)}>
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-md-6 lft-sec">
                            <span class="banner-title2 mf-ttl">All in 1 Account</span>
                            <h1 className="big-ttl">Start <span>mutual funds</span> Investment with Choice</h1>
                        </div>
                        <div className="col-md-6">
                        {
                         ischeck ?
                        <div className="rightsec d-flex justify-content-end" id="mutualid">
                            <GoogleReCaptchaProvider reCaptchaKey={(window.location.pathname.indexOf('mutual-funds-investment') > -1) ? "6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz" : "6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz"} >
                                <NewDematAccountForm />
                            </GoogleReCaptchaProvider>
                        </div>:
                            <div className="rightsec d-flex justify-content-end" id="mutualid">
                                    <NewDematAccountForm />
                            </div>
                            }
                           
                        </div>
                    </div>                   
                </div>
            </section>
        </div>
    );
}

export default Banner;