
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
function BannerCareer() {

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


<section class="trading-app-sec1">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="sec1-left">
                        <div class="top-title pl8">
                           <h1>Jiffy Trading App <span class="mb-br">For</span> </h1> 

                           <Slider {...settings1} className='slider-ver'>
                                <div class="">
                                    <h4>Stocks</h4>
                                </div>
                                <div class="">
                                    <h4>Commodities</h4>
                                </div>
                                <div class="">
                                    <h4>Derivatives</h4>
                                </div>
                                <div class="">
                                    <h4>Currencies</h4>
                                </div>
                                <div class="">
                                    <h4>IPO investment</h4>
                                </div>
                              </Slider>
                        </div>
                        <div className="wrap-app-links">
                    <a href="https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy" target="_blank" className='link-nrl white'>
                    <img src={AppImage5} className="" alt={"App Store"} width="" height="" />

                      <span className=''>Google Play</span>
                    </a>
                    <a href="https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261?ls=1" target="_blank" className='link-nrl white'>
                    <img src={AppImage4} className="" alt={"App Store"} width="" height="" />

                      <span className=''>App Store</span>
                    </a>
                  </div>
                        <div class="star-line">
                            <img src={AppImage6} alt="" class="img-responsive" /> <h5> Trusted by <span>4+ Lakh Users</span> </h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="sec1-right">
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

export default BannerCareer;
