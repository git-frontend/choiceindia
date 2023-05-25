
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import Slider from 'react-slick';
import Image1 from '../../assets/images/trading-strategies/readymade-trading-strategies.svg';
import Image2 from '../../assets/images/trading-strategies/unlimited-backtests.svg';
import Image3 from '../../assets/images/trading-strategies/timely-alerts-on-your-virtual-live-trades.svg';
import Image4 from '../../assets/images/trading-strategies/in-built-charting-tool.svg';
import Image5 from '../../assets/images/trading-strategies/no-coding-skills-required.svg';

function WhyStrategies() {
  const slider = React.useRef(null);

  const settings1 = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    arrows: false,
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

      <section className="stratezy-card-sec">
        <div className="container">
          <div className="row">
            <div className="co-md-12">
              <div className="own-startezy-card">
                <div class="bar-cont-des">
                  <h3 class="title-fourth">दूसरों द्वारा विकसित स्ट्रेटेजी पर निर्भर न करें। <br />अपनी खुद की स्ट्रेटेजी विकसित करें </h3>
                  <a onClick={()=>{chapterScroll('dematform')}} class="btn-bg btn-bg-dark cursor-pointer">अभी बनाएं</a>
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
                  <h2 className="title-first">स्ट्रेटजी क्यूँ ?</h2>
                  <div className="slick-button">
                    <button onClick={() => slider?.current?.slickPrev()} className="btn-arrow">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-hover">
                    <rect x="-0.5" y="0.5" width="55" height="55" rx="27.5" transform="matrix(-1 0 0 1 55 0)" stroke="white"/>
                    <path d="M35.4507 40.4908C34.7208 41.1697 33.544 41.1697 32.8141 40.4908L20.4357 28.9768C19.8548 28.4365 19.8548 27.5635 20.4357 27.0232L32.8141 15.5092C33.544 14.8303 34.7208 14.8303 35.4507 15.5092C36.1806 16.1881 36.1806 17.2827 35.4507 17.9616L24.6661 28.0069L35.4656 38.0522C36.1806 38.7173 36.1806 39.8257 35.4507 40.4908Z" fill="white"/>
                    </svg>
                    </button>
                    <button onClick={() => slider?.current?.slickNext()} className="btn-arrow">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-hover">
                      <rect x="-0.5" y="0.5" width="55" height="55" rx="27.5" transform="matrix(-1 0 0 1 55 0)" stroke="white"/>
                      <path d="M20.5493 40.4908C21.2792 41.1697 22.456 41.1697 23.1859 40.4908L35.5643 28.9768C36.1452 28.4365 36.1452 27.5635 35.5643 27.0232L23.1859 15.5092C22.456 14.8303 21.2792 14.8303 20.5493 15.5092C19.8194 16.1881 19.8194 17.2827 20.5493 17.9616L31.3339 28.0069L20.5344 38.0522C19.8194 38.7173 19.8194 39.8257 20.5493 40.4908Z" fill="white"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="right-sec">
                  <div className="finx-app-list">
                    <Slider ref={slider} {...settings1} className="stratezy-slider">
                      <div className="app-list-item">
                            <img src={Image1} alt="Ready-Made Strategies to Start Trading" className="img-fluid" width={"100"} height={"100"}/>
                            <h3>शुरू करने के लिए तैयार मेड रणनीति</h3>
                            <p>हमारे विशेषज्ञों ने आपके अनुकूल रणनीतियों के लिए तैयार मेड रणनीतियां बनाई हैं।</p>
                        </div>
                        <div className="app-list-item">
                            <img src={Image3} alt="Timely Alerts on Your Virtual & Live Trades" className="img-fluid"  width={"100"} height={"100"}/>
                            <h3>वर्चुअल और लाइव ट्रेड पर समय पर चेतावनियां</h3>
                            <p>जब आपकी ट्रेड ट्रिगर होती है, तो समय पर चेतावनियां प्राप्त करें। जब भी आपके ट्रेड शुरू हों, समय पर अलर्ट प्राप्त करें।</p>
                        </div>
                        <div className="app-list-item">
                            <img src={Image5} alt="No Coding Skills Required" className="img-fluid"  width={"100"} height={"100"}/>
                            <h3>कोडिंग कौशल की आवश्यकता नहीं</h3>
                            <p>Stratezy बिना किसी कोडिंग कौशल के अपनी खुद की ट्रेडिंग रणनीति बनाने का सबसे आसान टूल है।</p>
                        </div>
                        <div className="app-list-item">
                            <img src={Image2} alt="Unlimited Backtests" className="img-fluid"  width={"100"} height={"100"}/>
                            <h3>असीमित बैकटेस्ट</h3>
                            <p>बैकटेस्ट और अपनी रणनीतियों को बैकटेस्ट करें बिना किसी बैकटेस्ट सीमा के।</p>
                        </div>
                        <div className="app-list-item">
                            <img src={Image4} alt="In-Built Charting Tool" className="img-fluid"  width={"100"} height={"100"}/>
                            <h3>इन-बिल्ट चार्टिंग टूल</h3>
                            <p>चार्टिंग टूल में अपनी रणनीति और ट्रेड को दृश्यीकरण करने के लिए चार्टिंग टूल शामिल है।</p>
                        </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*  */}





    </div>
  );
}

export default WhyStrategies;
