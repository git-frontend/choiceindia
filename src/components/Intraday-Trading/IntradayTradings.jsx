// import React from 'react';
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
import zero1 from '../../assets/images/fno-trading/zero-opening-free.svg';
import zero2 from '../../assets/images/fno-trading/zero-amc.svg';
import zero3 from '../../assets/images/fno-trading/zero-charges.svg';
import zero4 from '../../assets/images/fno-trading/free-calls.svg';
import IntradayRecord from "./IntradayRecord";
import IntradayTestinmonial from "./IntradayTestinmonial";
import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import meta_tags from "../../Data/MetaTags";
function IntradayTradings() {

  const [rendercount, setRenderCount] = useState(() => false);

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
    // let parser = new DOMParser();
    // let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
    // document.body.appendChild(doc.getElementsByTagName('script')[0]? doc.getElementsByTagName('script')[0]: '' );
    document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
    // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
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
                                  <h4>Free</h4>
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