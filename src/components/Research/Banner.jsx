
import React from "react";
import ImageBanner1 from '../../assets/images/research/slider-banner1.webp';
import ImageBanner2 from '../../assets/images/research/slider-banner2.webp';
import SingleTemplate from "../Common-features/SingleTemplate";
import Researchbanner from '../../assets/images/research/researchBanner.mp4'
import { useState } from 'react';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import LazyLoader from "../Common-features/LazyLoader";

function Banner() {

  const settings = {
    infinite: true,
    speed: 1500,
    arrows: true,
    slidesToShow: 1,
    autoplay: false,
    margin: 15,
    dots: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
  };


  const [skeleton, setSkeleton] = useState(() => true);
  setTimeout(() => {
    setSkeleton(() => false);
  }, 3000)

  return (
    <div>


      <section className="research-banner-slider">
        <Slider {...settings} className="team-list-slider">
          <div className="slider-sub">
                <LazyLoader src={ImageBanner2} className={"banner-img"} width={"1300"} height={"500"} alt={""} />
                {/* <img src={ImageBanner2} className="banner-img"/> */}
                <div className="slider-caption">
                    <div className="container">
                        <div className="slider-caption-sub">
                          <h2 className="big-ttl"><span>Monthly Picks</span> Feb’23</h2>
                          <p>The report highlights investment opportunities  identified by our research team during the month.</p>
                          <span className="btn-bg btn-bg-dark"><a href="">Explore All Recommendations </a></span>
                        </div>
                    </div>
                </div>   
            </div>
            
        </Slider>
      </section>


    </div>
  );
}

export default Banner;
