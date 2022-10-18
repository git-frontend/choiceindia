import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import serviceimagefour from '../../assets/images/goverment-advisory/serviceimagefour.webp';

import React, { useRef } from 'react';
import LazyLoader from "../Common-features/LazyLoader";
import { useState } from "react";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)



function Affordablehousing() {

 const [count, setcount]=useState(0);


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

  const settings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 4,
    autoplay: false,
    margin: 10,
    dots: true,
    autoplaySpeed: 1000,
    slidesToScroll: 4,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  const settings2 = {
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
          slidesToShow: 1,
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
        <img src={serviceimagefour} className={"img-fluid"} alt="" width={"383"} height={"868"} />
      </div>
      <div className="right-sec">
        <p className="text">Served 2L+ beneficiaries in 180+ cities under Pradhan Mantri Awas Yojna across the country</p>
        <div className="client-service">
          <div className="services boxwrapper">
            <h4>Major Services</h4>
            <ul>
              <li>
              Preparation of Housing For All Plan of Action
              </li>
              <li>
              Detailed Project Report (DPR)
              </li>
              <li>
              Project Management Consultancy (PMC) 
              </li>

            </ul>
          </div>
          <div className="clients boxwrapper">
            <h4>Major Clients</h4>
            <ul>
              <li>
              Consulting under PMAY Scheme for ULBs of:
              </li>
              <li>
              drinkinf water & sanitation development, godda
              </li>
              <li>
              Drinking Water & Sanitation Department, Ramgarh
              </li>
              <li>
              Jharkhand Urban Infrastructure Development Co. Ltd
              </li>
              <li>
              Public Health Engineering Department - Madhya Pradesh
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

</div>


    
     





    </div>

  );
}

export default Affordablehousing;