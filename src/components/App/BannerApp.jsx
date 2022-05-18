import  AppImage0  from '../../assets/images/app/banner-app.jpg';
import  ImageFooter1  from '../../assets/images/icons/google-play.svg';
import  ImageFooter2  from '../../assets/images/icons/app-store.svg';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";

function BannerCareer() {

  return (
    <div className='App-main'>
      
     
    <section className="banner-app">
         <img src={AppImage0} className="ban-img" alt='Loading'/>
         <div className='app-banner-caption'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='caption-cont'>
                            <h1 className='big-ttl'>Super App for <br/> Everyday Finance</h1>
                            <div className="wrap-app-links">
                              <a href="/" target="_blank" className='link-nrl'>
                                <img src={ImageFooter1} className="img-ico" alt='Loading' />
                              </a>
                              <a href="/" target="_blank" className='link-nrl'>
                                <img src={ImageFooter2} className="img-ico" alt='Loading' />
                              </a>
                            </div>
                            <p>Trusted by 4+ Lakh Users</p>
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
