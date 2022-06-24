
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";

function Slidersec() {

    const settings = {
        infinite: true,
        speed: 1500,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
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
            <section className="sumit-bg-class">
                <div className="container">
                    <div className="row flex-sec-r">
                        <div className="col-md-4">
                            <div className="bg-class-left">
                                <h3 className="title-sm-new">Sumeet Bagadia Calls</h3>
                                <p className="sml-para">Adept at analysing various standalone events to predict the market outcome; <br /> Mr Sumeet Bagadia's Research Calls have an excellent success ratio. Have a look at the results of the past research calls by him.</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div class="bg-class-right">
                                <Slider {...settings} className="services-list-slider">
                                    <div className="service-item">
                                        <span className="img-itm">
                                        </span>
                                        <h5>Stocks</h5>
                                        <p>Facilitating trade on equities, commodities &amp; currencies with ease</p>

                                    </div>
                                    <div className="service-item">
                                        <span className="img-itm">
                                        </span>
                                        <h5>Mutual Funds</h5>
                                        <p>Compare and invest in funds of all categories and segments with ease</p>

                                    </div>
                                    <div className="service-item">
                                        <span className="img-itm">
                                        </span>
                                        <h5>Insurance</h5>
                                        <p>Get insured as per your need for everything right here</p>

                                    </div>
                                    <div className="service-item">
                                        <span className="img-itm">
                                        </span>
                                        <h5>Stocks</h5>
                                        <p>Facilitating trade on equities, commodities &amp; currencies with ease</p>

                                    </div>
                                    <div className="service-item">
                                        <span className="img-itm">
                                        </span>
                                        <h5>Mutual Funds</h5>
                                        <p>Compare and invest in funds of all categories and segments with ease</p>

                                    </div>
                                    <div className="service-item">
                                        <span className="img-itm">
                                        </span>
                                        <h5>Insurance</h5>
                                        <p>Get insured as per your need for everything right here</p>

                                    </div>
                                </Slider>

                            </div>
                            <div class="sm-slider-thumb">
                                {/* <ul class="reset">
                                    <li class="active" data-slide="1">
                                    </li>
                                    <li class="" data-slide="2">
                                    </li>
                                    <li class="" data-slide="3">
                                    </li>
                                    <li class="" data-slide="4">
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div >

    );
}

export default Slidersec;
