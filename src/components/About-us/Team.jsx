
import React from "react";

//import image1 from '../../assets/images/about-us/kamal-poddar.webp';
//import image2 from '../../assets/images/about-us/ajay-kejriwal.webp';
//import image3 from '../../assets/images/about-us/sunil-bagaria.webp';
//import image4 from '../../assets/images/about-us/ram-ratan-chirania.webp';
//import image5 from '../../assets/images/about-us/sumeet-bagadia.webp';
//import image6 from '../../assets/images/about-us/sundar-sanmukhani.webp';
import image7 from '../../assets/images/about-us/person-img.webp';
import Slider from "react-slick";
function Team() {
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
                          <img src={image7} className="img-fluid" alt="loading" />
                        </span>
                        <div className="namedesg">
                            <h5>Kamal Poddar</h5>
                            <p className="designation">Managing Director</p>
                        </div>
                       
                        
                      </div>
                      <div className="team-item">
                        <span className="img-itm">
                          <img src={image7} className="img-fluid" alt="loading" />
                        </span>
                        <div className="namedesg">
                            <h5>Ajay Kejriwal</h5>
                            <p className="designation">Designation</p>
                        </div>
                       
                        
                      </div>
                      <div className="team-item">
                        <span className="img-itm">
                          <img src={image7} className="img-fluid" alt="loading"/>
                        </span>
                        <div className="namedesg">
                            <h5>Sunil Bagaria</h5>
                            <p className="designation">Designation</p>
                        </div>
                       
                        
                      </div>
                     <div className="team-item">
                        <span className="img-itm">
                          <img src={image7} className="img-fluid" alt="loading"/>
                        </span>
                        <div className="namedesg">
                            <h5 className="name">CA Ram Ratan Chirania</h5>
                            <p className="designation">Director</p>
                        </div>
                        
                      </div>
                      <div className="team-item">
                        <span className="img-itm">
                          <img src={image7} className="img-fluid" alt="loading" />
                        </span>
                        <div className="namedesg">
                            <h5>Sumeet Bagadia</h5>
                            <p className="designation">Director</p>
                        </div>
                        
                      </div>
                      <div className="team-item">
                        <span className="img-itm">
                          <img src={image7} className="img-fluid" alt="loading" />
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
