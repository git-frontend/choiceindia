import React from 'react';
import ImageSub13 from '../../assets/images/sub-broker/sub-broker-eligibility.svg';
import ImageSub14 from '../../assets/images/sub-broker/sell-financial-services.svg';
import ImageSub15 from '../../assets/images/sub-broker/sub-broker-franchise-business.svg';
import ImageSub16 from '../../assets/images/sub-broker/become-a-sub-broker.webp';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from 'react-router-dom';

function WhoEligibleToSubBrokerHindi() {

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
                                <h2 className="titl3">चॉइस सब ब्रोकर बनने के लिए कौन पात्र है?</h2>
                                <p className="sml-para-dv">कोई भी जो कमाई का नियमित स्रोत बनाना चाहता है।</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="eligb-right-sec">
                                <Slider {...settings} className="slider-eligb">
                                    <div className="">
                                        <LazyLoader src={ImageSub13} alt={"Sub Broker Eligibility"} className={"img-fluid"} width={"74"} height={"74"} />
                                        <h4>व्यक्ति की आयु 18 वर्ष होनी चाहिए</h4>
                                    </div>
                                    <div className="">
                                        <LazyLoader src={ImageSub14} alt={"Sell Financial Services"} className={"img-fluid"} width={"74"} height={"74"} />
                                        <h4>आसानी से उत्पादों को बेचने की आदत।</h4>
                                    </div>
                                    <div className="">
                                        <LazyLoader src={ImageSub15} alt={"A desire to be your own boss"} className={"img-fluid"} width={"74"} height={"74"} />
                                        <h4>खुद मालिक बनने की इच्छा।</h4>
                                    </div>
                                </Slider>
                                <div className="eligb-img-sec">
                                    <LazyLoader src={ImageSub16} alt={"Become a Sub Broker &amp; Currency Broking"} className={"img-fluid"} width={"384"} height={"384"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="box-mid-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mid-blue-cont">
                                <h4>विकास तो निश्चित है जब आप हमारे साथ साझेदारी करेंगे|</h4>
                                <Link to="/hindi/sub-broker-franchise" className="btn-bg" onClick={()=>scrollToId('sub-broker-form')}><span>अभी जॉईन करो</span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default WhoEligibleToSubBrokerHindi;