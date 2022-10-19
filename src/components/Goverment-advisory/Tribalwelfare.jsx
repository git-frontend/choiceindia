import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import socialsector from '../../assets/images/goverment-advisory/welfareleftimage.webp';

import socialpartnerone from '../../assets/images/goverment-advisory/socialpartnerone.svg';
import socialpartnertwo from '../../assets/images/goverment-advisory/socialpartnertwo.svg';
import socialpartnerthree from '../../assets/images/goverment-advisory/socialpartnerthree.svg';
import socialpartnerfour from '../../assets/images/goverment-advisory/socialpartnerfour.svg';


import React, { useRef } from 'react';
import LazyLoader from "../Common-features/LazyLoader";
import { useState } from "react";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)



function Tribalwelfare() {

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
          slidesToShow: 3,
          slidesToScroll: 3,
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
                          Tribal Scheme Monitoring ( 360 degree ) at district level.
                        </li>
                        <li>
                          Survey, Research and assessment in Tribal Areas
                        </li>
                        <li>
                          Aspirational District Ranking
                        </li>
                        <li>
                          Value Chain Analysis
                        </li>
                        <li>
                          NTFP ( Non Timber Forest Produce )
                        </li>
                        <li>
                          PMU - DMF
                        </li>
                        <li>
                          Industry DPR and PMC
                        </li>




                      </ul>
                    </div>
                    <div className="clients boxwrapper">
                      <h4>Project</h4>
                      <ul>
                        <li>
                          DMFT, Sundargarh
                        </li>
                        <li>
                          Collector office, Jagdalpur, Chhattisgarh
                        </li>
                        <li>
                          Collector office, Dantewara, Chhattisgarh
                        </li>
                        <li>
                          Collector office, Bijapur, Chhattisgarh
                        </li>
                        <li>
                          Collector office, Kondagaon, Chhattisgarh
                        </li>
                        <li>
                          DMFT Jharkhand
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

                  <Slider {...settings1} id="socialclientslider">

                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={socialpartnerone} className={'img-fluid'} width={"254"} height={"120"} alt={"Niti Aayog"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={socialpartnertwo} className={'img-fluid'} width={'188'} height={'120'} alt={"Navkar Corporation"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={socialpartnerthree} className={'img-fluid'} width={'263'} height={'120'} alt={"ICICI"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={socialpartnerfour} className={'img-fluid'} width={'249'} height={'120'} alt={"Liberty Insurance"} />
                      </div>
                    </div>
                    {/* <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={partnerthree} className={'img-fluid'} width={'172'} height={'92'} alt={"Aadhaar"} />
                      </div>
                    </div> */}


                  </Slider>

                </div>
              </div>

            </div>

          </div>

        </div>
</div>

  );
}

export default Tribalwelfare;