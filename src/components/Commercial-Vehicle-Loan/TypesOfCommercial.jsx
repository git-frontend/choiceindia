
import React from "react";

import LazyLoader from "../Common-features/LazyLoader";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

function TypesOfCommercial() {
  const settings1 = {
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    arrows: false,
    autoplay: false,
    dots: false,
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: false,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }

    ]

  };
  return (
    <div>

      <section className="type-comm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 class="title-first text-center mb-5">Types of Commercial <br /> Vehicle Finance</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9 col-md-12">
              <Slider {...settings1} className="type-comm-slider">
                  <div className="carditem-nbfc">
                    <h3 className="card-ttl">New Commercial Vehicle Loan</h3>
                  </div>
                  <div className="carditem-nbfc">
                    <h3 className="card-ttl">Used Commercial Vehicle Loan</h3>
                  </div>
                  <div className="carditem-nbfc">
                    <h3 className="card-ttl">Commercial Vehicle Refinancing</h3>
                  </div>
              </Slider>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default TypesOfCommercial;
