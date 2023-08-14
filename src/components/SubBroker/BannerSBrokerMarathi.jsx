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
                                    <h1 className="tlt1 marathititle">
                                        <span className="tlt2">सुरु करा सब ब्रोकर</span>
                                        फ्रँचायझी
                                        <span className="tlt2">चॉईसच्या सोबतीने</span>
                                    </h1>
                                </div>
                                <div className="right-sec">
                                    <LazyLoader src={SubBannerimage} alt={"सब ब्रोकर फ्रँचायझी डिपॉझिट शिवाय"} className={"img-fluid"} width={"400"} height={"391"}/>
                                    {/* <img src={SubBannerimage} alt="Sub Broker Franchise" className="img-fluid" /> */}
                                </div>
                            </div>
                            <div className="caption-blue-bar">
                                <ul>
                                    <li>
                                        <span>सर्वोच्च </span> ब्रोकरेज शेअरिंग
                                    </li>
                                    <li>
                                        <span>सर्वांत कमी</span>डिपॉझिट
                                    </li>
                                    <li>
                                        <span>लाईफटाईम</span>  इनकम स्रोत
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                        {
                            
                            ischeck ?
                            <div className="franchise-form justify-content-end d-flex" id="form-banner">
                                <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                    <SubBrokerForm language='marathi' />
                                </GoogleReCaptchaProvider>
                            </div>:
                            <div className="franchise-form justify-content-end d-flex" id="form-banner">
                                <SubBrokerForm language='marathi' />
                        </div>
                        }
                        </div>
                        <div className={name}>
                            <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                                <button className=" primary-orange-btn scroll-top-account openbtn"  onClick={()=>{utils.scrollToId('sub-broker-form')}}>सब ब्रोकर बना</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default BannerSBroker;