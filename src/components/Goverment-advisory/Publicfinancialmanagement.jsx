import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import serviceimageseven from '../../assets/images/goverment-advisory/serviceimageseven.webp';

import ourpartners5 from '../../assets/images/goverment-advisory/ourpartners5.svg';
import ourpartners6 from '../../assets/images/goverment-advisory/ourpartners6.svg';
import ourpartners7 from '../../assets/images/goverment-advisory/ourpartners7.svg';
import ourpartners8 from '../../assets/images/goverment-advisory/ourpartners8.svg';



import React, { useRef } from 'react';
import LazyLoader from "../Common-features/LazyLoader";
import { useState } from "react";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)



function Publicfinancialmanagement() {

  const [count, setcount] = useState(0);


  function chapterScroll(id) {
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }


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
          slidesToShow: 1,
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
                <img src={serviceimageseven} className={"img-fluid"} alt="" width={"383"} height={"868"} />
              </div>
              <div className="right-sec">
                <p className="text">Served 1000+ clientele in PFM Sector in 15 states in India including FMTSC, Revenue Augmentation, Internal Control etc. </p>
                <div className="client-service">
                  <div className="services boxwrapper">
                    <h4>Major Services</h4>
                    <ul>
                      <li>
                        Develop Self-Sustainability &amp; Revenue Augmentation for
                        Local Bodies
                      </li>
                      <li>
                        GST Revenue Augmentation
                      </li>
                      <li>
                        Roll-out of Accrual Based Double Entry Accounting System for
                        Local Bodies
                      </li>
                      <li>
                        Complete Financial and Procurement Management for
                        Central and State level undertakings
                      </li>
                      <li>
                      Taxation & Statutory Compliances
                      </li>
                    </ul>
                  </div>
                  <div className="clients boxwrapper">
                    <h4>Major Clients</h4>
                    <ul>
                      <li>
                      Unique Identification Authority of India (UIDAI)
                      </li>
                      <li>
                      National Informatics Centre Services Incorporated (NISCSI)
                      </li>
                      <li>
                      Dedicated Freight Corridor Corporation of India
                      </li>
                      <li>
                      SPUR Project Monitoring Unit (PMU), Bihar
                      </li>
                      <li>
                      Ministry of Urban Development (MoUD)
                      </li>
                      <li>
                      State Urban Development Dept. - MH, MP, CG,JH, BR
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
                      <LazyLoader src={ourpartners5} className={'img-fluid'} width={"96"} height={"95"} alt={"Niti Aayog"} />
                    </div>
                  </div>
                  <div className="image_wrapper">
                    <div className="img-item">
                      <LazyLoader src={ourpartners6} className={'img-fluid'} width={'231'} height={'95'} alt={"Navkar Corporation"} />
                    </div>
                  </div>
                  <div className="image_wrapper">
                    <div className="img-item">
                      <LazyLoader src={ourpartners7} className={'img-fluid'} width={'278'} height={'95'} alt={"ICICI"} />
                    </div>
                  </div>
                  <div className="image_wrapper">
                    <div className="img-item">
                      <LazyLoader src={ourpartners8} className={'img-fluid'} width={'172'} height={'95'} alt={"Liberty Insurance"} />
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

export default Publicfinancialmanagement;