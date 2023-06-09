import React from "react";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
function IntraWhyChoice() {

    const settings = {
        infinite: true,
        speed: 2000,
        arrows: false,
        slidesToShow: 4,
        autoplay: true,
        margin: 15,
        dots: true,
        autoplaySpeed: 800,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    return (
        <div>
            <section className="intra-why-choice">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-md-12 text-center">
                            <h2 className="ttl2-sm">Why Choice?</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="intra-why-list">
                                <div className="why-list-itm">
                                    <h3>
                                        <span className="hvr-txt"><span>750K</span></span><small>+</small>
                                    </h3>
                                    <h4>Trusted Investors</h4>
                                </div>
                                <div className="why-list-itm">
                                    <h3>
                                    <span className="hvr-txt"><span>25</span></span><small>+</small>
                                    </h3>
                                    <h4>Years of Experience</h4>
                                </div>
                                <div className="why-list-itm">
                                    <h3>
                                    <span className="hvr-txt"><span>95</span></span><small>+</small>
                                    </h3>
                                    <h4>Branches Across India</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="intra-footer-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="ttl-nm">Are you ready to save an <span>Extra 33% </span>in <span><br/>brokerage fees</span> on your <span>intraday trades?</span></h2>
                            <Link onClick={()=>scrollToId('dematform')}><span className="btn-bg">Yes, I’m interested!</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default IntraWhyChoice;
