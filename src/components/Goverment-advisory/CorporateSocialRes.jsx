
import React from "react";
import LazyLoader from "../Common-features/LazyLoader";
import { useState } from "react";
import lionsclubinternational from '../../assets/images/goverment-advisory/lionsclubinternational.svg';
import kiit from '../../assets/images/goverment-advisory/kiit.svg';
import chothmalpatodia from '../../assets/images/goverment-advisory/chothmalpatodia.svg';
import bissauwelfare from '../../assets/images/goverment-advisory/bissauwelfare.svg';
import rajasthanvidyarthi from '../../assets/images/goverment-advisory/rajasthanvidyarthi.svg';

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";



function CorporateSocialRes() {
  const settings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 5,
    autoplay: true,
    dots: false,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [skeleton, setSkeleton] = useState(() => true);
  setTimeout(() => {
    setSkeleton(() => false);
  }, 3000)

  return (
    <div>

      <section className="govrn-connect">
        <div className="container">
          <div className="govrn-bar-cont">
            <div className="govrn-cont-des">
              <h3 className="title-fourth">Need help with something ? Connect with us</h3>
              <a href="https://choiceindia.com/contact-us" target="_blank" className="btn-bg btn-bg-dark">Contact</a>
            </div>
          </div>
        </div>
      </section>

      <section className="CorporateSocial-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <h1 className="title-first sectitle">Corporate Social Responsibilities Efforts</h1>
            </div>
                <div className="col-md-12">
                  <div className="main-social-list">
                    <Slider {...settings} className="social-list-slider">
                      <div className="social-item">
                        <div className="img-item">
                          <LazyLoader src={lionsclubinternational} className={"img-fluid"}  width={'182'} height={'169'} alt={""} />
                        </div>
                      </div>
                      <div className="social-item">
                        <div className="img-item">
                          <LazyLoader src={kiit} className={"img-fluid"} width={'223'} height={'169'}   alt={""} />
                        </div>
                      </div>
                      <div className="social-item">
                        <div className="img-item">
                          <LazyLoader src={chothmalpatodia} className={"img-fluid"} width={'213'} height={'151'}  alt={""} />
                        </div>
                      </div>
                      <div className="social-item">
                        <div className="img-item">
                          <LazyLoader src={bissauwelfare} className={"img-fluid"}  width={'197'} height={'197'}  alt={""} />
                        </div>
                      </div>
                      <div className="social-item">
                        <div className="img-item">
                        <LazyLoader src={rajasthanvidyarthi} className={"img-fluid"} width={'197'} height={'197'}   alt={""} />
                        </div>
                      </div>
                      
                    </Slider>
                  </div>
              </div>
          </div>
    </div>
      </section >
    </div >
  );
}

export default CorporateSocialRes;
