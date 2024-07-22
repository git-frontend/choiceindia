
import React from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import image1 from '../../assets/images/about-us/sumeet-bagadia.webp';
import image2 from '../../assets/images/about-us/sunder-sanmukhani.webp';
import image3 from '../../assets/images/about-us/rochan-patnayak.webp';
function Expert() {
    const settings = {
        infinite: false,
        speed: 2000,
        arrows: false,
        slidesToShow: 2,
        autoplay: false,
        margin:15,
        dots:false,
        autoplaySpeed: 800,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              adaptiveHeight: false,
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
                    <h2 className="heading">Meet Our expert</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="team-list">
                  <Slider {...settings} className="expert-list-slider">
                      <div className="expert-item">
                        <span className="img-itm">
                          <img src={image1} width="224" height="349" className="img-fluid" alt="loading" />
                        </span>
                        <div className="namedesg">
                            <h5>Mr. Sumeet Bagadia</h5>
                            <p className="designation">Head-Technical Research</p>
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
