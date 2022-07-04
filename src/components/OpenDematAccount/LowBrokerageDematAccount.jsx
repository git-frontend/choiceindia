
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import Image7 from '../../assets/images/open-demat-account/equity.svg';
import Image8 from '../../assets/images/open-demat-account/currency.svg';
import Image9 from '../../assets/images/open-demat-account/commodity.svg';


function LowBrokerageDematAccount() {

    const settings = {
        infinite: true,
        speed: 1500,
        margin: 15,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
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
                    dots:false,
                },
            },
        ],
    };

    return (
        <div>
            <section className="Lowbrokerage" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h2 className="secttitle">Open a Low Brokerage Demat Account</h2>
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
                                                    <img src={Image7} className="img-fluid" alt="Low Brokerage" />
                                                </div>

                                                <div className="card-block">

                                                    <h5 className="card-title">Equity</h5>
                                                    <hr></hr>
                                                    <ul className="charge-lists">
                                                        <li>
                                                            Delivery <strong>0.20%</strong>
                                                        </li>
                                                        <li>
                                                            Intraday <strong>0.02%</strong>
                                                        </li>
                                                        <li>
                                                            Futures <strong>0.02%</strong>
                                                        </li>
                                                        <li>
                                                            Options <strong>₹ 25 per Lot</strong>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 item  p-md-2" data-toggle="modal" data-target="#myModal2">
                                            <div className="card adv-card">
                                                <div className="icon-wrap">
                                                    <img src={Image8} alt="Free call Trade Facility" className="img-fluid lazyload" />
                                                </div>
                                                <div className="card-block">

                                                    <h5 className="card-title">Currency</h5>
                                                    <hr></hr>
                                                    <ul className="charge-lists">

                                                        <li>
                                                            Futures <strong>0.02%</strong>
                                                        </li>
                                                        <li>
                                                            Options <strong>₹ 25 per Lot</strong>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 item p-md-2" data-toggle="modal" data-target="#myModal5">
                                            <div className="card adv-card">
                                                <div className="icon-wrap">
                                                    <img src={Image9} alt="Paperless Account Opening" className="img-fluid lazyload" />
                                                </div>
                                                <div className="card-block">

                                                    <h5 className="card-title">Commodity</h5>
                                                    <hr></hr>
                                                    <ul className="charge-lists">

                                                        <li>
                                                            Futures <strong>0.02%</strong>
                                                        </li>
                                                        <li>
                                                            Options <strong>₹ 25 per Lot</strong>
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

export default LowBrokerageDematAccount;