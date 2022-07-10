import React from "react";
import "./css/stratezy-landing-page.scss";
import "./css/template1.scss";
import "./css/template2.scss";
import { Accordion } from 'react-bootstrap';
import bannerimage from './images/stratezy-page/free-trading-strategy-builder.webp';
import bannericon1 from './images/stratezy-page/create-statezy.svg';
import bannericon2 from './images/stratezy-page/virtual-trade.svg';
import image1 from './images/stratezy-page/readymade-trading-strategies.svg';
import image2 from './images/stratezy-page/unlimited-backtests.svg';
import image3 from './images/stratezy-page/alerts-on-virtual-live-trades.svg';
import image4 from './images/stratezy-page/in-built-charting-tool.svg';
import bannericon3 from './images/stratezy-page/backtest-trading-strategy.svg';
import youtubeimg from './images/stratezy-page/youtube-video-icon.webp';
import icon1 from './images/stratezy-page/own-stratezy.svg';
import slider1 from './images/stratezy-page/Optimise.webp';
import slider2 from './images/stratezy-page/backtest.webp';
import slider3 from './images/stratezy-page/Create your own Strategy.webp';

import slider4 from './images/stratezy-page/live trade.webp';

import slider5 from './images/stratezy-page/virtual trade.webp';

import icon3 from './images/stratezy-page/live-trade.svg';
import icon5 from './images/stratezy-page/virtual-trade.svg';
import icon4 from './images/stratezy-page/backtest-trading-strategy.svg';
import icon2 from './images/stratezy-page/optimise-trading-strategy.svg';


// import bannericon3 from './images/stratezy-page/backtest-trading-strategy.svg';
// import bannericon3 from './images/stratezy-page/backtest-trading-strategy.svg';




