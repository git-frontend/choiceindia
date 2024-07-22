import React from "react";
import SubBannerimage from '../../assets/images/mutual-fund-distributor/mutual-fund-distributor.webp';
import SubBrokerForm from '../Mutual-Fund-Distributor/SubBrokerForm';
import LazyLoader from "../Common-features/LazyLoader";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import utils from "../../Services/utils";
import { useState,useEffect } from "react";
import "../SubBroker/subbroker.scss";
function BannerMFDistributorHindi() {
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
            <section className="franchise-banner" >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-6 col-lg-8 ">
                            <div className="caption-banner">
                                <div className="left-sec">
                                    <h1 className="tlt1">
                                        म्यूचुअल फंड वितरक बनें 
                                    </h1>
                                </div>
                                <div className="right-sec">
                                    <LazyLoader src={SubBannerimage} alt={"म्यूचुअल फंड वितरक"} className={"img-fluid"} width={"562"} height={"562"}/>
                                </div>
                            </div>
                            <div className="caption-blue-bar">
                                <ul>
                                    <li>
                                        <span>ज्यादा </span> कमीशन
                                    </li>
                                    <li>
                                        कमाई के <span> कई स्रोत</span> 
                                    </li>
                                    <li>
                                        <span>आजीवन </span> आय स्रोत

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="franchise-form justify-content-end d-flex" id="form-banner">
                            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                            <SubBrokerForm language="mutualDistributorhindi"/>
                            </GoogleReCaptchaProvider>
                                
                            </div>
                           
                        </div>
                        <div className={name}>
                            <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                                <button className=" primary-orange-btn scroll-top-account openbtn"  onClick={()=>{utils.scrollToId('sub-broker-form')}}>म्यूचुअल फंड वितरक बनें</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
}

export default BannerMFDistributorHindi;
