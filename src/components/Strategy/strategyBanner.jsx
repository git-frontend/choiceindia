import React from "react";
import bannericon3 from './images/stratezy-page/backtest-trading-strategy.svg';
import bannerimage from './images/stratezy-page/free-trading-strategy-builder.webp';
import bannericon1 from './images/stratezy-page/create-statezy.svg';
import bannericon2 from './images/stratezy-page/virtual-trade.svg';
import LazyLoader from "../Common-features/LazyLoader";



function StrategyBanner() {

    function chapterScroll(id) {
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
            <section className="statezy-banner">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-5 col-md-6">
                            <div className="banner-caption">
                                <h1>Simplifying Algorithmic<br />Trading</h1>
                                <p>We provide a simple way to build, optimise, and go live with your algorithmic trading strategy</p>

                                <div style={{ 'cursor': 'pointer' }} onClick={() => { chapterScroll('explore') }} className="btn-bg btn-banner">Explore Stratezy</div>


                                <p className="">Don’t have an account? <span><a href="https://choiceindia.com/open-free-demat-account">Open Now</a></span> </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="rightsection">

                                <LazyLoader src={bannerimage} alt={"Free Trading Strategy Builder"} width={'555'} height={'326'} className={"img-fluid img"} />
                                <div className="wrap">
                                    <img src={bannericon1} className="banner-icon img-fluid" width="26" height="31" alt="create stratezy" />
                                    <p>Create Strategy</p>
                                </div>
                                <div className="wrapone">
                                    <img src={bannericon3} className="banner-icon img-fluid" width="26" height="24" alt="Run Backtest" />
                                    <p>Run Optimise</p>
                                </div>
                                <div className="wraptwo">
                                    <img src={bannericon2} className="banner-icon img-fluid" width="26" height="41" alt="Virtual/Live Trade" />
                                    <p>Live Trade</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default StrategyBanner; 