import React from 'react';
import { Link } from "react-router-dom";
import Commodity from '../../assets/images/sub-broker/equity-commodity-currency-broking.svg';
import MF from '../../assets/images/sub-broker/mutual-funds-distribution.svg';
import Insurance from '../../assets/images/sub-broker/insurance.svg';
import Retail from '../../assets/images/sub-broker/retail-loans.svg';
import Bonds from '../../assets/images/sub-broker/sub-broker-earn-through-bonds.svg';
import CorporatePd from '../../assets/images/sub-broker/sub-broker-earn-through-corporate-fd.svg';
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
                                        <h2 className="title-secnd">Unlock Your Earning Potential</h2>
                                        <p className="sml-para-dv">Choice offers an extensive portfolio of financial products backed by 25+ years of experience. As a sub broker, you can offer a wide range of financial products, including:</p>
                                        <Link to={(window.location.pathname =="/campaign/sub-broker-franchise")? "/campaign/sub-broker-franchise":(window.location.pathname =="/sub-broker-franchise")? "/sub-broker-franchise":""} className="btn-bg btn-bg-dark" onClick={()=>scrollToId('sub-broker-form')}><span>Find out more</span> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="sell-more-list">
                                <div className="more-list-item">
                                    <span>
                                        <LazyLoader src={Commodity} alt={"Become a sub broker & earn through Equity and Commodity Broking"} className={'img-fluid'} width={"60"} height={"60"} />
                                    </span>
                                    <h3 className="itm-ttl">Stock Market</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={MF} alt={"Become a sub broker & earn through Mutual Funds"} className={'img-fluid'} width={"60"} height={"60"} />
                                    </span>
                                    <h3 className="itm-ttl">Mutual Funds</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={Insurance} alt={"Become a sub broker & earn through Insurance"} className={'img-fluid'} width={"60"} height={"60"} />
                                    </span>
                                    <h3 className="itm-ttl">Insurance</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={Retail} alt={"Become a sub broker & earn through retail loans"} className={'img-fluid'} width={"60"} height={"60"} />
                                    </span>
                                    <h3 className="itm-ttl">Retail Loans</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={Bonds} alt={"Become a sub broker & earn through Bonds"} className={'img-fluid'} width={"60"} height={"60"} />
                                    </span>
                                    <h3 className="itm-ttl">Bonds</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={CorporatePd} alt={"Become a sub broker & earn through Corporate FDs"} className={'img-fluid'} width={"60"} height={"60"} />
                                    </span>
                                    <h3 className="itm-ttl">Corporate FDs</h3>
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