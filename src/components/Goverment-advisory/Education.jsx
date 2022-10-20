import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import socialsector from '../../assets/images/goverment-advisory/welfareleftimage.webp';

import educationpartnerone from '../../assets/images/goverment-advisory/educationpartnerone.svg';
import educationpartnertwo from '../../assets/images/goverment-advisory/educationpartnertwo.svg';
import educationpartnerthree from '../../assets/images/goverment-advisory/educationpartnerthree.svg';
import educationpartnerfour from '../../assets/images/goverment-advisory/educationpartnerfour.svg';

import React, { useRef } from 'react';
import LazyLoader from "../Common-features/LazyLoader";
import { useState } from "react";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)



function Education() {

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
                        Digital Platform for Engineering and Technical Education
                        </li>
                        <li>
                        Digital Learning App for IIIT, NEET and other higher educational courses - e- classes
                        </li>
                        <li>
                        PMU for State Science &amp; Technology Department for complete management of activities
                        </li>
                        <li>
                        Smart class/ e-class solution
                        </li>
                        <li>
                        Post Procurement Review &amp; Other financial Products
                        </li>
                       <li>
                       Learning outcome &amp; survey
                       </li>



                      </ul>
                    </div>
                    <div className="clients boxwrapper">
                      <h4>Project</h4>
                      <ul>
                        <li>
                        Post Procurement Review at National Level under The Rashtriya MadhyamikShiksha Abhiyan (RMSA) a flagship Project of Gol
                        </li>
                        <li>
                        Post Procurement Review at National Level under The Sarva Shiksha Abhiyan (SSA) a flagship Project of Gol
                        </li>
                        <li>
                        Process Automation and Software Development for IIIT, Naya Raipur
                        </li>
                        <li>
                        PMU with Science &amp; Technology Department - Bihar
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
                        <LazyLoader src={educationpartnerone} className={'img-fluid'} width={"254"} height={"120"} alt={"Niti Aayog"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={educationpartnertwo} className={'img-fluid'} width={'188'} height={'120'} alt={"Navkar Corporation"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={educationpartnerthree} className={'img-fluid'} width={'263'} height={'120'} alt={"ICICI"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={educationpartnerfour} className={'img-fluid'} width={'263'} height={'120'} alt={"ICICI"} />
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

export default Education;