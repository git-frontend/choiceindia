import React from 'react';
import { useState } from 'react';
import imageData from '../../Data/images';
import Slider from 'react-slick';

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

function AppBannerBottom() {
  const [isShown1, setIsShown1] = useState(0);
  const [isShown2, setIsShown2] = useState(0);
  const[change,setChange] = useState([1,2,3,4,5]);
  console.log("image", imageData)

  const settings1 = {
		infinite: true,
		speed: 2500,
    vertical:true,
    focusOnSelect:true,
    touchMove:true,
		arrows: false,
		slidesToShow: 6,
		autoplay: true,
		dots: false,
		autoplaySpeed: 2000,
		slidesToScroll: 1,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
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
                    <div className="app-trade-easy-div row">
                    
                    

                    <div className='col-md-5'>
                        <div className='content-list'>
                        <Slider {...settings1}
                        afterChange={(ev) => {
                          setIsShown2(ev)
                        }}
                        
                        >

                        {
                          imageData?.map((response,index) =>{
                    let classNm="content-list-itm " + ((index === isShown2) ? "list-itm-active":"")
                            
                              return(
                                
                                  <div className={classNm} onClick={() => setIsShown2(index)} onChange={()=> setIsShown2(index)} >   
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
                    <div className='col-md-7'>
                        
                            <div className="trade-easy-images-div" >
                               <img src={imageData[isShown2].image}
                                
                                    className="single-trade-easy-images"></img> 
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
