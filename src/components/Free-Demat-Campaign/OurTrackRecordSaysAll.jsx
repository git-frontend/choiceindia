import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import Slider from "react-slick";
function OurTrackRecordSaysAll() {
  const settings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 1,
    autoplay: false,
    dots: true,
    autoplaySpeed: 3000,
    slidesToScroll: false,

  };
  
  const [toggleState, setToggleState] = useState(0);
  const [list, setlist] = useState();

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
          <div>
            <section className="mainhead">
              <div className="container">
                <div className="row d-flex justify-content-center ">
                  <div className="col-md-12 ">
                      <div>
                      <h1 className="title-secnd1">Our Track Record Says It All</h1>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <ul className="list-group list_group1">
                      <li className= {toggleState === 0 ? "list-group-item list listsec " : "list-group-item list"} > <Link className="urllinks1" to="/" >Intraday</Link></li>
                      <li className= {toggleState === 1 ? "list-group-item list listsec " : "list-group-item list"} ><Link className="urllinks1" to="/" >F&O </Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="main-parent">
              <div className="container">
                <div  className="content-tabs active-content">
                  <div className="row d-flex justify-content-center">
                      <div className="col-md-12">
                          <div className="row gx-5">
                          <div className="col-xl-6 col-md-12">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Stop Loss</h6>
                                  <h6 className="top-date">17 March’23</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">JUPL</h4>
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
                                    <h6 className="bottom_small_text">Stop Loss</h6>
                                    <h4 className="bottom_big_text">697.40</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text" >704.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Target Price</h6>
                                    <h4 className="bottom_big_text">713.90</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">2nd Target Price</h6>
                                    <h4 className="bottom_big_text">720.55</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">3rd Target Price</h6>
                                    <h4 className="bottom_big_text">--</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-md-12">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Stop Loss</h6>
                                  <h6 className="top-date">17 March’23</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy sellbtn">Sell</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">NAVINFLOUR</h4>
                                  <span className="small-text">NAVIN FLOURINE INT. LTD.</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">715.65</span>
                                  <h6 className="right-small-text">19.25(2.76%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Stop Loss</h6>
                                    <h4 className="bottom_big_text">697.40</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text" >704.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Target Price</h6>
                                    <h4 className="bottom_big_text">713.90</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">2nd Target Price</h6>
                                    <h4 className="bottom_big_text">720.55</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">3rd Target Price</h6>
                                    <h4 className="bottom_big_text">--</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-md-12">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Stop Loss</h6>
                                  <h6 className="top-date">17 March’23</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy  sellbtn">Sell</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                <h4 className="big-text">NAVINFLOUR</h4>
                                  <span className="small-text">NAVIN FLOURINE INT. LTD.</span>
                                </div>
                                <div className="middle-right">
                                <span className="right-big-text">715.65</span>
                                  <h6 className="right-small-text">19.25(2.76%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Stop Loss</h6>
                                    <h4 className="bottom_big_text">697.40</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text" >704.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Target Price</h6>
                                    <h4 className="bottom_big_text">713.90</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">2nd Target Price</h6>
                                    <h4 className="bottom_big_text">720.55</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">3rd Target Price</h6>
                                    <h4 className="bottom_big_text">--</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-md-12">
                            <div className="main-left">
                            <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Stop Loss</h6>
                                  <h6 className="top-date">17 March’23</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">JUPL</h4>
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
                                    <h6 className="bottom_small_text">Stop Loss</h6>
                                    <h4 className="bottom_big_text">697.40</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text" >704.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Target Price</h6>
                                    <h4 className="bottom_big_text">713.90</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">2nd Target Price</h6>
                                    <h4 className="bottom_big_text">720.55</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">3rd Target Price</h6>
                                    <h4 className="bottom_big_text">--</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> 
                </div>
              </div>
            </section>
         
         

          </div>


      
    </div>
  );
}

export default OurTrackRecordSaysAll;
