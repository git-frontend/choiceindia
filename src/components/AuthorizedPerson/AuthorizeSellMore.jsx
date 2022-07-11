import React from 'react';
import Commodity from '../../assets/images/sub-broker/equity-commodity-currency-broking.svg';
import MF from '../../assets/images/sub-broker/mutual-funds-distribution.svg';
import Insurance from '../../assets/images/sub-broker/insurance.svg';
import Retail from '../../assets/images/sub-broker/retail-loans.svg';



const RemisierSellMore = () => {
    return (
        <div>            
            <section className="sell-more">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="sell-left-sec">
                                        <h2 className="title-secnd">Product Offerings For Authorised Person</h2>
                                        <p className="sml-para-dv">
                                        Choice has an extensive portfolio of product offerings backed by more than 25 years of experience. Authorised Person have the option to offer the entire range of financial products.
                                        </p>
                                        <a href="/" className="btn-bg btn-bg-dark"><span>Start Now</span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="sell-more-list">
                                <div className="more-list-item">
                                    <span>
                                        <img src={Commodity} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" />
                                    </span>
                                    <h3 className="itm-ttl">Equity, Commodity &amp; Currency Broking</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                <span>
                                        <img src={MF} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" />
                                </span>
                                <h3 className="itm-ttl">Mutual Funds Distribution</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <img src={Insurance} alt="Equity, Commodity &amp; Currency Broking"  className='img-fluid' width="45" height="45"/>
                                    </span>
                                    <h3 className="itm-ttl">Insurance</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                <span>
                                        <img src={Retail} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" />
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

export default RemisierSellMore;