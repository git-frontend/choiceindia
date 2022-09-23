import React, { useState } from "react";
import image1 from './images/stratezy-page/readymade-trading-strategies.svg';
import image2 from './images/stratezy-page/unlimited-backtests.svg';
import image3 from './images/stratezy-page/alerts-on-virtual-live-trades.svg';
import image4 from './images/stratezy-page/in-built-charting-tool.svg';
import youtubeimg from './images/stratezy-page/youtube-video-icon.webp';
import LazyLoader from "../Common-features/LazyLoader";


function StrategyBody() {
    const environment = 'Live';
    const config = {
        UATURL: 'https://betajiffy.choicebroking.in/auth/login?redirectUrl=https://stratezy.choiceindia.com/dashboard',
        LiveURL: 'https://finx.choiceindia.com/auth/login?redirectUrl=https://stratezy.choiceindia.com/dashboard'
    };
    const checkURL = config[environment + 'URL'];
    const [videoVisibility, setVideoVisibility] = useState(false);
    function loadstrategy() {

        setTimeout(() => {
            let iframe = document.getElementById("strategy-youtube");
            iframe.src = 'https://www.youtube.com/embed/fFEx3wQGzAI?autoplay=1';

        }, 60);


    }
    return (
        <div>

            <section className="stratezy">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="headingsec">
                                <h2 className="title">Features</h2>
                                {/**<p className="para">Our research team has created thematic baskets to make investing easier that could be aligned with your financial goals.</p>*/}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-5 respflex">
                        <div className="featureone">
                            <p className="heading">Ready-Made strategies to start with</p>
                            <div className="d-flex imgtextwrap">
                                <div className="subtext">
                                    Our experts have created ready to use strategies for you to get started with your custom strategies.
                                </div>
                                <div className="imgwrap">
                                    <LazyLoader src={image1} className={"img-fluid feature-img"} width={'137'} height={'173'} alt={"Readymade Trading Strategies"} />
                                    {/* <img src={image1} className="img-fluid feature-img" alt="Readymade Trading Strategies" /> */}

                                </div>
                            </div>
                        </div>
                        <div className="featuretwo">
                            <p className="heading">Unlimited Backtests</p>
                            <div className="d-flex imgtextwrap">
                                <div className="subtext">
                                    Backtest and optimize your strategies without any capping on number of backtests
                                </div>
                                <div className="imgwrap">
                                    <LazyLoader src={image2} className={"img-fluid feature-img"} width={'114'} height={'152'} alt={"Unlimited Backtests"} />
                                    {/* <img src={image2} className="img-fluid feature-img" alt="Unlimited Backtests" /> */}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-5 respflex mt-5-0-mb">
                        <div className="featurethree">
                            <p className="heading">Timely alerts on your Virtual &amp; Live trades</p>
                            <div className="d-flex imgtextwrap">
                                <div className="subtext">
                                    Get timely alerts as and when your trades are triggered.
                                </div>
                                <div className="imgwrap">
                                    <LazyLoader src={image3} className={"img-fluid feature-img"} width={'122'} height={'141'} alt={"Alerts on Virtual &amp; Live Trades"} />
                                    {/* <img src={image3} className="img-fluid feature-img" alt="Alerts on Virtual &amp; Live Trades" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="featurefour">
                            <p className="heading">In-built Charting tool</p>
                            <div className="d-flex imgtextwrap">
                                <div className="subtext">
                                    In Charting tool to visualize your strategy &amp; trades
                                </div>
                                <div className="imgwrap">
                                    <LazyLoader src={image4} className={"img-fluid feature-img"} width={'168'} height={'158'} alt={"In Built Charting Tool"} />
                                    {/* <img src={image4} className="img-fluid feature-img" alt="In Built Charting Tool" /> */}

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-center mt-5">

                    </div>
                </div>
            </section>

            <section className='algorithmstrategy'>
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className="wrapper">
                            <div className="col-md-8">
                                <div className="headingsec">
                                    <h2 className="title">How to start algorithmic strategy?</h2>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className='algo' id="strategy-video">

                                    {!videoVisibility && <div className="youtube-container">
                                        <img className="youtube-container-img" src={youtubeimg} width="1085" height="610" alt="Loading" onClick={() => {

                                            setVideoVisibility(true)
                                            loadstrategy()
                                        }}></img>

                                        <div className="ytubeBg" title="Click to play" onClick={() => {

                                            setVideoVisibility(true)
                                            loadstrategy()
                                        }}>
                                            <svg className="play" xmlns="http://www.w3.org/2000/svg" viewBox="-7 0 50 55">
                                                <path className="path" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" />
                                            </svg>
                                        </div>
                                    </div>}

                                    {videoVisibility && <iframe width="100%" height="500" o title="YouTube video player" id="strategy-youtube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}




                                </div>
                            </div>
                            <div className="col-md-10">

                                <div className="d-flex justify-content-between wrap respflex">
                                    <p className="headingtext">Enjoy the Joy of Earning with Choice.</p>
                                    <a href={`${checkURL}`} className="btn-bg btn-banner">Explore Stratezy</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}
export default StrategyBody; 