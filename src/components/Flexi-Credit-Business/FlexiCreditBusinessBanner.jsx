
import React,{useState,useEffect} from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import LazyLoader from "../Common-features/LazyLoader";
import time from '../../assets/images/nbfc-indivial-loan/quick-flexi-loan-approval.svg';
import disburse from '../../assets/images/nbfc-indivial-loan/flexi-loan-disbursed-in-48-hours.svg';
import paperwork from '../../assets/images/nbfc-indivial-loan/minimum-paper-work-for-flexi-business-loan.svg';
import fee from '../../assets/images/nbfc-indivial-loan/low-flexi-loan-processing-fees.svg';
import NbfcForm from "../Common-features/NbfcForm";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function FlexiCreditBusinessBanner() {
    /** scroll purpose */
function chapterScroll(id) {
    // console.log("check",id);
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
  /** hide and show section */
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

    const settings1 = {
        infinite: true,
        speed: 1500,
        slidesToShow:4,
        arrows: false,
        autoplay: true,
        dots: false,
        autoplaySpeed: 1500,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [

            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                dots: true,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }
            }
      
          ]
    
      };
    return (
        <div>
            <section className="inv-fin-banner flexi-credit-banner">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <div className="fin-banner-caption">
                                <h1 className="big-ttl"> Apply for Business Flexi<br /> Credit in India </h1>
                                <p>  Our Flexi-Credit gives you the freedom to withdraw or deposit money multiple times from your loan account and only pay interest on the utilized amount with our efficient business loan facility.</p>
                                <p>Get a Flexi business loan up to Rs. 25 lakhs online. <br />
                                        <span className="aply-btn">Apply Now!</span>
                                   
                                    </p>
                            </div>
                        </div>
                        <div className=" col-md-5">
                            <div className="formwrap float-right">
                            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                            <NbfcForm/> 
                                </GoogleReCaptchaProvider>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center ">
                        <div className="col-xl-12 col-md-12">
                        <Slider {...settings1} className="inv-banner-slider">
                            <div className="carditem-nbfc">
                            <span className='cardimg'>
                                <img src={time} alt="Quick Flexi Loan Approval" className="img-fluid img"  width={"45"} height={"34"}></img> 
                            </span>
                                <h3 className="card-ttl">10 Mins</h3>
                                <p className="subtext">Loan Sanctioned Time</p>
                            </div>
                            <div className="carditem-nbfc">
                            <span className='cardimg'>
                                <img src={disburse} alt="Flexi Loan Disbursed in 48 Hours" className="img-fluid img"  width={"45"} height={"50"}></img> 
                            </span>
                                <h3 className="card-ttl">48 Hours</h3>
                                <p className="subtext">to Get Loan Disbursed</p>
                            </div>
                            <div className="carditem-nbfc">
                            <span className='cardimg'>
                                <img src={paperwork} alt="Minimum Paper Work for Flexi Business Loan" className="img-fluid img"  width={"45"} height={"34"}></img> 
                            </span>
                                <h3 className="card-ttl">Minimum</h3>
                                <p className="subtext">Paperwork</p>
                            </div>
                            <div className="carditem-nbfc">
                            <span className='cardimg'>
                                <img src={fee} alt="Low Flexi Loan Processing Fee" className="img-fluid img"  width={"45"} height={"34"}></img> 
                            </span>
                                <h3 className="card-ttl">Low</h3>
                                <p className="subtext">processing Fee</p>
                            </div>
                        </Slider> 
                        </div>
                    </div>
                    <div className={name}>
                    <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                        <button className=" primary-orange-btn scroll-top-account openbtn"  onClick={()=>{chapterScroll('nbfcform')}}>Get a Call from us</button>
                    </div>
                    </div>
                </div>
            </section>

          
        </div>
    );
}

export default FlexiCreditBusinessBanner;
