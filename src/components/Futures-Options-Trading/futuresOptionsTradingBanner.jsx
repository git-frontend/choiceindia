
// import React from 'react';
import React from "react";
import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import icon1 from '../../assets/images/Futures-Options-Trading/demat-account-with-daily-research-calls-from-experts.svg';
import icon2 from '../../assets/images/Futures-Options-Trading/free-demat-account-with-advanced-trading-platform.svg';
import icon3 from '../../assets/images/Futures-Options-Trading/demat-account-with-free-premium-research-tools.svg';
import Slider from 'react-slick';
import LazyLoader from '../Common-features/LazyLoader';
import ResearchCalls from '../Futures-Options-Trading/ResearchCalls';
import './futuresoptionstrading.scss';
function futuresOptionsTradingBanner() {
    const settings1 = {
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
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
                    slidesToShow: 2,
                    dots: false,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }

        ]

    };
    return (
        <>
            <section className="futureoptionbenner">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-md-7 fandoleft">
                            <h1 className="big-ttl">Don’t Miss <span> F&O </span><br />
                                Trading Opportunities!</h1>
                            {/* <div className="carditem-option-tab"> */}
                            <Slider {...settings1} className="carditem-option-tab">
                                <div className="carditem-option">
                                    <span className="carditem-option-img"><LazyLoader src={icon1} alt={"Demat Account with Daily F&O Calls from Experts"} className={"img-fluid ban-img"} width={"130"} height={"130"} /></span>
                                    <h4 className="cardoption-ttl">Daily F&O Calls from Experts</h4>
                                </div>
                                <div className="carditem-option">
                                    <span className="carditem-option-img"><LazyLoader src={icon2} alt={"Free Demat Account with Advanced Trading Platform"} className={"img-fluid ban-img"} width={"130"} height={"130"} /></span>
                                    <h4 className="cardoption-ttl">Advanced Trading Platform</h4>
                                </div>
                                <div className="carditem-option">
                                    <span className="carditem-option-img"><LazyLoader src={icon3} alt={"Demat Account with Free Premium Research Tools"} className={"img-fluid ban-img"} width={"130"} height={"130"} /></span>
                                    <h4 className="cardoption-ttl">Free Access to Premium Research Tools</h4>
                                </div>
                            </Slider>
                            {/* </div> */}
                        </div>
                        <div className="col-md-5">
                            <div className="d-flex justify-content-end" id="campaignForm">
                                <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                    <DematAccountForm />
                                </GoogleReCaptchaProvider>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <ResearchCalls/>
           
        </>
    );
};
export default futuresOptionsTradingBanner;