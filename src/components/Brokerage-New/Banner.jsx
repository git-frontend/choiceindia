import { useState,useEffect } from "react";
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import NewDematAccountForm from '../Common-features/NewDematAccountForm';
import Slider from 'react-slick';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import icon1 from '../../assets/images/Brokerage-New/Free-Account-with-Low-Brokerage-Charges.svg';
import icon2 from '../../assets/images/Brokerage-New/Low-Brokerage-with-Zero-AMC.svg';
import icon3 from '../../assets/images/Brokerage-New/0-auto-square-off-with-lowest-brokerage.svg';
import icon4 from '../../assets/images/Brokerage-New/Low-brokerage-and-Rs.-0-call-&-trade.svg';
function Banner() {
    const [ischeck, setIscheck] = useState(false);
    const [formMobile, setFormMobile] = useState('');
    const [isActive,setIsActive]=useState(false);
    function chapterScroll2(id) {
        var element = document.getElementById(id);
        var headerOffset = 140;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    useEffect(()=>{
    if(window.innerWidth<=992){
    setFormMobile('form-mobile')
    }
    else{
    setFormMobile('')
    }
    },[])

    const settings1 = {
        infinite: false,
        speed: 1500,
        slidesToShow: 4,
        arrows: false,
        autoplay: false,
        dots: true,
        autoplaySpeed: 1000,
        slidesToScroll: 1,
        // swipeToSlide: true,
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                    slidesToScroll: 1,
                    autoplay: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    autoplay: false,
                    speed: 1500,
                    autoplaySpeed: 2500,
                }
            }

        ]

    };
    return (
            <div >
                <section className="brokerage-charges-banner" >
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-7 col-md-6 banner-left">
                                <h1 className="big-ttl">Looking for the <span className="text-bg">Lowest</span> Brokerage Charges?</h1>
                                <p className="para">Choice makes investing in the stock market simple and accessible, offering you the best Demat account with the lowest brokerage.</p>
                                <Slider {...settings1} className="carditem-option-tab">
                                    <div className="carditem-option">
                                        <span className="carditem-option-img"><LazyLoader src={icon1} alt={"Free Account with Low Brokerage Charges"} className={"img-fluid"} width={"202"} height={"157"} /></span>
                                    </div>
                                    <div className="carditem-option">
                                        <span className="carditem-option-img"><LazyLoader src={icon2} alt={"Low Brokerage with Zero AMC"} className={"img-fluid"} width={"202"} height={"157"} /></span>
                                    </div>
                                    <div className="carditem-option">
                                        <span className="carditem-option-img"><LazyLoader src={icon3} alt={"0 auto square off with lowest brokerage"} className={"img-fluid"} width={"202"} height={"157"} /></span>
                                    </div>
                                    <div className="carditem-option">
                                        <span className="carditem-option-img"><LazyLoader src={icon4} alt={"Low brokerage and Rs. 0 call & trade"} className={"img-fluid"} width={"202"} height={"157"} /></span>
                                    </div>
                                </Slider>
                                
                            </div>
                          
                                    <div className="col-xl-5 col-md-6">
                                        <div className="d-flex justify-content-center justify-content-lg-end" id="dematform">
                                        <div className={`${formMobile} ` + (isActive ? 'p-hide' : 'p-show')}>
                                         <NewDematAccountForm setIsActive={setIsActive}/>
                                        </div>
                                        </div>
                                    </div> 
                        </div>
                        <div className={name}>
                            <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                                <button className=" primary-orange-btn scroll-top-account openbtn" onClick={() => {setIsActive(true);}}>Open Free Account</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
   
    );
}

export default Banner;
