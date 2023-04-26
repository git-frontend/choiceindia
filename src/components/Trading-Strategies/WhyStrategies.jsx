
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import Slider from 'react-slick';
import Image1 from '../../assets/images/trading-strategies/readymade-trading-strategies.svg';
import Image2 from '../../assets/images/trading-strategies/unlimited-backtests.svg';
import Image3 from '../../assets/images/trading-strategies/timely-alerts-on-your-virtual-live-trades.svg';
import Image4 from '../../assets/images/trading-strategies/in-built-charting-tool.svg';
import Image5 from '../../assets/images/trading-strategies/no-coding-skills-required.svg';
import whyStrategyCampaign from "../../Data/whyStratezyCampaign";


function WhyStrategies() {

  
    const settings1 = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        arrows: true,
        autoplay: true,
        dots: false,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        swipeToSlide: true,
        adaptiveHeight: false,
        
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                adaptiveHeight: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
      };

  return (
    <div>

        <section className="stratezy-card-sec">
            <div className="container">
            <div className="row">
                        <div className="co-md-12">
                            <div className="own-startezy-card">
                                <div class="bar-cont-des">
                                    <h3 class="title-fourth">Don’t rely on the strategy developed by others. <br/>Develop your own strategy</h3>
                                    <a href="/" target="_blank" class="btn-bg btn-bg-dark">Get Started</a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>

    <section className="why-stratezy-sec">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="why-startezy">
                        <div className="left-sec">
                            <h2 className="title-secnd">Why Stratezy?</h2>
                            
                        </div>
                        <div className="right-sec">
                        <div className="finx-app-list">
                            <Slider {...settings1} className="stratezy-slider">
                              {
                                whyStrategyCampaign.map((res)=>{

                                  return(
                                    <div className="app-list-item">
                                    <img src={res.image} alt="Ready-Made Strategies to Start Trading" className="img-fluid" width={"100"} height={"100"}/>
                                    <h3>Ready-Made strategies to start with</h3>
                                    <p>Our experts have created ready to use strategies for you to get started with your custom strategies.</p>
                                    </div>

                                  )
                                })
                              }
                               
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    {/* <div className="app-list-item">
                                    <img src={Image1} alt="Ready-Made Strategies to Start Trading" className="img-fluid" width={"100"} height={"100"}/>
                                    <h3>Ready-Made strategies to start with</h3>
                                    <p>Our experts have created ready to use strategies for you to get started with your custom strategies.</p>
                                </div>
                                <div className="app-list-item">
                                    <img src={Image2} alt="Unlimited Backtests" className="img-fluid"  width={"100"} height={"100"}/>
                                    <h3>Unlimited Backtests</h3>
                                    <p>Backtest and optimize your strategies without any capping on the number of backtests.</p>
                                </div>
                                <div className="app-list-item">
                                    <img src={Image3} alt="Timely Alerts on Your Virtual & Live Trades" className="img-fluid"  width={"100"} height={"100"}/>
                                    <h3>Timely alerts on your Virtual & Live trades</h3>
                                    <p>Get timely alerts as and when your trades are triggered.</p>
                                </div>
                                <div className="app-list-item">
                                    <img src={Image4} alt="In-Built Charting Tool" className="img-fluid"  width={"100"} height={"100"}/>
                                    <h3>In-built Charting tool</h3>
                                    <p>In Charting tool to visualize your strategy & trades.</p>
                                </div>
                                <div className="app-list-item">
                                    <img src={Image5} alt="No Coding Skills Required" className="img-fluid"  width={"100"} height={"100"}/>
                                    <h3>No Coding Skills required</h3>
                                    <p>Stratezy is the easiest tool to build your own trading strategies without any coding skills.</p>
                                </div> */}

    

   
    
    </div>
  );
}

export default WhyStrategies;
