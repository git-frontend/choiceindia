import React from "react";
import SubBannerimage from '../../assets/images/sub-broker/sub-broker-franchise-without-deposit.webp';
import SubBrokerForm from './SubBrokerForm';
import LazyLoader from "../Common-features/LazyLoader";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useState } from "react";

function BannerSBroker() {
    const[ischeck,setIscheck]=useState(false);
    console.log("check",ischeck);

    return (
        <div>
            <section className="franchise-banner" onMouseOver={()=>setIscheck(true)} >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-6 col-lg-8 ">
                            <div className="caption-banner">
                                <div className="left-sec">
                                    <h1 className="tlt1">
                                        <span className="tlt2">Start Sub Broker</span>
                                        Franchise
                                        <span className="tlt2">without Deposit*</span>
                                    </h1>
                                </div>
                                <div className="right-sec">
                                    <LazyLoader src={SubBannerimage} alt={"Sub Broker Franchise Without Deposit"} className={"img-fluid"} width={"400"} height={"391"}/>
                                    {/* <img src={SubBannerimage} alt="Sub Broker Franchise" className="img-fluid" /> */}
                                </div>
                            </div>
                            <div className="caption-blue-bar">
                                <ul>
                                    <li>
                                        <span>Highest</span> Revenue Sharing
                                    </li>
                                    <li>
                                        <span>Upto ₹ 2100 Per</span> Account Incentive*
                                    </li>
                                    <li>
                                        <span>Lifetime</span> Income Source
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {
                            
                            ischeck ?
                            <div className="col-md-6 col-lg-4 ">
                            <div className="franchise-form justify-content-end d-flex" id="form-banner">
                            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                <SubBrokerForm />
                            </GoogleReCaptchaProvider>
                                {/* <SubBrokerForm /> */}
                            </div>
                        </div>:
                         <div className="col-md-6 col-lg-4 ">
                         <div className="franchise-form justify-content-end d-flex" id="form-banner">
                         
                             <SubBrokerForm />
                         
                             {/* <SubBrokerForm /> */}
                         </div>
                     </div>


                        }
                        
                       
                    </div>
                </div>
            </section>



        </div>

    );
}

export default BannerSBroker;
