
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import Image7 from '../../assets/images/open-demat-account/equity-brokerage-charges.svg';
import Image8 from '../../assets/images/open-demat-account/currency-brokerage-charges.svg';
import Image9 from '../../assets/images/open-demat-account/commodity-brokerage-charges.svg';
import LazyLoader from '../Common-features/LazyLoader';


function LowBrokerageCurrencyTrading() {

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
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true,
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
                                <h2 className="secttitle">Currency Trading at Minimal Charges</h2>
                                <p>Brokerage is charged on a percentage basis for Intraday, Delivery and Futures while the brokerage for Options is calculated on the basis of a flat fee.</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <Slider {...settings} id="advslider">

                                        <div className="col-md-4 item p-md-2" data-toggle="modal" data-target="#myModal1">
                                            <div className="card adv-card">
                                                <div className="icon-wrap">
                                                <LazyLoader src={Image7} className={'img-fluid'} width={"83"} height={"83"} alt={"Currency Brokerage Charges for Online Trading Account"} />
                                              
                                                </div>
                                                <div className="card-block">

                                            <h5 className="card-title">Currency</h5>
                                            <hr></hr>
                                            <ul className="charge-lists">

                                                <li>
                                                    Futures <span>0.02%</span>
                                                </li>
                                                <li>
                                                    Options <span>₹ 20 per Lot</span>
                                                </li>
                                            </ul>
                                            </div>
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-4 item  p-md-2" data-toggle="modal" data-target="#myModal2">
                                            <div className="card adv-card">
                                                <div className="icon-wrap">
                                                <LazyLoader src={Image8} className={'img-fluid lazyload'} width={"84"} height={"83"} alt={"Equity Brokerage Charges for Online Currency Trading Account"} />
                                                </div>
                                                <div className="card-block">

                                                    <h5 className="card-title">Equity</h5>
                                                    <hr></hr>
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
                                                        Options <span>₹25 per Lot</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            
                                               
                                            </div>
                                        </div>

                                        <div className="col-md-4 item p-md-2" data-toggle="modal" data-target="#myModal5">
                                            <div className="card adv-card">
                                                <div className="icon-wrap">
                                                <LazyLoader src={Image9} className={'img-fluid lazyload'} width={"83"} height={"64"} alt={"Commodity Brokerage Charges for Currency Trading in India"} />
                                                </div>
                                                <div className="card-block">

                                                <h5 className="card-title">Commodity</h5>
                                                <hr></hr>
                                                <ul className="charge-lists">
                                                    <li>
                                                    Futures <span>0.02%</span>
                                                    </li>
                                                    <li>
                                                    Options  <span>₹ 50 per Lot</span>
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

export default LowBrokerageCurrencyTrading;
