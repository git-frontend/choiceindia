
import AppImage1 from '../../assets/images/online-trading-app/banner-img-main.webp';
import AppImage2 from '../../assets/images/online-trading-app/banner_image-popup-1.webp';
import AppImage3 from '../../assets/images/online-trading-app/banner_image-popup-2.webp';
import AppImage4 from '../../assets/images/online-trading-app/app-store-white.svg';
import AppImage5 from '../../assets/images/online-trading-app/g-play-white.svg';
import AppImage6 from '../../assets/images/online-trading-app/star-icon.svg';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
function OTBannerApp() {

  const settings1 = {
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    arrows:false,
    dots:false
  };

  return (
    <div className='App-main'>


<section className="trading-app-sec1">
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="sec1-left">
                        <div className="top-title pl8 hindi-ver">
                           <h1>जिफ्फी ट्रेडिंग ऐप <span className="mb-br">फॉर</span> </h1> 

                           <Slider {...settings1} className='slider-ver'>
                                <div>
                                    <h4>स्टाक</h4>
                                </div>
                                <div>
                                    <h4>कमोडिटी</h4>
                                </div>
                                <div>
                                    <h4>डेरिवेटिव</h4>
                                </div>
                                <div >
                                    <h4>करन्सी</h4>
                                </div>
                                <div>
                                    <h4>आईपीओ</h4>
                                </div>
                                <div>
                                    <h4>ईटीएफ</h4>
                                </div>
                              </Slider>
                        </div>
                        <div className="wrap-app-links">
                    <a href="https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy" target="_blank" className='link-nrl white'>
                    <img src={AppImage5}  alt={"Google Play"} width={"24"} height={"27"} />

                      <span>गूगल प्ले</span>
                    </a>
                    <a href="https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261?ls=1" target="_blank" className='link-nrl white'>
                    <img src={AppImage4}  alt={"App Store"} width="27" height="24" />

                      <span>ऐप स्टोर</span>
                    </a>
                  </div>
                        <div className="star-line">
                            <img src={AppImage6} alt="" className="img-responsive" width="27" height="26" /> <h5><span>5+ लाख उपभोगकर्तायो का भरोसेमंद</span> </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="sec1-right">
                        <LazyLoader src={AppImage1} className={"img-fluid mn-img"} alt={"Loading"} width={"334"} height={"661"}/>
                        <LazyLoader src={AppImage2} className={"img-fluid mn-img1"} alt={"Loading"} width={"260"} height={"197"}/>
                        <LazyLoader src={AppImage3} className={"img-fluid mn-img2"} alt={"Loading"} width={"260"} height={"87"}/>
                    </div>
                </div>
            </div>
        </div>
</section>

      


    </div>
  );
}

export default OTBannerApp;
