import React from 'react';
import { Link } from "react-router-dom";
import Commodity from '../../assets/images/sub-broker/equity-commodity-currency-broking.svg';
import MF from '../../assets/images/sub-broker/mutual-funds-distribution.svg';
import Insurance from '../../assets/images/sub-broker/insurance.svg';
import Retail from '../../assets/images/sub-broker/retail-loans.svg';
import LazyLoader from '../Common-features/LazyLoader';


const SubBrokerSellMore = () => {
    function scrollToId(id) {
        var element = document.getElementById(id);
        var headerOffset = 140;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    return (
        <div>
            <section className="sell-more">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="sell-left-sec">
                                        <h2 className="title-secnd">Sell More. Earn More!</h2>
                                        <p className="sml-para-dv">Choice has an extensive portfolio of product offerings backed by more than 25 years of experience. Sub Broker have the option to offer the entire range of financial products.</p>
                                        <a href="javascript:void(0)" className="btn-bg btn-bg-dark" onClick={()=>scrollToId('sub-broker-form')}><span>Start Now</span> </a>
                                        {/* <Link to="/" className="btn-bg btn-bg-dark"><span>Start Now</span> </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="sell-more-list">
                                <div className="more-list-item">
                                    <span>
                                        <LazyLoader src={Commodity} alt={"Equity, Commodity &amp; Currency Broking"} className={'img-fluid'} width={"45"} height={"45"} />
                                        {/* <img src={Commodity} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" /> */}
                                    </span>
                                    <h3 className="itm-ttl">Equity, Commodity &amp; Currency Broking</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={MF} alt={"Mutual Funds Distribution"} className={'img-fluid'} width={"45"} height={"45"} />
                                        {/*<img src={MF} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" />*/}
                                    </span>
                                    <h3 className="itm-ttl">Mutual Funds Distribution</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={Insurance} alt={"Insurance"} className={'img-fluid'} width={"45"} height={"45"} />
                                        {/* <img src={Insurance} alt="Equity, Commodity &amp; Currency Broking"  className='img-fluid' width="45" height="45"/> */}
                                    </span>
                                    <h3 className="itm-ttl">Insurance</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={Retail} alt={"Retail Loans"} className={'img-fluid'} width={"45"} height={"45"} />
                                        {/* <img src={Retail} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" /> */}
                                    </span>
                                    <h3 className="itm-ttl">Retail Loans</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default SubBrokerSellMore;