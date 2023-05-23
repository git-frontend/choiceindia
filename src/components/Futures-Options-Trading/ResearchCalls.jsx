
// import React from 'react';
import React from "react";

import '../Best-Stocks/best-stock.scss';
import Slider from 'react-slick';

function ResearchCalls() {
  
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    arrows: false,
    autoplay: false,
    dots: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: false,
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
    <>
      <section className="research-calls main-parent" id="showForm">
        <div className="container">
          <h2 className="title-first research-title">Our Recent Research Calls</h2>
          <div className="">
         
            <Slider {...settings} className="research-calls-tab">
              
                  <div className="calls-tab-item">
                    
                          <div className="main-left">
                            <div className="top-section">
                              <div className="top-left">
                                <h6 className="top-text">Reco Date</h6>
                                <h6 className="top-date">15 November ,23</h6>
                              </div>
                              <div className="top-right"><button className="btn-buy">BUY, Add on Dips</button></div>
                            </div>
                            <div className="middle-section">
                              <div className="middle-left">
                                <h4 className="big-text">BANKBARODA</h4>
                                <span className="small-text">BANK OF BARODA</span>
                              </div>
                              <div className="middle-right">
                                <span className="right-big-text">165.65</span>
                                <h6 className="right-small-text text_color">6.95(4.37%)</h6>
                              </div>
                            </div>

                            <div className="bottom-section">
                              <div className="d-flex justify-content-between pt-3">
                                <div className="bottom fandores">
                                  <h6 className="bottom_small_text">Entry Price</h6>
                                  <h4 className="bottom_big_text">165.00</h4>
                                </div>
                                <div className="bottom fandores">
                                  <h6 className="bottom_small_text">Potential Price</h6>
                                  <h4 className="bottom_big_text" >182.00</h4>
                                </div>
                                <div className="bottom fandores">
                                  <h6 className="bottom_small_text">Exp. Returns</h6>
                                  <h4 className="bottom_big_text">15 Nov, 2023</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                       
                  </div>
                 

              <div className="calls-tab-item">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">17 March’23</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">BUY</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">SIGACHI</h4>
                                  <span className="small-text">SIGACHI INDUSTRIES LIMITE</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">291</span>
                                  <h6 className="right-small-text">22.70(7.24%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom fandores">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">242.40</h4>
                                  </div>
                                  <div className="bottom fandores">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >324.82</h4>
                                  </div>
                                  <div className="bottom fandores">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">23 Jun ,2023</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
            </Slider>
           
          </div>

        </div>
      </section>
    </>
  );
};
export default ResearchCalls;