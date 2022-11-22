
import React from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import StarImg from '../../assets/images/starrating.svg';

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
                      <p className="SdClientName">Kumar Raghvendra</p>
                      <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid" />
                    </div>
                    <div className="btnNtxt">
                      <div className="sdAllContent">

                        <div className="sd_scroll">
                          <p className="sdCustomSliderHeadig">A good app in terms of brokerage and is easy to understand for beginners.It's my personal view that it is one of the best apps.</p>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="content">
                    <div className="thumbnail">
                      <p className="SdClientName">John Ninan</p>
                      <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid" />
                    </div>
                    <div className="btnNtxt">
                      <div className="sdAllContent">

                        <div className="sd_scroll">
                          <p className="sdCustomSliderHeadig">Very good App. Very easy to use. Simpler than a certain bank's App. Trading experience with Choice FinX is excellent.</p>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="content">
                    <div className="thumbnail">
                      <p className="SdClientName"> Gunjan Pareek</p>
                      <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid"  />
                    </div>
                    <div className="btnNtxt">
                      <div className="sdAllContent">

                        <div className="sd_scroll">
                          <p className="sdCustomSliderHeadig">For Beginners, this is an awesome trading app for equity trading. Reasons for this are as follows 1) Their customer support service is awesome. When you call their support service they respond quickly 2) Low Brokerage on Intraday and delivery 3) 0 % Brokerage, If their suggested scripts touch SL.</p>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="content">
                    <div className="thumbnail">
                      <p className="SdClientName">Mckrishna Kumar</p>
                      <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid" />
                    </div>
                    <div className="btnNtxt">
                      <div className="sdAllContent">
                        <div className="sd_scroll">
                          <p className="sdCustomSliderHeadig">User-friendly app and good customer service and relationships manager support..and updated features in Choice FinX app.</p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="thumbnail">
                      <p className="SdClientName">Ramkhumar Ramkhumar</p>
                      <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid" />
                    </div>
                    <div className="btnNtxt">
                      <div className="sdAllContent">

                        <div className="sd_scroll">
                          <p className="sdCustomSliderHeadig">Great platform to trade and invest. Very fast. Rarely fails. Backed by insightful tips and rich info. Very user-friendly.</p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="thumbnail">
                      <p className="SdClientName">JOEL MARTIN</p>
                      <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid" />
                    </div>
                    <div className="btnNtxt">
                      <div className="sdAllContent">
                        <div className="sd_scroll">
                          <p className="sdCustomSliderHeadig">Best app for trading, the important point is that we can see the live market indices on top of the screen while executing buy order and the same during selling too. Above all customer service from relationship manager is excellent in upholding our portfolio in a profitable scenario. Suggesting all to try.</p>
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
