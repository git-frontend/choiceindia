import ImageSub9 from '../../assets/images/app-img1.png';
import React, { useState, useEffect } from "react";
import FinxImage from '../../Data/finximage';
import LazyLoader from '../Common-features/LazyLoader';
import Slider from 'react-slick';



function ChoiceFinx() {

  const [store, setstore] = useState(0);
  const [checkdevice, setcheckdevice] = useState();
  const [trigger,setTrigger] = useState();
 
  
  const settings1 = {
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    arrows: false,
    autoplay: false,
    dots: false,
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
    
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: false,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          infinite:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          infinite:true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  };
  useEffect(() => {
    

		setTrigger(true)
		if (trigger === true) {
			if (/Android|webOS|windows|BlackBerry|IEMobile|IEMobile|Opera Mini|CriOS/i.test(navigator.userAgent)) {

        setcheckdevice('https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy')
  
      } else if (/iPod|iPhone|iPad/i.test(navigator.userAgent)) {
    
        setcheckdevice('https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261?ls=1')
        
      }else{
        setcheckdevice('https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy')

      }
		}

	}, [trigger])




 

  return (
    <div>
      <section className="choice-finx">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="finx-section">
                <div className="finx-left-cont">
                  <div className="heading-sec">
                    <h2 className="title-secnd">Choice FinX Trading App</h2>
                    <p>SuperApp - Designed to deliver customized wealth solutions to cater <br />all financial needs</p>
                  </div>

                  <div className="finx-app-list workList">
                  <Slider {...settings1}
                    
                    afterChange={(ev) => {
                      setstore(ev)
                      
                    }}
                  >
                    {
                      (FinxImage||[]).slice(0, 3).map((response, index) => {

                        return (
                          
                            <div className="app-list-item" key={response.id}>
                              <div className='link-choicefinx' data-img={ImageSub9} onMouseOver={() => { setstore(index) }}>
                                <span className='cfx-img'>
                                  <LazyLoader src={response.icon} className={"img-fluid"} alt={response.alt} width={"40"} height={"40"} />
                                </span>
                                <h3 className="choice-ttl">{response.title}</h3>
                                <p>{response.description}</p>
                              </div>
                            </div>
                         


                        )
                      })
                    }
                  </Slider>
                 </div>
                </div>
                <div className="finx-app-img workImages">
 
                          <LazyLoader src={FinxImage[store].image} className={""} alt={"Loading"} width={"260"} height={"527"} />
 
                </div>
                <div className="expl-app">
                

                      <a href={checkdevice?checkdevice:[]} target="_blank">
                        <span className="btn-bg">Explore App</span>
                      </a>
                    
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



    </div>

  );
}

export default ChoiceFinx;
