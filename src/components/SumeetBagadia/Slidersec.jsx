
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";

function Slidersec() {

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: false,
        fade: false,
        autoplay: false,
        centerMode: true,
        Padding: '0 55px 0 30px',
        autoplaySpeed: 7000,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerMode: false,
                    Padding: '0',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    Padding: '0',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: false,
                    Padding: '0',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    };
    return (
        <div>
            <section className="sumit-bg-class">
                <div className="container">
                    <div className="row flex-sec-r align-items-center">
                        <div className="col-xl-5">
                            <div className="bg-class-left">
                                <h3 className="title-sm-new">Sumeet Bagadia Calls</h3>
                                <p className="sml-para">Adept at analysing various standalone events to predict the market outcome; <br /> Mr Sumeet Bagadia's Research Calls have an excellent success ratio. Have a look at the results of the past research calls by him.</p>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="bg-class-right">
                                <Slider {...settings} className="sm-slider-bg services-list-slider">
                                    <div className="service-item">
                                        <div className="item-slider">
                                            <h4>SBIN</h4>
                                            <ul>
                                                <li>
                                                    <h4>Entry Price</h4>
                                                    <h3>441</h3>
                                                </li>
                                                <li>
                                                    <h4>Target Price</h4>
                                                    <h3>535</h3>
                                                </li>
                                            </ul>
                                            <h4 className="md-profit">
                                                Profit: 21.36 %
                                            </h4>
                                            <h4 className="trg-achv">Target Achieved: 150 Days</h4>
                                        </div>
                                    </div>
                                    <div className="service-item">
                                        <div className="item-slider">
                                            <h4>BANKBARODA</h4>
                                            <ul>
                                                <li>
                                                    <h4>Entry Price</h4>
                                                    <h3>75</h3>
                                                </li>
                                                <li>
                                                    <h4>Target Price</h4>
                                                    <h3>98</h3>
                                                </li>
                                            </ul>
                                            <h4 className="md-profit">
                                                Profit: 30.67 %
                                            </h4>
                                            <h4 className="trg-achv">Target Achieved: 180 Days</h4>
                                        </div>
                                    </div>
                                    <div className="service-item">
                                        <div className="item-slider">
                                            <h4>SBILIFE</h4>
                                            <ul>
                                                <li>
                                                    <h4>Entry Price</h4>
                                                    <h3>968</h3>
                                                </li>
                                                <li>
                                                    <h4>Target Price</h4>
                                                    <h3>1,130</h3>
                                                </li>
                                            </ul>
                                            <h4 className="md-profit">
                                                Profit: 17.02 %
                                            </h4>
                                            <h4 className="trg-achv">Target Achieved: 210 Days</h4>
                                        </div>
                                    </div>
                                    <div className="service-item">
                                        <div className="item-slider">
                                            <h4>DEVYANI</h4>
                                            <ul>
                                                <li>
                                                    <h4>Entry Price</h4>
                                                    <h3>153</h3>
                                                </li>
                                                <li>
                                                    <h4>Target Price</h4>
                                                    <h3>195</h3>
                                                </li>
                                            </ul>
                                            <h4 className="md-profit">
                                                Profit: 27.55 %
                                            </h4>
                                            <h4 className="trg-achv">Target Achieved: 20 Days</h4>
                                        </div>
                                    </div>
                                    

                                </Slider>

                            </div>
                            <div className="sm-slider-thumb">
                                {/* <ul className="reset">
                                    <li className="active" data-slide="1">
                                    </li>
                                    <li className="" data-slide="2">
                                    </li>
                                    <li className="" data-slide="3">
                                    </li>
                                    <li className="" data-slide="4">
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
