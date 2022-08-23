
import AppImage1 from '../../assets/images/Share Market App/Banner.webp';

import AppImage4 from '../../assets/images/online-trading-app/app-store-white.svg';
import AppImage5 from '../../assets/images/online-trading-app/g-play-white.svg';
import AppImage6 from '../../assets/images/online-trading-app/star-icon.svg';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
function SMABannerApp() {

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


<section className="trading-app-sec1 pb-10">
        <div className="container ">
            <div className="row">
                <div className="col-md-7">
                    <div className="sec1-left">
                        <div className="top-title pl8">
                           <h1>Jiffy Share Market App <span className="mb-br">For</span> </h1> 

                           <Slider {...settings1} className='slider-ver'>
                                <div className="">
                                    <h4>Stocks</h4>
                                </div>
                                <div className="">
                                    <h4>Commodities</h4>
                                </div>
                                <div className="">
                                    <h4>Derivatives</h4>
                                </div>
                               
                              </Slider>
                        </div>
                        <div className="wrap-app-links">
                    <a href="https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy" target="_blank" className='link-nrl white'>
                    <img src={AppImage5} className="" alt={"Google Play"} width={"24"} height={"27"} />

                      <span className=''>Google Play</span>
                    </a>
                    <a href="https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261?ls=1" target="_blank" className='link-nrl white'>
                    <img src={AppImage4} className="" alt={"App Store"} width="27" height="24" />

                      <span className=''>App Store</span>
                    </a>
                  </div>
                        <div className="star-line">
                            <img src={AppImage6} alt="" className="img-responsive" width={"27"} height={"26"} /> <h5> Trusted by <span>5+ Lakh Users</span> </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 d-none d-sm-block">
                    <div className="sec1-right">
                        <LazyLoader src={AppImage1} className={"img-fluid mn-img"} alt={"Loading"} width={"387"} height={"727"}/>
                        
                    </div>
                </div>
            </div>
        </div>
</section>

      


    </div>
  );
}

export default SMABannerApp;
