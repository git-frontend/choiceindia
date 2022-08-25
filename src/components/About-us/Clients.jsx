
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import Marquee from 'react-fast-marquee';
import nitiaayog from '../../assets/images/about-us/nitiaayog.svg';
import libertyinsurance from '../../assets/images/about-us/liberty-insurance.svg';
import aadhar from '../../assets/images/about-us/aadhar.svg';
import navkar from '../../assets/images/about-us/navkar.svg';
import idea from '../../assets/images/about-us/icici.svg';
import LazyLoader from '../Common-features/LazyLoader';

function Clients() {
  
  const settings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 5,
    autoplay: false,
    dots: true,
    autoplaySpeed: 3000,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false,
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

                {/* <Marquee direction="left" speed={150} delay={1} pauseOnHover={true} pauseOnClick={true} className="client-list-slider">
                  <div className="image_wrapper">
                    <LazyLoader src={nitiaayog} className={'img-fluid'} width={"313"} height={"191"} alt={"Niti Aayog"} />
                    
                  </div>
                  <div className="image_wrapper">
                    <LazyLoader src={libertyinsurance} className={'img-fluid'} width={'313'} height={'111'} alt={"Liberty Insurance"} />
                  
                  </div>
                  <div className="image_wrapper">
                    <LazyLoader src={aadhar} className={'img-fluid'} width={'183'} height={'118'} alt={"Aadhaar"} />
                 
                  </div>
                  <div className="image_wrapper">
                    <LazyLoader src={navkar} className={'img-fluid'} width={'307'} height={'208'} alt={"Navkar Corporation"} />
                  
                  </div>
                  <div className="image_wrapper">
                    <LazyLoader src={idea} className={'img-fluid'} width={'120'} height={'124'} alt={"ICICI"} />
                   
                  </div>
                  
                </Marquee> */}
              <Slider {...settings} id="clientslider">

                  <div className="image_wrapper">
                    <LazyLoader src={nitiaayog} className={'img-fluid'} width={"313"} height={"191"} alt={"Niti Aayog"} />
                    
                  </div>    
                  <div className="image_wrapper">
                    <LazyLoader src={libertyinsurance} className={'img-fluid'} width={'313'} height={'111'} alt={"Liberty Insurance"} />
                  
                  </div>
                  <div className="image_wrapper">
                    <LazyLoader src={aadhar} className={'img-fluid'} width={'183'} height={'118'} alt={"Aadhaar"} />
                 
                  </div>
                  <div className="image_wrapper">
                    <LazyLoader src={navkar} className={'img-fluid'} width={'307'} height={'208'} alt={"Navkar Corporation"} />
                  
                  </div>
                  <div className="image_wrapper">
                    <LazyLoader src={idea} className={'img-fluid'} width={'120'} height={'124'} alt={"ICICI"} />
                   
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
