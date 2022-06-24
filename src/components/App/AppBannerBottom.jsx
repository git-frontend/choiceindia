import React from 'react';
import { useState } from 'react';
import imageData from '../../Data/images';
import Slider from 'react-slick';
import LazyLoader from '../Common-features/LazyLoader';

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

function AppBannerBottom() {
  const [isShown2, setIsShown2] = useState(0);
  const settings1 = {
    infinite: true,
    speed: 2500,
    vertical: true,
    focusOnSelect: true,
    touchMove: true,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    dots: false,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
        },
      },
    ],
  };

  return (
    <div className='App-main'>

      <div className='app-banner-bottom'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-10'>
              <div className="app-trade-easy-div row align-items-center">



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

                            <div key={response.id} className={classNm} onClick={() => setIsShown2(index)} onChange={() => setIsShown2(index)} >
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
                  <LazyLoader src={imageData[isShown2].image} className="single-trade-easy-images" alt="Loading" />
                    {/* <img src={imageData[isShown2].image}

                      className="single-trade-easy-images" alt="loading"></img> */}
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

export default AppBannerBottom;
