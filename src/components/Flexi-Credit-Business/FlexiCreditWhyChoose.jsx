
import React from "react";
import low from '../../assets/images/nbfc-indivial-loan/low.svg';
import digital from '../../assets/images/invoice-financing/digital.svg';
import interestrate from '../../assets/images/nbfc-indivial-loan/interestrate.svg';
import flexible from '../../assets/images/invoice-financing/flexible.svg';

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
              <h2 className="title-first text-center">Why choose us for<br /> Flexi Credit Loan?  </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <Slider {...settings1} className="why-ch-slider">
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={low} alt={"Loans"} className={"img-fluid img"} width={"50"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">Low</h3>
                    <p className="subtext">Processing speed</p>
                  </div>
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={digital} alt={"Loans"} className={"img-fluid img"} width={"35"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">Digital</h3>
                    <p className="subtext">Assistance</p>
                  </div>
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={interestrate} alt={"Loans"} className={"img-fluid img"} width={"50"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">Attractive</h3>
                    <p className="subtext">Interest rates </p>
                  </div>
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={flexible} alt={"Loans"} className={"img-fluid img"} width={"50"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">Flexible</h3>
                    <p className="subtext">Repayment Options</p>
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
