import React from 'react'

import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Image1 from '../../assets/images/mf-investica/pie-chart.png';
import Image2 from '../../assets/images/mf-investica/donuts-chart.webp';

function PortfolioAnalysis() {

  const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [exchangeToggle, setExchangeToggle] = useState(false);

    const onToggleChange = () => {
        setExchangeToggle(!exchangeToggle);
    };

  return (
    <>
         <div className='card-mn box-shadow analysis-portfolio'>
            <div className='row align-items-center'>
                <div className='col-md-6'>
                    <h3 className='title-secnd'>Scheme's Portfolio <span>Analysis</span></h3>
                </div>
                <div className='col-md-6'>
                    <div className='order-wise-sec'>
                        <p className='firt-par'>As on: 2023-07-31</p>
                        <p className='view-lc'>View allocation % by</p>
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
                             <div className="equity-tab-cont">
                                    <div className='lft-chart'>
                                        <img src={Image2} className="img-fluid" alt="" />
                                    </div>
                                    <div className="right-cont-details">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0" >
                                            <Accordion.Header as="h3" className='faq-header'>
                                                <span className='cirl' style={{background: "#7C160E"}}>

                                                </span>
                                                <div className='header-flx'>
                                                    <h4>Others</h4>
                                                    <h3 style={{color: "#7C160E"}}>1.46%</h3>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className='acd-list'>
                                                    <h4>1. Clearing Corporation Of India Ltd</h4>
                                                    <h4>0.92%</h4>
                                                </div>
                                                <div className='acd-list'>
                                                    <h4>2. Net Receivables / (Payables)</h4>
                                                    <h4>0.54%</h4>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>

                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                            <div className="equity-tab-cont">
                                    <div className='lft-chart'>
                                        <img src={Image2} className="img-fluid" alt="" />
                                    </div>
                                    <div className="right-cont-details">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0" >
                                            <Accordion.Header as="h3" className='faq-header'>
                                                <span className='cirl' style={{background: "#7C160E"}}>

                                                </span>
                                                <div className='header-flx'>
                                                    <h4>Others</h4>
                                                    <h3 style={{color: "#7C160E"}}>1.46%</h3>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className='acd-list'>
                                                    <h4>1. Clearing Corporation Of India Ltd</h4>
                                                    <h4>0.92%</h4>
                                                </div>
                                                <div className='acd-list'>
                                                    <h4>2. Net Receivables / (Payables)</h4>
                                                    <h4>0.54%</h4>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PortfolioAnalysis