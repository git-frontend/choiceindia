import React from 'react';
import ImageSub13 from '../../assets/images/mutual-fund-distributor/eligible-to-become-mutual-fund-distributor.svg';
import ImageSub14 from '../../assets/images/mutual-fund-distributor/sell-multiple-financial-products.svg';
import ImageSub15 from '../../assets/images/mutual-fund-distributor/become-a-mutual-fund-agent.svg';
import ImageSub16 from '../../assets/images/mutual-fund-distributor/mutual-fund-distributor-eligibility.webp';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import LazyLoader from '../Common-features/LazyLoader';
// import { Link } from 'react-router-dom';

function EligibleToMFDistributor() {

    // function scrollToId(id) {
    //     var element = document.getElementById(id);
    //     var headerOffset = 140;
    //     var elementPosition = element.getBoundingClientRect().top;
    //     var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    //     window.scrollTo({
    //         top: offsetPosition,
    //         behavior: "smooth"
    //     });
    // }

    const settings = {
        infinite: true,
        speed: 1500,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        margin: 15,
        dots: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <section className="franchise-eligb">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="eligb-left-sec">
                                <h2 className="titl3">म्यूचुअल फंड एजेंट कौन बन सकता है?</h2>
                                <p className="sml-para-dv">जो कोई भी म्यूचुअल फंड उद्योग में अपना करियर बनाना चाहता है, वह म्यूचुअल फंड वितरक के रूप में नामांकन कर सकता है।</p>
                                <Link to={(window.location.pathname =="/campaign/mutual-fund-distributor")? "/campaign/mutual-fund-distributor":(window.location.pathname =="/mutual-fund-distributor")? "/mutual-fund-distributor":""} className="btn-bg btn-bg-dark hide-mob" onClick={()=>scrollToId('sub-broker-form')}><span> अभी शुरू करें
</span> </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="eligb-right-sec">
                                <Slider {...settings} className="slider-eligb">
                                    <div className="">
                                        <LazyLoader src={ImageSub13} alt={"म्यूचुअल फंड डिस्ट्रीब्यूटर बनने की पात्रता"} className={"img-fluid"} width={"74"} height={"74"} />
                                        {/* <img src={ImageSub13} alt="Individual must be 18+ years of age" className="img-fluid" width="74" height="74" /> */}
                                        <h4>व्यक्ति की आयु 18+ वर्ष होनी चाहिए</h4>
                                    </div>
                                    <div className="">
                                        <LazyLoader src={ImageSub14} alt={"म्यूचुअल फंड वितरक बनें और कई वित्तीय उत्पाद बेचें"} className={"img-fluid"} width={"74"} height={"74"} />
                                        {/* <img src={ImageSub14} alt="A knack to sell products effortlessly" className="img-fluid" width="74" height="74" /> */}
                                        <h4>उत्पादों को सहजता से बेचने की आदत</h4>
                                    </div>
                                    <div className="">
                                        <LazyLoader src={ImageSub15} alt={"म्यूचुअल फंड वितरक बनें"} className={"img-fluid"} width={"74"} height={"74"} />
                                        {/* <img src={ImageSub15} alt="A desire to be your own boss" className="img-fluid" width="74" height="74" /> */}
                                        <h4>अपना खुद का मालिक बनने की इच्छा</h4>
                                    </div>
                                </Slider>
                                <div className="eligb-img-sec">
                                    <LazyLoader src={ImageSub16} alt={"म्यूचुअल फंड वितरक पात्रता"} className={"img-fluid"} width={"384"} height={"384"} />
                                    {/* <img src={ImageSub16} alt="Mutual Fund Distributor Eligibility " className="img-fluid" width="384" height="384" /> */}
                                </div>
                                <div className='d-flex justify-content-center'>
                                <Link to={(window.location.pathname =="/campaign/mutual-fund-distributor")? "/campaign/mutual-fund-distributor":(window.location.pathname =="/mutual-fund-distributor")? "/mutual-fund-distributor":""} className="btn-bg btn-bg-dark show-mob" onClick={()=>scrollToId('sub-broker-form')}><span> अभी शुरू करें</span> </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="box-mid-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mid-blue-cont">
                                <h4>Growth is certain when you partner with us.</h4>
                                <Link to={(window.location.pathname =="/campaign/sub-broker-franchise")? "/campaign/sub-broker-franchise":(window.location.pathname =="/sub-broker-franchise")? "/sub-broker-franchise":""} className="btn-bg" onClick={()=>scrollToId('sub-broker-form')}><span>Join Now</span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>

    );
}

export default EligibleToMFDistributor;