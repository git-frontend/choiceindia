import React from "react";
import { useState } from "react";
import "./best-stock.scss";
import Template5 from '../Common-features/Template5';







import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import { useEffect } from "react";
function BestStock() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [skeleton, setSkeleton] = useState(() => true);
  // const myTimeout = setTimeout(myGreeting, 900);
  // function myGreeting() {
  //   setSkeleton(() => false);
  // }




  const [rendercount, setRenderCount] = useState(() => false);
  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)
  const location = useLocation();
  // let parser = new DOMParser();
  // let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
  // useEffect(() => {
  //   let parser = new DOMParser();
  //   let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
  //   document.body.appendChild(doc.getElementsByTagName('script')[0]);
  // }, [])
  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      // let parser = new DOMParser();
      // let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
      // document.body.appendChild(doc.getElementsByTagName('script')[0]? doc.getElementsByTagName('script')[0]: '' );
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
    }
  }, [rendercount])
  // console.log('HHHHHHH',meta_tags['sub-broker'].faqscript)
  // console.log('TTTT',doc.getElementsByTagName('script')[0]);
  // document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
  // // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
  // document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
  // document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
  // // document.body.appendChild(doc.getElementsByTagName('script')[0]);



  return (
    <div>
      {
        skeleton ? <Template5 /> :
          <div className="sub-broker-skeleton-parent">
            <section className="mainhead">
              <div className="container">
                <div className="row d-flex justify-content-center ">
                  <div className="col-md-12 ">
                    <h2 className="title-secnd1">Best Stocks to Buy Today</h2>
                    <p className="title_para">Choose the best stocks to buy today according to the holding period.</p>
                  </div>
                  <div className="col-xl-8 col-md-12">
                    {/* <ul className="list-group  justify-content-center list_group1">
                      <li className="list-group-item list">All Stocks</li>
                      <li className="list-group-item list listsec">Intraday Stocks</li>
                      <li className="list-group-item list">Short Term Stocks</li>
                      <li className="list-group-item list"> Long Term Stocks</li>
                    </ul> */}
                    <div className=" list_group1 bloc-tabs">
                      <button
                        className={toggleState === 1 ? "list listsec" : "list"}
                        onClick={() => toggleTab(1)}
                      >
                        All Stocks
                      </button>
                      <button
                        className={toggleState === 2 ? "list listsec" : "list"}
                        onClick={() => toggleTab(2)}
                      >
                        Intraday Stocks
                      </button>
                      <button
                        className={toggleState === 3 ? "list listsec" : "list"}
                        onClick={() => toggleTab(3)}
                      >
                        Short Term Stocks
                      </button>
                      <button
                        className={toggleState === 4 ? "list listsec" : "list"}
                        onClick={() => toggleTab(4)}
                      >
                        Long Term Stocks
                      </button>
                    </div>
                    <p className="title_para res_para ">Get the list of best stocks to buy today for intraday trading!</p>
                  </div>
                </div>
              </div>
            </section>


            <section className="main">
              <div className="container">
                <div className="content-tabs best-stock-tabs-cont">
                  <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                  >

                    <div className="row d-flex justify-content-center">
                      <div className="col-md-12">
                        <div className="row gx-5">
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">Bandhan Bank Ltd</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">333.45</span>
                                  <h6 className="right-small-text">+10.6 (3.28%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">327.30</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >350.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">4.96%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">JSW Steel Ltd.</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">755.90</span>
                                  <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">757.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >810.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">7.16%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-12">
                        <div className="row gx-5">
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">JSW Steel Ltd.</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">755.90</span>
                                  <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">757.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >810.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">7.16%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">Bandhan Bank Ltd</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">333.45</span>
                                  <h6 className="right-small-text">+10.6 (3.28%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">327.30</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >350.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">4.96%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-12">
                        <div className="row gx-5">
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">Bandhan Bank Ltd</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">333.45</span>
                                  <h6 className="right-small-text">+10.6 (3.28%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">327.30</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >350.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">4.96%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">JSW Steel Ltd.</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">755.90</span>
                                  <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">757.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >810.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">7.16%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-center load_btn "><a href="/" ><span className="load_more_btn" >Load More</span></a></div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                  >

                    <div className="row d-flex justify-content-center">
                      <div className="col-md-12">
                        <div className="row gx-5">
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">Bandhan Bank Ltd</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">333.45</span>
                                  <h6 className="right-small-text">+10.6 (3.28%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">327.30</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >350.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">4.96%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">JSW Steel Ltd.</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">755.90</span>
                                  <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">757.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >810.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">7.16%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-12">
                        <div className="row gx-5">
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">JSW Steel Ltd.</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">755.90</span>
                                  <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">757.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >810.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">7.16%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">Bandhan Bank Ltd</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">333.45</span>
                                  <h6 className="right-small-text">+10.6 (3.28%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">327.30</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >350.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">4.96%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-12">
                        <div className="row gx-5">
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">Bandhan Bank Ltd</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">333.45</span>
                                  <h6 className="right-small-text">+10.6 (3.28%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">327.30</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >350.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">4.96%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">JSW Steel Ltd.</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">755.90</span>
                                  <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">757.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >810.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">7.16%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-center load_btn "><a href="/" ><span className="load_more_btn" >Load More</span></a></div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                  >

                    <div className="row d-flex justify-content-center">
                      <div className="col-md-12">
                        <div className="row gx-5">
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">Bandhan Bank Ltd</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">333.45</span>
                                  <h6 className="right-small-text">+10.6 (3.28%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">327.30</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >350.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">4.96%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">JSW Steel Ltd.</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">755.90</span>
                                  <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">757.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >810.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">7.16%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-12">
                        <div className="row gx-5">
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">JSW Steel Ltd.</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">755.90</span>
                                  <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">757.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >810.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">7.16%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">Bandhan Bank Ltd</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">333.45</span>
                                  <h6 className="right-small-text">+10.6 (3.28%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">327.30</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >350.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">4.96%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-12">
                        <div className="row gx-5">
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">Bandhan Bank Ltd</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">333.45</span>
                                  <h6 className="right-small-text">+10.6 (3.28%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">327.30</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >350.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">4.96%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">JSW Steel Ltd.</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">755.90</span>
                                  <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">757.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >810.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">7.16%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-center load_btn "><a href="/" ><span className="load_more_btn" >Load More</span></a></div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div
                    className={toggleState === 4 ? "content  active-content" : "content"}
                  >

                    <div className="row d-flex justify-content-center">
                      <div className="col-md-12">
                        <div className="row gx-5">
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">Bandhan Bank Ltd</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">333.45</span>
                                  <h6 className="right-small-text">+10.6 (3.28%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">327.30</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >350.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">4.96%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">JSW Steel Ltd.</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">755.90</span>
                                  <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">757.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >810.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">7.16%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-12">
                        <div className="row gx-5">
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">JSW Steel Ltd.</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">755.90</span>
                                  <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">757.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >810.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">7.16%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">Bandhan Bank Ltd</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">333.45</span>
                                  <h6 className="right-small-text">+10.6 (3.28%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">327.30</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >350.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">4.96%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-12">
                        <div className="row gx-5">
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">Bandhan Bank Ltd</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">333.45</span>
                                  <h6 className="right-small-text">+10.6 (3.28%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">327.30</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >350.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">4.96%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">JSW Steel Ltd.</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">755.90</span>
                                  <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">757.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >810.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">7.16%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-center load_btn "><a href="/" ><span className="load_more_btn" >Load More</span></a></div>
                        </div>
                      </div>
                    </div>

                  </div>



                </div>
              </div>
            </section>


            <section className="sendopt">
              <div className="container">
                <div className="form_main">
                  <div className=" demat_text"><span className="form-ttl">Open a Free <span className="reshide"> Demat</span> Account <span className="reshide"><br />+ Free 1st Year AMC</span></span></div>
                  <div className="  Mobile_text">
                  <input type="text" id="form-email" className="form-textbox" required/>
                  <label for="form-email" className="form-label">Mobile Number</label>
                  </div>
                  <div className="  cust_check">
                    <input type="checkbox" className="form_check" />
                    <label className="form_check_text">I agree that I have read and  accept<br /> the <a href="/"><span className="link_tc">Terms and Conditions</span></a></label>
                  </div>
                  <div className=" OPt_item sub_group"><a href="/" ><span className="send_OPT_btn" >Send OTP</span></a></div>
                </div>
              </div>
            </section>
            <section className="Stockes">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="stock_head">Best Stocks to Buy Today in India</h1>
                  </div>
                  <div className="col-md-12">
                    <div className="content">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                      no se....<label htmlFor="post-1" className="read-more-trigger moreless-button">Read More</label>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
      }
    </div>
  );
}

export default BestStock;