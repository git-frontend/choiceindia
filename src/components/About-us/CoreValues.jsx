
import React from "react";
import "../../assets/css/aboutus.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Innovation from '../../assets/images/about-us/innovation.png';
import Optimism from '../../assets/images/about-us/Optimism.png';
import Consistency from '../../assets/images/about-us/Consistency.png';
import Empowerment from '../../assets/images/about-us/Empowerment.png';
import Commitment from '../../assets/images/about-us/commitment.png';
import Honesty from '../../assets/images/about-us/Honesty.png';

import Slider from "react-slick";
function CoreValues() {
    const settings = {
        infinite: true,
        speed: 1500,
        arrows: false,
        slidesToShow: 3,
        autoplay: false,
        margin:15,
        dots:true,
        autoplaySpeed: 1000,
        slidesToScroll: 3,
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
  return (
    <div>
      
        <section className="corevalues">
            <div className="container-fluid">
                <div className="row">
               

                  <div className="wrap">
                    <div className="col-md-5 col-12">
                        <div className="card">
                          <h2 className="cardtile">Our Core Values</h2>
                          <p  className="cardsubtext">Who we are is reflected in what we practice. Our values are the guiding light for everything we do at choice.</p>
                        </div>
                    </div>
                    <div className="col-md-7 col-12">
                      <div className="team-list">
                        <Slider {...settings} className="team-list-slider">
                          <div className="team-item pr-5">
                            <span className="img-itm">
                              <img src={Innovation} className="img-fluid" />
                            </span>
                            <div className="namedesg">
                                <h4 className="title">Innovation</h4>
                                <p className="text">The only way to win is by being creative</p>
                            </div>
                          
                            
                          </div>
                          <div className="team-item pr-5">
                            <span className="img-itm">
                            <img src={Consistency} className="img-fluid" />
                            </span>
                            <div className="namedesg">
                                <h4 className="title">Consistency</h4>
                                <p className="text">Only factor which is more important than perfection</p>
                            </div>
                          
                            
                          </div>
                          <div className="team-item pr-5">
                            <span className="img-itm">
                            <img src={Empowerment} className="img-fluid" />
                            </span>
                            <div className="namedesg">
                                <h4 className="title">Empowerment</h4>
                                <p className="text">Hustle today to empower your tomorrow</p>
                            </div>
                          
                            
                          </div>
                          <div className="team-item pr-5">
                            <span className="img-itm">
                            <img src={Commitment} className="img-fluid" />
                            </span>
                            <div className="namedesg">
                                <h4 className="title">Commitment</h4>
                                <p className="text">We are dedicated to serve you the best</p>
                            </div>
                          
                            
                          </div>
                          <div className="team-item pr-5">
                            <span className="img-itm">
                            <img src={Honesty} className="img-fluid" />
                            </span>
                            <div className="namedesg">
                                <h4 className="title">Honesty</h4>
                                <p className="text">Our conduct is guided by integrity &amp; transparency</p>
                            </div>
                          
                            
                          </div>
                          <div className="team-item pr-5">
                            <span className="img-itm">
                              <img src={Optimism} className="img-fluid" />
                            </span>
                            <div className="namedesg">
                                <h4 className="title">Optimism</h4>
                                <p className="text">Positivity is a virtue that comes by practice</p>
                            </div> 
                          </div>
                        
                        </Slider>
                      </div>
                    </div>

                  </div>
                  
                </div>
            </div>
           
        </section>
      
    
    </div>
  );
}

export default CoreValues;
