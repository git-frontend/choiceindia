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
  const [count2, setcount2] = useState(0);


  function chapterScroll(id) {
    // console.log("called",id)
    setTimeout(() => {
      // console.log("called-after",id)
      var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    }, 200)
    
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
              <Slider {...settings} className="same-list-bx-list">
                <div className={"same-list-bx-item" + ((count2===0) ? " active":"")} onClick={() => { setcount2(0);chapterScroll('thik-advisory')}} >
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevone} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>
                    <h4 className='title-fourth'>Urban Development</h4>
                  </div>
                </div>
                <div className={"same-list-bx-item" + ((count2===1) ? " active":"")} onClick={() => { setcount2(1);chapterScroll('thik-advisory')}}>
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevtwo} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>
                    <h4 className='title-fourth'>Road &amp; Highway</h4>
                  </div>
                </div>
                <div className={"same-list-bx-item" + ((count2===2) ? " active":"")} onClick={() => { setcount2(2);chapterScroll('thik-advisory')}}>
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevthree} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>

                    <h4 className='title-fourth'>Water &amp; Sanitation</h4>
                  </div>
                </div>
                <div className={"same-list-bx-item" + ((count2===3) ? " active":"")} onClick={() => {setcount2(3); chapterScroll('thik-advisory')}}>
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevfour} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>

                    <h4 className='title-fourth'>Affordable Housing</h4>
                  </div>
                </div>
                <div className={"same-list-bx-item" + ((count2===4) ? " active":"")} onClick={() => { setcount2(4);chapterScroll('thik-advisory')}}>
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevone} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>
                    <h4 className='title-fourth'>Process
                      Automation</h4>
                  </div>
                </div>
                <div className={"same-list-bx-item" + ((count2===5) ? " active":"")} onClick={() => { setcount2(5);chapterScroll('thik-advisory')}}>
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevtwo} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>
                    <h4 className='title-fourth'>Capacity
                      Building</h4>
                  </div>
                </div>
                <div className={"same-list-bx-item" + ((count2===6) ? " active":"")} onClick={() => { setcount2(6);chapterScroll('thik-advisory')}}>
                  <div className="bx-item-cont">
                    <span className="listimg">
                      <LazyLoader src={urbandevthree} alt={""} className={'img-fluid'} width={"80"} height={"80"} />
                    </span>
                    <h4 className='title-fourth'>Public Financial
                      Management</h4>
                  </div>
                </div>
                <div className={"same-list-bx-item" + ((count2===7) ? " active":"")} onClick={() => { setcount2(7);chapterScroll('thik-advisory')}}>
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

        <div className="main-cont-gov-adv" id="thik-advisory">
          <div className={"detailsection " + ((count2===0) ? "cont-itm-active":"")} >
            <Urbandevelopment />
          </div>
          <div className={"detailsection   mt6 " + ((count2===1) ? "cont-itm-active":"")}>
            <Roadandhighway />
          </div>
          <div className={"detailsection   mt6 " + ((count2===2) ? "cont-itm-active":"")}>
            <Watersanitation />
          </div>
          <div className={"detailsection   mt6 " + ((count2===3) ? "cont-itm-active":"")}>
            <Affordablehousing />
          </div>
          <div className={"detailsection " + ((count2===4) ? "cont-itm-active":"")}>
            <Processautomation />
          </div>
          <div className={"detailsection   mt6 " + ((count2===5) ? "cont-itm-active":"")}>
            <Capacitybuilding />
          </div>
          <div className={"detailsection " + ((count2===6) ? "cont-itm-active":"")}>
            <Publicfinancialmanagement />
          </div>
          <div className={"detailsection " + ((count2===7) ? "cont-itm-active":"")}>
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
                <div className={"hexagonwrap "+ ((count===0) ? "active":"") } onClick={() => { setcount(0);chapterScroll('main-tr')}}>
               
                  <div className="hexagonwrap-img">
                    <LazyLoader src={socialsectorone} className={'img-fluid'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  </div>
                  <p className="text">Tribal Welfare</p>
                </div>
                <div className={"hexagonwrap "+ ((count===1) ? "active":"") } onClick={() => {chapterScroll('main-tr');setcount(1)}}>
                
                  <div className="hexagonwrap-img">
                    <LazyLoader src={socialsectortwo} className={'img-fluid'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  </div>

                  <p className="text">Health</p>
                </div>
                <div className={"hexagonwrap "+ ((count===2) ? "active":"") } onClick={() => { chapterScroll('main-tr'); setcount(2)}}>
                
                  <div className="hexagonwrap-img">
                    <LazyLoader src={socialsectorthree} className={'img-fluid'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  </div>

                  <p className="text">Agriculture &amp; Allied</p>
                </div>
                <div className={"hexagonwrap "+ ((count===3) ? "active":"") } onClick={() => { chapterScroll('main-tr'); setcount(3)}}>
                
                  <div className="hexagonwrap-img">
                    <LazyLoader src={socialsectorfour} className={'img-fluid'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  </div>

                  <p className="text">Education &amp; Skill Development</p>
                </div>
              
                <div className={"hexagonwrap "+ ((count===4) ? "active":"") } onClick={() => { chapterScroll('main-tr'); setcount(4)}}>
                  <div className="hexagonwrap-img">
                    <LazyLoader src={socialsectorfive} className={'img-fluid'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  </div>

                  <p className="text">IT &amp; E-Governance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-cont-gov-adv" id="main-tr">
          <div className={"sectordetail " +((count===0)? "sector-active":"")} >
           
            <Tribalwelfare />
            
          </div>
          <div className={"sectordetail " +((count===1)? "sector-active":"")} >
            <div id="health-scroll" >
            <Health />
            </div>
          </div>
          <div className={"sectordetail " +((count===2)? "sector-active":"")} id="AgricultureAllied-scroll" >
            <AgricultureAllied />
          </div>
          <div className={"sectordetail " +((count===3)? "sector-active":"")}id="Education-scroll" >
            <Education />
          </div>
          <div className={"sectordetail " +((count===4)? "sector-active":"")}  id="ItEGovernmance-scroll">
            <ItEGovernmance />
          </div>
        </div>
      </section>

    </div>

  );
}

export default Service;
