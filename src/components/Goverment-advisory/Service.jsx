import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";



import socialsectorone from '../../assets/images/goverment-advisory/tribal-welfare.webp';
import socialsectortwo from '../../assets/images/goverment-advisory/health.webp';
import socialsectorthree from '../../assets/images/goverment-advisory/agriculture-allied.webp';
import socialsectorfour from '../../assets/images/goverment-advisory/education-skilldevelopment.webp';
import socialsectorfive from '../../assets/images/goverment-advisory/ITe-governance.webp';
import urbandevtwo from '../../assets/images/goverment-advisory/urbandevtwo.svg';
import urbandevone from '../../assets/images/goverment-advisory/urbandevone.svg';
import urbandevthree from '../../assets/images/goverment-advisory/urbandevthree.svg';
import urbandevfour from '../../assets/images/goverment-advisory/urbandevfour.svg';

import Roadandhighway from './Roadandhighway';
import Urbandevelopment from './Urbandevelopment';
import Watersanitation from './Watersanitation';
import Affordablehousing from './Affordablehousing';
import Processautomation from './Processautomation';
import Tribalwelfare from './Tribalwelfare';
import Health from './Health';
import AgricultureAllied from './AgricultureAllied';
import Education from './Education';
import ItEGovernmance from './ItEGovernmance';
import Capacitybuilding from './Capacitybuilding';
import Publicfinancialmanagement from './Publicfinancialmanagement';
import Schemepmus from './Schemepmus';

import React, { useRef } from 'react';
import LazyLoader from "../Common-features/LazyLoader";
import { useState } from "react";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)



function Service() {

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

  const settings = {
    infinite: true,
    speed: 2500,
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


  return (
    <div>


      <section className="same-list-bx services-same-list-bx gov-adv-slider-tab">
        <div className="container">

          <div className="row">
            <div className="col-md-12 ">
              {/* <div className="same-list-bx-list"> */}
              <Slider {...settings} className="same-list-bx-list">
                <div className="same-list-bx-item active">
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevone} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>
                    <h4 className='title-fourth'>Urban Development</h4>
                  </div>
                </div>
                <div className="same-list-bx-item">
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevtwo} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>
                    <h4 className='title-fourth'>Road &amp; Highway</h4>
                  </div>
                </div>
                <div className="same-list-bx-item">
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevthree} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>

                    <h4 className='title-fourth'>Water &amp; Sanitation</h4>
                  </div>
                </div>
                <div className="same-list-bx-item">
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevfour} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>

                    <h4 className='title-fourth'>Affordable Housing</h4>
                  </div>
                </div>
                <div className="same-list-bx-item">
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevone} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>
                    <h4 className='title-fourth'>Process
                      Automation</h4>
                  </div>
                </div>
                <div className="same-list-bx-item">
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevtwo} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>
                    <h4 className='title-fourth'>Capacity
                      Building</h4>
                  </div>
                </div>
                <div className="same-list-bx-item">
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevthree} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>
                    <h4 className='title-fourth'>Public Financial
                      Management</h4>
                  </div>
                </div>
                <div className="same-list-bx-item">
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevfour} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>
                    <h4 className='title-fourth'>Scheme
                      PMUs</h4>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className="main-cont-gov-adv">
          <div className="detailsection  cont-itm-active  " >
            <Urbandevelopment />
          </div>
          <div className="detailsection   mt6 ">
            <Roadandhighway />
          </div>
          <div className="detailsection   mt6 ">
            <Watersanitation />
          </div>
          <div className="detailsection  mt6 ">
            <Affordablehousing />
          </div>
          <div className="detailsection ">
            <Processautomation />
          </div>
          <div className="detailsection   mt6  ">
            <Capacitybuilding />
          </div>
          <div className="detailsection   ">
            <Publicfinancialmanagement />
          </div>
          <div className="detailsection ">
            <Schemepmus />
          </div>              
        </div>
      </section>
 


      <section className="socialsector">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-first">Our Interest in Social Development Sector</h2>
            </div>
          </div>
          <div className="row mt7">
            <div className="col-md-12">

              <div className="wrapper">
                {/* <div className={"hexagonwrap"+ ((count===0) ? "sector-active":"") } onClick={() => { chapterScroll('tribalwelfare'); setcount(0)}}> */}
                <div className="hexagonwrap ">
                  <div className="hexagonwrap-img">
                    <LazyLoader src={socialsectorone} className={'img-fluid'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  </div>
                  <p className="text">Tribal Welfare</p>
                </div>
                {/* <div className={"hexagonwrap"+ ((count===1) ? "active":"") } onClick={() => { chapterScroll('health'); setcount(1)}}> */}
                <div className="hexagonwrap ">
                  <div className="hexagonwrap-img">
                    <LazyLoader src={socialsectortwo} className={'img-fluid'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  </div>

                  <p className="text">Health</p>
                </div>
                <div className="hexagonwrap ">
                  <div className="hexagonwrap-img">
                    <LazyLoader src={socialsectorthree} className={'img-fluid'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  </div>

                  <p className="text">Agriculture &amp; Allied</p>
                </div>
                <div className="hexagonwrap ">
                  <div className="hexagonwrap-img">
                    <LazyLoader src={socialsectorfour} className={'img-fluid'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  </div>

                  <p className="text">Education &amp; Skill Development</p>
                </div>
                <div className="hexagonwrap active">
                  <div className="hexagonwrap-img">
                    <LazyLoader src={socialsectorfive} className={'img-fluid'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  </div>

                  <p className="text">IT &amp; E-Governance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-cont-gov-adv">
          <div className="sectordetail " >
            <Tribalwelfare />
          </div>
          <div className="sectordetail " >
            <Health />
          </div>
          <div className="sectordetail  sector-active" >
            <AgricultureAllied />
          </div>
          <div className="sectordetail " >
            <Education />
          </div>
          <div className="sectordetail " >
            <ItEGovernmance />
          </div>
        </div>
      </section>

    </div>

  );
}

export default Service;