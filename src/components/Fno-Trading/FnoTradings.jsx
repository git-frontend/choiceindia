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
import zero1 from '../../assets/images/fno-trading/start-option-trading-with-free-demat-account.svg';
import zero2 from '../../assets/images/fno-trading/start-option-trading-with-zero-amc-for-1st-year.svg';
import zero3 from '../../assets/images/fno-trading/option-trading-with-zero-auto-square-off-charges.svg';
import zero4 from '../../assets/images/fno-trading/option-trading-with-free-expert-research-&-tools.svg';
import FnoRecord from "./FnoRecord";
import FnoTestinmonial from "./FnoTestinmonial";
import meta_tags from "../../Data/MetaTags";
function FnoTradings() {


  const [rendercount, setRenderCount] = useState(() => false);


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

  const settings2 = {
    infinite: true,
    speed: 1000,
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
          infinite: true,
          autoplay: false,
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
          <FnoTradingBanner />
          <WhyChooseFno />
          <FinxTools />
          <section className="fno-form-sec" id="dematform">
            <div className="container">
                <div className="row">
                    <div className="com-md-12">
                        <div className="fno-form-inner">
                            <div className="inr-heading">
                                <h2 className="heading-n">Ready to <br/> Ele<span className="clr1"><img src={Bannerimage} /></span>te Your <br/> Trading Game?</h2>
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
                                    <img src={zero1} alt={"Start Option Trading with Free Demat Account"} />
                                  </span>
                                  <h4>Zero</h4>
                                  <h5>Account <span>Opening Fee</span></h5>
                              </div>
                              <div className="list-itm">
                                  <span>
                                    <img src={zero2} alt={"Start Option Trading with Zero AMC for 1st Year"} />
                                  </span>
                                  <h4>Zero</h4>
                                  <h5>AMC for <span>1st Year</span></h5>
                              </div>
                              <div className="list-itm">
                                  <span>
                                    <img src={zero3} alt={"Option Trading with Zero Auto Square-Off Charges"} />
                                  </span>
                                  <h4>Zero</h4>
                                  <h5>Auto Square-off <span>Charges</span></h5>
                              </div>
                              <div className="list-itm">
                                  <span>
                                    <img src={zero4} alt={"Option Trading with Free Expert Research & Tools"} />
                                  </span>
                                  <h4>Free</h4>
                                  <h5>Research Calls <span>& Tools</span></h5>
                              </div>
                          </Slider>
                      </div>
                      <div className="col-md-12 d-flex justify-content-center">
                            <a href="javascript:void(0)" onClick={() => scrollToId('demat-form-section')} className="btn-bg btn-new">Open Demat Account</a>
                        </div>
                  </div>
                </div>
          </section>
          <section className="fno-content-des">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
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