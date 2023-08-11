import React from "react";
import SubBannerimage from '../../assets/images/sub-broker/sub-broker-franchise-without-deposit.webp';
import SubBrokerForm from './SubBrokerForm';
import LazyLoader from "../Common-features/LazyLoader";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import utils from "../../Services/utils";
import { useState,useEffect } from "react";
function BannerSBroker() {
    const[ischeck,setIscheck]=useState(false);
    const [name, setName ] = useState('hideform');
    const getPosition = () => {
        const element = document.getElementById("showForm");
        if(element){
            const rect = element.getBoundingClientRect();
            if(rect.top.toFixed() < 259){
                setName('visibleform');
            }else{
                setName('hideform');
            }
        }
    };
      useEffect(() => {
        window.addEventListener('scroll', getPosition);
    }, []);
    return (
        <div>
            <section className="franchise-banner" onMouseOver={()=>setIscheck(true)}>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-6 col-lg-8 ">
                            <div className="caption-banner">
                                <div className="left-sec">
                                    <h1 className="tlt1 gujratitle">
                                        <span className="tlt2">શરૂ કરો સબ બ્રોકર</span>
                                        ફ્રેન્ચાઇઝ
                                        <span className="tlt2">ચોઈસ સાથે</span>
                                    </h1>
                                </div>
                                <div className="right-sec">
                                    <LazyLoader src={SubBannerimage} alt={"સબ-બ્રોકર ફ્રેન્ચાઇઝ ડિપોઝિટ વિના"} className={"img-fluid"} width={"400"} height={"391"}/>
                                    {/* <img src={SubBannerimage} alt="Sub Broker Franchise" className="img-fluid" /> */}
                                </div>
                            </div>
                            <div className="caption-blue-bar">
                                <ul>
                                    <li>
                                        <span>સૌથી વધુ </span> રેવન્યુ શેરિંગ
                                    </li>
                                    <li>
                                        ઓછા માં <span>ઓછી ડિપોઝિટ</span> 
                                    </li>
                                    <li>
                                        <span>જીવનભર </span> કમાઓ
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                        {
                            
                            ischeck ?
                            <div className="franchise-form justify-content-end d-flex" id="form-banner">
                            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                <SubBrokerForm language='gujarati' />
                            </GoogleReCaptchaProvider>
                        </div>:
                            <div className="franchise-form justify-content-end d-flex" id="form-banner">
                                <SubBrokerForm language='gujarati' />
                        </div>
                        }
                            
                        </div>
                        <div className={name}>
                            <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                                <button className=" primary-orange-btn scroll-top-account openbtn"  onClick={()=>{utils.scrollToId('sub-broker-form')}}>સબ બ્રોકર બનો</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default BannerSBroker;