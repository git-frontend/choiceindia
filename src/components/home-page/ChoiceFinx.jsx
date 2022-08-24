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
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  };
  useEffect(() => {
    // console.log("check",window.navigator)
    

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
                    <h2 className="title-secnd">Jiffy Trading App</h2>
                    <p>SuperApp - Designed to deliver customized wealth solutions to cater <br />all financial needs</p>
                  </div>

                  <div className="finx-app-list workList">
                  <Slider {...settings1}
                    
                    afterChange={(ev) => {
                      setstore(ev)
                      
                    }}
                  >
                    {
                      FinxImage.slice(0, 3).map((response, index) => {

                        return (
                          
                            <div className="app-list-item" key={response.id}>
                              <div className='link-choicefinx' data-img={ImageSub9} onMouseOver={() => { setstore(index) }}>
                                <span className='cfx-img'>
                                  <LazyLoader src={response.icon} className={"img-fluid"} alt={response.alt} width={"40"} height={"40"} />
                                  {/* <img src={response.icon} alt="Loading" className="img-fluid" /> */}
                                </span>
                                <h3 className="choice-ttl">{response.title}</h3>
                                <p>{response.description}</p>
                              </div>
                            </div>
                         


                        )
                      })
                    }
                  </Slider>
                  { /**  <div className="app-list-item">
                        <a href="/" data-img={ImageSub9}>
                          <img src={ImageSub6} alt="Loading" className="img-fluid" />
                          <h4>Wealth Store</h4>
                          <p>Nurture your financial freedom with endless possibilities</p>
                        </a>
                      </div>
                      <div className="app-list-item">
                        <a href="/" data-img={ImageSub9}>
                          <img src={ImageSub7} alt="Loading" className="img-fluid" />
                          <h4>Elegant UI &amp; UX</h4>
                          <p>Aiming for an intuitive interface for seamless navigation.</p>
                        </a>
                      </div>
                      <div className="app-list-item">
                        <a href="/" data-img={ImageSub9}>
                          <img src={ImageSub8} alt="Loading" className="img-fluid" />
                          <h4>Speedy Execution</h4>
                          <p>Built to deliver a blazing fast experience without hiccups.</p>
                        </a>
    </div>*/}
                 </div>
                </div>
                <div className="finx-app-img workImages">
 
                          <LazyLoader src={FinxImage[store].image} className={""} alt={"Loading"} width={"260"} height={"527"} />
 
                </div>
                <div className="expl-app">
                

                      <a href={checkdevice?checkdevice:[]} target="_blank">
                        <span className="btn-bg">Explore App</span>
                      </a>
                    

                  {/* <a href="https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy" target="_blank"> */}
                  {/* <img src={ImageSub10} className="ico-img" /> */}
                  {/* <svg width="55" height="55" className="media" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle className="yellow" cx="36" cy="36.3379" r="35" fill="white" stroke="#B6AAA7" strokeOpacity="0.47" />
                      <path className="black" fillRule="evenodd" clipRule="evenodd" d="M27.0448 21.8844C26.7017 22.2418 26.5 22.7955 26.5 23.514V49.163C26.5 49.8815 26.7017 50.4352 27.0448 50.7927L27.1321 50.8762L41.73 36.508V36.169L27.1321 21.8008L27.0448 21.8844Z" fill="#00D7FE" />
                      <path className="black" d="M46.5114 41.182L41.7314 36.5011V36.17L46.5138 31.4902L52.2868 34.6993C53.9045 35.5996 53.9045 37.0715 52.2868 37.9707L46.6215 41.1208L46.5114 41.182Z" fill="#F5F5F5" />
                      <path className="black" fillRule="evenodd" clipRule="evenodd" d="M46.5114 41.182L41.7314 36.5011V36.17L46.5138 31.4902L52.2868 34.6993C53.9045 35.5996 53.9045 37.0715 52.2868 37.9707L46.6215 41.1208L46.5114 41.182Z" fill="url(#paint0_linear_795_669)" />
                      <path className="black" d="M46.5765 41.3396L41.6704 36.3379L27.1929 51.0976C27.7288 51.6748 28.6124 51.7459 29.6075 51.1699L46.5765 41.3396Z" fill="#F5F5F5" />
                      <path className="black" fillRule="evenodd" clipRule="evenodd" d="M46.5765 41.3396L41.6704 36.3379L27.1929 51.0976C27.7288 51.6748 28.6124 51.7459 29.6075 51.1699L46.5765 41.3396Z" fill="url(#paint1_linear_795_669)" />
                      <path className="black" d="M46.5765 31.3357L29.6075 21.5054C28.6124 20.9294 27.7288 21.0005 27.1929 21.5777L41.6704 36.3374L46.5765 31.3357Z" fill="#F5F5F5" />
                      <path className="black" fillRule="evenodd" clipRule="evenodd" d="M46.5765 31.3357L29.6075 21.5054C28.6124 20.9294 27.7288 21.0005 27.1929 21.5777L41.6704 36.3374L46.5765 31.3357Z" fill="url(#paint2_linear_795_669)" />
                      <defs>
                        <linearGradient id="paint0_linear_795_669" x1="51.2344" y1="36.3359" x2="41.7314" y2="36.3359" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FFBC00" />
                          <stop offset="1" stopColor="#FFDA03" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_795_669" x1="43.9102" y1="41.0442" x2="31.273" y2="51.2615" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#E22652" />
                          <stop offset="1" stopColor="#FF3A44" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_795_669" x1="29.3851" y1="23.3546" x2="37.8208" y2="30.6303" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#0ED574" />
                          <stop offset="1" stopColor="#07F076" />
                        </linearGradient>
                      </defs>
                    </svg>


                  </a> */}
                  {/* <a href="https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261?ls=1" target="_blank"> */}
                  {/* <img src={ImageSub11} className="ico-img" /> */}
                  {/* <svg width="55" height="55" className="media" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle className="yellow" cx="36" cy="36.3379" r="35" fill="white" stroke="#DDD7D5" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M42.1646 21.9407C42.1646 23.4766 41.4862 25.0126 40.5287 26.1208C39.5112 27.3458 37.7557 28.2596 36.3592 28.2598C36.1996 28.2598 36.0399 28.2402 35.9402 28.2208C35.9203 28.143 35.8803 27.9096 35.8803 27.6764C35.8803 26.1208 36.6984 24.5849 37.5761 23.6127C38.6933 22.349 40.5486 21.3962 42.1047 21.3379C42.1447 21.513 42.1646 21.7268 42.1646 21.9407ZM47.6528 31.616C47.6915 31.5912 47.7181 31.5742 47.7306 31.5648C45.6558 28.6679 42.5036 28.59 41.6257 28.5898C40.2844 28.5898 39.0837 29.0536 38.0743 29.4436C37.3424 29.7264 36.711 29.9703 36.1994 29.9703C35.6351 29.9703 34.9889 29.7158 34.2678 29.4318C33.3575 29.0732 32.3276 28.6676 31.1921 28.6676C27.3619 28.6676 23.4717 31.7591 23.4717 37.5919C23.4717 41.2276 24.908 45.0578 26.6836 47.5271C28.2196 49.6269 29.5562 51.3379 31.4714 51.3379C32.3797 51.3379 33.0457 51.0624 33.7459 50.7728C34.5223 50.4516 35.3409 50.113 36.5786 50.113C37.8284 50.113 38.5755 50.4309 39.2961 50.7375C39.9674 51.0231 40.6157 51.299 41.6259 51.299C43.7205 51.299 45.0972 49.452 46.4138 47.6049C47.8901 45.5051 48.5086 43.4441 48.5285 43.347C48.4087 43.3082 44.3989 41.7333 44.3989 37.2809C44.3989 33.6973 47.1304 31.9501 47.6528 31.616Z" fill="#221F20" />
                    </svg>
                  </a> */}
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
