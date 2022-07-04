
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import Image7 from '../../assets/images/open-demat-account/low-brokerage.svg';
import Image8 from '../../assets/images/open-demat-account/trade-facility.svg';
import Image9 from '../../assets/images/open-demat-account/paperless-account.svg';
// import Image10 from '../../assets/images/open-demat-account/low-brokerage.svg';
// import Image11 from '../../assets/images/open-demat-account/low-brokerage.svg';
function WhyOpenFreeDematAccount() {

  const settings = {
    infinite: true,
    speed: 1500,
    margin:15,
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    dots: true,
    autoplaySpeed: 3000,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
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
       <section className="adv-sect" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sectext">
                                <h2>Why Open A Free Demat Account Online With Us?</h2>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="pl-4">
                                <Slider {...settings} id="advslider" className="">

                                    <div className="item p-md-2" data-toggle="modal" data-target="#myModal1">
                                        <div className="card adv-card">
                                            <div className="icon-wrap">
                                                <img src={Image7} className="img-fluid" alt="Low Brokerage" />
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">Low Brokerage</h5>
                                                <p>Low brokerage charges; as less as 2 Paisa*</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item  p-md-2" data-toggle="modal" data-target="#myModal2">
                                        <div className="card adv-card">
                                            <div className="icon-wrap">
                                                <img src={Image8} alt="Free call Trade Facility" className="img-fluid lazyload" />
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">Free Call for Trade Facility</h5>
                                                <p> Our customers can opt to execute trade over the phone free of cost.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item p-md-2" data-toggle="modal" data-target="#myModal5">
                                        <div className="card adv-card">
                                            <div className="icon-wrap">
                                                <img src={Image9} alt="Paperless Account Opening" className="img-fluid lazyload" />
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">Paperless Account Opening</h5>
                                                <p>
                                                    Instantly open a paperless Demat account online within 5 minutes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item p-md-2" data-toggle="modal" data-target="#myModal4">
                                        <div className="card adv-card">
                                            <div className="icon-wrap">
                                                {/* <img src={Image10} alt="Advanced Platform" className="img-fluid lazyload" /> */}
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">Technologically Advanced Platform</h5>
                                                <p>
                                                    Trade via the website or Android and iOS App with state-of-the-art features.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item p-md-2" data-toggle="modal" data-target="#myModal3">
                                        <div className="card adv-card">
                                            <div className="icon-wrap">
                                                {/* <img src={Image11} alt="Earn More From Referrals" className="img-fluid lazyload" /> */}
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">Earn More from Referrals</h5>
                                                <p>
                                                    A rewarding referral program that can contribute to a lifetime source of earning.
                                                </p>
                                            </div>
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
