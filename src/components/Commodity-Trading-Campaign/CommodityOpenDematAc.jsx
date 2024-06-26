import React from "react";
import Slider from 'react-slick';
import LazyLoader from "../Common-features/LazyLoader";
import { Link } from "react-router-dom";
import image1  from '../../assets/images/commodity-trading-campaign/free-demat-account-with-low-dp-charges.svg';
import image2  from '../../assets/images/commodity-trading-campaign/zero-amc-demat-account.svg';
import image3  from '../../assets/images/commodity-trading-campaign/demat-account-with-free-research.svg';
import image4  from '../../assets/images/commodity-trading-campaign/demat-account-with-zero-auto-square-off-charges.svg';

function CommodityOpendematAc() {
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
          dots: false,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          autoplaySpeed: 2500,
        }
      }

    ]

  };
 
  function scrollToId(id) {
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
  
  return (
    <>
      <section className="fando-open-demat">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-first text-center fando-ttl">Open 100% Free Demat Account</h2>
            </div>
          </div>
          <div className="row">
            <Slider {...settings1} className="fando-open-demat-slider">
              <div className="fando-open-demat-item">
                <span className='fandoimg'>
                  <LazyLoader src={image1} alt={"Free Demat Account with Low DP Charges"} className={"img-fluid img"} width={"79"} height={"80"} />
                </span>
                <h3 className="fando-head">Low DP Charges (Rs. 10 Only)</h3>
               
              </div>
              <div className="fando-open-demat-item">
                <span className='fandoimg'>
                  <LazyLoader src={image2} alt={"Zero AMC Demat Account"} className={"img-fluid img"} width={"81"} height={"80"} />
                </span>
                <h3 className="fando-head">Free AMC for First Year</h3>
                
              </div>
              <div className="fando-open-demat-item">
                <span className='fandoimg'>
                  <LazyLoader src={image3} alt={"Demat Account with Free Research"} className={"img-fluid img"} width={"80"} height={"80"} />
                </span>
                <h3 className="fando-head">Free Research Advisory</h3>
               
              </div>
              <div className="fando-open-demat-item">
                <span className='fandoimg'>
                  <LazyLoader src={image4} alt={"Demat Account with Zero Auto Sqare Off Charges"} className={"img-fluid img"} width={"93"} height={"80"} />
                </span>
                <h3 className="fando-head">No Auto Square-off fee</h3>
              </div>
            </Slider>
            <div className="fando-open-demat-btn text-center">
            <Link onClick={()=>scrollToId('campaignForm')}> <span className="btn-bg btn-bg-dark fando-btn ">Open My Account</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CommodityOpendematAc;