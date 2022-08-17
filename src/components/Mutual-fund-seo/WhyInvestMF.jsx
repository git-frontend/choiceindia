import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import brand1 from '../../assets/images/ipo/brand1.webp'
import brand2 from '../../assets/images/ipo/brand2.webp'

import LazyLoader from '../Common-features/LazyLoader';

function WhyInvestMF() {

  const settings = {
    infinite: true,
    speed: 1500,
    arrows: true,
    slidesToShow: 3,
    autoplay: false,
    dots: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
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
      
      <section className="why-invst-mf">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2 className="title-first">why to invest in mutual funds? </h2>
            </div>
            <div className="col-md-9">
                <div className="invst-mf-list">
                    <div className="mf-list-itm">
                        
                    </div>
                </div>
            </div>
          </div>
        </div>  
      </section>

    
    

   
    
    </div>
  );
}

export default WhyInvestMF;
