import React from "react";
import { useState, useEffect, useRef } from 'react';
import '../../components/Fno-Trading/fnotrading.scss';
import './intradaytrading.scss';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import IntradayTradingBanner from "./IntradayTradingBanner";
import WhyChooseIntraday from "./WhyChooseIntraday";
import FinxTools from "./FinxTools";
import zero1 from '../../assets/images/intraday-trading/start-intraday-trading-with-free-demat-account.svg';
import zero2 from '../../assets/images/intraday-trading/start-intraday-trading-with-zero-amc-for-1st-year.svg';
import zero3 from '../../assets/images/intraday-trading/intraday-trading-with-zero-auto-square-off-charges.svg';
import zero4 from '../../assets/images/intraday-trading/intraday-trading-with-free-expert-research-&-tools.svg';
import IntradayRecord from "./IntradayRecord";
import IntradayTestinmonial from "./IntradayTestinmonial";
import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import meta_tags from "../../Data/MetaTags";
function IntradayTradings() {

  const [rendercount, setRenderCount] = useState(() => false);

  const settings2 = {
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    margin:15,
    dots:true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
};

useEffect(() => {
  setRenderCount(true)
  if (rendercount === true) {
    document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
    document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
    document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
    document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
    if(!(document.getElementById('link1')==null)){
      document.getElementById('link1').remove();
    document.getElementById('link2').remove();
    document.getElementById('link3').remove();
    document.getElementById('link4').remove();
    document.getElementById('link5').remove();
    document.getElementById('link6').remove();
    
    }
  }
}, [rendercount])

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

useEffect(() => {
  window.addEventListener('scroll', getPosition);
}, []);

function scrollToId(id) {
  var element = document.getElementById(id);
  var headerOffset = 140;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
  });
}

  return (
    <>
      <div className="fno-trading-main">
          <IntradayTradingBanner />
          <WhyChooseIntraday />
          <FinxTools />
          <section className="fno-form-sec intr-form-sec" id="dematform">
            <div className="container">
                <div className="row">
                    <div className="com-md-12">
                        <div className="fno-form-inner">
                            <div className="inr-heading">
                                <h2 className="heading-n">Ready to <br/> <span>Optimize</span> Your <br/> Intraday Trading?</h2>
                            </div>
                            <div className="form-fno-new">
                                <div className="d-flex justify-content-end" id="campaignForm">
                                    <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                        <DematAccountForm />
                                    </GoogleReCaptchaProvider>
                                </div>
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
                      <div className='col-xl-8 col-md-12'>
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
                                    <img src={zero1} alt={"Start Intraday Trading with Free Demat Account"}/>
                                  </span>
                                  <h4>Zero</h4>
                                  <h5>Account <span>Opening Fee</span></h5>
                              </div>
                              <div className="list-itm">
                                  <span>
                                    <img src={zero2} alt={"Start Intraday Trading with Zero AMC for 1st Year"}/>
                                  </span>
                                  <h4>Zero</h4>
                                  <h5>AMC for <span>1st Year</span></h5>
                              </div>
                              <div className="list-itm">
                                  <span>
                                    <img src={zero3} alt={"Intraday Trading with Zero Auto Square-Off Charges"}/>
                                  </span>
                                  <h4>Zero</h4>
                                  <h5>Auto Square-off <span>Charges</span></h5>
                              </div>
                              <div className="list-itm">
                                  <span>
                                    <img src={zero4} alt={"Intraday Trading with Free Expert Research & Tools"}/>
                                  </span>
                                  <h4>Free</h4>
                                  <h5>Research Calls <span>& Tools</span></h5>
                              </div>
                          </Slider>
                      </div>
                      <div className="col-md-12 d-flex justify-content-center">
                            <a href="javascript:void(0)" className="btn-bg btn-new" onClick={() => scrollToId('campaignForm')}>Open Demat Account</a>
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