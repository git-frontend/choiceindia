import React from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import StarImg from '../../assets/images/starrating.svg';

const ReferTestimonial=()=>{
    const settings1 = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        infinite:true,
        fade: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              dots: true,
              arrows: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              dots: true,
              arrows: false,
            },
          },
        ],
      };
      return (
        <div className='App-main'>
    
    
    
          <section className="top-app-testimonial">
            <div className="container">
              <div className="app-sec8-main">
                <div className="row">
                  <div className="col-md-12">
                  <div className="heading-sec">
                    <h2 className="title-secnd text-center">What Traders Are Saying About Our Trading App?</h2>
                  </div>
                    
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    
                    <Slider {...settings1} className='slideshow'>
    
                      <div className="content">
                        <div className="thumbnail">
                          <p className="SdClientName">Neeraj Sharma</p>
                          <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid" />
                        </div>
                        <div className="btnNtxt">
                          <div className="sdAllContent">
    
                            <div className="sd_scroll">
                              <p className="sdCustomSliderHeadig">The Choice FinX app opened up investing for a beginner like me. The app is user-friendly and packed with useful features and the helpful support from the Choice team has made the journey easy. I’ve even managed to make some extra cash through their Refer and Earn program.
                              </p>
                            </div>
    
                          </div>
                        </div>
                      </div>
    
                      <div className="content">
                        <div className="thumbnail">
                          <p className="SdClientName">Priya Kulkarni
                          </p>
                          <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid" />
                        </div>
                        <div className="btnNtxt">
                          <div className="sdAllContent">
    
                            <div className="sd_scroll">
                              <p className="sdCustomSliderHeadig">As a busy professional Choice FinX's advanced trading and portfolio tools are lifesavers. To top it their prompt customer care has made investing feel like a breeze.</p>
                            </div>
    
                          </div>
                        </div>
                      </div>
    
                      <div className="content">
                        <div className="thumbnail">
                          <p className="SdClientName">Aditya Rajan</p>
                          <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid" />
                        </div>
                        <div className="btnNtxt">
                          <div className="sdAllContent">
    
                            <div className="sd_scroll">
                              <p className="sdCustomSliderHeadig">As someone deeply risk-conscious, I was doubtful about online trading. But Choice FinX app's free resources and risk management tools instilled the confidence I needed. The advanced charting tools and expert insights ensure I invest intelligently.
                              </p>
                            </div>
    
                          </div>
                        </div>
                      </div>
    
                      <div className="content">
                        <div className="thumbnail">
                          <p className="SdClientName">Sneha Gupta</p>
                          <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid" />
                        </div>
                        <div className="btnNtxt">
                          <div className="sdAllContent">
                            <div className="sd_scroll">
                              <p className="sdCustomSliderHeadig">The Choice FinX app has transformed investing for this working mom. The one-tap trading customised watchlist is super time-efficient. And introducing friends through their rewarding referral program has been an absolute delight.</p>
                            </div>
    
                          </div>
                        </div>
                      </div>
                      <div className="content">
                        <div className="thumbnail">
                          <p className="SdClientName">Divya Kapoor</p>
                          <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid" />
                        </div>
                        <div className="btnNtxt">
                          <div className="sdAllContent">
    
                            <div className="sd_scroll">
                              <p className="sdCustomSliderHeadig">As a trader, Choice FinX's lightning-fast orders, smart alerts, and powerful charting capabilities are indispensable. Their dedicated team is always accessible to resolve queries. That's a complete trading solution to me.</p>
                            </div>
    
                          </div>
                        </div>
                      </div>
                      <div className="content">
                        <div className="thumbnail">
                          <p className="SdClientName">Rohan Mahajan</p>
                          <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid" />
                        </div>
                        <div className="btnNtxt">
                          <div className="sdAllContent">
                            <div className="sd_scroll">
                              <p className="sdCustomSliderHeadig">Choice FinX app's robust security and real-time trade execution give me an edge as an active trader. Their best-in-class scanners have unlocked new opportunities for me. And the knowledgeable and readily available support is invaluable.
                              </p>
                            </div>
    
                          </div>
                        </div>
                      </div>

                      <div className="content">
                        <div className="thumbnail">
                          <p className="SdClientName">Arjun Singh</p>
                          <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid" />
                        </div>
                        <div className="btnNtxt">
                          <div className="sdAllContent">
                            <div className="sd_scroll">
                              <p className="sdCustomSliderHeadig">The clean Choice FinX app interface and beginner-friendly tools and resources have simplified investing for me. The portfolio tracking and tax tools have helped streamline finance management. Choice Refer and Earn program is a nice addition.
                              </p>
                            </div>
    
                          </div>
                        </div>
                      </div>

                      <div className="content">
                        <div className="thumbnail">
                          <p className="SdClientName">Ishita Patel</p>
                          <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid" />
                        </div>
                        <div className="btnNtxt">
                          <div className="sdAllContent">
                            <div className="sd_scroll">
                              <p className="sdCustomSliderHeadig">Choice FinX has transformed how I invest as a busy professional. Seamless trading, interactive portfolio tracking, and market insights are at my fingertips! Add to that their prompt and customer service helps me to stay ahead of the curve.
                              </p>
                            </div>
    
                          </div>
                        </div>
                      </div>

                      <div className="content">
                        <div className="thumbnail">
                          <p className="SdClientName">Riya Sharma</p>
                          <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid" />
                        </div>
                        <div className="btnNtxt">
                          <div className="sdAllContent">
                            <div className="sd_scroll">
                              <p className="sdCustomSliderHeadig">As a new investor, Choice FinX's resources and free tools made the world of investing so much more accessible and understandable. The user-friendly app, advanced tools and expert-made baskets have proven to be game-changers. 
                              </p>
                            </div>
    
                          </div>
                        </div>
                      </div>

                      <div className="content">
                        <div className="thumbnail">
                          <p className="SdClientName">Rahul Mehta
                          </p>
                          <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid" />
                        </div>
                        <div className="btnNtxt">
                          <div className="sdAllContent">
                            <div className="sd_scroll">
                              <p className="sdCustomSliderHeadig">As a long-time Choice customer, the Choice FinX app has elevated my investment experience. The user-friendly interface and robust security give me peace of mind while research and analytics have equipped me thoroughly. Adding great value is their expertise and rewarding Refer and Earn.
                              </p>
                            </div>
    
                          </div>
                        </div>
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

export default ReferTestimonial;