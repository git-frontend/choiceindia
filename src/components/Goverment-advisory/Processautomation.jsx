import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import serviceimagefive from '../../assets/images/goverment-advisory/serviceimagefive.webp';
import ourpartners1 from '../../assets/images/goverment-advisory/ourpartners1.svg';
import ourpartners3 from '../../assets/images/goverment-advisory/ourpartners3.svg';

import ourpartners4 from '../../assets/images/goverment-advisory/ourpartners4.svg';
import ourpartners2 from '../../assets/images/goverment-advisory/ourpartners2.svg';



import React, { useRef } from 'react';
import LazyLoader from "../Common-features/LazyLoader";
import { useState } from "react";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)



function Processautomation() {

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
    autoplay: false,
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
                <img src={serviceimagefive} className={"img-fluid"} alt="" width={"383"} height={"868"} />
              </div>
              <div className="right-sec">
                <p className="text">Customized software service to many ULBs, Niti Aayog and prominent institutions </p>
                <div className="client-service">
                  <div className="services boxwrapper">
                    <h4>Major Services</h4>
                    <ul>
                      <li>
                        Automation of Processes and Re-
                        engineering
                      </li>
                      <li>
                      Management Information System
                      </li>
                      <li>
                      Software Development 
                      </li>
                      <li>
                      e-Audit
                      </li>
                      <li>
                      Data Digitization
                      </li>
                      <li>
                      Reform Planning and IT Advisory
                      </li>
                      <li>
                      Complete Procurement Management (e-Bill)
                      </li>

                    </ul>
                  </div>
                  <div className="clients boxwrapper">
                    <h4>Major Clients</h4>
                    <ul>
                      <li>
                      Patna Municipal Corporation
                      </li>
                      <li>
                      Local Fund Audit - Chhattisgarh
                      </li>
                      <li>
                      IIIT, Naya Raipur
                      </li>
                      <li>
                      Niti Aayog
                      </li>
                      <li>
                      Various Urban Local Bodies
                      </li>
                      <li>
                      Kotle Patil
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
                      <LazyLoader src={ourpartners4} className={'img-fluid'} width={"177"} height={"96"} alt={"Niti Aayog"} />
                    </div>
                  </div>
                  <div className="image_wrapper">
                    <div className="img-item">
                      <LazyLoader src={ourpartners3} className={'img-fluid'} width={'95'} height={'95'} alt={"Navkar Corporation"} />
                    </div>
                  </div>
                  <div className="image_wrapper">
                    <div className="img-item">
                      <LazyLoader src={ourpartners2} className={'img-fluid'} width={'238'} height={'96'} alt={"ICICI"} />
                    </div>
                  </div>
                  <div className="image_wrapper">
                    <div className="img-item">
                      <LazyLoader src={ourpartners1} className={'img-fluid'} width={'206'} height={'96'} alt={"Liberty Insurance"} />
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

export default Processautomation;