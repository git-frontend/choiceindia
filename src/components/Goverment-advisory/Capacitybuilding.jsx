import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import serviceimagesix from '../../assets/images/goverment-advisory/serviceimagesix.webp';


import React, { useRef } from 'react';

import { useState } from "react";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)



function Capacitybuilding() {

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



  return (
    <div>



      <div className="container">

        <div className="row">
          <div className="col-md-12">
            <div className="boxwrap">
              <div className="left-img">
                <img src={serviceimagesix} className={"img-fluid"} alt="" width={"383"} height={"868"} />
              </div>
              <div className="right-sec">
                <p className="text">Trained 15000+ trainees with 10L+ trainig hours in 13 states of India</p>
                <div className="client-service">
                  <div className="services boxwrapper">
                    <h4>Major Services</h4>
                    <ul>
                      <li>
                        Training sessions on ULBs Accounting & Revenue Reforms
                      </li>
                      <li>
                        Training sessions to public enterprises on financial matters
                      </li>
                      <li>
                        Provision of Enterprise Training and Management for Public Delivery System
                      </li>
                      <li>
                        Organize Online and video learning
                        sessions
                      </li>

                    </ul>
                  </div>
                  <div className="clients boxwrapper">
                    <h4>Major Clients</h4>
                    <ul>
                      <li>
                        SPUR Project Monitoring Unit (PMU), Bihar
                      </li>
                      <li>
                        Directorate of Local Fund Audit -
                        Chhattisgarh &amp; MH
                      </li>
                      <li>
                        Ministry of Urban Development (MoUD)
                      </li>
                      <li>
                        State Urban Development Dept. -
                        Maharashtra, Madhya Pradesh,
                        Chhattisgarh, Jharkhand, Bihar
                      </li>
                      <li>
                        Chhattisgarh State Renewable Energy
                        Development Agency (CREDA)
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

export default Capacitybuilding;