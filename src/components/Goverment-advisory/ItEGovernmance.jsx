import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import socialsector from '../../assets/images/goverment-advisory/welfareleftimage.webp';

import ITpartnerone from '../../assets/images/goverment-advisory/itpartnerone.svg';
import ITpartnertwo from '../../assets/images/goverment-advisory/itpartnertwo.svg';
import ITpartnerthree from '../../assets/images/goverment-advisory/itpartnerthree.svg';
import ITpartnerfour from '../../assets/images/goverment-advisory/itpartnerfour.svg';
import ITpartnerfive from '../../assets/images/goverment-advisory/itpartnerfive.svg';

import React, { useRef } from 'react';
import LazyLoader from "../Common-features/LazyLoader";
import { useState } from "react";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)



function ItEGovernmance() {

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
    slidesToShow: 5,
    autoplay: true,
    margin: 15,
    dots: false,
    autoplaySpeed: 1000,
    slidesToScroll: 5,
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
                        e-Bill
                        </li>
                        <li>
                        e-Audit
                        </li>
                        <li>
                        e- Gov
                        </li>
                        <li>
                        HR Management
                        </li>
                        <li>
                        GIS Mapping
                        </li>
                       <li>
                       Helpdesk Management
                       </li>
                        <li>
                        Grievance Management
                        </li>


                      </ul>
                    </div>
                    <div className="clients boxwrapper">
                      <h4>Project</h4>
                      <ul>
                        <li>
                        Development and Operation of Web Portal for Women Entrepreneurship Platform (WEP)-4500 users at Niti Aayog
                        </li>
                        <li>
                        Development and maintenance of E-Bill software at Patna Municipal Corporation, Dantewada and Jagdalpur Municipal Councils
                        </li>
                        <li>
                        Development of Software for Procurement Management at IIIT, Naya Raipur - CG
                        </li>
                        <li>
                        Implementation and Maintenance of Accounting Software at UIDAI
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
                        <LazyLoader src={ITpartnerone} className={'img-fluid'} width={"254"} height={"120"} alt={""} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={ITpartnertwo} className={'img-fluid'} width={'188'} height={'120'} alt={""} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={ITpartnerthree} className={'img-fluid'} width={'263'} height={'120'} alt={""} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={ITpartnerfour} className={'img-fluid'} width={'263'} height={'120'} alt={""} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={ITpartnerfive} className={'img-fluid'} width={'263'} height={'120'} alt={"ICICI"} />
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

export default ItEGovernmance;