import  ImageSub2  from '../../assets/images/icons/stock.svg';
import  ImageSub3  from '../../assets/images/icons/money-bag.svg';
import  ImageSub4  from '../../assets/images/icons/insurance.svg';
import  ImageSub5  from '../../assets/images/icons/arrow-left-circle-fill.svg';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";

function EverydayFinance() {

    const settings = {
        infinite: true,
        speed: 1500,
        arrows: false,
        slidesToShow: 3,
        autoplay: false,
        dots:true,
        autoplaySpeed: 1000,
        slidesToScroll: 3,
    };

    return (
        <div>


<section className="main-services">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="title-first">Everyday Finance in one Place</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="main-services-list">
                    <Slider {...settings} className="services-list-slider">
                      <div className="service-item">
                        <span className="img-itm">
                          <img src={ImageSub2} className="img-fluid" />
                        </span>
                        <h5>Stocks</h5>
                        <p>Facilitating trade on equities, commodities &amp; currencies with ease</p>
                        <a href="#">Learn More <span className="arrow-img"><img src={ImageSub5}  /></span></a>
                      </div>
                      <div className="service-item">
                        <span className="img-itm">
                          <img src={ImageSub3} className="img-fluid" />
                        </span>
                        <h5>Mutual Funds</h5>
                        <p>Compare and invest in funds of all categories and segments with ease</p>
                        <a href="#">Learn More <span className="arrow-img"><img src={ImageSub5}  /></span></a>
                      </div>
                      <div className="service-item">
                        <span className="img-itm">
                          <img src={ImageSub4} className="img-fluid" />
                        </span>
                        <h5>Insurance</h5>
                        <p>Get insured as per your need for everything right here</p>
                        <a href="#">Learn More <span className="arrow-img"><img src={ImageSub5}  /></span></a>
                      </div>
                      <div className="service-item">
                        <span className="img-itm">
                          <img src={ImageSub2} className="img-fluid" />
                        </span>
                        <h5>Stocks</h5>
                        <p>Facilitating trade on equities, commodities &amp; currencies with ease</p>
                        <a href="#">Learn More <span className="arrow-img"><img src={ImageSub5}  /></span></a>
                      </div>
                      <div className="service-item">
                        <span className="img-itm">
                        <img src={ImageSub3} className="img-fluid" />
                        </span>
                        <h5>Mutual Funds</h5>
                        <p>Compare and invest in funds of all categories and segments with ease</p>
                        <a href="#">Learn More <span className="arrow-img"><img src={ImageSub5}  /></span></a>
                      </div>
                      <div className="service-item">
                        <span className="img-itm">
                        <img src={ImageSub4} className="img-fluid" />
                        </span>
                        <h5>Insurance</h5>
                        <p>Get insured as per your need for everything right here</p>
                        <a href="#">Learn More <span className="arrow-img"><img src={ImageSub5}  /></span></a>
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

export default EverydayFinance;