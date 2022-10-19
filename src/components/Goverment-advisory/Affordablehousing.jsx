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
              <li>
              Chhattisgarh
              </li>
              <li>
              Odisha
              </li>
              <li>
              Madhya Pradesh
              </li>
              <li>
              Jharkhand
              </li>
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