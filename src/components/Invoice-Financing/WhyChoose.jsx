
import React from "react";
import customised from '../../assets/images/invoice-financing/low-invoice-financing-processing-fees.svg';
import digital from '../../assets/images/invoice-financing/digital-assistance-for-invoice-financing.svg';
import anytime from '../../assets/images/invoice-financing/attractive-invoice-financing-interest-rates.svg';
import flexible from '../../assets/images/invoice-financing/flexible-invoice-financing-repayment-options.svg';
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
              <h2 className="title-first text-center">Why Choose us for Invoice <br />Financing?  </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <Slider {...settings1} className="why-ch-slider">
                <div className="col-md-3">
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={customised} alt={"Low Invoice Financing Processing Fee"} className={"img-fluid img"} width={"50"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">Customised</h3>
                    <p className="subtext">Solutions</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={digital} alt={"Digital Assistance for Invoice Financing"} className={"img-fluid img"} width={"35"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">Digital</h3>
                    <p className="subtext">Assistance</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={anytime} alt={"Attractive Invoice Financing Interest Rates"} className={"img-fluid img"} width={"50"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">Anytime</h3>
                    <p className="subtext">anywhere facility</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={flexible} alt={"Flexible Invoice Financing Repayment Options"} className={"img-fluid img"} width={"50"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">Flexible</h3>
                    <p className="subtext">Repayment Options</p>
                  </div>
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
