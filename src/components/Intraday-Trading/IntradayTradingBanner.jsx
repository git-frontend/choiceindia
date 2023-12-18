
// import React from 'react';
import React from "react";
import Bannerimage from '../../assets/images/fno-trading/hero-bg-1.png';
import LazyLoader from '../Common-features/LazyLoader';
function FnoTradingBanner() {

    
    return (
        <>
            <section className="fno-banner intraday-banner">
                <div className="container">
                    <div className="row gx-5 align-items-start">
                        <div className="col-md-6">
                            <div className="ban-caption">
                                <h5>Choice: Preferred by Intraday Traders</h5>
                                <h1 className="title">Supercharge Your <br/> <span>Intraday</span> Trading</h1>
                                <p className="para">Maximize your intraday profits with advanced tools and personalized services.</p>
                                <a href="" className="btn-bg btn-bg-dark">Start Today</a>
                            </div>
                        </div>
                    </div>
                   <div className="row">
                        <div className="col-md-7">
                            <div className="inner-count">
                                <div className="count-itm">
                                    <h3><span class="hvr-txt"><span>25</span></span><small>+</small></h3>
                                    <h5>Year of Experience</h5>
                                </div>
                                <div className="count-itm">
                                    <h3><span class="hvr-txt"><span>104</span></span><small>+</small></h3>
                                    <h5>Local Branches</h5>
                                </div>
                                <div className="count-itm">
                                    <h3><span class="hvr-txt"><span>850K</span></span><small>+</small></h3>
                                    <h5>Happy Clients</h5>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </section>
            <section className="count-fno-members">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                           
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
export default FnoTradingBanner;