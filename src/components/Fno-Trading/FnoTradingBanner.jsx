
// import React from 'react';
import React from "react";
import Bannerimage from '../../assets/images/fno-trading/hero-bg-1.png';
import LazyLoader from '../Common-features/LazyLoader';
function FnoTradingBanner() {

    
    return (
        <>
            <section className="fno-banner">
                <div className="container">
                    <div className="row gx-5 align-items-start">
                        <div className="col-md-5">
                            <div className="ban-caption">
                                <h5>Choice: Options Trader’s Delight</h5>
                                <h1 className="title">Master the <br/> Art of Trading</h1>
                                <p className="para">Leverage our advanced platform, tools, and expertise to make the most of your trading.</p>
                                <a href="" className="btn-bg">Start Now</a>
                            </div>
                            
                        </div>
                        <div className="col-md-5 d-none d-sm-block">
                            <div className="rightsec">

                                    <LazyLoader src={Bannerimage} alt={"About Choice"} className={"img-fluid"} width={"609"} height={"476"} />
                            {/* <img src={Bannerimage} alt="Banner Images" className="img-fluid "></img> */}
                            </div>
                        </div>
                    </div>
                </div>

                
            </section>
            
            <section className="count-fno-members">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="inner-count">
                                <div className="count-itm">
                                    <h3><span class="hvr-txt"><span>25</span></span><small>+</small></h3>
                                    <h5>Year of Experience</h5>
                                </div>
                                <div className="count-itm">
                                    <h3><span class="hvr-txt"><span>850K</span></span><small>+</small></h3>
                                    <h5>Happy Clients</h5>
                                </div>
                                <div className="count-itm">
                                    <h3><span class="hvr-txt"><span>104</span></span><small>+</small></h3>
                                    <h5>Local Branches</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
export default FnoTradingBanner;