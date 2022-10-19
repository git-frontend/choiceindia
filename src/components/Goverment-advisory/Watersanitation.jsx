import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import serviceimage from '../../assets/images/goverment-advisory/serviceimage.webp';
import serviceimagetwo from '../../assets/images/goverment-advisory/serviceimagetwo.webp';
import serviceimagethree from '../../assets/images/goverment-advisory/serviceimagethree.webp';

import React, { useRef } from 'react';
import LazyLoader from "../Common-features/LazyLoader";
import { useState } from "react";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)



function Watersanitation() {

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
        <img src={serviceimagethree} className={"img-fluid"} alt="" width={"383"} height={"868"} />
      </div>
      <div className="right-sec">
        <p className="text">Various DPR and PMC project in Madhya Pradesh and Jal Jeevvan Mission in Rajasthan</p>
        <div className="client-service">
          <div className="services boxwrapper">
            <h4>Major Services</h4>
            <ul>
              <li>
              Feasibility Report
              </li>
              <li>
              DPR for Urban & Rural water Supply
              </li>
              <li>
              Third Party Inspection
              </li>
              <li>
              Project Management Consultancy ( PMC )
              </li>
              
            </ul>
          </div>
          <div className="clients boxwrapper">
            <h4>Major Clients</h4>
            <ul>
              <li>
              jal jeevan mission (JJM ) - Rajasthan
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

export default Watersanitation;