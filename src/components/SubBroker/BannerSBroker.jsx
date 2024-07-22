import React from "react";
import SubBannerimage from '../../assets/images/sub-broker/sub-broker-franchise-without-deposit.webp';
import SubBrokerForm from './SubBrokerForm';
import LazyLoader from "../Common-features/LazyLoader";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useState,useEffect } from "react";
import utils from "../../Services/utils";

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
            <section className="franchise-banner" onMouseOver={()=>setIscheck(true)} >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-6 col-lg-8 ">
                            <div className="caption-banner">
                                <div className="left-sec">
                                    <h1 className="tlt1">
                                        <span className="tlt2">Start Sub Broker </span>
                                        Franchise
                                        <span className="tlt2"> with Choice</span>
                                    </h1>
                                </div>
                                <div className="right-sec">
                                    <LazyLoader src={SubBannerimage} alt={"Sub Broker Franchise Without Deposit"} className={"img-fluid"} width={"400"} height={"391"}/>
                                </div>
                            </div>
                            <div className="caption-blue-bar">
                                <ul>
                                    <li>
                                        <span>Highest</span> Revenue Sharing
                                    </li>
                                    <li> 
                                    Upto <span className="d-inline">₹ 1000 </span> Per Account Incentive*
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
                            </div>
                        </div>:
                         <div className="col-md-6 col-lg-4">
                         <div className="franchise-form justify-content-end d-flex" id="form-banner">
                         
                             <SubBrokerForm />
                             
                         </div>
                     </div>


                        }
                        
                       
                    </div>
                    <div className={name}>
                    <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                        <button className=" primary-orange-btn scroll-top-account openbtn"  onClick={()=>{utils.scrollToId('sub-broker-form')}}>Become a Sub Broker</button>
                    </div>
                    </div>
                </div>
            </section>



        </div>

    );
}

export default BannerSBroker;
