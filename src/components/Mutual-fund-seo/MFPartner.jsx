import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import img1 from '../../assets/images/mutual-funds-investment/hdfc.webp'
import img2 from '../../assets/images/mutual-funds-investment/icici.webp'
import img3 from '../../assets/images/mutual-funds-investment/sbi.webp'
import img4 from '../../assets/images/mutual-funds-investment/birla.webp'
import img5 from '../../assets/images/mutual-funds-investment/kotak.webp'

import LazyLoader from '../Common-features/LazyLoader';

function MFPartner() {

  const settings = {
    infinite: true,
    speed: 1500,
    arrows: true,
    slidesToShow: 5,
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
      
      <section className="mf-partner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-first">Our Partner mutual fund houses</h2>
              <div className="">
                <Slider {...settings} className="partner-slider">
                    <div className="part-item">
                      <LazyLoader src={img1} alt={" insurance  services"} className={"img-fluid"} width={"250"} height={"56"} />
                    </div>
                    <div className="part-item">
                      <LazyLoader src={img2} alt={" insurance  services"} className={"img-fluid"} width={"250"} height={"56"} />
                    </div>
                    <div className="part-item">
                      <LazyLoader src={img3} alt={" insurance  services"} className={"img-fluid"} width={"250"} height={"56"} />
                    </div>
                    <div className="part-item">
                      <LazyLoader src={img4} alt={" insurance  services"} className={"img-fluid"} width={"250"} height={"56"} />
                    </div>
                    <div className="part-item">
                      <LazyLoader src={img5} alt={" insurance  services"} className={"img-fluid"} width={"250"} height={"56"} />
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

export default MFPartner;
