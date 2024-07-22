import React from "react";
import { useState, useEffect, useRef } from 'react';
import meta_tags from '../../Data/MetaTags';
import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import icon1 from '../../assets/images/Futures-Options-Trading/demat-account-with-daily-research-calls-from-experts.svg';
import icon2 from '../../assets/images/Futures-Options-Trading/free-demat-account-with-advanced-trading-platform.svg';
import icon3 from '../../assets/images/Futures-Options-Trading/demat-account-with-free-premium-research-tools.svg';
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import LazyLoader from '../Common-features/LazyLoader';
import ResearchCalls from './ResearchCalls';
import FuturesTradingNeeds from './FuturesTradingNeeds';
import FandOopendematAc from './FandOopendematAc';
import WhyChoice from './WhyChoice';
import './futuresoptionstrading.scss';
function futuresOptionsTradingBanner() {

    const [isCheck, setIsCheck] = useState(false)
    const [name, setName] = useState('hideform');
    const getPosition = () => {
        const element = document.getElementById("showForm");
        if (element) {
            const rect = element.getBoundingClientRect();

            if (rect.top.toFixed() < 259) {
                setName('visibleform');
            } else {
                setName('hideform');
            }
        }
    };
    const myRef1 = useRef(null);
    const getPositionnew = () => {
        const element = document.getElementById("branch1");
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top.toFixed() < 350) {
                setIsCheck(true);
            }

        }
    }


    useEffect(() => {
        window.addEventListener('scroll', getPosition);
        window.addEventListener('scroll', getPositionnew);
    }, []);


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


    const [rendercount, setRenderCount] = useState(() => false);
    const settings1 = {
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        arrows: false,
        autoplay: false,
        dots: false,
        autoplaySpeed: 2500,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                    slidesToScroll: 1,
                    autoplay: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: true,
                }
            }

        ]

    };

    function scrollToId(id) {
        var element = document.getElementById(id);
        var headerOffset = 140;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
    useEffect(() => {
        setRenderCount(true)
        if (rendercount === true) {
            document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
            document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
            document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
            document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
        }
    }, [rendercount])
    return (
        <>
            <div onScroll={getPositionnew} ref={myRef1} id="branch1" onMouseOver={() => setIsCheck(true)}>
                <section className="futureoptionbenner" onMouseOver={() => setIsCheck(true)}>
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-7 fandoleft">
                                <h1 className="big-ttl">Don’t Miss <span> F&amp;O </span><br />
                                    Trading Opportunities!</h1>
                                <Slider {...settings1} className="carditem-option-tab">
                                    <div className="carditem-option">
                                        <span className="carditem-option-img"><LazyLoader src={icon1} alt={"Demat Account with Daily F&O Calls from Experts"} className={"img-fluid ban-img"} width={"130"} height={"130"} /></span>
                                        <h4 className="cardoption-ttl">Daily F&amp;O Calls from Experts</h4>
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
                            {
                                isCheck ?
                                    <div className="col-md-5">
                                        <div className="d-flex justify-content-end" id="campaignForm">
                                            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                                <DematAccountForm />
                                            </GoogleReCaptchaProvider>
                                        </div>
                                    </div> :
                                    <div className="col-md-5">
                                        <div className="d-flex justify-content-end" id="campaignForm">
                                            <DematAccountForm />
                                        </div>
                                    </div>
                            }

                        </div>
                        <div className={name}>
                            <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                                <button className=" primary-orange-btn scroll-top-account openbtn" onClick={() => { chapterScroll2('dematform') }}>Open Free Account</button>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            {
                isCheck ?
                    <div>
                        <ResearchCalls />
                        <section className="getstart-signup">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="signup-text">
                                            <div className="signup-left"><h3 className="signup-ttl">Sign up  to check out more research calls.</h3></div>
                                            <div className="signup-right">
                                                <Link onClick={() => scrollToId('campaignForm')}> <span className="btn-bg btn-bg-dark fando-btn ">Get Started</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <FuturesTradingNeeds />
                        <FandOopendematAc />
                        <WhyChoice />
                    </div>
                    : ""}


        </>
    );
};
export default futuresOptionsTradingBanner;