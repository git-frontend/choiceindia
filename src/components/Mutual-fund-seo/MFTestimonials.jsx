import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import img1 from '../../assets/images/mutual-funds-investment/person1.webp'

import LazyLoader from '../Common-features/LazyLoader';


function MFTestimonials() {

  const settings = {
    infinite: true,
    speed: 1500,
    arrows: true,
    slidesToShow: 1,
    autoplay: false,
    dots: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
 

  return (
    <div>
      <section className="mf-testimonial">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className="title-first">what investors says <br/> about us </h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <div className="mf-testimonial-slider">
                        <Slider {...settings} className="testi-slider">
                            <div className="sl-item">
                                <span className="img-testi">
                                  <LazyLoader src={img1} alt={" insurance  services"} className={"img-fluid"} width={"100"} height={"100"} />
                                </span>
                                <p>It's an user friendly as well as interactive app that helps you to know about the recent market trends providing you with variants. It's suitable for beginners as well. It eases your tedious task of choosing the right investment for you. Also, the customer support is very dedicated. Thank you investica </p>
                                <h3>Sanchita Roy</h3>
                            </div>
                            <div className="sl-item">
                                <span className="img-testi">
                                  <LazyLoader src={img1} alt={" insurance  services"} className={"img-fluid"} width={"100"} height={"100"} />
                                </span>
                                <p>It's an user friendly as well as interactive app that helps you to know about the recent market trends providing you with variants. It's suitable for beginners as well. It eases your tedious task of choosing the right investment for you. Also, the customer support is very dedicated. Thank you investica </p>
                                <h3>Sanchita Roy</h3>
                            </div>
                            <div className="sl-item">
                                <span className="img-testi">
                                  <LazyLoader src={img1} alt={" insurance  services"} className={"img-fluid"} width={"100"} height={"100"} />
                                </span>
                                <p>It's an user friendly as well as interactive app that helps you to know about the recent market trends providing you with variants. It's suitable for beginners as well. It eases your tedious task of choosing the right investment for you. Also, the customer support is very dedicated. Thank you investica </p>
                                <h3>Sanchita Roy</h3>
                            </div>
                            <div className="sl-item">
                                <span className="img-testi">
                                  <LazyLoader src={img1} alt={" insurance  services"} className={"img-fluid"} width={"100"} height={"100"} />
                                </span>
                                <p>It's an user friendly as well as interactive app that helps you to know about the recent market trends providing you with variants. It's suitable for beginners as well. It eases your tedious task of choosing the right investment for you. Also, the customer support is very dedicated. Thank you investica </p>
                                <h3>Sanchita Roy</h3>
                            </div>
                            <div className="sl-item">
                                <span className="img-testi">
                                  <LazyLoader src={img1} alt={" insurance  services"} className={"img-fluid"} width={"100"} height={"100"} />
                                </span>
                                <p>It's an user friendly as well as interactive app that helps you to know about the recent market trends providing you with variants. It's suitable for beginners as well. It eases your tedious task of choosing the right investment for you. Also, the customer support is very dedicated. Thank you investica </p>
                                <h3>Sanchita Roy</h3>
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

export default MFTestimonials;
