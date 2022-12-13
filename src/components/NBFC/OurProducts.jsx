import React from 'react';
import { useState } from 'react';
import imageDataProducts from '../../Data/businessloan';

import Slider from 'react-slick';
import LazyLoader from '../Common-features/LazyLoader';
import NBFCMenu from '../Common-features/NBFCMenu';
import BusinessSlider from './BusinessSlider';
import IndividualSlider from './IndividualSlider';

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

function OurProducts() {
  const [isShown2, setIsShown2] = useState(0);
  const settings1 = {
    infinite: true,
    speed: 1000,
    vertical: true,
    focusOnSelect: true,
    touchMove: true,
    arrows: false,
    slidesToShow: 4,
    autoplay: false,
    dots: false,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          autoplaySpeed: 3000,
        }
      }

    ]

  };

  return (
    <div className='App-main'>

      <div className='loans-our-products'>
        <div className='container'>
        <div className="row">
                <div className="col-md-12">
                <div className="products-menu-flx">
                    <h2 className="title-secnd">Our Products</h2>
                    <NBFCMenu />
                </div>
                </div>
            </div>
          <div className='row justify-content-center'>
            <div className='col-xl-11 col-md-12'>
              <div className="loans-products-list">
                <BusinessSlider />
                <IndividualSlider />
              </div>
            </div>
          </div>
        </div>
      </div>








    </div>
  );
}

export default OurProducts;
