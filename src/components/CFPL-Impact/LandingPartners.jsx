import React from 'react'
import StateBank from '../../assets/images/cfpl-impact/state-bank.svg';
import SBMBank from '../../assets/images/cfpl-impact/sbm-bank.svg';
import AUSmallFinance from '../../assets/images/cfpl-impact/au-small-finance-bank.svg';
import BajajFinance from '../../assets/images/cfpl-impact/bajaj-finance.svg';
import LazyLoader from '../Common-features/LazyLoader';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

function LandingPartners() {

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
      <section className='landing-partners'>
        <div className='container'>
            <div className="row">
              <div className="col-md-12">
                  <h2 className="title-secnd">Our Lending <br /> Partners</h2>
              </div>
            </div>
            <div className="row justify-content-center">
            <div className="col-xl-12">
              <Slider {...settings1} className="why-ch-slider">
                  <div className="carditem-cfpl">
                    <span className='cardimg'>
                      <LazyLoader src={StateBank} alt={"State Bank of India"} className={"img-fluid img"} width={"70"} height={"70"} />
                    </span>
                    <h6 className="card-ttl">State Bank of <br/> India</h6>
                  </div>
                  <div className="carditem-cfpl">
                    <span className='cardimg'>
                      <LazyLoader src={SBMBank} alt={"SBM Bank India"} className={"img-fluid img"} width={"70"} height={"70"} />
                    </span>
                    <h6 className="card-ttl">SBM Bank <br/> India</h6>
                  </div>
                  <div className="carditem-cfpl">
                    <span className='cardimg'>
                      <LazyLoader src={AUSmallFinance} alt={"AU Small Finance Bank"} className={"img-fluid img"} width={"70"} height={"70"} />
                    </span>
                    <h6 className="card-ttl">AU Small Finance <br/> Bank</h6>
                  </div>
                  <div className="carditem-cfpl">
                    <span className='cardimg'>
                      <LazyLoader src={BajajFinance} alt={"Bajaj Finance"} className={"img-fluid img"} width={"70"} height={"70"} />
                    </span>
                    <h6 className="card-ttl">Bajaj Finance</h6>
                  </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPartners;