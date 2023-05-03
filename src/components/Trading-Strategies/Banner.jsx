
import React, { useEffect, useState, useRef } from "react";
import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Banner() {
    const [name, setName ] = useState('hideform');
    const getPosition = () => {
      const element = document.getElementById("showForm");
      if(element){
          const rect = element.getBoundingClientRect();
          
          if(rect.top.toFixed() < 259){
              setName('visibleform');
          }else{
              setName('hideform');
          }   
      }
  };
  
    useEffect(() => {
      window.addEventListener('scroll', getPosition);
  }, []);

  
  function chapterScroll2(id) {
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
    <section className="trading-Stratebanner">
        <div className="container brd-bottom">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-md-7">
                    <div className="trading-banner-caption">
                        <h1 className="big-ttl">Don’t rely on others' strategy.<br/> <span>Create your own</span> strategy.</h1>
                       <p className="para">Stratezy helps you to create, backtest and verify your own trading on the past market data.</p>
                       <div class="btn-open"><a target="_blank" class="cursor-pointer"><span class="btn-bg">Explore Stratezy</span></a></div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-5">
                    <div className="d-flex justify-content-end" id="campaignForm">
                        <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                            <DematAccountForm />
                        </GoogleReCaptchaProvider>
                    </div>
                </div>
            </div>
            <div className={name}>
                <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                    <button className=" primary-orange-btn scroll-top-account openbtn"  onClick={()=>{chapterScroll2('dematform')}}>Open Free Account</button>
                </div>
            </div>
        </div>
    </section>

    

   
    
    </div>
  );
}

export default Banner;
