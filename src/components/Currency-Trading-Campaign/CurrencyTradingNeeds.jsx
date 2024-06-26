import React from "react";
import { useState } from 'react';
import Slider from 'react-slick';
import Currencytradingdata from '../../Data/CurrencyTradingCampaign';
import LazyLoader from '../Common-features/LazyLoader';

function CurrencyTradingNeeds() {
  const [isShown2, setIsShown2] = useState(0);
  const settings1 = {
    infinite: true,
    speed: 1500,
    vertical: true,
    focusOnSelect: true,
    touchMove: true,
    arrows: false,
    slidesToShow: 3,
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
          speed: 2500,
          dots:true,
          autoplaySpeed: 3000,
        }
      }

    ]

  };
  return (
    <>
      <section className="Trading-Needs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-first text-center treding-mr">A Perfect Platform For Your <br />Currency Trading Needs</h2>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-md-12'>
              <div className="app-trade-easy-div row align-items-top">
                <div className='col-md-6'>
                  <div className='content-list'>
                    <Slider {...settings1}
                      beforeChange={(ev) => {
                        setIsShown2(ev)
                      }}

                    >
                      {
                        Currencytradingdata?.map((response, index) => {
                          let classNm = "content-list-itm " + ((index === isShown2) ? "list-itm-active" : "") + ((index === isShown2 + 1 ) ? "list-itmive" : "")

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
                <div className='col-xl-5 col-md-6'>

                  <div className="trade-easy-images-div" >
                    <LazyLoader src={Currencytradingdata[isShown2].image} className={"single-trade-easy-images"} width={"500"} height={"570"} alt={Currencytradingdata[isShown2].alt} />
                    
                  </div>



                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CurrencyTradingNeeds;