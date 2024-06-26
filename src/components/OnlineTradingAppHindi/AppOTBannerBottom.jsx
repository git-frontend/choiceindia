import React from 'react';
import { useState } from 'react';
import imageData from '../../Data/Onlinetrading/HindiTradingInvest';
import Slider from 'react-slick';
import LazyLoader from '../Common-features/LazyLoader';

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

function AppOTBannerBottom() {
  const [isShown2, setIsShown2] = useState(0);
  const settings1 = {
    infinite: true,
    speed: 1000,
    vertical: true,
    focusOnSelect: true,
    touchMove: true,
    arrows: false,
    slidesToShow: 7,
    autoplay: true,
    dots: false,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          autoplaySpeed: 3000,
        }
      }
      
    ]
   
  };

  return (
    <div className='App-main'>

      <div className='app-banner-bottom'>
        <div className='container'>
        <div className='row'>
                        <div className='col-md-12'>
                            <div className="heading-sec">
                                <h2 className="title-secnd text-center pb-5">फिनएक्स के साथ ट्रेडिंग और निवेश हुआ आसान और तेज</h2>
                            </div>
                        </div>
                    </div>
          <div className='row justify-content-center'>
            <div className='col-md-12'>
              <div className="app-trade-easy-div row">

              <div className='col-md-6'>
                  <div className='content-list'>
                    <Slider {...settings1}
                      afterChange={(ev) => {
                        setIsShown2(ev)
                      }}

                    >

                      {
                        imageData?.map((response, index) => {
                          let classNm = "content-list-itm " + ((index === isShown2) ? "list-itm-active" : "")

                          return (

                            <div key={response.id} className={classNm} onMouseOver={() => setIsShown2(index)} >
                              <h4 className="single-ttl">{response.title}</h4>
                              <p className="para">
                                {response.description}
                              </p>
                            </div>
                          )


                        })
                      }
                    </Slider>

                  </div>


                </div>

               
                <div className='col-xl-6 col-md-6'>

                  <div className="trade-easy-images-div" >
                  <LazyLoader src={imageData[isShown2].image} className={"single-trade-easy-images"} width={"430"} height={"661"} alt={"Loading"} />
                  </div>



                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>








    </div>
  );
}

export default AppOTBannerBottom;
