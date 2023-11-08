import AppImage0 from '../../assets/images/mf-app/mf-app-banner.webp';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import appstore from '../../assets/images/mf-app/app-store.svg';
import googleplay from '../../assets/images/mf-app/google-play.svg';
import { useState,useEffect } from 'react';
function BannerCareer() {
  const [ischeck, setIscheck] = useState(false);
  const  queryParam = window.location.search;
 const utmvalue= new URLSearchParams(queryParam);
 const param1 = utmvalue.get('utm_source');
  // console.log("setshow",param1);
  // var self = window.location.toString();
  //       var querystring = self.split("?");
  //       if (querystring.length > 1) {
  //         var utmdata = querystring[1].split("&");
  //       }

  
    

    // useEffect(() => {
    //   setRenderCount(true)
    //   if (rendercount === true) {
    //     if(querystring.length > 1){
    //     for(let i=0 ;i<=utmdata.length||1;i++)
    //     {
          
    //       if(utmdata[i]||0=='utm_source=alphabee'){
            
    //         // console.log("setshow",show);
    //         setshow(true)
            
    //       }
             
         
    
          
    //     }
    //   }
       
    //   }
    // }, [rendercount])
    
  return (
    <div className='App-main'>


      <section className="banner-app" onMouseOver={() => setIscheck(true)}>
      <LazyLoader src={AppImage0} className={"img-fluid ban-img"} alt={"Investment App"} width={"1728"} height={"1119"}/>
        {/* <img src={AppImage0} className="ban-img" alt='Loading' width="1728" height="1119" /> */}
        <div className='app-banner-caption'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='caption-cont'>
                  {
                    (param1=='alphabee')?
                    <p>Alphabee is now merged with Choice FinX</p>
                    :
                    ""

                  }
                
                  <h1 className='big-ttl'>Choice FinX <br /> Mutual Fund App</h1>
                  <p>Mutual Fund App that builds wealth. Invest with India’s most preferred App for systematic mutual fund investments and achieve your financial goals!</p>
                  <div className="wrap-app-links">
                    <a href="https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy" target="_blank" className='link-nrl white'>
                    <LazyLoader src={googleplay} className={"img-fluid"} alt={"App Store"} width={"27"} height={"24"}/>
                      <span className='blackcolor'>Google Play</span>
                    </a>
                    <a href="https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261?ls=1" target="_blank" className='link-nrl white'>
                    {/* <img src={appstore} className="" alt={"App Store"} width="27" height="24" /> */}
                    <LazyLoader src={appstore} className={"img-fluid"} alt={"App Store"} width={"27"} height={"24"}/>

                      <span className='blackcolor'>App Store</span>
                    </a>
                  </div>
                  <p>Trusted by <span className='strng'>30k + Investors</span> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default BannerCareer;
