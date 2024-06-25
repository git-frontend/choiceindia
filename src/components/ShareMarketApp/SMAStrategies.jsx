import React from 'react';
import { useState } from 'react';
import imageData from '../../Data/ShareMarket/BestStock';
import Slider from 'react-slick';
import LazyLoader from '../Common-features/LazyLoader';

function SMAStrategies() {
    const [isShown3, setIsShown3] = useState(0);
    const [isShown, setIsShown2] = useState(0);

    const settings1 = {
        infinite: true,
        speed: 1000,
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
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
                autoplaySpeed: 3000,
              }
            },
            {
                breakpoint: 600,
                settings: {
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: false,
                    autoplaySpeed: 3000,
                    adaptiveHeight:false,
                    dots:true,
                },
              },
            
          ]
       
    };


    return (
        <div className='App-main'>

            <div className='app-strategies-bottom'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="heading-sec">
                                <h2 className="title-secnd">Unique Features Of Best Stock Market App</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-11'>
                            <div className="row app-trade-easy-div d-flex colum-revers">

                               

                                <div className='col-md-7'>
                                    <div className='content-list content-listres'>
                                        <Slider {...settings1}
                                            afterChange={(ev) => {
                                                setIsShown3(ev)
                                            }}

                                        >

                                            {
                                                imageData?.map((response, index) => {

                                                    let classNm = "content-list-itm " + ((index === isShown3) ? "list-itm-active" : "")

                                                    return (

                                                        <div key={response.id} className={classNm} onMouseOver={() => setIsShown3(index)} >
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
                                <div className='col-md-5'>

<div className="trade-easy-images-div">
    <LazyLoader src={imageData[isShown3].image} className={"img-fluid single-trade-easy-images"} alt={"Loading"} width={"557"} height={"662"}/>
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

export default SMAStrategies;
