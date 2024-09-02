
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import MCXAwards from '../../assets/images/free-demat-compaign/mcx-awards-2022.webp';
import GratitudeAward from '../../assets/images/free-demat-compaign/gratitude-awards.webp';
import AchieversBrokersClub from '../../assets/images/free-demat-compaign/achievers-brokers-club.webp';

function WhyChoiceOpenDematAccount() {

  const settings = {
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 3,
    autoplay: false,
    dots: false,
    adaptiveHeight: false,
    autoplaySpeed: 800,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                autoplay: true,
            },
        },
    ],
};
const settings1 = {
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 4,
    autoplay: false,
    dots: false,
    adaptiveHeight: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                autoplay: true,
            },
        },
    ],
};
  return (
    <div>
    <section className="why-choice-open-ac">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                   <h2 className="title-first text-center">Open Demat account with the <span>fastest growing Brand</span></h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                  <Slider {...settings1} className="company-why-list">
                        <div className="why-list-itm">
                            <h3>
                                <span className="hvr-txt"><span>850K</span></span><small>+</small>
                            </h3>
                            <h4>Clients</h4>
                        </div>
                        <div className="why-list-itm">
                            <h3>
                            <span className="hvr-txt"><span>104</span></span><small>+</small>
                            </h3>
                            <h4>Local Offices</h4>
                        </div>
                        <div className="why-list-itm">
                            <h3>
                            <span className="hvr-txt"><span>32K</span></span><small>+</small>
                            </h3>
                            <h4>Franchise</h4>
                        </div>
                        <div className="why-list-itm">
                            <h3>
                            <span className="hvr-txt"><span>3.4K</span></span><small>+</small>
                            </h3>
                            <h4>Employees</h4>
                        </div>
                    </Slider>
                  </div>
            </div>

          <div className="awarded-industry-experts">
            <div className="row justify-content-center">
                  <div className="col-md-12">
                    <h2 className="title-first text-center">Awarded by Industry Experts</h2>
                  </div>
              </div>
              <div className="row justify-content-center">
                  <div className="col-md-12">
                    <Slider {...settings} className="awarded-card">
                      <div className="awarded-card-item">
                          <h5>MCX AWARDS - 2022</h5>
                            <LazyLoader src={MCXAwards} className={'img-fluid'} width={"181"} height={"227"} alt={"MCX Awards 2022"}/>
                      </div>
                      <div className="awarded-card-item">
                          <h5>Gratitude AWARD</h5>
                          <LazyLoader src={GratitudeAward} className={'img-fluid'} width={"181"} height={"227"} alt={"Gratitude Awards"}/>
                      </div>
                      <div className="awarded-card-item">
                          <h5>ACHIEVERS BROKER’S CLUB</h5>
                          <LazyLoader src={AchieversBrokersClub} className={'img-fluid'} width={"181"} height={"227"} alt={"Achievers Broker's Club"}/>
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

export default WhyChoiceOpenDematAccount;
