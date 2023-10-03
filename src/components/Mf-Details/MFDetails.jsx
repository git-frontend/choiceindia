import React from 'react'

import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import "./mf-details.scss";
import SerachTopFunds from './SerachTopFunds';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,} from '@fortawesome/free-solid-svg-icons'
import Image1 from '../../assets/images/mf-investica/pie-chart.png';

function MFTopFunds() {

  const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <div>
        <section className="fund-listing-details">
          <div className="container">
              <div className="row gx-5 align-items-center">
                  <div className="col-xl-12">
                      <div className='card-mn box-shadow card-top-details'>
                          <div className='row'>
                              <div className='col-md-7'>
                                  <h3 className='title-secnd'>Quant Tax Plan Growth</h3>
                                  <div className='rating-det'>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      {/* <FontAwesomeIcon icon={regular("star")} /> */}
                                  </div>
                                  <div className=''>
                                      <p>Tax Saving (ELSS) Funds | Inception Date : Apr 01, 2000</p>
                                      <p>Min. Lumpsum Investment ₹ 500</p>
                                      <p>Nav ₹ 280.71 | Sep 13, 2023</p>
                                  </div>
                              </div>
                              <div className='col-md-5 holding-value-cont'>
                                  <div className='holding-value'>
                                      <h3>149.47</h3>
                                      <h4>3 Year Return (%)</h4>
                                  </div>
                                  <div className='inv-btn'>
                                    <a href='#' className='btn-bg'>Invest Now</a>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className='card-mn box-shadow graph-show'>
                          <div className='row'>
                              <div className='col-md-5'>
                                  <div className='mn-graph'>
                                      
                                  </div>
                                  <p>Showing Funds Performance since Sep 07, 2020</p>
                              </div>
                              <div className='col-md-7'>
                                  <div className='holding-details'>
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-4 col-6 border-right">
                                          <div className="holdings-value">
                                            <div className="holdings-figure">6.34</div>
                                            <div className="details-title">Standard Deviation</div>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4 col-6 border-right brd-r">
                                          <div className="holdings-value">
                                            <div className="rupee">₹ <span className="holdings-figure">15,583 Cr</span>
                                            </div>
                                            <div className="details-title">AUM</div>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4 col-6 brd-right">
                                          <div className="holdings-value">
                                            <div className="rupee">
                                              <span className="holdings-figure">28.39% </span>
                                            </div>
                                            <div className="details-title">CAGR -3y</div>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4 col-6 border-right brd-r">
                                          <div className="holdings-value">
                                            <div className="holdings-figure">N/A</div>
                                            <div className="details-title">Lock In Period</div>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4  col-6 border-right">
                                          <div className="holdings-value">
                                            <div className="holdings-figure">1.72</div>
                                            <div className="details-title">Expense Ratio</div>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4  col-6 brd-r">
                                          <div className="holdings-value">
                                            <div className="holdings-figure">NIfty 500 Total Return</div>
                                            <div className="details-title">BenchMark</div>
                                          </div>
                                        </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className='card-mn box-shadow analysis-portfolio'>
                          <div className='row align-items-center'>
                              <div className='col-md-6'>
                                  <h3 className='title-secnd'>Scheme's Portfolio <span>Analysis</span></h3>
                              </div>
                              <div className='col-md-6'>
                                  <div className='order-wise-sec'>
                                      <p>As on: 2023-07-31</p>
                                      <p>View allocation % by</p>
                                      <div className='drop-items'>
                                      <select className='form-select'>
                                            <option value="" selected>Sector</option>
                                            <option value="">Company</option>
                                            <option value="">Market Cap</option>
                                      </select>
                                    </div>
                                  </div>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-12'>
                                <div className='cont-all-details'>
                                    <div className='list-tabs-number'>
                                      <button
                                            className={toggleState === 1 ? "tabs  active-tabs" : "tabs"}
                                            onClick={() => toggleTab(1)}
                                        >
                                            Equity: 98.23%

                                        </button>
                                        <button
                                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                            onClick={() => toggleTab(2)}
                                        >
                                            Debt: 1.76%

                                        </button>
                                        <button
                                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                                            onClick={() => toggleTab(3)}
                                        >

                                            Others

                                        </button>
                                    </div>
                                    <div className="content-tabs-details">
                                            <div
                                            className={toggleState === 1 ? "content  active-content" : "content"}
                                        >
                                            <div className="equity-tab-cont">
                                                  <div className='lft-chart'>
                                                      <img src={Image1} className="img-fluid" alt="" />
                                                  </div>
                                                  <div className="right-cont-details">
                                                    <Accordion defaultActiveKey="0">
                                                        <Accordion.Item eventKey="0" >
                                                            <Accordion.Header as="h3" className='faq-header'>
                                                                <span className='cirl' style={{background: "#7C160E"}}>

                                                                </span>
                                                                <div className='header-flx'>
                                                                    <h4>BFSI</h4>
                                                                    <h3 style={{color: "#7C160E"}}>23.33%</h3>
                                                                </div>
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className='acd-list'>
                                                                    <h4>1. HDFC Bank Limited</h4>
                                                                    <h4>9.19%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>2. State Bank Of India</h4>
                                                                    <h4>5.67%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>3. Capri Global Capital Limited</h4>
                                                                    <h4>2.77%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>4. Punjab National Bank</h4>
                                                                    <h4>2.32%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>5. Bandhan Bank Ltd</h4>
                                                                    <h4>0.95%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>6. Jio Financial Services </h4>
                                                                    <h4>0.92%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>7. Piramal Enterprises Limited</h4>
                                                                    <h4>0.91%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>8. Sundaram Finance Ltd</h4>
                                                                    <h4>0.60%</h4>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="1">
                                                        <Accordion.Header as="h3" className='faq-header'>
                                                                <span className='cirl' style={{background: "#AEA096"}}>

                                                                </span>
                                                                <div className='header-flx'>
                                                                    <h4>Pharmaceuticals</h4>
                                                                    <h3 style={{color: "#AEA096"}}>23.33%</h3>
                                                                </div>
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className='acd-list'>
                                                                    <h4>1. HDFC Bank Limited</h4>
                                                                    <h4>9.19%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>2. State Bank Of India</h4>
                                                                    <h4>5.67%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>3. Capri Global Capital Limited</h4>
                                                                    <h4>2.77%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>4. Punjab National Bank</h4>
                                                                    <h4>2.32%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>5. Bandhan Bank Ltd</h4>
                                                                    <h4>0.95%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>6. Jio Financial Services </h4>
                                                                    <h4>0.92%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>7. Piramal Enterprises Limited</h4>
                                                                    <h4>0.91%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>8. Sundaram Finance Ltd</h4>
                                                                    <h4>0.60%</h4>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="2" >
                                                        <Accordion.Header as="h3" className='faq-header'>
                                                                <span className='cirl' style={{background: "#BE7111"}}>

                                                                </span>
                                                                <div className='header-flx'>
                                                                    <h4>Oil & Gas</h4>
                                                                    <h3 style={{color: "#BE7111"}}>9.99%</h3>
                                                                </div>
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className='acd-list'>
                                                                    <h4>1. HDFC Bank Limited</h4>
                                                                    <h4>9.19%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>2. State Bank Of India</h4>
                                                                    <h4>5.67%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>3. Capri Global Capital Limited</h4>
                                                                    <h4>2.77%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>4. Punjab National Bank</h4>
                                                                    <h4>2.32%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>5. Bandhan Bank Ltd</h4>
                                                                    <h4>0.95%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>6. Jio Financial Services </h4>
                                                                    <h4>0.92%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>7. Piramal Enterprises Limited</h4>
                                                                    <h4>0.91%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>8. Sundaram Finance Ltd</h4>
                                                                    <h4>0.60%</h4>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="3" >
                                                        <Accordion.Header as="h3" className='faq-header'>
                                                                <span className='cirl' style={{background: "#8018BA"}}>

                                                                </span>
                                                                <div className='header-flx'>
                                                                    <h4>Metal & Mining</h4>
                                                                    <h3 style={{color: "#8018BA"}}>8.41%</h3>
                                                                </div>
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className='acd-list'>
                                                                    <h4>1. HDFC Bank Limited</h4>
                                                                    <h4>9.19%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>2. State Bank Of India</h4>
                                                                    <h4>5.67%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>3. Capri Global Capital Limited</h4>
                                                                    <h4>2.77%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>4. Punjab National Bank</h4>
                                                                    <h4>2.32%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>5. Bandhan Bank Ltd</h4>
                                                                    <h4>0.95%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>6. Jio Financial Services </h4>
                                                                    <h4>0.92%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>7. Piramal Enterprises Limited</h4>
                                                                    <h4>0.91%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>8. Sundaram Finance Ltd</h4>
                                                                    <h4>0.60%</h4>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="4" >
                                                        <Accordion.Header as="h3" className='faq-header'>
                                                                <span className='cirl' style={{background: "#B8A970"}}>

                                                                </span>
                                                                <div className='header-flx'>
                                                                    <h4>Infrastructure</h4>
                                                                    <h3 style={{color: "#B8A970"}}>8.23%</h3>
                                                                </div>
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className='acd-list'>
                                                                    <h4>1. HDFC Bank Limited</h4>
                                                                    <h4>9.19%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>2. State Bank Of India</h4>
                                                                    <h4>5.67%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>3. Capri Global Capital Limited</h4>
                                                                    <h4>2.77%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>4. Punjab National Bank</h4>
                                                                    <h4>2.32%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>5. Bandhan Bank Ltd</h4>
                                                                    <h4>0.95%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>6. Jio Financial Services </h4>
                                                                    <h4>0.92%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>7. Piramal Enterprises Limited</h4>
                                                                    <h4>0.91%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>8. Sundaram Finance Ltd</h4>
                                                                    <h4>0.60%</h4>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="5" >
                                                        <Accordion.Header as="h3" className='faq-header'>
                                                                <span className='cirl' style={{background: "#CD4BA8"}}>

                                                                </span>
                                                                <div className='header-flx'>
                                                                    <h4>Power</h4>
                                                                    <h3 style={{color: "#CD4BA8"}}>6.62%</h3>
                                                                </div>
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className='acd-list'>
                                                                    <h4>1. HDFC Bank Limited</h4>
                                                                    <h4>9.19%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>2. State Bank Of India</h4>
                                                                    <h4>5.67%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>3. Capri Global Capital Limited</h4>
                                                                    <h4>2.77%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>4. Punjab National Bank</h4>
                                                                    <h4>2.32%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>5. Bandhan Bank Ltd</h4>
                                                                    <h4>0.95%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>6. Jio Financial Services </h4>
                                                                    <h4>0.92%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>7. Piramal Enterprises Limited</h4>
                                                                    <h4>0.91%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>8. Sundaram Finance Ltd</h4>
                                                                    <h4>0.60%</h4>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="6" >
                                                        <Accordion.Header as="h3" className='faq-header'>
                                                                <span className='cirl' style={{background: "#45BF60"}}>

                                                                </span>
                                                                <div className='header-flx'>
                                                                    <h4>IT Consulting & Software</h4>
                                                                    <h3 style={{color: "#45BF60"}}>4.89%</h3>
                                                                </div>
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className='acd-list'>
                                                                    <h4>1. HDFC Bank Limited</h4>
                                                                    <h4>9.19%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>2. State Bank Of India</h4>
                                                                    <h4>5.67%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>3. Capri Global Capital Limited</h4>
                                                                    <h4>2.77%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>4. Punjab National Bank</h4>
                                                                    <h4>2.32%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>5. Bandhan Bank Ltd</h4>
                                                                    <h4>0.95%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>6. Jio Financial Services </h4>
                                                                    <h4>0.92%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>7. Piramal Enterprises Limited</h4>
                                                                    <h4>0.91%</h4>
                                                                </div>
                                                                <div className='acd-list'>
                                                                    <h4>8. Sundaram Finance Ltd</h4>
                                                                    <h4>0.60%</h4>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className={toggleState === 2 ? "content  active-content" : "content"}
                                        >
                                            <div className="banner-tab-cont">
                                                <div className="tab-cont-left">
                                                    <div className="heading-sec">
                                                        <h3 className="title-secnd">Become a Mutual Fund Advisort</h3>
                                                        <p>Help people to achieve financial freedom by selling mutual funds through us.</p>
                                                    </div>
                                                    <a href="/" ><span className="btn-bg">Register</span></a>
                                                </div>
                                                <div className="tab-cont-right">

                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className={toggleState === 3 ? "content  active-content" : "content"}
                                        >
                                            <div className="banner-tab-cont">
                                                <div className="tab-cont-left">
                                                    <div className="heading-sec">
                                                        <h3 className="title-secnd">Become an Insurance Agent</h3>
                                                        <p>Assist customers to buy the best insurance which suits all their needs. </p>
                                                    </div>
                                                    <a href="/" ><span className="btn-bg">Register</span></a>
                                                </div>
                                                <div className="tab-cont-right">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              </div>
                          </div>
                      </div>

                      <div className='card-mn fund-mang-details'>
                          <h3>Fund Manager Details</h3>
                          <h4>Ankit Pande</h4>
                          <p>Mr. Ankit Pande holds CFA, MBA. He began his career in core banking software with Infosys Finacle. Began his career in equity research in 2011, picking up the (U.S. based) CFA charter in 2015 and MBA from The Chinese University of Hong Kong in 2017. He won the Thomson Reuters StarMine Award for best stock picker in the IT sector in 2014 and is a lifetime member of the Beta Gamma Sigma honour society.</p>
                      </div>  


                      <div className='card-mn box-shadow fund-comparison-details'>
                          <h3 className='title-secnd'><span>Peer</span> Scheme Comparison</h3>
                          <div className='scheme-list'>
                              <div className='scheme-list-itm active-itm'>
                                  <div className='list-itm-lft'>
                                    <h4>Quant Tax Plan Growth</h4>
                                    <h5><span>AUM</span> 4,433 Cr</h5>
                                    <div className='rating-det'>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                  </div>
                                  </div>
                                  <div className='list-itm-rght'>
                                      <ul className='reset'>
                                          <li>
                                              <h4>74.84%</h4>
                                              <h5>1 Year</h5>
                                          </li>
                                          <li>
                                              <h4>149.47%</h4>
                                              <h5>3 Year</h5>
                                          </li>
                                          <li>
                                              <h4>1.67</h4>
                                              <h5>Expense Ratio</h5>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className='scheme-list-itm'>
                                  <div className='list-itm-lft'>
                                    <h4>Quant Tax Plan Growth</h4>
                                    <h5><span>AUM</span> 4,433 Cr</h5>
                                    <div className='rating-det'>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                  </div>
                                  </div>
                                  <div className='list-itm-rght'>
                                      <ul className='reset'>
                                          <li>
                                              <h4>74.84%</h4>
                                              <h5>1 Year</h5>
                                          </li>
                                          <li>
                                              <h4>149.47%</h4>
                                              <h5>3 Year</h5>
                                          </li>
                                          <li>
                                              <h4>1.67</h4>
                                              <h5>Expense Ratio</h5>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className='scheme-list-itm'>
                                  <div className='list-itm-lft'>
                                    <h4>Quant Tax Plan Growth</h4>
                                    <h5><span>AUM</span> 4,433 Cr</h5>
                                    <div className='rating-det'>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                  </div>
                                  </div>
                                  <div className='list-itm-rght'>
                                      <ul className='reset'>
                                          <li>
                                              <h4>74.84%</h4>
                                              <h5>1 Year</h5>
                                          </li>
                                          <li>
                                              <h4>149.47%</h4>
                                              <h5>3 Year</h5>
                                          </li>
                                          <li>
                                              <h4>1.67</h4>
                                              <h5>Expense Ratio</h5>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className='scheme-list-itm'>
                                  <div className='list-itm-lft'>
                                    <h4>Quant Tax Plan Growth</h4>
                                    <h5><span>AUM</span> 4,433 Cr</h5>
                                    <div className='rating-det'>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                  </div>
                                  </div>
                                  <div className='list-itm-rght'>
                                      <ul className='reset'>
                                          <li>
                                              <h4>74.84%</h4>
                                              <h5>1 Year</h5>
                                          </li>
                                          <li>
                                              <h4>149.47%</h4>
                                              <h5>3 Year</h5>
                                          </li>
                                          <li>
                                              <h4>1.67</h4>
                                              <h5>Expense Ratio</h5>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className='scheme-list-itm'>
                                  <div className='list-itm-lft'>
                                    <h4>Quant Tax Plan Growth</h4>
                                    <h5><span>AUM</span> 4,433 Cr</h5>
                                    <div className='rating-det'>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                      <FontAwesomeIcon icon={faStar} className='fill'/>
                                  </div>
                                  </div>
                                  <div className='list-itm-rght'>
                                      <ul className='reset'>
                                          <li>
                                              <h4>74.84%</h4>
                                              <h5>1 Year</h5>
                                          </li>
                                          <li>
                                              <h4>149.47%</h4>
                                              <h5>3 Year</h5>
                                          </li>
                                          <li>
                                              <h4>1.67</h4>
                                              <h5>Expense Ratio</h5>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>  

                      <div className='card-mn box-shadow performance-hist-details'>
                        <h3 className='title-secnd'>Scheme's <span>Performance</span> (Historical)</h3>
                        <div className='table-responsive'>
                            <table className='table'>
                                <thead>
                                  <tr>
                                    <th>
                                    Calendar
                                    </th>
                                    <th>
                                    Fund Return(%)
                                    </th>
                                    <th>
                                    Category Average(%)
                                    </th>
                                    <th>
                                    Category Best(%)
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1 m</td>
                                    <td>5.12</td>
                                    <td>0.68</td>
                                    <td>5.12</td>
                                  </tr>
                                  <tr>
                                    <td>1 m</td>
                                    <td>20.02</td>
                                    <td>5.13</td>
                                    <td>22.21</td>
                                  </tr>
                                  <tr>
                                    <td>1 m</td>
                                    <td>13.84</td>
                                    <td>6.60</td>
                                    <td>25.28</td>
                                  </tr>
                                  <tr>
                                    <td>1 m</td>
                                    <td>149.47</td>
                                    <td>16.89</td>
                                    <td>149.47</td>
                                  </tr>
                                </tbody>
                            </table>
                        </div>
                      </div>

                      <div className='card-mn card-calculator'>
                          <div className='row'>
                              <div className='col-md-6'>
                                  <h3>Lumpsum & SIP Calculator</h3>
                              </div>
                              <div className='col-md-6'>
                                <div className="toggle">
                                  <span className="">Lumpsum</span>
                                  <input type="checkbox" id="exchangeToggle" name="exchangeToggle" />
                                  <label></label>
                                  <span className="selected">SIP</span>
                                </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}

export default MFTopFunds