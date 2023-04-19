
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
                dots: false,
            }
        }

    ]

};
    return (
        <>
            <section className="research-calls main-parent">
                <div className="container">
                <h2 className="title-first research-title">Our Recent Research Calls</h2>
                    <div className="">
                        <Slider {...settings} className="research-calls-tab gx-5">
                        <div className="calls-tab-item">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">17 March’23</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">BOB</h4>
                                  <span className="small-text">UPL LIMITED</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">715.65</span>
                                  <h6 className="right-small-text text_color">19.25(2.76%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">697.40</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >713.90</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">17 March’24</h4>
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
                                <div className="top-right"><button className="btn-buy">BUY, Add on Dips</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">BOB</h4>
                                  <span className="small-text">UPL LIMITED</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">715.65</span>
                                  <h6 className="right-small-text">19.25(2.76%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">697.40</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >713.90</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">17 March’24</h4>
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