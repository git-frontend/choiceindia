
import React from "react";
import Flexible from '../../assets/images/com-vehicle-loan/flexible.svg';
import Available from '../../assets/images/com-vehicle-loan/available.svg';
import Competitive from '../../assets/images/com-vehicle-loan/competitive.svg';
import Structured from '../../assets/images/com-vehicle-loan/structured.svg';

import LazyLoader from '../Common-features/LazyLoader';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

function WhyChoose() {
  const settings1 = {
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    arrows: false,
    autoplay: false,
    dots: false,
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          dots: true,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
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

      <section className="inv-fin-why-ch">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-first text-center">Why Choose Us For <br/> Commercial Vehicle Loan?</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <Slider {...settings1} className="why-ch-slider">
                
                
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={Flexible} alt={"Flexible"} className={"img-fluid img"} width={"50"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">Flexible</h3>
                    <p className="subtext">tenure</p>
                  </div>
                  
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={Available} alt={"Available"} className={"img-fluid img"} width={"50"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">Available</h3>
                    <p className="subtext">for a wide range of vehicles</p>
                  </div>
                  
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={Competitive} alt={"Competitive"} className={"img-fluid img"} width={"50"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">Competitive</h3>
                    <p className="subtext">Interest Rates</p>
                  </div>
                  
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={Structured} alt={"Structured"} className={"img-fluid img"} width={"50"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">Structured</h3>
                    <p className="subtext">Payment Methods</p>
                  </div>
                  
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyChoose;
