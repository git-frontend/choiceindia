import React from "react";
import { useState } from 'react';
import Slider from 'react-slick';
import tradingStrategiesHindiData from '../../Data/tradingStrategiesHindiData';
import LazyLoader from '../Common-features/LazyLoader';

function DevelopYourOwnStrategy() {
  const [isShown2, setIsShown2] = useState(0);
  const [isShown3, setIsShown3] = useState(1);
  
  const settings1 = {
    infinite: true,
    speed: 1000,
    vertical: true,
    focusOnSelect: true,
    touchMove: true,
    arrows: false,
    slidesToShow: 5,
    autoplay: true,
    dots: false,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          dots:true,
          autoplaySpeed: 3000,
        }
      }

    ]

  };
  return (
    <div>
    <section className="develop-strategies">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-first text-center treding-mr">5 मिनट में अपनी खुद की  ट्रेडिंग स्ट्रेटेजी बनाइये! </h2>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-md-12'>
              <div className="app-trade-easy-div row align-items-top">
                <div className='col-md-6'>
                  <div className='content-list'>
                    <Slider {...settings1}
                      afterChange={(ev) => {
                        setIsShown2(ev)
                      }}

                    >
                      {
                        tradingStrategiesHindiData?.map((response, index) => {
                          let classNm = "content-list-itm " + ((index === isShown2) ? "list-itm-active" : "")+ ((index === isShown2 + 1 ) ? "list-itmive" : "")

                          return (

                            <div key={response.id} className={classNm} onMouseOver={() => setIsShown2(index)}>
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
                <div className='col-md-6'>
                  <div className="video-height">
                        <iframe src="https://www.youtube.com/embed/8PTpITpHSMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="video-width"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  );
}

export default DevelopYourOwnStrategy;
