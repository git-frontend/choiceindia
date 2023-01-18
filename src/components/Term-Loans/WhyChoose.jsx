
import React from "react";
import low from '../../assets/images/nbfc-indivial-loan/low-processing-speed.svg';
import digital from '../../assets/images/term-loans/digital-term-business-loan-disbursement.svg';
import attractive from '../../assets/images/term-loans/attractive-term-loan-interest-rates.svg';
import flexible from '../../assets/images/term-loans/flexible-term-loan-repayment-options.svg';
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
              <h2 className="title-first text-center">Why Choose Us For <br />Business Term Loan?</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <Slider {...settings1} className="why-ch-slider">
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={low} alt={"Low Term Loan Processing Fee"} className={"img-fluid img"} width={"50"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">Low</h3>
                    <p className="subtext">Processing Fee</p>
                  </div>
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={digital} alt={"Digital Assistance for Term Loan"} className={"img-fluid img"} width={"50"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">Digital</h3>
                    <p className="subtext">Assistance</p>
                  </div>
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={attractive} alt={"Attractive Term Loan Interest Rates"} className={"img-fluid img"} width={"50"} height={"50"} />
                    </span>
                    <h3 className="card-ttl">Attractive</h3>
                    <p className="subtext">Interest rates </p>
                  </div>
                  <div className="carditem-nbfc">
                    <span className='cardimg'>
                      <LazyLoader src={flexible} alt={"Flexible Term Loan Repayment Options"} className={"img-fluid img"} width={"50"} height={"50"} />
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
