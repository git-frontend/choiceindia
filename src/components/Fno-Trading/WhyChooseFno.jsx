
// import React from 'react';
import React from "react";
import img1 from '../../assets/images/fno-trading/pre-built.svg';
import icon2 from '../../assets/images/fno-trading/chain.svg';
import icon3 from '../../assets/images/fno-trading/paypff.svg';
import icon4 from '../../assets/images/fno-trading/charts.svg';
import icon5 from '../../assets/images/fno-trading/oi-spruts.svg';
import img2 from '../../assets/images/fno-trading/img1.png';
import img3 from '../../assets/images/fno-trading/img2.png';
import LazyLoader from '../Common-features/LazyLoader';
import Slider from 'react-slick';
function WhyChooseFno() {

    const settings3 = {
        infinite: true,
        speed: 2000,
        arrows: false,
        slidesToShow: 1,
        autoplay: false,
        margin:15,
        dots:true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
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
        <>
            <section className="why-choose-fno">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
                            <div className="heading-sec text-center">
                                <h2 className="title-secnd">Why Option Traders Choose Choice</h2>
                                <p>Choice helps you to unlock the potential of your trades.
Say goodbye to 
the uncertainties of options trading</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-between">
                        <div className="col-md-12">
                            <div className="head-sec">
                                <h3>Benefits for Options Traders</h3>
                                <p>Get the power of real-time data, pre-built strategies, advanced technical charts, and more at your fingertips.</p>
                            </div>
                            <div className="list-main-prnt">
                                <div className="list-fno-featu">
                                    
                                    <div className="featu-list">
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={img1} />
                                            </span>
                                            <div className="cont">
                                                <h4>Pre-built Option Strategies</h4>
                                                <p>Gain access to a library of proven strategies.</p>
                                            </div>
                                        </div>
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={icon2} />
                                            </span>
                                            <div className="cont">
                                                <h4>Advanced Option Chain</h4>
                                                <p>Navigate the market with precision.</p>
                                            </div>
                                        </div>
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={icon3} />
                                            </span>
                                            <div className="cont">
                                                <h4>Real-Time Pay-off Charts</h4>
                                                <p>Visualize your potential gains instantly.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <Slider {...settings3} className="featu-list featu-list-slider">
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={img1} />
                                            </span>
                                            <div className="cont">
                                                <h4>Pre-built Option Strategies</h4>
                                                <p>Gain access to a library of proven strategies.</p>
                                            </div>
                                        </div>
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={icon2} />
                                            </span>
                                            <div className="cont">
                                                <h4>Advanced Option Chain</h4>
                                                <p>Navigate the market with precision.</p>
                                            </div>
                                        </div>
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={icon3} />
                                            </span>
                                            <div className="cont">
                                                <h4>Real-Time Pay-off Charts</h4>
                                                <p>Visualize your potential gains instantly.</p>
                                            </div>
                                        </div>
                                    </Slider>

                                </div>
                                <div className="img-itm">
                                    <img src={img2} />
                                </div>
                            </div>
                            </div>

                            <div className="col-md-12">
                                <div className="d-flex justify-content-end">
                                    <div className="head-sec">
                                        <h3>Benefits for Expiry Day Traders</h3>
                                        <p>Navigate market volatility with confidence and make informed decisions with comprehensive market insights.</p>
                                    </div>
                                </div>
                            <div className="list-main-prnt last-child">
                                <div className="img-itm">
                                    <img src={img3} />
                                </div>
                                <div className="list-fno-featu">
                                    
                                    <div className="featu-list">
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={icon2} />
                                            </span>
                                            <div className="cont">
                                                <h4>Option Chain</h4>
                                                <p>Analyze market movements effortlessly.</p>
                                            </div>
                                        </div>
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={icon4} />
                                            </span>
                                            <div className="cont">
                                                <h4>Technical Charts</h4>
                                                <p>Make informed decisions with advanced charts.</p>
                                            </div>
                                        </div>
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={icon5} />
                                            </span>
                                            <div className="cont">
                                                <h4>OI Spurts</h4>
                                                <p>Stay ahead with open-interest insights.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Slider {...settings3} className="featu-list featu-list-slider">
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={icon2} />
                                            </span>
                                            <div className="cont">
                                                <h4>Option Chain</h4>
                                                <p>Analyze market movements effortlessly.</p>
                                            </div>
                                        </div>
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={icon4} />
                                            </span>
                                            <div className="cont">
                                                <h4>Technical Charts</h4>
                                                <p>Make informed decisions with advanced charts.</p>
                                            </div>
                                        </div>
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={icon5} />
                                            </span>
                                            <div className="cont">
                                                <h4>OI Spurts</h4>
                                                <p>Stay ahead with open-interest insights.</p>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center">
                            <a href="#" className="btn-bg">Start Trading</a>
                        </div>
                    </div>

                   
                </div>
            </section>
            

        </>
    );
};
export default WhyChooseFno;