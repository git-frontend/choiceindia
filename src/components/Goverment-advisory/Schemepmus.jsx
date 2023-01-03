import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import serviceimageeight from '../../assets/images/goverment-advisory/serviceimageeight.webp';
import ourpartners9 from '../../assets/images/goverment-advisory/ourpartners9.svg';
import ourpartners10 from '../../assets/images/goverment-advisory/ourpartners10.svg';
import ourpartners11 from '../../assets/images/goverment-advisory/ourpartners11.svg';
import ourpartners12 from '../../assets/images/goverment-advisory/ourpartners12.svg';
import ourpartners13 from '../../assets/images/goverment-advisory/ourpartners13.svg';
import ourpartners14 from '../../assets/images/goverment-advisory/ourpartners14.svg';

import React, { useRef } from 'react';
import LazyLoader from "../Common-features/LazyLoader";
import { useState } from "react";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)



function Schemepmus() {

  const settings1 = {
    infinite: true,
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
                <img src={serviceimageeight} className={"img-fluid"} alt="" width={"383"} height={"868"} />
              </div>
              <div className="right-sec">
                <p className="text">PMU services including engineering, financial and sectoral consulting under Flagship schemes of GoI as well as various state govt. schemes </p>
                <div className="client-service">
                  <div className="services boxwrapper">
                    <h4>Major Services</h4>
                    <ul>
                      <li>
                      Financial Management and accounting
                      </li>
                      <li>
                      Financial Management & Technical Support  (FMTSC)
                      </li>
                      <li>
                      Revenue Reform
                      </li>
                      <li>
                      Post Procurement Review
                      </li>
                      <li>
                      PMU for implementation of various central and State Govt. public welfare Schemes
                      </li>
                      <li>
                      Transaction advisory
                      </li>
                    </ul>
                  </div>
                  <div className="clients boxwrapper">
                    <h4>Major Clients</h4>
                    <ul>
                      <li>
                      Jal Jeevan Mission (JJM)
                      </li>
                      <li>
                      Rashtriya Madhyamik Shiksha Abhiyan (RMSA)
                      </li>
                      <li>
                      Sarva Shiksha Abhiyan (SSA)
                      </li>
                      <li>
                      National Urban Livelihoods Mission (NULM)
                      </li>
                      <li>
                      Pradhan Mantri Awas Yojana (PMAY)
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
                      <LazyLoader src={ourpartners9} className={'img-fluid'} width={"89"} height={"95"} alt={""} />
                    </div>
                  </div>
                  <div className="image_wrapper">
                    <div className="img-item">
                      <LazyLoader src={ourpartners10} className={'img-fluid'} width={'197'} height={'95'} alt={""} />
                    </div>
                  </div>
                  <div className="image_wrapper">
                    <div className="img-item">
                      <LazyLoader src={ourpartners11} className={'img-fluid'} width={'116'} height={'95'} alt={""} />
                    </div>
                  </div>
                  <div className="image_wrapper">
                    <div className="img-item">
                      <LazyLoader src={ourpartners12} className={'img-fluid'} width={'329'} height={'95'} alt={""} />
                    </div>
                  </div>
                  <div className="image_wrapper">
                    <div className="img-item">
                      <LazyLoader src={ourpartners13} className={'img-fluid'} width={'127'} height={'95'} alt={""} />
                    </div>
                  </div>
                  <div className="image_wrapper">
                    <div className="img-item">
                      <LazyLoader src={ourpartners14} className={'img-fluid'} width={'107'} height={'95'} alt={""} />
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

export default Schemepmus;