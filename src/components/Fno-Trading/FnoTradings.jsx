// import React from 'react';
import React from "react";
import { useState, useEffect, useRef } from 'react';
import './fnotrading.scss';
import Slider from 'react-slick';
import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import FnoTradingBanner from "./FnoTradingBanner";
import WhyChooseFno from "./WhyChooseFno";
import FinxTools from "./FinxTools";
import Bannerimage from '../../assets/images/fno-trading/va.png';
import zero1 from '../../assets/images/fno-trading/zero-opening-free.svg';
import zero2 from '../../assets/images/fno-trading/zero-amc.svg';
import zero3 from '../../assets/images/fno-trading/zero-charges.svg';
import zero4 from '../../assets/images/fno-trading/free-calls.svg';
import FnoRecord from "./FnoRecord";
import FnoTestinmonial from "./FnoTestinmonial";
function FnoTradings() {

  const [isCheck, setIsCheck] = useState(false)

  const getPosition = () => {
    const element = document.getElementById("showForm");
    if (element) {
        const rect = element.getBoundingClientRect();

        if (rect.top.toFixed() < 259) {
            setName('visibleform');
        } else {
            setName('hideform');
        }
    }
};

  const getPositionnew = () => {
    const element = document.getElementById("branch1");
    if (element) {
        const rect = element.getBoundingClientRect();
        // console.log("checkmate", rect.top.toFixed())
        if (rect.top.toFixed() < 350) {
            setIsCheck(true);
            // console.log('inside name', name);
        }

    }
}

useEffect(() => {
  window.addEventListener('scroll', getPositionnew);
  window.addEventListener('scroll', getPosition);
}, []);

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
          <FnoTradingBanner />
          <WhyChooseFno />
          <FinxTools />
          <section className="fno-form-sec">
            <div className="container">
                <div className="row">
                    <div className="com-md-12">
                        <div className="fno-form-inner">
                            <div className="inr-heading">
                                <h2 className="heading-n">Ready to <br/> Ele<span className="clr1"><img src={Bannerimage} /></span>te Your <br/> Trading Game?</h2>
                            </div>
                            {
                                isCheck ?
                                    <div className="form-fno-new">
                                        <div className="d-flex justify-content-end" id="campaignForm">
                                            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                                <DematAccountForm />
                                            </GoogleReCaptchaProvider>
                                        </div>
                                    </div> :
                                    <div className="form-fno-new" id="campaignForm">
                                        <DematAccountForm />
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <FnoRecord />
          <FnoTestinmonial />
          <section className="fno-free-zero">
              <div className="container">
                  <div className='row justify-content-center'>
                      <div className='col-md-8'>
                          <div className="heading-sec text-center">
                              <h2 className="title-secnd">Get a Free Demat Account</h2>
                              <p>Trade seamlessly. One account for all your trading needs and more.</p>
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
                          <p className="etc-fno-cont">At Choice, we make trading simple for everyone. Whether you’re an experienced trader or a beginner, we’re dedicated to empowering you at every step of your trading journey. Begin mastering the art of trading by opening your Choice Demat account today.</p>
                      </div>
                  </div>
              </div>
          </section>
      </div>
    </>
  );
};
export default FnoTradings;