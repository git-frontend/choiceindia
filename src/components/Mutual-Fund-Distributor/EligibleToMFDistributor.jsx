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
                                <h2 className="titl3">Who is eligible to become a Mutual Fund Agent?</h2>
                                <p className="sml-para-dv">Anyone who wants to explore a career in the mutual fund industry can enrol as a mutual fund distributor.</p>
                                <Link to={(window.location.pathname =="/campaign/mutual-fund-distributor")? "/campaign/mutual-fund-distributor":(window.location.pathname =="/mutual-fund-distributor")? "/mutual-fund-distributor":""} className="btn-bg btn-bg-dark hide-mob" onClick={()=>scrollToId('sub-broker-form')}><span>Start Now</span> </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="eligb-right-sec">
                                <Slider {...settings} className="slider-eligb">
                                    <div className="">
                                        <LazyLoader src={ImageSub13} alt={"Eligible to Become a Mutual Fund Distributor"} className={"img-fluid"} width={"74"} height={"74"} />
                                        {/* <img src={ImageSub13} alt="Individual must be 18+ years of age" className="img-fluid" width="74" height="74" /> */}
                                        <h4>Individual must be 18+ years of age</h4>
                                    </div>
                                    <div className="">
                                        <LazyLoader src={ImageSub14} alt={"Sell Multiple Financial Products"} className={"img-fluid"} width={"74"} height={"74"} />
                                        {/* <img src={ImageSub14} alt="A knack to sell products effortlessly" className="img-fluid" width="74" height="74" /> */}
                                        <h4>A Knack to sell products effortlessly</h4>
                                    </div>
                                    <div className="">
                                        <LazyLoader src={ImageSub15} alt={"Become a Mutual Fund Agent"} className={"img-fluid"} width={"74"} height={"74"} />
                                        {/* <img src={ImageSub15} alt="A desire to be your own boss" className="img-fluid" width="74" height="74" /> */}
                                        <h4>A desire to be your own boss</h4>
                                    </div>
                                </Slider>
                                <div className="eligb-img-sec">
                                    <LazyLoader src={ImageSub16} alt={"Mutual Fund Distributor Eligibility "} className={"img-fluid"} width={"384"} height={"384"} />
                                    {/* <img src={ImageSub16} alt="Mutual Fund Distributor Eligibility " className="img-fluid" width="384" height="384" /> */}
                                </div>
                                <div className='d-flex justify-content-center'>
                                <Link to={(window.location.pathname =="/campaign/mutual-fund-distributor")? "/campaign/mutual-fund-distributor":(window.location.pathname =="/mutual-fund-distributor")? "/mutual-fund-distributor":""} className="btn-bg btn-bg-dark show-mob" onClick={()=>scrollToId('sub-broker-form')}><span>Start Now</span> </Link>
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