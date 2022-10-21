import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import welfareleftimagethree from '../../assets/images/goverment-advisory/welfareleftimagethree.webp';

import agripartnerone from '../../assets/images/goverment-advisory/agripartnerone.svg';
import agripartnertwo from '../../assets/images/goverment-advisory/agripartnertwo.svg';
import agripartnerthree from '../../assets/images/goverment-advisory/agripartnerthree.svg';


import React, { useRef } from 'react';
import LazyLoader from "../Common-features/LazyLoader";
import { useState } from "react";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)



function AgricultureAllied() {

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
                  <img src={welfareleftimagethree} className={"img-fluid"} alt="" width={"383"} height={"868"} />
                </div>
                <div className="right-sec">

                  <div className="client-service">
                    <div className="services boxwrapper">
                      <h4>Product</h4>
                      <ul>
                        <li>
                        Integrated PMU for (360 Degree Complete monitoring and Process Management):
                        <br/>
                        - Animal Husbandry<br/>
                        - Dairy<br/>
                        - Fisheries<br/>
                        </li>
                        <li>
                        Survey &amp; Geo-Tagging
                        </li>
                        <li>
                        PMU services for agriculture production storage, organics &amp; animal husbandry
                        </li>
                        <li>
                        Capacity building, best practices
                        </li>
                        <li>
                        Value Chain and Marketplace
                        </li>
                       



                      </ul>
                    </div>
                    <div className="clients boxwrapper">
                      <h4>Project</h4>
                      <ul>
                        <li>
                        PMC-KeVi mart e-commerce business provided by Gujarat Agro Industries Corporation
                        </li>
                        <li>
                        Survey and Geo-Tagging of Agriculture warehouses across in the state of HP, J&amp;K &amp; Uttarakhand for NABARD Consultancy Services
                        </li>
                        <li>
                        PMU at Bihar Livestock development agency with our Partner NABCONS
                        </li>
                        <li>
                        DPR PMC- Maize processing plant in Bastar, Chhattisgarh
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
                        <LazyLoader src={agripartnerone} className={'img-fluid'} width={"254"} height={"120"} alt={""} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={agripartnertwo} className={'img-fluid'} width={'188'} height={'120'} alt={""} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={agripartnerthree} className={'img-fluid'} width={'263'} height={'120'} alt={""} />
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

export default AgricultureAllied;