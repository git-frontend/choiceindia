import "../assets/css/style.scss"
import  ImageSub1  from '../assets/images/home-banner.jpg';
import  ImageSub2  from '../assets/images/icons/insurance.svg';
import  ImageSub3  from '../assets/images/icons/stock.svg';
import  ImageSub4  from '../assets/images/icons/money-bag.svg';
import  ImageSub5  from '../assets/images/icons/arrow-left-circle-fill.svg';
import  ImageSub6  from '../assets/images/icons/shopping-cart.svg';
import  ImageSub7  from '../assets/images/icons/grid1.svg';
import  ImageSub8  from '../assets/images/icons/speed.svg';
import  ImageSub9  from '../assets/images/app-img1.png';
import  ImageSub10  from '../assets/images/icons/play-store.svg';
import  ImageSub11  from '../assets/images/icons/Apple.svg';
import  ImageSub12  from '../assets/images/market-img1.png';
import  ImageSub13  from '../assets/images/market-img2.png';
import  ImageSub14  from '../assets/images/icons/collection.svg';
import  ImageSub15  from '../assets/images/icons/basket1.svg';
import  ImageSub16  from '../assets/images/icons/robot.svg';
import  ImageSub17  from '../assets/images/icons/shield.svg';
import  ImageSub18  from '../assets/images/icons/money.svg';
import  ImageSub19  from '../assets/images/icons/recommendation.svg';

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import $ from 'jquery';

$(document).ready(function () {

  $('.insights-list-item').hover(
    function(){ 
      $(".insights-list-item.insights-list-active").addClass('inactive').removeClass('insights-list-active');
    },
    function(){ 
      $(".insights-list-item.inactive").addClass('insights-list-active').removeClass('inactive'); 
    }
  );
  
});


