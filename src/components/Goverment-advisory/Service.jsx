import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import serviceimage from '../../assets/images/goverment-advisory/serviceimage.webp';
import socialsector from '../../assets/images/goverment-advisory/welfareleftimage.webp';
import partnerone from '../../assets/images/goverment-advisory/partnerone.svg';
import partnertwo from '../../assets/images/goverment-advisory/partnertwo.svg';
import partnerthree from '../../assets/images/goverment-advisory/partnerthree.svg';
import partnerfour from '../../assets/images/goverment-advisory/partnerfour.svg';
import partnerfive from '../../assets/images/goverment-advisory/partnerfive.svg';
import socialpartnerone from '../../assets/images/goverment-advisory/socialpartnerone.svg';
import socialpartnertwo from '../../assets/images/goverment-advisory/socialpartnertwo.svg';
import socialpartnerthree from '../../assets/images/goverment-advisory/socialpartnerthree.svg';
import socialpartnerfour from '../../assets/images/goverment-advisory/socialpartnerfour.svg';
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
                    <h4 className='title-fourth'>Capital Advisory</h4>
                  </div>
                </div>
                <div className="same-list-bx-item">
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevtwo} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>
                    <h4 className='title-fourth'>Management Consultancy</h4>
                  </div>
                </div>
                <div className="same-list-bx-item">
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevthree} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>
                    <h4 className='title-fourth'>Government Advisory</h4>
                  </div>
                </div>
                <div className="same-list-bx-item">
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevfour} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>
                    <h4 className='title-fourth'>Tax Advisory</h4>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className="main-cont-gov-adv">
          <div className="detailsection cont-itm-active" >
            <Urbandevelopment />
          </div>
          <div className="detailsection">
            <Roadandhighway />
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
                {/* <div className={"hexagonwrap"+ count===0 ? "active":"" } onClick={() => { chapterScroll('tribalwelfare'); setcount(0)}}> */}
                <div className="hexagonwrap" onClick={() => { chapterScroll('tribalwelfare') }}>
                  <LazyLoader src={socialsectorone} className={'img-fluid'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  <p className="text">Tribal Welfare</p>
                </div>
                {/* <div className={"hexagonwrap"+ count===1 ? "active":"" } onClick={() => { chapterScroll('health'); setcount(1)}}> */}
                <div className="hexagonwrap">
                  <LazyLoader src={socialsectortwo} className={'img-fluid'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  <p className="text">Health</p>
                </div>
                <div className="hexagonwrap">
                  <LazyLoader src={socialsectorthree} className={'img-fluid'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  <p className="text">Agriculture &amp; Allied</p>
                </div>
                <div className="hexagonwrap">
                  <LazyLoader src={socialsectorfour} className={'img-fluid'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  <p className="text">Education &amp; Skill Development</p>
                </div>
                <div className="hexagonwrap">
                  <LazyLoader src={socialsectorfive} className={'img-fluid'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  <p className="text">IT &amp; E-Governance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="tribalwelfare" className="sectordetail">
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

                  <Slider {...settings2} id="clientslider">

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
      {/* <div id="health" className="sectordetail">
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

                  <Slider {...settings1} id="clientslider">

                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={partnerone} className={'img-fluid'} width={"96"} height={"95"} alt={"Niti Aayog"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={partnerfour} className={'img-fluid'} width={'96'} height={'95'} alt={"Navkar Corporation"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={partnerfive} className={'img-fluid'} width={'172'} height={'95'} alt={"ICICI"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={partnertwo} className={'img-fluid'} width={'96'} height={'95'} alt={"Liberty Insurance"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={partnerthree} className={'img-fluid'} width={'172'} height={'92'} alt={"Aadhaar"} />
                      </div>
                    </div>


                  </Slider>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div> */}







    </div>

  );
}

export default Service;