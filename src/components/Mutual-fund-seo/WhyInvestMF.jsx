import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import brand1 from '../../assets/images/mutual-funds-investment/sip-mutual-fund-investment.svg'
import brand2 from '../../assets/images/mutual-funds-investment/save-tax-elss-mutual-fund-investment.svg'
import brand3 from '../../assets/images/mutual-funds-investment/better-returns-than-fd.svg'

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
            <div className="col-md-4">
              <h2 className="title-first">why to invest in mutual funds? </h2>
            </div>
            <div className="col-md-8">
                <div className="invst-mf-list">
                    <Slider {...settings} className="mf-list-slider">
                        <div className="mf-list-itm">
                            <span className="mf-sm-img">
                              <LazyLoader src={brand1} alt={"SIP Mutual Fund Investment"} className={"img-fluid"} width={"126"} height={"127"} />
                            </span>
                            <h3>Start SIP With Rs.500</h3>
                        </div>
                        <div className="mf-list-itm">
                            <span className="mf-sm-img">
                              <LazyLoader src={brand2} alt={"Save Tax on ELSS Mutual Fund Investment"} className={"img-fluid"} width={"126"} height={"127"} />
                            </span>
                            <h3>Save Tax upto Rs.46,500/-</h3>
                        </div>
                        <div className="mf-list-itm">
                            <span className="mf-sm-img">
                              <LazyLoader src={brand3} alt={"Better Returns than FD"} className={"img-fluid"} width={"126"} height={"127"} />
                            </span>
                            <h3>Better Returns Than FD</h3>
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

export default WhyInvestMF;
