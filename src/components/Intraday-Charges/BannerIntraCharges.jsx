import {useState,useEffect} from 'react';
import SubBannerimage from '../../assets/images/intraday-charges/intraday-charges.webp';
import img1 from '../../assets/images/intraday-charges/ratio-icon.svg';
import img2 from '../../assets/images/intraday-charges/quandle.svg';

import LazyLoader from "../Common-features/LazyLoader";
import DematAccountForm from '../Common-features/DematAccountForm';
import { Link } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function BannerIntraCharges() {
    function scrollToId(id) {
        var element = document.getElementById(id);
        var headerOffset = 100;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    function chapterScroll(id) {
        var element = document.getElementById(id);
        var headerOffset = 140;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }

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
            <section className="intrc-banner" >
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-md-6 col-lg-8 ">
                            <div className="caption-banner">
                                <div className="left-sec">
                                    <h1 className="tlt1">
                                         Don’t Pay Extra Brokerage
                                    </h1>
                                    <p className="des-nm">Save upto <strong>33% brokerage</strong> on intraday trades with Choice</p>
                                    <Link onClick={()=>scrollToId('intradaycharges')}>
                                        <span className="btn-bg">Know How?
                                        <svg xmlns="http://www.w3.org/2000/svg" id="baseline-arrow_forward-24px" width="24" height="24" viewBox="0 0 24 24">
  <path id="Path_1980" data-name="Path 1980" d="M0,0H24V24H0Z" fill="none"/>
  <path id="Path_1981" data-name="Path 1981" d="M12,4,10.59,5.41,16.17,11H4v2H16.17l-5.58,5.59L12,20l8-8Z" fill="#231f20"/>
</svg> 
                                        </span>
                                        
                                    </Link>
                                </div>
                                <div className="right-sec">
                                    <span className="itm-first">
                                        <LazyLoader src={img1} alt={"Sub Broker Franchise Without Deposit"} className={"img-fluid"} width={"24"} height={"24"}/>
                                    </span>
                                    <span className="itm-scnd">
                                        33<em>%</em>
                                    </span>
                                    <span className="itm-third">
                                        <LazyLoader src={img2} alt={"Sub Broker Franchise Without Deposit"} className={"img-fluid"} width={"39"} height={"28"}/>
                                    </span>
                                    <LazyLoader src={SubBannerimage} alt={"Intraday Charges"} className={"img-fluid"} width={"432"} height={"500"}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="franchise-form justify-content-end d-flex" id="form-banner">
                            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                    <DematAccountForm />
                                </GoogleReCaptchaProvider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={name}>
                    <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                        <button className=" primary-orange-btn scroll-top-account openbtn"  onClick={()=>{chapterScroll('dematform')}}>Open Free Account</button>
                    </div>
                    </div>
            </section>



        </div>

    );
}

export default BannerIntraCharges;
