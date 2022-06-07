
import React from "react";

import image1 from '../../assets/images/about-us/kamal-poddar.png';
import image2 from '../../assets/images/about-us/ajay-kejriwal.png';
import image3 from '../../assets/images/about-us/sunil-bagaria.png';
import image4 from '../../assets/images/about-us/ram-ratan-chirania.png';
import image5 from '../../assets/images/about-us/sumeet-bagadia.png';
import image6 from '../../assets/images/about-us/sundar-sanmukhani.png';
import Slider from "react-slick";
import LazyLoader from '../Common-features/LazyLoader';

function Team() {
    const settings = {
        infinite: false,
        speed: 2000,
        arrows: true,
        slidesToShow: 3,
        autoplay: true,
        margin:15,
        dots:false,
        autoplaySpeed: 800,
        slidesToScroll: 1,
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
      
        <section className="managementteam">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h2 className="heading">Management Team</h2>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                  <div className="team-list">
                  <Slider {...settings} className="team-list-slider">
                      <div className="team-item">
                        <span className="img-itm">
                        <LazyLoader src={image1} className="img-fluid" alt="Loading" />
                          {/* <img src={image1} className="img-fluid" alt="loading" /> */}
                        </span>
                        <div className="namedesg">
                            <h5>Kamal Poddar</h5>
                            <p className="designation">Managing Director</p>
                        </div>
                       
                        
                      </div>
                      <div className="team-item">
                        <span className="img-itm">
                        <LazyLoader src={image2} className="img-fluid" alt="Loading" />
                          {/* <img src={image2} className="img-fluid" alt="loading" /> */}
                        </span>
                        <div className="namedesg">
                            <h5>Ajay Kejriwal</h5>
                            <p className="designation">Designation</p>
                        </div>
                       
                        
                      </div>
                      <div className="team-item">
                        <span className="img-itm">
                        <LazyLoader src={image3} className="img-fluid" alt="Loading" />
                          {/* <img src={image3} className="img-fluid" alt="loading"/> */}
                        </span>
                        <div className="namedesg">
                            <h5>Sunil Bagaria</h5>
                            <p className="designation">Designation</p>
                        </div>
                       
                        
                      </div>
                     <div className="team-item">
                        <span className="img-itm">
                        <LazyLoader src={image4} className="img-fluid" alt="Loading" />
                          {/* <img src={image4} className="img-fluid" alt="loading"/> */}
                        </span>
                        <div className="namedesg">
                            <h5 className="name">CA Ram Ratan Chirania</h5>
                            <p className="designation">Director</p>
                        </div>
                        
                      </div>
                      <div className="team-item">
                        <span className="img-itm">
                        <LazyLoader src={image5} className="img-fluid" alt="Loading" />
                          {/* <img src={image5} className="img-fluid" alt="loading" /> */}
                        </span>
                        <div className="namedesg">
                            <h5>Sumeet Bagadia</h5>
                            <p className="designation">Director</p>
                        </div>
                        
                      </div>
                      <div className="team-item">
                        <span className="img-itm">
                        <LazyLoader src={image6} className="img-fluid" alt="Loading" />
                          {/* <img src={image6} className="img-fluid" alt="loading" /> */}
                        </span>
                        <div className="namedesg">
                            <h5>Sundar Sanmukhani</h5>
                            <p className="designation">Designation</p>
                        </div>
                        
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

export default Team;
