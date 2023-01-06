
import React from "react";
import NoInterest from '../../assets/images/channel-finance/low-channel-financing-processing-fees.svg';
import customised from '../../assets/images/channel-finance/digital-assistance-for-channel-financing.svg';
import competitive from '../../assets/images/channel-finance/attractive-channel-financing-interest-rates.svg';
import flexible from '../../assets/images/channel-finance/flexible-channel-financing-repayment-options.svg';
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
    autoplay: true,
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
              <h2 className="title-first text-center">Why Choose us for Channel <br /> Finance?  </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <Slider {...settings1} className="why-ch-slider">
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={NoInterest} alt={"Low Channel Financing Processing Fee"} className={"img-fluid img"} width={"50"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">No Interest</h3>
                    <p className="subtext">charged on Unutilised amount</p>
                  </div>
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={customised} alt={"Digital Assistance for Channel Financing"} className={"img-fluid img"} width={"50"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">Customised</h3>
                    <p className="subtext">Solutions</p>
                  </div>
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={competitive} alt={"Attractive Channel Financing Interest Rates"} className={"img-fluid img"} width={"50"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">Competitive</h3>
                    <p className="subtext">Interest Rates</p>
                  </div>
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={flexible} alt={"Flexible Channel Financing Repayment Options"} className={"img-fluid img"} width={"50"} height={"50"} />
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
