import { useState } from "react";
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import NewDematAccountForm from '../Common-features/NewDematAccountForm';
import Slider from 'react-slick';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import icon1 from '../../assets/images/Brokerage-New/Group 99790.svg';
import icon2 from '../../assets/images/Brokerage-New/Group 99794.svg';
import icon3 from '../../assets/images/Brokerage-New/Group 99795.svg';
import icon4 from '../../assets/images/Brokerage-New/Group 99796.svg';
function Banner() {
    const [ischeck, setIscheck] = useState(false);
    const settings1 = {
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        arrows: false,
        autoplay: false,
        dots: true,
        autoplaySpeed: 1500,
        slidesToScroll: 1,
        swipeToSlide: true,
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
                    speed: 2500,
                    autoplaySpeed: 3000,
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
                                        <span className="carditem-option-img"><LazyLoader src={icon1} alt={""} className={"img-fluid"} width={"202"} height={"157"} /></span>
                                    </div>
                                    <div className="carditem-option">
                                        <span className="carditem-option-img"><LazyLoader src={icon2} alt={""} className={"img-fluid"} width={"202"} height={"157"} /></span>
                                    </div>
                                    <div className="carditem-option">
                                        <span className="carditem-option-img"><LazyLoader src={icon3} alt={""} className={"img-fluid"} width={"202"} height={"157"} /></span>
                                    </div>
                                    <div className="carditem-option">
                                        <span className="carditem-option-img"><LazyLoader src={icon4} alt={""} className={"img-fluid"} width={"202"} height={"157"} /></span>
                                    </div>
                                </Slider>
                                {/* </div> */}
                            </div>
                          
                                    <div className="col-xl-5 col-md-6">
                                        <div className="d-flex justify-content-center justify-content-lg-end" id="campaignForm">
                                            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                                <NewDematAccountForm />
                                            </GoogleReCaptchaProvider>
                                        </div>
                                    </div> 
                        </div>
                        <div className={name}>
                            <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                                <button className=" primary-orange-btn scroll-top-account openbtn" onClick={() => { chapterScroll2('dematform') }}>Open Free Account</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
   
    );
}

export default Banner;