/**
 * FAQ section
 * @returns FAQ Component
 */
 const FaqAccordion = () => {
  const [data, setData] = React.useState([]); 
  React.useEffect(() => {
    getData();
    

  }, []);

 

  /**
   * Get FAQ List
   */
  function getData()
   {
     setTimeout(() => {
      var myHeaders = new Headers();
      myHeaders.append("authorization", " Basic d09tdkVOeXJSZElaMW9oOXNpVE86eA==");
      myHeaders.append("Cookie", "_x_w=20");
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch('https://choicebroking.freshdesk.com/api/v2/solutions/folders/22000178039/articles', requestOptions)
        .then(response => {
          return response.json();
        })
        .then(users => {
          setData(prevUsers => ([...prevUsers, ...users].filter((ele, i) => i < 5)));
        
        });
       
     }, 1000);

 
   
  }
  return (
    <section className="basket-faqs">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-sec text-left">
              <h3 className="title-first">FAQs</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
          <Accordion defaultActiveKey="0" class="accordion" id="accordionExample">
            <div className="accordion-container">
              {
                data.map((res, i) => {
                  
                  
                  return (

                    <Accordion.Item key={res.id} eventKey={i} className="ac accordion-item" >
                    
                      <Accordion.Header className="ac-q">
                      <button className="acc">
                      
                        {res.title}
                        
                        </button>
                      </Accordion.Header>
                    
                      <div className='ac-a'>
                        <div >
                        <Accordion.Body dangerouslySetInnerHTML={{__html: res.description}}></Accordion.Body>
                        </div>
                       
                      </div>
                    </Accordion.Item>


                  )
                })
              }
            </div>
            </Accordion>
          </div>
          <div className="col-md-12 text-center">
            <a className="btn-bg btn-banner" href='https://choicebroking.freshdesk.com/support/solutions/folders/22000178039' target='_blank' >
              Explore FAQ's
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyStrategy() {

  const [valRight, setValRight] = React.useState(() => 0);
  const environment = 'Live';

  const [dataObj, setdataObj] = React.useState(() => [
    {
      image:`${slider3}`,
      icon: `${icon1}`,
      heading: "Create your own Strategy",
      description: "Create unlimited strategies with a wide variety of Technical Indicators"
    },

    {
      image:`${slider2}`,
      icon: `${icon4}`,
      heading: "Backtest in Jiffy",
      description: "Backtest Your created strategy with Profit & Stoploss percentage"

    },

    {
      image:`${slider1}`,
      icon: `${icon2}`,
      heading: "Optimize your Risk-reward ",
      description: "Optimize your strategy with Target & SL parameters for better returns"

    },

    {
      image:`${slider5}`,
      icon: `${icon5}`,
      heading: "Virtual Trade",
      description: "Virtual Trade your Strategies without utilizing real funds"

    },
    {
      image:`${slider4}`,
      icon: `${icon3}`,
      heading: "Live Trade",
      description: "Automate your trades by going live with your backtested strategies"

    },

  ])

  const [counterRight, setcounterRight] = React.useState(() => 1);
  const [counterRight2, setcounterRight2] = React.useState(() => 1);
  const [disableRight, setdisableRight] = React.useState(() => false);
  const [disableLeft, setdisableLeft] = React.useState(() => true);

  const counter = React.useRef(0);
  function toggleForward() {
    if (counterRight === 0) {
      setdisableLeft(true);
      setdisableRight(false);
    } else if (counterRight === 5) {
      setdisableLeft(false);
      setdisableRight(true);
    } else {
      setdisableLeft(false);
      setdisableRight(false);
    }

    setcounterRight(counterRight + 1);

    counter.current = counter.current + 1;

    if (valRight === 3) {
      setValRight(prevCount => prevCount * 0);
    } else {
      setValRight(prevCount => prevCount + 1);

      let temp;
      temp = dataObj.shift();
      dataObj.push(temp);

      setcounterRight2(0);
      setTimeout(() => {
       
            setcounterRight2(prevCount => prevCount + 1);
      }, 10);
    }
  }
  function toggleBackward() {

    if (counterRight === 5) {
      setdisableLeft(false);
      setdisableRight(true);
    } else if (counterRight > 2) {
      setdisableLeft(false);
      setdisableRight(false);
    } else {
      setdisableLeft(true);
      setdisableRight(false);
    }

    setcounterRight(counterRight - 1);

    if (valRight === 0) {
      setValRight(prevCount => 5)
    } else {
      setValRight(prevCount => prevCount - 1);
      let temp = dataObj.pop();
   
      dataObj.unshift(temp);
      setcounterRight2(0);
setTimeout(() => {
 
      setcounterRight2(prevCount => prevCount + 1);
}, 10);
    }
  }

  const config = {
    UATURL: 'https://betajiffy.choicebroking.in/auth/login?redirectUrl=https://stratezy.choiceindia.com/dashboard',
    LiveURL: 'https://jiffy.choiceindia.com/auth/login?redirectUrl=https://stratezy.choiceindia.com/dashboard'
};
const checkURL = config[environment + 'URL'];




  return (

    <section className="why-stratezy">
      <div className="container">
      {counterRight2?
        <div className="row" id="explore" >
          <div className="col-md-7 order2" >
            <div className="screen">
              <img src={dataObj[0].image}  className="img-fluid" alt="Why Stratezy" />
            </div>
          </div>
          <div className="col-md-5">
            <div className="rightwrap">
              <div className="heading-sec text-center">
                <h2 className="title">Why Stratezy?</h2>
              </div>

              <div className="sliderwrap">
                 <div className="slider-item active">
                  <img src={dataObj[0].icon} className="slider-icon" alt="Create Your Own Trading Strategy" />
                  <p className="heading">{dataObj[0].heading}</p>
                  <p className="subtext">{dataObj[0].description}</p>
                </div>
              </div>
              <div className="sliderbtn">

              <button className="next-button round-shape" disabled={disableLeft} onClick={toggleBackward}><svg id="baseline-arrow_forward-24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">	
                  <path id="Path_1980" data-name="Path 1980" d="M24,0H0V24H24Z" fill="none"/>	
                  <path className="white" id="Path_1981" data-name="Path 1981" d="M12,4l1.41,1.41L7.83,11H20v2H7.83l5.58,5.59L12,20,4,12Z" fill="#221F20"/>	
                  </svg></button>
              <button className="previous-button round-shape" disabled={disableRight} onClick={toggleForward} ><svg id="baseline-arrow_forward-24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">	
                <path id="Path_1980" data-name="Path 1980" d="M0,0H24V24H0Z" fill="none"/>	
                <path className="white" id="Path_1981" data-name="Path 1981" d="M12,4,10.59,5.41,16.17,11H4v2H16.17l-5.58,5.59L12,20l8-8Z" fill="#221F20"/>	
              </svg></button>
            </div>
            </div>
          
          </div>
          <div className="col-md-12 mt-5 d-flex justify-content-center">
                <a href={`${checkURL}`} className="btn-bg btn-banner">Let's get Started</a>
          </div>
        </div>
        :''}
      </div>
    </section>

  )
}

  function Strategy() {

    const environment = 'Live';
    const [videoVisibility, setVideoVisibility] = React.useState(false);
    const [skeleton, setSkeleton] = React.useState(() => true);
    
    const config = {
      UATURL: 'https://betajiffy.choicebroking.in/auth/login?redirectUrl=https://stratezy.choiceindia.com/dashboard',
      LiveURL: 'https://jiffy.choiceindia.com/auth/login?redirectUrl=https://stratezy.choiceindia.com/dashboard'
  };
  const checkURL = config[environment + 'URL'];
  
    
  
    const myTimeout = setTimeout(myGreeting, 700);
    function myGreeting() {
      setSkeleton(() => false);
    }
  
  
      function loadstrategy(){
        
      setTimeout(() => {
        let iframe = document.getElementById("strategy-youtube");
        iframe.src = 'https://www.youtube.com/embed/fFEx3wQGzAI?autoplay=1';
    
      }, 60);
  
  
    }
  
  
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

    skeleton ?

    <div className='template-parent'>
    <section className='template-child-3'>
        <div className='template-child3-content'>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div className='template-child3-img'>
        </div>
    </section>
    <section className='template2-child-1'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>
    <section className='template2-child-2'>
        <h1></h1>
        <p></p>
    </section>
    <section className='template3-child-3'>
        <div className='template3-child3-content'>
            <h2></h2>
            <p></p>
            <p></p>
            <h3></h3>
        </div>
        <div className='template3-child3-img'>
            <div></div>
        </div>
    </section>
    <section className='template3-child-3'>
        <div className='template3-child3-img'>
            <div></div>
        </div>
        <div className='template3-child3-content'>
            <h2></h2>
            <p></p>
            <p></p>
            <h3></h3>
        </div>
    </section>
    </div>

:

    <div>

      <header className="camp-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <a href="https://choiceindia.com/" className="camp-logo">
                {/* <img src="images/stratezy-page/logo.webp" className="img-fluid" alt="Choice-India" /> */}
                <img src="images/stratezy-page/logo.webp" alt="Banner Images" width="125" height="48" className="img-fluid"></img>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="statezy-banner">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-5 col-md-6">
                <div className="banner-caption">
                  <h1>Simplifying Algorithmic<br />Trading</h1>
                  <p>We provide a simple way to build, test, and go live with your algorithmic trading strategy</p>

                  <div style={{'cursor': 'pointer'}} onClick={() => { chapterScroll('explore') }}  className="btn-bg btn-banner">Explore Stratezy</div>
                  

                  <p className="">Don’t have an account? <span><a href="https://choiceindia.com/open-free-demat-account">Open Now</a></span> </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="rightsection">
    
                  <img src={bannerimage} alt="Free Trading Strategy Builder"  className="img-fluid img"></img>
                  <div className="wrap">
                    <img src={bannericon1} className="banner-icon" alt="create stratezy" />
                    <p>create stratezy</p>
                  </div>
                  <div className="wrapone">
                    <img src={bannericon3} className="banner-icon" alt="Run Backtest" />
                    <p>Run Backtest</p>
                  </div>
                  <div className="wraptwo">
                    <img src={bannericon2} className="banner-icon" alt="Virtual/Live Trade" />
                    <p>Virtual/Live Trade</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <WhyStrategy></WhyStrategy>
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
                    <img src={image1} className="img-fluid feature-img" alt="Readymade Trading Strategies"></img>

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
                    <img src={image2} className="img-fluid feature-img" alt="Unlimited Backtests"></img>

                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex mt-5 respflex">
              <div className="featurethree">
                <p className="heading">Timely alerts on your Virtual &amp; Live trades</p>
                <div className="d-flex imgtextwrap">
                  <div className="subtext">
                    Get timely alerts as and when your trades are triggered.
                  </div>
                  <div className="imgwrap">
                    <img src={image3} className="img-fluid feature-img" alt="Alerts on Virtual &amp; Live Trades"></img>

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
                    <img src={image4} className="img-fluid feature-img" alt="In Built Charting Tool"></img>

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
                  <img  className="youtube-container-img" src={youtubeimg} alt="Loading" onClick={() => {

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
               
               {videoVisibility&&  <iframe width="100%" height="500" o  title="YouTube video player" id="strategy-youtube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}


                   

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
          <FaqAccordion></FaqAccordion>
        <footer className="main-footer">
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="article">
                    <p><span className="bold">SEBI Reg. No. of RA</span>- INH000000222</p>
                    <p>
                      <span className="bold"> Certification:</span> The views expressed in this advertisement accurately reflect the personal views of the analyst(s) about the subject securities or issuers and no part of the compensation of the research analyst(s) was. is, or will be directly or indirectly related to the specific recommendations or views expressed by the research analyst(s). The advertisements are bound by stringent internal regulations and also legal and statutory requirements of the Securities and Exchange Board of India (hereinafter "SEBI").
                    </p>
                    <p><span className="bold">Disclaimer:</span> Investment in the securities market is subject to market risks, read all the related documents carefully before investing.</p>
                    <p><span className="bold">Note:</span> Basket is not an approved product of exchange. Any grievances will not be dealt at the exchange. Jiffy app users can access the basket feature.</p>
                    <p><span className="bold">Address:</span> Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri East, Mumbai, Maharashtra 400099.</p>
                    <p>&copy; Choiceinternational. CIN - U65999MH2010PTC198714.        All Rights Reserved.</p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </footer>

      </main>
    </div>
  )
  
  }
export default Strategy;