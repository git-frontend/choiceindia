
import React,{useState,useEffect} from "react";
// import videoBg from '../../assets/images/insurance/insuringShield.mp4'
import icon1 from '../../assets/images/ipo/icon1.svg'
import icon2 from '../../assets/images/ipo/icon2.svg'
import icon3 from '../../assets/images/ipo/icon3.svg'
import LazyLoader from '../Common-features/LazyLoader';
import Equity from "../../Data/Equity";
import NewDematAccountForm from '../Common-features/NewDematAccountForm'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Banner() {
    const[ischeck,setIscheck]=useState(false);
    const [selected, setSelected] = useState(0);

    // useEffect(() => {
    //     console.log((window.location.pathname.indexOf('mutual-funds-investment') > -1)? "6Leg-I4jAAAAAExpL1suOuo79wXRPZWpHtilOE4j" : "6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz")
    // },[])

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