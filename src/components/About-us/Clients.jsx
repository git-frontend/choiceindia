
import React from "react";
import Marquee from 'react-fast-marquee';

import nitiaayog from '../../assets/images/about-us/nitiaayog.svg';
import libertyinsurance from '../../assets/images/about-us/libertyinsurance.svg';
import aadhar from '../../assets/images/about-us/aadhar.svg';
import navkar from '../../assets/images/about-us/navkar.svg';
import idea from '../../assets/images/about-us/idea.svg';
import Slider from "react-slick";
function Clients() {
    const settings = {
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: false,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: false,
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
              slidesToScroll: 2,
            },
          },
        ],
    };
  return (
    <div>
      
        <section className="Clients">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h2 className="heading">Our Marquee Clients</h2>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                  <div className="client-list marquee">
                  {/* <Slider {...settings} className="client-list-slider ">
                      <div className="client-item ">
                        <span className="img-itm">
                          <img src={nitiaayog} className="img-fluid" alt="loading"/>
                        </span>
                       
                       
                        
                      </div>
                      <div className="client-item">
                        <span className="img-itm">
                          <img src={libertyinsurance} className="img-fluid" alt="loading" />
                        </span>
                        
                      </div>
                      <div className="client-item">
                        <span className="img-itm">
                          <img src={aadhar} className="img-fluid" alt="loading" />
                        </span>
                       
                        
                      </div>
                      <div className="client-item">
                        <span className="img-itm">
                          <img src={navkar} className="img-fluid" alt="loading" />
                        </span>
                       
                      </div>
                      <div className="client-item">
                        <span className="img-itm">
                          <img src={idea} className="img-fluid" alt="loading" />
                        </span>
                       
                        
                      </div>
                      <div className="client-item">
                        <span className="img-itm">
                          <img src={nitiaayog} className="img-fluid" alt="loading" />
                        </span>
                       
                       
                        
                      </div>
                      <div className="client-item">
                        <span className="img-itm">
                          <img src={libertyinsurance} className="img-fluid" alt="loading" />
                        </span>
                        
                      </div>
                      <div className="client-item">
                        <span className="img-itm">
                          <img src={navkar} className="img-fluid" alt="loading" />
                        </span>
                       
                      </div>

                    </Slider> */}
                  </div>

                   <Marquee direction="left" speed={100} delay={1} className="client-list-slider">
                    <div className="image_wrapper">
                      <img src={nitiaayog} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={libertyinsurance} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={aadhar} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={navkar} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={idea} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={nitiaayog} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={libertyinsurance} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={aadhar} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={navkar} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={idea} alt="" />
                    </div>
                </Marquee> 
                </div>
              </div>
            </div>
        </section>
      
    
    </div>
  );
}

export default Clients;
