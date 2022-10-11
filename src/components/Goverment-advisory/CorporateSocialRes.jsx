
import React from "react";
import LazyLoader from "../Common-features/LazyLoader";
import { useState } from "react";
import "./GovernmentAdv.scss";
import lionsclubinternational from '../../assets/images/Government-Advisory/lionsclubinternational.png';
import kiit from '../../assets/images/Government-Advisory/kiit.png';
import chothmalpatodia from '../../assets/images/Government-Advisory/chothmalpatodia.png';
import bissauwelfare from '../../assets/images/Government-Advisory/bissauwelfare.png';
import rajasthanvidyarthi from '../../assets/images/Government-Advisory/rajasthanvidyarthi.png';

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
    autoplaySpeed: 3000,
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
          slidesToShow: 2,
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
                        <span className="img-item">
                          <LazyLoader src={lionsclubinternational} className={"img-fluid"}  alt={"loading"} />
                        </span>
                      </div>
                      <div className="social-item">
                        <span className="img-item">
                          <LazyLoader src={kiit} className={"img-fluid"}   alt={"loading"} />
                        </span>
                      </div>
                      <div className="social-item">
                        <span className="img-item">
                          <LazyLoader src={chothmalpatodia} className={"img-fluid"}  alt={"loading"} />
                        </span>
                      </div>
                      <div className="social-item">
                        <span className="img-item">
                          <LazyLoader src={bissauwelfare} className={"img-fluid"}   alt={"loading"} />
                        </span>
                      </div>
                      <div className="social-item">
                        <span className="img-item">
                        <LazyLoader src={rajasthanvidyarthi} className={"img-fluid"}   alt={"loading"} />
                        </span>
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
