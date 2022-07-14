import React from 'react';
import ImageSub13 from '../../assets/images/sub-broker/18+years-of-age.svg';
import ImageSub14 from '../../assets/images/sub-broker/sell-products-effortlessly.svg';
import ImageSub15 from '../../assets/images/sub-broker/own-boss.svg';
import ImageSub16 from '../../assets/images/sub-broker/become-a-sub-broker.webp';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import LazyLoader from '../Common-features/LazyLoader';

function WhoEligibleToSubBroker() {

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
                                <h2 className="titl3">Who is Eligible to Become a Choice Sub Broker?</h2>
                                <p className="sml-para-dv">Anyone who wishes to create a passive source of income.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="eligb-right-sec">
                                <Slider {...settings} className="slider-eligb">
                                    <div className="">
                                        <LazyLoader src={ImageSub13} alt={"Individual must be 18+ years of age"} className={"img-fluid"} width={"74"} height={"74"} />
                                        {/* <img src={ImageSub13} alt="Individual must be 18+ years of age" className="img-fluid" width="74" height="74" /> */}
                                        <h4>Individual must be 18+ years of age</h4>
                                    </div>
                                    <div className="">
                                        <LazyLoader src={ImageSub14} alt={"A knack to sell products effortlessly"} className={"img-fluid"} width={"74"} height={"74"} />
                                        {/* <img src={ImageSub14} alt="A knack to sell products effortlessly" className="img-fluid" width="74" height="74" /> */}
                                        <h4>A knack to sell products effortlessly</h4>
                                    </div>
                                    <div className="">
                                        <LazyLoader src={ImageSub15} alt={"A desire to be your own boss"} className={"img-fluid"} width={"74"} height={"74"} />
                                        {/* <img src={ImageSub15} alt="A desire to be your own boss" className="img-fluid" width="74" height="74" /> */}
                                        <h4>A desire to be your own boss</h4>
                                    </div>
                                </Slider>
                                <div className="eligb-img-sec">
                                    <LazyLoader src={ImageSub16} alt={"Become a Sub Broker &amp; Currency Broking"} className={"img-fluid"} width={"384"} height={"384"} />
                                    {/* <img src={ImageSub16} alt="Become a Sub Broker &amp; Currency Broking" className="img-fluid" width="384" height="384" /> */}
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
                                <h4>Growth is for certain when you partner with us.</h4>
                                <a href="javascript:void(0)" className="btn-bg" onClick={()=>scrollToId('sub-broker-form')}><span>Join Now</span> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default WhoEligibleToSubBroker;