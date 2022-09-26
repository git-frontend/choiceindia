import React from "react";
import { useState } from "react";
import "./BestStock.scss";
import Template5 from '../Common-features/Template5';







import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import { useEffect } from "react";
function BestStock() {
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
                  <div className="col-md-8">
                    <ul className="list-group list-group-horizontal-sm justify-content-center list_group1">
                      <li className="list-group-item list">All Stocks</li>
                      <li className="list-group-item list listsec">Intraday Stocks</li>
                      <li className="list-group-item list">Short Term Stocks</li>
                      <li className="list-group-item list"> Long Term Stocks</li>
                    </ul>
                    <p className="title_para pt-4">Get the list of best stocks to buy today for intraday trading!</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="main">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-12">
                    <div className="row">
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
                          <hr></hr>
                          <div className="bottom-section">
                            <div className="d-flex justify-content-between">
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
                          <hr></hr>
                          <div className="bottom-section">
                            <div className="d-flex justify-content-between">
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
                    <div className="row">
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
                          <hr></hr>
                          <div className="bottom-section">
                            <div className="d-flex justify-content-between">
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
                          <hr></hr>
                          <div className="bottom-section">
                            <div className="d-flex justify-content-between">
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
                    <div className="row">
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
                          <hr></hr>
                          <div className="bottom-section">
                            <div className="d-flex justify-content-between">
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
                          <hr></hr>
                          <div className="bottom-section">
                            <div className="d-flex justify-content-between">
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
            </section>
            <section className="sendopt">
              <div className="container">
                <div className="form_main">
                  <div className="sub_group"><h3 className="form-ttl">Open a Free Demat Account + Free 1st Year AMC</h3></div>
                  <div className="sub_group"><label for="inputEmail4" className="text_label">Mobile Number</label><input type="text" className="mobile_no" placeholder="+91 7405741316" /></div>
                  <div className="sub_group cust_check">I agree that I have read and  accept the Terms and Conditions</div>
                  <div className="sub_group "><a href="/" ><span className="send_OPT_btn" >SEND OTP</span></a></div>
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