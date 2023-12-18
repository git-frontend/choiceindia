// import React from 'react';
import React from "react";
import '../../components/Fno-Trading/fnotrading.scss';
import './intradaytrading.scss';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import IntradayTradingBanner from "./IntradayTradingBanner";
import WhyChooseIntraday from "./WhyChooseIntraday";
import FinxTools from "./FinxTools";
import Bannerimage from '../../assets/images/fno-trading/va.png';
import zero1 from '../../assets/images/fno-trading/zero-opening-free.svg';
import zero2 from '../../assets/images/fno-trading/zero-amc.svg';
import zero3 from '../../assets/images/fno-trading/zero-charges.svg';
import zero4 from '../../assets/images/fno-trading/free-calls.svg';
import IntradayRecord from "./IntradayRecord";
import IntradayTestinmonial from "./IntradayTestinmonial";
function IntradayTradings() {

  const settings2 = {
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 4,
    autoplay: false,
    margin:15,
    dots:true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <>
      <div className="fno-trading-main">
          <IntradayTradingBanner />
          <WhyChooseIntraday />
          <FinxTools />
          <section className="fno-form-sec intr-form-sec">
            <div className="container">
                <div className="row">
                    <div className="com-md-12">
                        <div className="fno-form-inner">
                            <div className="inr-heading">
                                <h2 className="heading-n">Ready to <br/> <span>Optimize</span> Your <br/> Intraday Trading?</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <IntradayRecord />
          <IntradayTestinmonial />
          <section className="fno-free-zero">
              <div className="container">
                  <div className='row justify-content-center'>
                      <div className='col-md-8'>
                          <div className="heading-sec text-center">
                              <h2 className="title-secnd">Perks of Choice Demat Account</h2>
                              <p>With Choice, you get more than just a trading account. You get a partner committed to helping you succeed in intraday trading.</p>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12">
                          <Slider {...settings2} className="list-section">
                              <div className="list-itm">
                                  <span>
                                    <img src={zero1} />
                                  </span>
                                  <h4>Zero</h4>
                                  <h5>Account Opening Free</h5>
                              </div>
                              <div className="list-itm">
                                  <span>
                                    <img src={zero2} />
                                  </span>
                                  <h4>Zero</h4>
                                  <h5>AMC for 1st Year</h5>
                              </div>
                              <div className="list-itm">
                                  <span>
                                    <img src={zero3} />
                                  </span>
                                  <h4>Zero</h4>
                                  <h5>Auto Square-off Charges</h5>
                              </div>
                              <div className="list-itm">
                                  <span>
                                    <img src={zero4} />
                                  </span>
                                  <h4>Zero</h4>
                                  <h5>Research Calls & Tools</h5>
                              </div>
                          </Slider>
                      </div>
                      <div className="col-md-12 d-flex justify-content-center">
                            <a href="#" className="btn-bg">Open Demat Account</a>
                        </div>
                  </div>
                </div>
          </section>
          <section className="fno-content-des">
              <div className="container">
                  <div className="row">
                      <div className="col-md-10">
                          <p className="etc-fno-cont">Take control of your intraday trading. Join Choice today and experience the difference.</p>
                      </div>
                  </div>
              </div>
          </section>
      </div>
    </>
  );
};
export default IntradayTradings;