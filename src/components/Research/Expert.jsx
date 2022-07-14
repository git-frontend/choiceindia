
import React from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import image7 from '../../assets/images/about-us/person-img.webp';
function Expert() {
    const settings = {
        infinite: true,
        speed: 2000,
        arrows: false,
        slidesToShow: 4,
        autoplay: false,
        margin:15,
        dots:true,
        autoplaySpeed: 800,
        slidesToScroll: 4,
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
<section className="expertteam">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h2 className="heading">Meet Our Experts</h2>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                  <div className="team-list">
                  <Slider {...settings} className="expert-list-slider">
                      <div className="expert-item">
                        <span className="img-itm">
                          <img src={image7} width="224" height="349" className="img-fluid" alt="loading" />
                        </span>
                        <div className="namedesg">
                            <h5>Kamal Poddar</h5>
                            <p className="designation">Managing Director</p>
                        </div>
                       
                        
                      </div>
                      <div className="expert-item">
                        <span className="img-itm">
                                          <img src={image7} width="224" height="349" className="img-fluid" alt="loading" />
                        </span>
                        <div className="namedesg">
                            <h5>Ajay Kejriwal</h5>
                            <p className="designation">Designation</p>
                        </div>
                       
                        
                      </div>
                      <div className="expert-item">
                        <span className="img-itm">
                                          <img src={image7} width="224" height="349" className="img-fluid" alt="loading"/>
                        </span>
                        <div className="namedesg">
                            <h5>Sunil Bagaria</h5>
                            <p className="designation">Designation</p>
                        </div>
                       
                        
                      </div>
                     <div className="expert-item">
                        <span className="img-itm">
                                          <img src={image7} width="224" height="349" className="img-fluid" alt="loading"/>
                        </span>
                        <div className="namedesg">
                            <h5 className="name">CA Ram Ratan Chirania</h5>
                            <p className="designation">Director</p>
                        </div>
                        
                      </div>
                      <div className="expert-item">
                        <span className="img-itm">
                                          <img src={image7} width="224" height="349" className="img-fluid" alt="loading" />
                        </span>
                        <div className="namedesg">
                            <h5>Sumeet Bagadia</h5>
                            <p className="designation">Director</p>
                        </div>
                        
                      </div>
                      <div className="expert-item">
                        <span className="img-itm">
                                          <img src={image7} width="224" height="349" className="img-fluid" alt="loading" />
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

export default Expert;
