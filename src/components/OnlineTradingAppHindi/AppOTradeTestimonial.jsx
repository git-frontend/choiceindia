
import React from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

function AppOTradeTestimonial() {
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



      <section class="top-app-testimonial">
        <div class="container">
          <div class="app-sec8-main">
            <div class="row">
              <div class="col-md-12">
              <div className="heading-sec">
                <h2 className="title-secnd text-center">What Traders Are Saying About Our Trading App?</h2>
              </div>
                
              </div>
            </div>
            <div class="row">
              <div className="col-md-12">
                
                <Slider {...settings1} className='slideshow'>

                  <div class="content">
                    <div class="thumbnail">
                      <p class="SdClientName">Darshan Bhardwaj</p>
                      <img src="https://choiceindia.com/assets/images/trading-app-new/starrating.svg" alt="" class="img-fluid" />
                    </div>
                    <div class="btnNtxt">
                      <div class="sdAllContent">

                        <div class="sd_scroll">
                          <p class="sdCustomSliderHeadig">The customer support system is fantastic. Appreciate their attitude to welcome feedback. They are ready to work for customer satisfaction. Jiffy is the Trading App that witnesses your journey of perception to reality!! Exciting to have new features…</p>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div class="content">
                    <div class="thumbnail">
                      <p class="SdClientName">Naman Mahajan</p>
                      <img src="https://choiceindia.com/assets/images/trading-app-new/starrating.svg" alt="" class="img-fluid" />
                    </div>
                    <div class="btnNtxt">
                      <div class="sdAllContent">

                        <div class="sd_scroll">
                          <p class="sdCustomSliderHeadig">A trader app that offers so much: 1. A simple UI 2. Easy Pay-In/Pay-Out options such as net banking and UPI 3. Instant Paperless Account Opening Procedure 4. Real-Time Interactive Charts 5. Free Price Alerts 6. Lifetime Free Demat Account 7. Low AMC 8. Reasonable Brokerage.</p>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div class="content">
                    <div class="thumbnail">
                      <p class="SdClientName"> Rupesh Ghadge</p>
                      <img src="https://choiceindia.com/assets/images/trading-app-new/starrating.svg" alt="" class="img-fluid" />
                    </div>
                    <div class="btnNtxt">
                      <div class="sdAllContent">

                        <div class="sd_scroll">
                          <p class="sdCustomSliderHeadig">Simply Smooth User-Friendly App Great UI Understanding Concept This app is really good & best for trading. The concept was awesome. User friendly with good UI. I love this app. Thank u</p>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div class="content">
                    <div class="thumbnail">
                      <p class="SdClientName">Mohit Sarawagi</p>
                      <img src="https://choiceindia.com/assets/images/trading-app-new/starrating.svg" alt="" class="img-fluid" />
                    </div>
                    <div class="btnNtxt">
                      <div class="sdAllContent">
                        <div class="sd_scroll">
                          <p class="sdCustomSliderHeadig">Mind-blowing app!! The features are just outstanding unlike any other FM app, it shows all my investment with the current value and invested with one click. Other than this, I can buy and sell scripts with one click. Withdraw back money to my bank account all other unbelievable functions related to broking. Strongly recommended for super ease in trade.</p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="content">
                    <div class="thumbnail">
                      <p class="SdClientName">Rangaswamy T</p>
                      <img src="https://choiceindia.com/assets/images/trading-app-new/starrating.svg" alt="" class="img-fluid" />
                    </div>
                    <div class="btnNtxt">
                      <div class="sdAllContent">

                        <div class="sd_scroll">
                          <p class="sdCustomSliderHeadig">“Thank you choice… for noticing my feedback … which usually won’t happen with other apps… and helping me.”</p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="content">
                    <div class="thumbnail">
                      <p class="SdClientName">Harshit Poddar</p>
                      <img src="https://choiceindia.com/assets/images/trading-app-new/starrating.svg" alt="" class="img-fluid" />
                    </div>
                    <div class="btnNtxt">
                      <div class="sdAllContent">
                        <div class="sd_scroll">
                          <p class="sdCustomSliderHeadig">Excellent!! Easy to do online trading of shares with minimal brokerage charges and very fast response from team in case of any issue.</p>
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

export default AppOTradeTestimonial;