function Home() {

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
    <div className="Home">

      <main>
        <section className="home-banner">
          <img src={ImageSub1} className="banner-img" />
          <div className="banner-desc">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="banner-caption">
                    <h3>Experience<br/>
                      The Joy of Earning</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       
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

        <section className="choice-finx">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="finx-section">
                  <div className="finx-left-cont">
                    <div className="heading-sec">
                      <h3 className="title-secnd">Choice FinX</h3>
                      <p>SuperApp - Designed to deliver customized wealth solutions to cater <br/>all financial needs</p>
                    </div>
                    <div className="finx-app-list workList">
                      <div className="app-list-item">
                        <a href="#" data-img="images/app-img1.png">
                          <img src={ImageSub6} alt="" className="img-fluid" />
                          <h4>Wealth Store</h4>
                          <p>Nurture your financial freedom with endless possibilities</p>
                        </a>
                      </div>
                      <div className="app-list-item">
                        <a href="#" data-img="images/app-img1.png">
                          <img src={ImageSub7} alt="" className="img-fluid" />
                          <h4>Elegant UI &amp; UX</h4>
                          <p>Aiming for an intuitive interface for seamless navigation.</p>
                        </a>
                      </div>
                      <div className="app-list-item">
                        <a href="#" data-img="images/app-img1.png">
                          <img src={ImageSub8} alt="" className="img-fluid" />
                          <h4>Speedy Execution</h4>
                          <p>Built to deliver a blazing fast experience without hiccups.</p>
                        </a>
                      </div>
                    </div>
                    <div className="expl-app">
                      <a href="#">
                        <span className="btn-bg">Explore App</span>
                      </a>
                      <a href="#">
                        <img src={ImageSub10} className="ico-img" />
                      </a>
                      <a href="#">
                        <img src={ImageSub11} className="ico-img" />
                      </a>
                    </div>
                  </div>
                  <div className="finx-app-img workImages">
                    <img src={ImageSub9} className="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="market-insights-sec">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-md-8">
                <div className="heading-sec">
                  <h3 className="title-first">Market Insights</h3>
                  <p>Get insightful market updates &amp; company analysis directly from our experts.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="market-insights-list">
                  <div className="insights-list-item insights-list-active">
                    <div className="insights-item-cont">
                      <img src={ImageSub12} alt="" />
                      <span className="ttl-sm">#US-Mexico</span>	
                    </div>	
                    <div className="item-cont-descr">
                      <p>Some Americans are going to Mexico for cheaper petrol</p>
                    </div>
                  </div>
                  <div className="insights-list-item">
                    <div className="insights-item-cont">
                    <img src={ImageSub13} alt="" />
                      <span className="ttl-sm">#Bitcoin</span>	
                    </div>	
                    <div className="item-cont-descr">
                      <p>Bitcoin entrepreneur Bitcoin entrepreneur</p>
                    </div>
                  </div>
                  <div className="insights-list-item">
                    <div className="insights-item-cont">
                    <img src={ImageSub12} alt="" />
                      <span className="ttl-sm">#Metaverse </span>	
                    </div>
                    <div className="item-cont-descr">
                      <p>Bitcoin entrepreneur Bitcoin entrepreneur</p>
                    </div>	
                  </div>
                  <div className="insights-list-item">
                    <div className="insights-item-cont">
                    <img src={ImageSub13} alt="" />
                      <span className="ttl-sm">#Budget2022</span>	
                    </div>	
                    <div className="item-cont-descr">
                      <p>Bitcoin entrepreneur Bitcoin entrepreneur</p>
                    </div>
                  </div>
                </div>	
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-5 d-flex justify-content-center">
                <a href="#" className="btn-bg">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="features-cont">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="heading-sec">
								<h3 class="title-first">Features</h3>
								<p>Our effort is to offer a host of financial services with an objective to <br/>enhance the way our users manage their finances.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="features-list-cont">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<div class="all-features-list">
									<div class="feature-item">
										<img src={ImageSub14} class="img-fluid" />
										<h4>Unique Collections</h4>
										<p>Discover the most interesting and unique categories of Stocks.</p>
									</div>
									<div class="feature-item">
                  <img src={ImageSub15} class="img-fluid" />
										<h4>Curated Baskets</h4>
										<p>Get hand-picked baskets which are rebalanced & designed by our experts.										</p>
									</div>
									<div class="feature-item">
									<img src={ImageSub16} class="img-fluid" />
										<h4>Robo Planner</h4>
										<p>An automated financial planner to handle your financial needs.</p>
									</div>
									<div class="feature-item">
									<img src={ImageSub17} class="img-fluid" />
										<h4>Insurance IntelliMart</h4>
										<p>Helping you navigate the future with precise Insurance </p>
									</div>
									<div class="feature-item">
                  <img src={ImageSub18} class="img-fluid" />
										<h4>Swift Loans</h4>
										<p>Get hassle-free instant loans with minimum documentations</p>
									</div>
									<div class="feature-item">
                  <img src={ImageSub19} class="img-fluid" />
										<h4>Recommendations</h4>
										<p>Providing insights across all market segments to enable better decisions.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


      <section class="count-value-section">
				<div class="container">
					<div class="row">
						<div class="col-md-7">
							<div class="count-value-list">
								<div class="count-value-item">
									<h4>2 Lakh+</h4>
									<h6>Clients</h6>
								</div>
								<div class="count-value-item">
									<h4>2,200+</h4>
									<h6>Employees</h6>
								</div>
								<div class="count-value-item">
									<h4>55+</h4>
									<h6>Offices</h6>
								</div>
								<div class="count-value-item">
									<h4>13,000+</h4>
									<h6>Partners</h6>
								</div>
							</div>
						</div>
						<div class="col-md-5">
							<div class="heading-sec">
								<h3 class="title-first">We value trust above everything</h3>
								<p>Discover why Lakhs of customers choose to invest with CHOICE</p>
							</div>
						</div>
					</div>
				</div>
			</section>


      </main>

    </div>
  );
}

export default Home;
