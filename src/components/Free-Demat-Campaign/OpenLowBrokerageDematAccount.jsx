
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";


function OpenLowBrokerageDematAccount() {

    const settings = {
        infinite: true,
        speed: 1500,
        arrows: false,
        slidesToShow: 3,
        autoplay: false,
        dots: true,
        autoplaySpeed: 3000,
        slidesToScroll: 3,
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
                    autoplay: true,
                    dots:true,
                },
            },
        ],
    };

    return (
        <div>
            <section className="open-low-brokerage" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h2 className="title-first">Open a <span>Low Brokerage</span> Demat Account</h2>
                                <p>Brokerage is charged on a percentage basis for Intraday, Delivery and Futures while the brokerage for Options is calculated on the basis of a flat fee.</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <Slider {...settings} id="advslider" className="">

                                        <div className="col-md-4 item p-md-2" data-toggle="modal" data-target="#myModal1">
                                            <div className="card adv-card">
                                                <div className="icon-wrap">
                                                <h5 className="card-title">Equity</h5>
                                                </div>
                                                <div className="card-block">
                                                    <ul className="charge-lists">
                                                        <li>
                                                            Delivery <span>0.20%</span>
                                                        </li>
                                                        <li>
                                                            Intraday <span>0.02%</span>
                                                        </li>
                                                        <li>
                                                            Futures <span>0.02%</span>
                                                        </li>
                                                        <li>
                                                            Options <span>₹ 25 per Lot</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 item  p-md-2" data-toggle="modal" data-target="#myModal2">
                                            <div className="card adv-card">
                                                <div className="icon-wrap">
                                                <h5 className="card-title">Currency</h5>
                                                </div>
                                                <div className="card-block">
                                                    <ul className="charge-lists">
                                                        <li>
                                                            Futures <span>0.02%</span>
                                                        </li>
                                                        <li>
                                                            Options <span>₹ 25 per Lot</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 item p-md-2" data-toggle="modal" data-target="#myModal5">
                                            <div className="card adv-card">
                                            <div className="icon-wrap">
                                            <h5 className="card-title">Commodity</h5>
                                                </div>
                                                <div className="card-block">
                                                    <ul className="charge-lists">
                                                        <li>
                                                            Futures <span>0.02%</span>
                                                        </li>
                                                        <li>
                                                            Options <span>₹ 25 per Lot</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>


                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    );
}

export default OpenLowBrokerageDematAccount;
