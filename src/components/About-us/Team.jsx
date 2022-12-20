import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Accordion, Button } from "react-bootstrap";


import { faClock, faLocationDot, faPhone, faEnvelope, faHeart, faClose, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image1 from '../../assets/images/about-us/vinita-patodia.webp';
import image2 from '../../assets/images/about-us/kamal-poddar.webp';
import image3 from '../../assets/images/about-us/suyash-patodia.webp';
import image4 from '../../assets/images/about-us/arun-poddar.webp';
import image5 from '../../assets/images/about-us/ajay-kejriwal.webp';
import image6 from '../../assets/images/about-us/subodh-kumar-agarwal.webp';
import image7 from '../../assets/images/about-us/akthakur.webp';
import image8 from '../../assets/images/about-us/sudha-bhushan.webp';
import image9 from '../../assets/images/about-us/sandeep-singh.webp';
import image10 from '../../assets/images/about-us/kanhaiyalal-beriwal.webp';
import image11 from '../../assets/images/about-us/kamal-poddar-2.webp';

import Slider from "react-slick";
import LazyLoader from '../Common-features/LazyLoader';
import BoardOfDirector from '../../Data/Strategies';

function Team() {
  const [value, setValue] = useState();
  const[IsShown2,setIsShown2]= useState(false)

  const settings = {
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 4,
    autoplay: false,
    margin: 15,
    dots: true,
    autoplaySpeed: 800,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

function closesection(){
  setIsShown2(false)
}

  return (
    <div>

      <section className="managementteam">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading">Board of Directors</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="team-list">
                <Slider {...settings} className="team-list-slider">
                {
                      BoardOfDirector?.map((res,i)=>{
                        return(
                  <div className="" onClick={() => {setValue(i),setIsShown2(true)}}>
                   <div className="team-item">
                      <span className="img-itm">
                        <LazyLoader src={res.image} className={"img-fluid"} width={"224"} height={"349"} alt={"Vinita Patodia"} />
                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                      </span>
                      <div className="namedesg">
                        <h5>{res.title}</h5>
                        <p className="designation">{res.designation}</p>
                      </div>


                    </div> 
                  </div>
                   )
                      })

                    }
                 
                </Slider>
{
  BoardOfDirector && BoardOfDirector[value] ?
  <div show={IsShown2} onHide={() => {closesection()}}  size="lg" aria-labelledby="contained-modal-title-vcenter" className="about-team-modal" centered>
  <div className="content-extra" >
  <FontAwesomeIcon icon={faClose} className="icon-table cursor-pointer" onClick={() => {closesection() }} />
    <div className="team-img-pos">
        <div className="team-img">
        <LazyLoader src={BoardOfDirector[value].image} className={"img-fluid"} width={"224"} height={"349"} alt={"Vinita Patodia"} />
        </div>
        <div className="team-position">
            <h4>{BoardOfDirector[value].title}<br/> ({BoardOfDirector[value].designation})</h4>
        </div>
      </div>
      <p>{BoardOfDirector[value].description}
      </p>
  </div>
  </div>:
  ""
}

               
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Team;
