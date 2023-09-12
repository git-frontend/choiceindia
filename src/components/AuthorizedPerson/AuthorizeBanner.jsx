import React from "react";
import SubBannerimage from '../../assets/images/sub-broker/sub-broker-franchise-without-deposit.webp';
import SubBrokerForm from './../SubBroker/SubBrokerForm'
import { useState,useEffect } from "react";
import utils from "../../Services/utils";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function AuthorizeBanner() {
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
                                <h1 className="tlt1"><span className="tlt2">Become a Choice</span>
                                    Authorised Person</h1>
                                </div>
                                <div className="right-sec">
                                    <img src={SubBannerimage} alt="Become an Authorised Person" className="img-fluid"  />
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
                        <div className="col-md-6 col-lg-4 " id="sub-broker-form">
                           {
                            ischeck ?
                            <div className="franchise-form justify-content-end d-flex" id="form-banner">
                            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                <SubBrokerForm />
                            </GoogleReCaptchaProvider>
                            </div>:
                             <div className="franchise-form justify-content-end d-flex" id="form-banner">
                                 <SubBrokerForm />
                             </div>
                           }
                        </div>
                        <div className={name}>
                            <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                                <button className=" primary-orange-btn scroll-top-account openbtn"  onClick={()=>{utils.scrollToId('sub-broker-form')}}>Become a Sub Broker</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
}

export default AuthorizeBanner;
