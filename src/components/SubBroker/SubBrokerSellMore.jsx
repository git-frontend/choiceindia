import React from 'react';
import Commodity from '../../assets/images/sub-broker/equity-commodity-currency-broking.svg';
import MF from '../../assets/images/sub-broker/mutual-funds-distribution.svg';
import Insurance from '../../assets/images/sub-broker/insurance.svg';
import Retail from '../../assets/images/sub-broker/retail-loans.svg';



const SubBrokerSellMore = () => {
    return (
        <div>            
            <section className="sell-more">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4">
                        <div className="row">
                            <div className="col-md-12">
                            <div className="wow fadeInLeft" data-wow-delay="0.5s">
                                <h2 className="titl3">Sell More. Earn More!</h2>
                                <p className="sml-para-dv">Choice has an extensive portfolio of product offerings backed by more than 25 years of experience. Sub Broker have the option to offer the entire range of financial products.</p>
                                <a href="#join-now" className="franchise-same-btn hide-mb"><span>Start Now</span> </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="sell-more-list">
                                <div className="more-list-item wow fadeInRight" data-wow-delay="0.8s">
                                    <span>
                                        <img src={Commodity} alt="Equity, Commodity &amp; Currency Broking" />
                                    </span>
                                    <h3 className="itm-ttl">Equity, Commodity &amp; Currency Broking</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight" data-wow-delay="0.8s">
                                <span>
                                        <img src={MF} alt="Equity, Commodity &amp; Currency Broking" />
                                </span>
                                <h3 className="itm-ttl">Mutual Funds Distribution</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight" data-wow-delay="0.8s">
                                    <span>
                                        <img src={Insurance} alt="Equity, Commodity &amp; Currency Broking" />
                                    </span>
                                    <h3 className="itm-ttl">Insurance</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight" data-wow-delay="0.8s">
                                <span>
                                        <img src={Retail} alt="Equity, Commodity &amp; Currency Broking" />
                                </span>
                                <h3 className="itm-ttl">Retail Loans</h3>
                            </div>
                            </div>
                            <a href="#join-now" className="franchise-same-btn hide-desk"><span>Start Now</span> </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default SubBrokerSellMore;