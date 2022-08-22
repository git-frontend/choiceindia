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
          adaptiveHeight: true,
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
                    <h2 className="title-first"><span>what investors says <br/> about us </span></h2>
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
                                <p>Nice app if you want go with mutual fund. User friendly interface and no need to learn more for investment. Just choose your best and put in the hand of investica.</p>
                                <h3>Abhishet Gupta</h3>
                            </div>
                            <div className="sl-item">
                                <span className="img-testi">
                                  <LazyLoader src={img1} alt={" insurance  services"} className={"img-fluid"} width={"100"} height={"100"} />
                                </span>
                                <p>Its an user friendly as well as interactive app that helps you to know about the recent market trends providing you with variants. Its suitable for beginners as well. It ease your tedious task of choosing the right investment for you. Also, the customer support is very dedicated. Thank you investica 😊👍</p>
                                <h3>Sanchita roy</h3>
                            </div>
                            <div className="sl-item">
                                <span className="img-testi">
                                  <LazyLoader src={img1} alt={" insurance  services"} className={"img-fluid"} width={"100"} height={"100"} />
                                </span>
                                <p>I have been investing in mutual funds through this app for more than 2 years now. Things which I love about the app: 1. The user interface. Highly user friendly with packages curated to suit your risk profile. 2. The app allows u to choose funds of ur choice &amp; also analyses the performance of ur folio vis-a-vis market on a timely basis. 3. The customer support is impeccable. Prompt responses and ramifications are received with no time wasted. Highly recommended,especially for first time users.</p>
                                <h3>Mahendra Parihar</h3>
                            </div>
                            <div className="sl-item">
                                <span className="img-testi">
                                  <LazyLoader src={img1} alt={" insurance  services"} className={"img-fluid"} width={"100"} height={"100"} />
                                </span>
                                <p>User friendly app and easy to access anything even non knowledgeable person can invest as per their goals. As their is other apps provide the same thing but in terms of service related to your investment or any queries, Investica team is best my experience it was solved within minutes they care about their customers and provide a great service. Thanks Investica Team🙏</p>
                                <h3>Sumit saroj</h3>
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
