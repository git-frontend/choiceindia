
import React, { useEffect, useState, useRef } from "react";
import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Slider from 'react-slick';
import LazyLoader from '../Common-features/LazyLoader';
import icon1 from '../../assets/images/technical-analysis/dont-burn-your-money.svg';
import icon2 from '../../assets/images/technical-analysis/create-your-own-strategy.svg';
import icon3 from '../../assets/images/technical-analysis/develop-high-rewarding-strategies.svg';

function Banner() {

    const settings1 = {
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        arrows: false,
        autoplay: false,
        dots: false,
        autoplaySpeed: 2500,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                }
            }

        ]

    };

    const [name, setName ] = useState('hideform');
    const getPosition = () => {
      const element = document.getElementById("showForm");
      if(element){
          const rect = element.getBoundingClientRect();
          
          if(rect.top.toFixed() < 259){
              setName('visibleform');
          }else{
              setName('hideform');
          }   
      }
  };
  
    useEffect(() => {
      window.addEventListener('scroll', getPosition);
  }, []);

  
  function chapterScroll2(id) {
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
  function chapterScroll3(id) {
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
    <div>
    <section className="trading-Stratebanner">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-md-7">
                    <div className="trading-banner-caption">
                        <h1 className="big-ttl">Your Technical Analysis Skills<br/> <span>Don’t  Pay Off?</span></h1>
                    </div>
                    <Slider {...settings1} className="carditem-option-tab">
                                <div className="carditem-option">
                                    <span className="carditem-option-img bg-1"><LazyLoader src={icon1} alt={"Don’t Burn Your Money"} className={"img-fluid ban-img"} width={"76"} height={"76"} /></span>
                                    <h4 className="cardoption-ttl">Don’t Burn Your Money</h4>
                                </div>
                                <div className="carditem-option">
                                    <span className="carditem-option-img bg-2"><LazyLoader src={icon2} alt={"Create Your Own Strategy in 5 Mins"} className={"img-fluid ban-img"} width={"76"} height={"76"} /></span>
                                    <h4 className="cardoption-ttl">Create Your Own Strategy in 5 Mins</h4>
                                </div>
                                <div className="carditem-option">
                                    <span className="carditem-option-img bg-3"><LazyLoader src={icon3} alt={"Develop High Rewarding Strategies"} className={"img-fluid ban-img"} width={"76"} height={"76"} /></span>
                                    <h4 className="cardoption-ttl">Develop High Rewarding Strategies</h4>
                                </div>
                    </Slider>
                    <div class="btn-open">
                        <a  onClick={()=>{chapterScroll3('showForm')}} class="cursor-pointer"><span class="btn-bg">Explore Stratezy</span></a>
                    </div>
                </div>
                <div className="col-xl-4 col-md-5">
                    <div className="d-flex justify-content-end" id="campaignForm">
                        <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                            <DematAccountForm />
                        </GoogleReCaptchaProvider>
                    </div>
                </div>
            </div>
            <div className={name}>
                <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                    <button className=" primary-orange-btn scroll-top-account openbtn"  onClick={()=>{chapterScroll2('dematform')}}>Open Free Account</button>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Banner;
