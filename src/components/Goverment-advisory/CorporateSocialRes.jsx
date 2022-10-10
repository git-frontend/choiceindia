
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
    speed: 1000,
    arrows: false,
    slidesToShow: 5,
    autoplay: false,
    margin: 15,
    dots: false,
    autoplaySpeed: 800,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          adaptiveHeight: true,
          dots:false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:false,
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
              <h1 className="title-first sectitle">Our Interest in Social Development Sector</h1>
            </div>
            <Slider {...settings} className="slider-list-slider">
                  <div className="slider-list-itm">
                    {/* <img src={lionsclubinternational} alt="Banner Images" className="img-fluid "></img> */}
                    <span></span>
                    <LazyLoader src={lionsclubinternational} className={"img-fluid"} width={"224"} height={"349"} alt={"loading"} />
                  </div>
                  
                  <div className="slider-list-itm">
                     {/* <img src={kiit} alt="Banner Images" className="img-flguid "></im> */}
                     <LazyLoader src={kiit} className={"img-fluid"} width={"224"} height={"349"} alt={"loading"} />
                  </div>
                  <div className="slider-list-itm">
                     {/* <img src={chothmalpatodia} alt="Banner Images" className="img-fluid "></img> */}
                     <LazyLoader src={chothmalpatodia} className={"img-fluid"} width={"224"} height={"349"} alt={"loading"} />
                  </div>
                  <div className="slider-list-itm">
                    {/* <img src={bissauwelfare} alt="Banner Images" className="img-fluid "></img> */}
                    <LazyLoader src={bissauwelfare} className={"img-fluid"} width={"224"} height={"349"} alt={"loading"} />
                  </div>
                  <div className="slider-list-itm">
                     {/* <img src={rajasthanvidyarthi} alt="Banner Images" className="img-fluid "></img> */}
                     <LazyLoader src={rajasthanvidyarthi} className={"img-fluid"} width={"224"} height={"349"} alt={"loading"} />
                  </div>
                  <div className="slider-list-itm">
                    {/* <img src={lionsclubinternational} alt="Banner Images" className="img-fluid "></img> */}
                    <LazyLoader src={lionsclubinternational} className={"img-fluid"} width={"224"} height={"349"} alt={"loading"} />
                  </div>
                </Slider>
          </div>
    </div>
      </section >
    </div >
  );
}

export default CorporateSocialRes;
