
// import React from 'react';
import React,{useState} from "react";
import img1 from '../../assets/images/fno-trading/pre-built-option-strategies.svg';
import icon2 from '../../assets/images/fno-trading/advanced-option-chain.svg';
import icon3 from '../../assets/images/fno-trading/real-time-pay-off-charts.svg';
import icon6 from '../../assets/images/fno-trading/option-chain.svg';
import icon4 from '../../assets/images/fno-trading/techinical-charts.svg';
import icon5 from '../../assets/images/fno-trading/oi-spurts.svg';
import img2 from '../../assets/images/fno-trading/Pre Build Option Strategies.svg';
import img3 from '../../assets/images/fno-trading/Advanced Option Chain.svg';
import img4 from '../../assets/images/fno-trading/Technical Charts with Realtime Payoff.svg';
import img5 from '../../assets/images/fno-trading/OI Spurts.svg';
import option1 from "../../assets/images/fno-trading/option1.svg";
import option2 from "../../assets/images/fno-trading/option2.svg";
import LazyLoader from '../Common-features/LazyLoader';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
function WhyChooseFno() {
    const [isShown2, setIsShown2] = useState(0);
    const [isShown1,setIsShown1]=useState(0);
    const settings3 = {
        infinite: true,
        speed:2000,
        vertical: true,
        focusOnSelect: true,
        touchMove: true,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        dots: false,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              vertical: false,
              autoplaySpeed: 3000,
              adaptiveHeight: false,
              dots: true,
            }
          }
          
        ]
    };

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
    
    const optionsTraders=[
    {
    image:img1,
    alt:"Pre-built Option Strategies",
    photo:option1,
    heading:"Pre-built Option Strategies",
    content:"Gain access to a library of proven strategies."
    },
    {
    image:icon2,
    alt:"Advanced Option Chain",
    photo:option2,
    heading:"Advanced Option Chain",
    content:"Navigate the market with precision."
    },
    {
    image:icon3,
    alt:"Real-Time Pay-off Charts",
    photo:img4,
    heading:"Real-Time Pay-off Charts",
    content:"Visualize your potential gains instantly."
    }
    ]

    const ExpiryTraders=[
    {
    image:icon6,
    alt:"Option Chain",
    photo:img2,
    heading:"Options Back testing",
    content:"Analyze market movements effortlessly."
    },
    {
    image:icon4,
    alt:"Technical Charts",
    photo:img4,
    heading:"Technical Charts",
    content:"Make informed decisions with advanced charts."
    },
    {
    image:icon5,
    alt:"OI Spurts",
    photo:img5,
    heading:"OI Spurts",
    content:"Stay ahead with open-interest insights."
    }
    ]
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
                                    
                                    {/* <div className="featu-list">
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={img1} alt={"Pre-built Option Strategies"} />
                                            </span>
                                            <div className="cont">
                                                <h4>Pre-built Option Strategies</h4>
                                                <p>Gain access to a library of proven strategies.</p>
                                            </div>
                                        </div>
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={icon2} alt={"Advanced Option Chain"}/>
                                            </span>
                                            <div className="cont">
                                                <h4>Advanced Option Chain</h4>
                                                <p>Navigate the market with precision.</p>
                                            </div>
                                        </div>
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={icon3} alt={"Real-Time Pay-off Charts"} />
                                            </span>
                                            <div className="cont">
                                                <h4>Real-Time Pay-off Charts</h4>
                                                <p>Visualize your potential gains instantly.</p>
                                            </div>
                                        </div>
                                    </div> */}
                                    
                                    <Slider {...settings3} className="featu-list featu-list-slider"
                                     afterChange={(ev) => {
                                        setIsShown2(ev)
                                      }}>
                                    {optionsTraders.map((option,idx)=>{
                                    let classNm="lists-itms "+ (idx===isShown2?"list-itm-active":"");
                                     return(
                                     <div className={classNm} key={idx} onMouseOver={() => setIsShown2(idx)}>
                                     <span className="icons-m">
                                                <img src={option.image} alt={option.alt} />
                                            </span>
                                            <div className="cont">
                                                <h4>{option.heading}</h4>
                                                <p>{option.content}</p>
                                            </div>
                                     </div>
                                    )
                                     })}
                                    </Slider>

                                </div>
                                <div className="img-itm">
                                    <LazyLoader src={optionsTraders[isShown2].photo} width={559} height={443} alt={"Benefits for Options Traders"} />
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
                                    <LazyLoader src={ExpiryTraders[isShown1].photo} width={596} height={360} alt={"Benefits for Expiry Day Traders"} />
                                </div>
                                <div className="list-fno-featu">
                                    
                                    {/* <div className="featu-list">
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={icon6} alt={"Option Chain"} />
                                            </span>
                                            <div className="cont">
                                                <h4>Option Chain</h4>
                                                <p>Analyze market movements effortlessly.</p>
                                            </div>
                                        </div>
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={icon4} alt={"Technical Charts"} />
                                            </span>
                                            <div className="cont">
                                                <h4>Technical Charts</h4>
                                                <p>Make informed decisions with advanced charts.</p>
                                            </div>
                                        </div>
                                        <div className="lists-itms">
                                            <span className="icons-m">
                                                <img src={icon5} alt={"OI Spurts"} />
                                            </span>
                                            <div className="cont">
                                                <h4>OI Spurts</h4>
                                                <p>Stay ahead with open-interest insights.</p>
                                            </div>
                                        </div>
                                    </div> */}

                                    <Slider {...settings3} className="featu-list featu-list-slider"
                                      afterChange={(ev) => {
                                        setIsShown1(ev)
                                      }}>
                                    {ExpiryTraders.map((option,idx)=>{
                                    let classNm="lists-itms "+ (idx===isShown1?"list-itm-active":"");
                                     return(
                                     <div className={classNm} key={idx} onMouseOver={() => setIsShown1(idx)}>
                                     <span className="icons-m">
                                                <img src={option.image} alt={option.alt} />
                                            </span>
                                            <div className="cont">
                                                <h4>{option.heading}</h4>
                                                <p>{option.content}</p>
                                            </div>
                                     </div>
                                    )
                                     })}
                                    </Slider>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center">
                            <a href="javascript:void(0)"  className="btn-bg btn-new" onClick={() => scrollToId('campaignForm')}>Start Trading</a>
                        </div>
                    </div>

                   
                </div>
            </section>
            

        </>
    );
};
export default WhyChooseFno;