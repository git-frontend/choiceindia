
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import Image7 from '../../assets/images/open-demat-account/low-brokerage-demat-account.svg';
import Image8 from '../../assets/images/open-demat-account/free-call-for-trade-facility.svg';
import Image9 from '../../assets/images/open-demat-account/free-paperless-demat-account-opening.svg';
import Image10 from '../../assets/images/open-demat-account/advanced-trading-app-platform.svg';
import Image11 from '../../assets/images/open-demat-account/refer-and-earn-demat-account.svg';
import LazyLoader from "../Common-features/LazyLoader";

function WhyOpenFreeDematAccount() {

  const settings = {
    infinite: false,
    speed: 1500,
    margin:15,
    arrows: false,
    slidesToShow: 3,
    autoplay: false,
    dots: true,
    autoplaySpeed: 3000,
    slidesToScroll: 3,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: false,
          autoplaySpeed: 5000,
          autoplay: true,
          infinite:true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
          loop: true,
          infinite:true,
          autoplaySpeed: 5000,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div>
       <section className="adv-sect" id="showForm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="sectext">
                                <h2>Why Open A Free Demat Account Online With Us?</h2>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="pl-4">
                                <Slider {...settings} id="advslider" className="adv-sect-slider">
                                <div className="card adv-card">
                                            <div className="icon-wrap">
                                                <LazyLoader src={Image7} className={"img-fluid"} width={"40"} height={"41"} alt={"Free Demat Account with Low Brokerage Charges"}  />
                                                {/* <img src={Image7} width={"40"} height={"41"} className="img-fluid" alt="Low Brokerage" /> */}
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">Low Brokerage</h5>
                                                <p>Low brokerage charges; as less as 2 Paisa*</p>
                                            </div>
                                        </div>
                                        <div className="card adv-card">
                                            <div className="icon-wrap">
                                            <LazyLoader src={Image8} className={"img-fluid lazyload"} width={"40"} height={"41"} alt={"Free Call for trade facility"}  />
                                                {/* <img src={Image8} width={"40"} height={"41"} alt="Free call Trade Facility" className="img-fluid lazyload" /> */}
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">Free Call for Trade Facility</h5>
                                                <p> Our customers can opt to execute trade over the phone free of cost.</p>
                                            </div>
                                        </div>
                                        <div className="card adv-card">
                                            <div className="icon-wrap">
                                            <LazyLoader src={Image9} width={"40"} height={"41"} alt={"Paperless Free Demat Account Opening"} className={"img-fluid lazyload"} />
                                                {/* <img src={Image9} width={"40"} height={"41"} alt="Paperless Account Opening" className="img-fluid lazyload" /> */}
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">Paperless Account Opening</h5>
                                                <p>
                                                    Instantly open a paperless Demat account online within 5 minutes.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card adv-card">
                                            <div className="icon-wrap">
                                            <img src={Image10} width={"50"} height={"50"} alt={"Advance Trading Platform"} className={"img-fluid lazyload"} />
                                                {/* <img src={Image10} width={"40"} height={"41"} alt="Free call Trade Facility" className="img-fluid lazyload" /> */}
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">Technologically Advanced Platform</h5>
                                                <p>
                                                    Trade via the website or Android and iOS App with state-of-the-art features.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card adv-card">
                                            <div className="icon-wrap">
                                            <img src={Image11} width={"40"} height={"41"} alt={"Demat Account Refer and Earn Program"} className={"img-fluid lazyload"} />
                                                {/* <img src={Image11} width={"40"} height={"41"} alt="Free call Trade Facility" className="img-fluid lazyload" /> */}
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">Earn More from Referrals</h5>
                                                <p>
                                                    A rewarding referral program that can contribute to a lifetime source of earning.
                                                </p>
                                            </div>
                                        </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


    </div>

  );
}

export default WhyOpenFreeDematAccount;
