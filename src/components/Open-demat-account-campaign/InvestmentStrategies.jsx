import React from 'react';
import { useState } from 'react';
import imageData from '../../Data/campaign/Real-demat';
import Slider from 'react-slick';
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from 'react-router-dom';

function AppStrategies() {
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

    /** scroll id view */

function chapterScroll(id) {
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
        <div className='cam-open-demat-main'>

            <div className='investment-strategies-bottom'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="heading-sec">
                                <h2 className="title-secnd">free investment strategies for <br/> everyone</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-9'>
                            <div className="row app-trade-easy-div">

                                <div className='col-md-4'>

                                    <div className="trade-easy-images-div">
                                        <LazyLoader src={imageData[isShown3].image} className={"img-fluid single-trade-easy-images"} alt={"Loading"} width={"312"} height={"632"}/>
                                       
                                    </div>



                                </div>

                                <div className='col-md-8'>
                                    <div className='content-list'>
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

                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12 mt-5 d-flex justify-content-center"><Link to="/campaign/open-demat-account"  onClick={() => { chapterScroll('campaignForm')}}><span className="btn-bg btn-bg-dark">Get it Now</span></Link></div>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default AppStrategies;
