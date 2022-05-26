import  CareerImage0  from '../../assets/images/career/slide1.jpg';
import  CareerImage1  from '../../assets/images/career/slide2.jpg';
import  CareerImage2  from '../../assets/images/career/slide3.jpg';
import  CareerImage3  from '../../assets/images/career/slide4.jpg';

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";


function BannerCareer() {

    const settings = {
        speed: 2000,
        arrows: false,
        slidesToShow: 1,
        dots:false,
        autoplay:true,
        autoplaySpeed: 0,
        centerMode: true,
        infinite: true,
        centerPadding: '30%',
        slidesToScroll: 1,
        loop:true,
         slide: 'div',
         cssEase: 'linear',
         pauseOnFocus: false,
         pauseOnHover: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerPadding: '8%',
            }
          },
        ]
    };

  return (
    <div className='career-main'>
      
     
    <section className="bannersection">
          <Slider {...settings} className="career-list-slider">
                <div>
                  <img src={CareerImage0} className="img-fluid" alt='Loading' />
                </div>
                <div>
                  <img src={CareerImage1} className="img-fluid" alt='Loading'/>
                </div>
                <div>
                  <img src={CareerImage2} className="img-fluid" alt='Loading' />
                </div>
                <div>
                  <img src={CareerImage1} className="img-fluid" alt='Loading' />
                </div>
              </Slider>

              {/* <Marquee direction="left" speed={100} delay={1} className="career-list-slider">
                <div className="image_wrapper">
                  <img src={CareerImage0} alt="" />
                </div>
                <div className="image_wrapper">
                  <img src={CareerImage1} alt="" />
                </div>
                <div className="image_wrapper">
                  <img src={CareerImage2} alt="" />
                </div>
                <div className="image_wrapper">
                  <img src={CareerImage0} alt="" />
                </div>
                <div className="image_wrapper">
                  <img src={CareerImage1} alt="" />
                </div>
                <div className="image_wrapper">
                  <img src={CareerImage2} alt="" />
                </div>
              </Marquee> */}
    </section>

    <section className='our-values'>
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-xl-7 col-md-10">
                <div className="heading-sec">
                    <h3 className="title-first">Our Values</h3>
                    <p>We’ve built our workplace upon efficient functional teams that foster leadership, support, and peer learning. At Choice, we treasure our employees who contribute in creating value for the company with diligence, integrity, and innovation.</p>
                </div>
                </div>
            </div>
        </div>
    </section>

    <section className='culture-values'>
        <div className='container'>
            <div className="row justify-content-between align-items-center">
                <div className="col-xl-5 col-md-6">
                  <div className="heading-sec">
                      <h3 className="title-first">The Culture</h3>
                      <p>
                      We are a fast paced organization with robust groups of zealous individuals. We believe in providing free hand and extensive creative liberty to our team. 
                      <br/><br/>We take the responsibility of providing, nurturing, competitive and safe working environment to our teams is our top priority.
                      </p>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className='culture-values-img'>
                      <img src={CareerImage3} className='img-fluid shdow' alt="Loading" />
                  </div>
                </div>
            </div>
        </div>
    </section>

      
    
    </div>
  );
}

export default BannerCareer;
