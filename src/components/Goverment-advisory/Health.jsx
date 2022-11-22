import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import socialsector from '../../assets/images/goverment-advisory/welfareleftimage.webp';
import healthpartnerone from '../../assets/images/goverment-advisory/health-partnerone.svg';
import healthpartnertwo from '../../assets/images/goverment-advisory/health-partnertwo.svg';
import healthpartnerthree from '../../assets/images/goverment-advisory/health-partnerthree.svg';



import React, { useRef } from 'react';
import LazyLoader from "../Common-features/LazyLoader";
import { useState } from "react";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)



function Health() {
  
  const settings1 = {
    infinite: false,
    speed: 1500,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    margin: 15,
    dots: false,
    autoplaySpeed: 1000,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };


  return (
    <div>

        
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="boxwrap">
                <div className="left-img">
                  <img src={socialsector} className={"img-fluid"} alt="" width={"383"} height={"868"} />
                </div>
                <div className="right-sec">

                  <div className="client-service">
                    <div className="services boxwrapper">
                      <h4>Product</h4>
                      <ul>
                        <li>
                        Field level survey
                        </li>
                        <li>
                        Capacity building of health worker
                        </li>
                        <li>
                        Capacity building of health worker
                        </li>
                        <li>
                        Community development &amp; study over CD, NCD, HIV/AIDS
                        </li>
                        <li>
                        Performance Monitoring &amp; Evaluation
                        </li>
                        <li>
                        Third party assessment
                        </li>
                        




                      </ul>
                    </div>
                    <div className="clients boxwrapper">
                      <h4>Project</h4>
                      <ul>
                        <li>
                        Mentoring Support for Assessing the performance of States in Health &amp; Nutrition - Delhi- NITI aayog
                        </li>
                        <li>
                        Implementation of the Fourth Round of the Global Youth Tobacco Survey (GYTS-4) in 3 States - Goa, Maharashtra &amp; AP
                        </li>
                        <li>
                        Undertakiing Implementation Research in health sector under UNDP Programe in MP- RKSK scheme
                        </li>
                       




                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="sliderwrapper">
                <div className="left-text">
                  <h3 className="title">Our Partners</h3>
                </div>
                <div className="right-img">

                  <Slider {...settings1} id="clientslider">

                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={healthpartnerone} className={'img-fluid'} width={"96"} height={"95"} alt={"Niti Aayog"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={healthpartnertwo} className={'img-fluid'} width={'96'} height={'95'} alt={"Navkar Corporation"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={healthpartnerthree} className={'img-fluid'} width={'172'} height={'95'} alt={"ICICI"} />
                      </div>
                    </div>
                   


                  </Slider>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>


  );
}

export default Health;