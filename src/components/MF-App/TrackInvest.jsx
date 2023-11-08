import React from 'react';
import { useState } from 'react';
import imageDataapp from '../../Data/TrackInvestData';
import Slider from 'react-slick';
import LazyLoader from '../Common-features/LazyLoader';

function TrackInvest() {
    const [isShown3, setIsShown3] = useState(0);
    const [isShown, setIsShown2] = useState(0);

    const settings1 = {
        infinite: false,
        speed: 1000,
        vertical: true,
        focusOnSelect: true,
        touchMove: true,
        arrows: false,
        slidesToShow: 4,
        autoplay: false,
        dots: false,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
                autoplaySpeed: 3000,
                adaptiveHeight:false,
              }
            }
            
          ]
       
    };


    return (
        <div className='App-main'>
            <div className='app-track-invest'>
                <div className='container'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-xl-9'>
                            <div className="row app-trade-easy-div d-flex align-items-top">

                                <div className='col-md-8'>
                                    <div className='ttle-3'>
                                        <h3>Manage & Track Your Investment</h3>
                                    </div>
                                    
                                <div className='content-list'>
                                        <Slider {...settings1}
                                            afterChange={(ev) => {
                                                setIsShown3(ev)
                                            }}

                                        >

                                            {
                                                imageDataapp?.map((response, index) => {

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

                                <div className='col-md-4'>
                                <div className="trade-easy-images-div">
                                        <LazyLoader src={imageDataapp[isShown3].image} className={"img-fluid single-trade-easy-images"} alt={"Loading"} width={"312"} height={"632"}/>
                                        {/* <img src={imageData[isShown3].image}

                                            className="single-trade-easy-images" alt='Loading'></img> */}
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

export default TrackInvest;
