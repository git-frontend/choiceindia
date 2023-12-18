
import React from "react";
import Slider from 'react-slick';
function FnoRecord() {

    const settings = {
        infinite: true,
        speed: 2000,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        margin:15,
        dots:true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
        <>
            <section className="fno-records">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
                            <div className="heading-sec text-center">
                                <h2 className="title-secnd">Our Proven Track Record</h2>
                                <p>Intraday</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="record-sliders">
                                <Slider {...settings} className="sliders-fno">
                                        <div className="">
                                            <div className="main-left">
                                                <div className="top-section">
                                                    <div className="top-left">
                                                    <h6 className="top-text">Stop Loss</h6>
                                                    <div>
                                                        <h6 className="top-date">05 December'23</h6>
                                                    </div>
                                                    </div>
                                                    <div className="top-right">
                                                    <button className="btn-buy  buybtn"> sell</button>
                                                    </div>
                                                </div>
                                                <div className="middle-section">
                                                    <div className="middle-left">
                                                    <div>
                                                        <h4 className="big-text">GRASIM</h4>
                                                        <span className="small-text">GRASIM INDUSTRIES LTD|</span>
                                                    </div>
                                                    </div>
                                                    <div className="middle-right">
                                                    <span className="right-big-text">2,072.35</span>
                                                    <h6 className="right-small-text text_green">19.40 (0.94%)</h6>
                                                    </div>
                                                </div>
                                                <div className="bottom-section">
                                                    <div className="d-flex justify-content-between pt-3">
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Stop Loss</h6>
                                                            <h4 className="bottom_big_text">2,043.25</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Entry Price</h6>
                                                            <h4 className="bottom_big_text">2,060.90</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Target Price</h6>
                                                            <h4 className="bottom_big_text">2,087.40</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">2nd Target Price</h6>
                                                            <h4 className="bottom_big_text">2,105.05</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="main-left">
                                                <div className="top-section">
                                                    <div className="top-left">
                                                    <h6 className="top-text">Stop Loss</h6>
                                                    <div>
                                                        <h6 className="top-date">05 December'23</h6>
                                                    </div>
                                                    </div>
                                                    <div className="top-right">
                                                    <button className="btn-buy  buybtn"> sell</button>
                                                    </div>
                                                </div>
                                                <div className="middle-section">
                                                    <div className="middle-left">
                                                    <div>
                                                        <h4 className="big-text">GRASIM</h4>
                                                        <span className="small-text">GRASIM INDUSTRIES LTD|</span>
                                                    </div>
                                                    </div>
                                                    <div className="middle-right">
                                                    <span className="right-big-text">2,072.35</span>
                                                    <h6 className="right-small-text text_green">19.40 (0.94%)</h6>
                                                    </div>
                                                </div>
                                                <div className="bottom-section">
                                                    <div className="d-flex justify-content-between pt-3">
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Stop Loss</h6>
                                                            <h4 className="bottom_big_text">2,043.25</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Entry Price</h6>
                                                            <h4 className="bottom_big_text">2,060.90</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Target Price</h6>
                                                            <h4 className="bottom_big_text">2,087.40</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">2nd Target Price</h6>
                                                            <h4 className="bottom_big_text">2,105.05</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="main-left">
                                                <div className="top-section">
                                                    <div className="top-left">
                                                    <h6 className="top-text">Stop Loss</h6>
                                                    <div>
                                                        <h6 className="top-date">05 December'23</h6>
                                                    </div>
                                                    </div>
                                                    <div className="top-right">
                                                    <button className="btn-buy  buybtn"> sell</button>
                                                    </div>
                                                </div>
                                                <div className="middle-section">
                                                    <div className="middle-left">
                                                    <div>
                                                        <h4 className="big-text">GRASIM</h4>
                                                        <span className="small-text">GRASIM INDUSTRIES LTD|</span>
                                                    </div>
                                                    </div>
                                                    <div className="middle-right">
                                                    <span className="right-big-text">2,072.35</span>
                                                    <h6 className="right-small-text text_green">19.40 (0.94%)</h6>
                                                    </div>
                                                </div>
                                                <div className="bottom-section">
                                                    <div className="d-flex justify-content-between pt-3">
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Stop Loss</h6>
                                                            <h4 className="bottom_big_text">2,043.25</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Entry Price</h6>
                                                            <h4 className="bottom_big_text">2,060.90</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Target Price</h6>
                                                            <h4 className="bottom_big_text">2,087.40</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">2nd Target Price</h6>
                                                            <h4 className="bottom_big_text">2,105.05</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="main-left">
                                                <div className="top-section">
                                                    <div className="top-left">
                                                    <h6 className="top-text">Stop Loss</h6>
                                                    <div>
                                                        <h6 className="top-date">05 December'23</h6>
                                                    </div>
                                                    </div>
                                                    <div className="top-right">
                                                    <button className="btn-buy  buybtn"> sell</button>
                                                    </div>
                                                </div>
                                                <div className="middle-section">
                                                    <div className="middle-left">
                                                    <div>
                                                        <h4 className="big-text">GRASIM</h4>
                                                        <span className="small-text">GRASIM INDUSTRIES LTD|</span>
                                                    </div>
                                                    </div>
                                                    <div className="middle-right">
                                                    <span className="right-big-text">2,072.35</span>
                                                    <h6 className="right-small-text text_green">19.40 (0.94%)</h6>
                                                    </div>
                                                </div>
                                                <div className="bottom-section">
                                                    <div className="d-flex justify-content-between pt-3">
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Stop Loss</h6>
                                                            <h4 className="bottom_big_text">2,043.25</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Entry Price</h6>
                                                            <h4 className="bottom_big_text">2,060.90</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Target Price</h6>
                                                            <h4 className="bottom_big_text">2,087.40</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">2nd Target Price</h6>
                                                            <h4 className="bottom_big_text">2,105.05</h4>
                                                        </div>
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
            

        </>
    );
};
export default FnoRecord;