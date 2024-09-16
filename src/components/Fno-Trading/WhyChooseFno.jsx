
// import React from 'react';
import React,{useState,useEffect,useRef} from "react";
import img1 from '../../assets/images/fno-trading/pre-built-option-strategies.svg';
import icon2 from '../../assets/images/fno-trading/advanced-option-chain.svg';
import icon3 from '../../assets/images/fno-trading/real-time-pay-off-charts.svg';
import icon6 from '../../assets/images/fno-trading/option-chain.svg';
import icon4 from '../../assets/images/fno-trading/techinical-charts.svg';
import icon5 from '../../assets/images/fno-trading/oi-spurts.svg';
import img2 from '../../assets/images/fno-trading/BackTesting.webp';
import img3 from '../../assets/images/fno-trading/Advanced Option Chain.svg';
import img4 from '../../assets/images/fno-trading/Technical-Charts-with-Realtime-Payoff.webp';
import img5 from '../../assets/images/fno-trading/OI-Spurts-Options.webp';
import option1 from "../../assets/images/fno-trading/option1.webp";
import option2 from "../../assets/images/fno-trading/option2.webp";
import LazyLoader from '../Common-features/LazyLoader';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
function WhyChooseFno() {
    const [isShown2, setIsShown2] = useState(0);
    const [isShown1,setIsShown1]=useState(0);
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [trigger,setTrigger]=useState(false);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
    const [nav3,setNav3]=useState(null);
    const [nav4,setNav4]=useState(null);
    let sliderRef3=useRef(null);
    let sliderRef4=useRef(null);
    useEffect(() => {
        setTrigger(true);
        if(trigger==true){
            setNav1(sliderRef1);
            setNav2(sliderRef2);
            setNav3(sliderRef3);
            setNav4(sliderRef4);
        }
      }, [trigger]);
    const settings3 = {
        infinite: true,
        speed: 1000,
        vertical: true,
        slidesToShow: 3,
        arrows:false,
        autoplay: true,
        dots: false,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        swipeToSlide: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable:false,
        responsive: [
          {
            breakpoint:767,
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

    const setting4={
    arrows:false,
    }

    const settings5={
        infinite: true,
        speed: 1000,
        vertical: true,
        slidesToShow: 3,
        arrows:false,
        autoplay: true,
        dots: false,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        swipeToSlide: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable:false,
        responsive: [
          {
            breakpoint:767,
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
    }

    const settings6={
    arrows:false
    }

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
    alt:"Research Recommendations",
    photo:option1,
    heading:"Research Recommendations",
    content:"Access expert analysis for informed trading"
    },
    {
    image:icon2,
    alt:"Advanced Option Chain",
    photo:option2,
    heading:"Advanced Option Chain",
    content:"Explore available options and strike prices easily"
    },
    {
    image:icon3,
    alt:"Advanced Technical Charts/Indicators",
    photo:img4,
    heading:"Advanced Technical Charts/Indicators",
    content:"Visualise price patterns, trends, & key indicators"
    }
    ]

    const ExpiryTraders=[
    {
    image:icon6,
    alt:"OI Spurts (Short & Long Built Up)",
    photo:img5,
    heading:"OI Spurts (Short & Long Built Up)",
    content:"Spot momentum shifts in open interest"
    },
    {
    image:icon4,
    alt:"Trade Directly from Option Chain",
    photo:img3,
    heading:"Trade Directly from Option Chain",
    content:"Execute trades smoothly during volatile sessions"
    },
    {
    image:icon5,
    alt:"Future Heatmaps",
    photo:img4,
    heading:"Future Heatmaps",
    content:"Spot price movement across futures contracts"
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
                                <p>Get the power of real-time data, pre-built option strategies, daily F&O calls, and more at your fingertips.</p>
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
                                    asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}
                                    focusOnSelect={true}
                                    //  afterChange={(ev) => {
                                    //     setIsShown2(ev)
                                    //   }}
                                      >
                                    {optionsTraders.map((option,idx)=>{
                                    let classNm="lists-itms "+ (idx===isShown2 ?"active":"");
                                     return(
                                     <div className={classNm} key={idx}>
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

                                <div className="image-slider">
                               <div className="shadow-slider-img">
                               <Slider asNavFor={nav1} ref={(slider) => (sliderRef2 = slider)} {...setting4}>
                                <div className="img-itm">
                                        <img src={optionsTraders[0].photo} width={800} height={600} alt={"Benefits for Options Traders"} />
                                  </div>
                                  <div className="img-itm">
                                    <img src={optionsTraders[1].photo} width={800} height={600} alt={"Benefits for Options Traders"} />
                                  </div>
                                  <div className="img-itm">
                                  <img src={optionsTraders[2].photo} width={800} height={600} alt={"Benefits for Options Traders"} />
                                  </div>
                                  {/* {
                                  optionsTraders.map((option,idx)=>(
                                    <div className="img-itm">
                                    <img src={option.photo} width={800} height={600} alt={"Benefits for Options Traders"} />
                                    </div>
                                  ))
                                  } */}
                              
                                </Slider>
                               </div>
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
                            <div className="image-slider">
                            <div className="shadow-slider-img">
                            <Slider asNavFor={nav4} ref={(slider) => (sliderRef3 = slider)} {...settings6}>
                            <div className="img-itm">
                                    <img src={ExpiryTraders[0].photo} width={596} height={360} alt={"Benefits for Expiry Day Traders"} />
                                </div>

                               <div className="img-itm">
                                    <img src={ExpiryTraders[1].photo} width={596} height={360} alt={"Benefits for Expiry Day Traders"} />
                                </div>

                                <div className="img-itm">
                                    <img src={ExpiryTraders[2].photo} width={596} height={360} alt={"Benefits for Expiry Day Traders"} />
                                </div>
                            </Slider>
                            </div>
                           
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

                                    <Slider asNavFor={nav3} ref={(slider) => (sliderRef4 = slider)}  {...settings5} className="featu-list featu-list-slider"
                                    focusOnSelect={true}
                                     >
                                    {ExpiryTraders.map((option,idx)=>{
                                    let classNm="lists-itms "+ (idx===isShown1?"active":"");
                                     return(
                                     <div className={classNm} key={idx}>
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
                            <a href="javascript:void(0)"  className="btn-bg btn-new" onClick={() => scrollToId('demat-form-section')}>Start Trading</a>
                        </div>
                    </div>

                   
                </div>
            </section>
            

        </>
    );
};
export default WhyChooseFno;