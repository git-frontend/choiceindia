import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import serviceimagetwo from '../../assets/images/goverment-advisory/serviceimagetwo.webp';


import React, { useRef } from 'react';
import LazyLoader from "../Common-features/LazyLoader";
import { useState } from "react";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)



function Roadandhighway() {

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
        <img src={serviceimagetwo} className={"img-fluid"} alt="" width={"383"} height={"868"} />
      </div>
      <div className="right-sec">
        <p className="text">Prepared DPR, PMC and independent engineering services for 3000+ KM of highways across the country including hilly areas and international border of Myanmar</p>
        <div className="client-service">
          <div className="services boxwrapper">
            <h4>Major Services</h4>
            <ul>
              <li>
              Independent Engineering 
Services
              </li>
              <li>
              Feasibility Report
              </li>
              <li>
              Detailed Project Report ( DPR )
              </li>
              <li>
              Bid Management Process
              </li>
              <li>
              Road Safety Services
              </li>
              <li>
              Operational & Maintenance Services
              </li>
            </ul>
          </div>
          <div className="clients boxwrapper">
            <h4>Major Clients</h4>
            <ul>
              <li>
              State Public Works Department
              </li>
              <li>
              National Highways &amp; Infrastructure Development Corporation Limited
              </li>
              <li>
              Urban Road Infrastructure
              </li>
              <li>
              Border Road Organization
              </li>
              <li>
              Uttar Pradesh State Highway Authority
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

export default Roadandhighway;