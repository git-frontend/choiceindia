import React from 'react';
import { Link } from "react-router-dom";
import Insurance from '../../assets/images/mutual-fund-distributor/sell-insurance.svg';
import Retail from '../../assets/images/mutual-fund-distributor/sell-retail-loans.svg';
import Commodity from '../../assets/images/mutual-fund-distributor/open-stock-market-account.svg';
import MF from '../../assets/images/mutual-fund-distributor/sell-bonds-fds-nps.svg';
import LazyLoader from '../Common-features/LazyLoader';


const MFDistributorSellMore = () => {
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
                                        <p className="sml-para-dv">With Choice, one can increase his prospects by offering clients a variety of financial instruments in addition to mutual funds, increasing revenue.</p>
                                        <Link to={(window.location.pathname =="/campaign/mutual-fund-distributor")? "/campaign/mutual-fund-distributor":(window.location.pathname =="/mutual-fund-distributor")? "/mutual-fund-distributor":""} className="btn-bg btn-bg-dark" onClick={()=>scrollToId('sub-broker-form')}><span>Start Now</span> </Link>
                                        {/* <Link to="/" className="btn-bg btn-bg-dark"><span>Start Now</span> </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="sell-more-list">
                                
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={Insurance} alt={"Sell Insurance"} className={'img-fluid'} width={"60"} height={"60"} />
                                        {/* <img src={Insurance} alt="Equity, Commodity &amp; Currency Broking"  className='img-fluid' width="45" height="45"/> */}
                                    </span>
                                    <h3 className="itm-ttl">Insurance</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={Retail} alt={"Sell Retail Loans"} className={'img-fluid'} width={"60"} height={"60"} />
                                        {/* <img src={Retail} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" /> */}
                                    </span>
                                    <h3 className="itm-ttl">Retail Loans</h3>
                                </div>
                                <div className="more-list-item">
                                    <span>
                                        <LazyLoader src={Commodity} alt={"Open Stock Market Account"} className={'img-fluid'} width={"60"} height={"60"} />
                                        {/* <img src={Commodity} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" /> */}
                                    </span>
                                    <h3 className="itm-ttl">Stock Market</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={MF} alt={"Sell Bonds, FDS & NPS"} className={'img-fluid'} width={"60"} height={"60"} />
                                        {/*<img src={MF} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" />*/}
                                    </span>
                                    <h3 className="itm-ttl">Bonds, FD &amp; NPS</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default MFDistributorSellMore;