
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import CreateBacktestStrategie from '../../assets/images/free-demat-compaign/create-backtest-strategies.webp'
import { useState } from 'react';
import basketStrategie from '../../Data/basketStrategie';
import Slider from 'react-slick';
function CreateBacktestStrategies() {
  const [isShown2, setIsShown2] = useState(0);
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
          autoplaySpeed: 3000,
        }
      }
      
    ]
   
  };

  function chapterScroll3(id) {
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
    <section className="create-backtest-sec" id="showForm">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                   <h2 className="title-secnd text-center">Create and Backtest Your Strategies <br/>Free of Cost</h2>
                </div>
               <div className="col-md-12">
               <div className="row justify-content-between create-backtest">
                <div className="col-md-4">
                    <Slider {...settings1}
                          afterChange={(ev) => {
                            setIsShown2(ev)
                          }}
                          className="create-backtest-list"
                        >

                          {
                            basketStrategie?.map((response, index) => {
                              let classNm = "backtest-item " + ((index === isShown2) ? "backtest-item-active" : "")

                              return (

                                <div key={response.id} className={classNm} onMouseOver={() => setIsShown2(index)} >
                                  <h4 className="single-ttl">{response.title}</h4>
                                  
                                </div>
                              )


                            })
                          }
                        </Slider>
                    </div>
                    <div className="col-md-7">
                      <div className="video-height">
                      <iframe src="https://www.youtube.com/embed/8PTpITpHSMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="video-width"></iframe>
                      </div>
                    </div>
               </div>
               </div>
               <div className="col-md-12">
                  <div className="text-center">
                    <a onClick={()=>{chapterScroll3('dematform')}} class="cursor-pointer"><span class="btn-bg btn-bg-dark">Get Free Access Now</span></a>
                  </div>
               </div>
            </div>
        </div>
    </section>

    

   
    
    </div>
  );
}

export default CreateBacktestStrategies;
