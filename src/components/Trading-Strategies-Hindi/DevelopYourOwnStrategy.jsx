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
    autoplay: false,
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
                          let classNm = "content-list-itm " + ((index === isShown2) ? "list-itm-active" : "") + ((index ===isShown3 ) ? "list-itmive" : "")

                          return (

                            <div key={response.id} className={classNm} onMouseOver={() => {setIsShown2(index);setIsShown3(index +1 ==5 ?0:index +1)}} >
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
                <div className='col-xl-5 col-md-6'>

                  <div className="trade-easy-images-div" >
                    <LazyLoader src={tradingStrategiesHindiData[isShown2].image} className={"single-trade-easy-images"} width={"500"} height={"570"} alt={tradingStrategiesHindiData[isShown2].alt} />
                    
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
