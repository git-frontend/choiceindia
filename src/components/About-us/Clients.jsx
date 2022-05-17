
import React from "react";

import nitiaayog from '../../assets/images/about-us/nitiaayog.svg';
import libertyinsurance from '../../assets/images/about-us/libertyinsurance.svg';
import aadhar from '../../assets/images/about-us/aadhar.svg';
import navkar from '../../assets/images/about-us/navkar.svg';
import idea from '../../assets/images/about-us/idea.svg';
import Slider from "react-slick";
function Clients() {
    const settings = {
        infinite: true,
        speed:2000,
        height: 100,
        arrows: false,
        slidesToShow: 5,
        autoplay: true,
        margin:20,
        dots:false,
        autoplaySpeed: 800,
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
                  <div className="client-list">
                  <Slider {...settings} className="client-list-slider">
                      <div className="client-item">
                        <span className="img-itm">
                          <img src={nitiaayog} className="img-fluid" />
                        </span>
                       
                       
                        
                      </div>
                      <div className="client-item">
                        <span className="img-itm">
                          <img src={libertyinsurance} className="img-fluid" />
                        </span>
                        
                      </div>
                      <div className="client-item">
                        <span className="img-itm">
                          <img src={aadhar} className="img-fluid" />
                        </span>
                       
                        
                      </div>
                      <div className="client-item">
                        <span className="img-itm">
                          <img src={navkar} className="img-fluid" />
                        </span>
                       
                      </div>
                      <div className="client-item">
                        <span className="img-itm">
                          <img src={idea} className="img-fluid" />
                        </span>
                       
                        
                      </div>
                      <div className="client-item">
                        <span className="img-itm">
                          <img src={nitiaayog} className="img-fluid" />
                        </span>
                       
                       
                        
                      </div>
                      <div className="client-item">
                        <span className="img-itm">
                          <img src={libertyinsurance} className="img-fluid" />
                        </span>
                        
                      </div>
                      <div className="client-item">
                        <span className="img-itm">
                          <img src={navkar} className="img-fluid" />
                        </span>
                       
                      </div>

                    </Slider>
                  </div>
                </div>
              </div>
            </div>
        </section>
      
    
    </div>
  );
}

export default Clients;
