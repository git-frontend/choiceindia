import React from "react";
import SubBannerimage from '../../assets/images/mutual-fund-distributor/mutual-fund-distributor.webp';
import SubBrokerForm from './SubBrokerForm';
import LazyLoader from "../Common-features/LazyLoader";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useState,useEffect } from "react";
import utils from "../../Services/utils";
import "../SubBroker/subbroker.scss";
function BannerMFDistributor() {
    const[ischeck,setIscheck]=useState(false);
    const [name, setName ] = useState('hideform');
    const getPosition = () => {
        const element = document.getElementById("showForm");
        // console.log("check",element)
        if(element){
            const rect = element.getBoundingClientRect();
            // console.log("check", rect)
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
                                    <h1 className="tlt1">
                                        <span className="tlt2">Become a </span>Mutual Fund Distributor
                                    </h1>
                                </div>
                                <div className="right-sec">
                                    <LazyLoader src={SubBannerimage} alt={"Mutual Fund Distributor"} className={"img-fluid"} width={"562"} height={"562"}/>
                                </div>
                            </div>
                            <div className="caption-blue-bar">
                                <ul>
                                    <li>
                                        <span>Highest</span> Commission
                                    </li>
                                    <li>
                                        <span>Multiple</span> Sources of Earnings
                                    </li>
                                    <li>
                                        <span>Lifetime</span> Income Source
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            {
                                ischeck ?
                            <div className="franchise-form justify-content-end d-flex" id="form-banner">
                                <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                    <SubBrokerForm page='mutual-fund-distributor'/>
                                </GoogleReCaptchaProvider>
                            </div>:
                            <div className="franchise-form justify-content-end d-flex" id="form-banner" >
                                <SubBrokerForm page='mutual-fund-distributor'/>
                            </div>
                            }
                           
                        </div>
                        <div className={name}>
                            <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                                <button className=" primary-orange-btn scroll-top-account openbtn"  onClick={()=>{utils.scrollToId('sub-broker-form')}}>Become a MF Distributor
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
}

export default BannerMFDistributor;
