import React from 'react';
import { useState } from 'react';
import accountSteps from '../../Data/accountSteps';
import Slider from 'react-slick';


import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

function SliderApp() {
  const [isShown2, setIsShown2] = useState(0);
  const settings1 = {
    infinite: true,
    speed: 1200,
    vertical: true,
    focusOnSelect: false,
    touchMove: false,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    pauseOnHover:false,
    dots: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <div className='content-list'>
                    <Slider {...settings1}
                      afterChange={(ev) => {
                        setIsShown2(ev)
                      }}
                      className='steps-card'

                    >

                      {
                        accountSteps?.map((response, index) => {
                          let classNm = "steps-card-list " + ((index === isShown2) ? "steps-card-active" : "")

                          return (

                            <div key={response.id} className={classNm}  >
                                  <div className="count-circle">
                                      <div className="list-itm-num">
                                          <span>0{response.id}</span>
                                      </div>
                                  </div>
                                  <div className="list-itm-descr">
                                      <h5>{response.title}</h5>
                                      <p className="detail-show">{response.description}</p>
                                  </div>
                              <div class="circle-big">
                                
                                <svg>
                                  <circle class="progress" cx="45" cy="42" r="40"></circle>
                                </svg>
                              </div>
                            </div>
                          )


                        })
                      }
                    </Slider>

                  </div>
  );
}

export default SliderApp;
