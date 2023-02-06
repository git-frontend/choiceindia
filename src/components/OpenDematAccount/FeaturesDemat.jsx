
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import DematFeatures from "../../Data/DematFeatures"
import LazyLoader from '../Common-features/LazyLoader';
import "../../components/home-page/style.scss";

function FeaturesDemat() {

  const settings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    dots: true,
    autoplaySpeed: 3000,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="main-services main-services-demat" >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-md-12" id='everydayfin'>
              <h2 className="title-first">Your Investment Account does so much 
more than just stocks</h2>
            </div>
          </div>
          <div className="row" >
            <div className="col-md-12">
              <div className="main-services-list">
                <Slider {...settings} className="services-list-slider">
                  {
                    DematFeatures.map((response) => {


                      return (
                        <div key={response.id} className="service-item">
                          <span className="img-itm">
                            <LazyLoader src={response.image} className={"img-fluid"} alt={response.alt} width={"70"} height={"70"} />
                            {/* <img src={response.image} className="img-fluid" alt='Loading' /> */}
                          </span>
                          <h3 className="ss-ttl">{response.title || '-'}</h3>
                          <p>{response.description || '-'}</p>
                          {/* <a href="/">Learn More <span className="arrow-img"><img src={ImageSub5} alt='Loading' /></span></a> */}
                        </div>

                      )
                    })
                  }

                  {/*  <div className="row">
                <div className="col-md-12">
                  <div className="main-services-list">
                    <Slider {...settings} className="services-list-slider">
                      <div className="service-item">
                        <span className="img-itm">
                          <img src={ImageSub2} className="img-fluid" />
                        </span>
                        <h5>Stocks</h5>
                        <p>Facilitating trade on equities, commodities &amp; currencies with ease</p>
                        <a href="/">Learn More <span className="arrow-img"><img src={ImageSub5}  /></span></a>
                      </div>
                      <div className="service-item">
                        <span className="img-itm">
                          <img src={ImageSub3} className="img-fluid" />
                        </span>
                        <h5>Mutual Funds</h5>
                        <p>Compare and invest in funds of all categories and segments with ease</p>
                        <a href="/">Learn More <span className="arrow-img"><img src={ImageSub5}  /></span></a>
                      </div>
                      <div className="service-item">
                        <span className="img-itm">
                          <img src={ImageSub4} className="img-fluid" />
                        </span>
                        <h5>Insurance</h5>
                        <p>Get insured as per your need for everything right here</p>
                        <a href="/">Learn More <span className="arrow-img"><img src={ImageSub5}  /></span></a>
                      </div>
                      <div className="service-item">
                        <span className="img-itm">
                          <img src={ImageSub2} className="img-fluid" />
                        </span>
                        <h5>Stocks</h5>
                        <p>Facilitating trade on equities, commodities &amp; currencies with ease</p>
                        <a href="/">Learn More <span className="arrow-img"><img src={ImageSub5}  /></span></a>
                      </div>
                      <div className="service-item">
                        <span className="img-itm">
                        <img src={ImageSub3} className="img-fluid" />
                        </span>
                        <h5>Mutual Funds</h5>
                        <p>Compare and invest in funds of all categories and segments with ease</p>
                        <a href="/">Learn More <span className="arrow-img"><img src={ImageSub5}  /></span></a>
                      </div>
                      <div className="service-item">
                        <span className="img-itm">
                        <img src={ImageSub4} className="img-fluid" />
                        </span>
                        <h5>Insurance</h5>
                        <p>Get insured as per your need for everything right here</p>
                        <a href="/">Learn More <span className="arrow-img"><img src={ImageSub5}  /></span></a>
                      </div>
                    </Slider>
                  </div>
              </div> */}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>

  );
}

export default FeaturesDemat;