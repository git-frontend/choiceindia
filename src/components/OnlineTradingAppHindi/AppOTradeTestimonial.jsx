
import React from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

function AppOTradeTestimonial() {
  const settings1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    infinite:true,
    fade: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className='App-main'>



      <section className="top-app-testimonial">
        <div className="container">
          <div className="app-sec8-main">
            <div className="row">
              <div className="col-md-12">
              <div className="heading-sec">
                <h3 className="title-secnd text-center"> ट्रेडर्स हमारे ट्रेडिंग ऐप के बारे में क्या कहते है?</h3>
              </div>
                
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                
                <Slider {...settings1} className='slideshow'>

                  <div className="content">
                    <div className="thumbnail">
                      <p className="SdClientName">मोहित सरावगी</p>
                      <img src="https://choiceindia.com/assets/images/trading-app-new/starrating.svg" alt="" className="img-fluid" width={"152"} height={"23"} />
                    </div>
                    <div className="btnNtxt">
                      <div className="sdAllContent">

                        <div className="sd_scroll">
                          <p className="sdCustomSliderHeadig">किसी भी अन्य फाइनेंसियल मैनेजमेंट ऐप की तुलना में अधिक सुविधाएँ , यह मेरे सभी निवेश को वर्तमान मूल्य के साथ एक क्लिक में दिखाता है। इसके अलावा, मैं एक क्लिक से स्क्रिप्ट खरीद और बेच सकता हूं। मैं निश्चित रूप से इस ऐप को सभी को रेकमेन्ड करूँगा|</p>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="content">
                    <div className="thumbnail">
                      <p className="SdClientName">रंगास्वामी टी</p>
                      <img src="https://choiceindia.com/assets/images/trading-app-new/starrating.svg" alt="" className="img-fluid" width={"152"} height={"23"}/>
                    </div>
                    <div className="btnNtxt">
                      <div className="sdAllContent">

                        <div className="sd_scroll">
                          <p className="sdCustomSliderHeadig">मेरी समस्याओं को हल करने के लिए चॉइस का धन्यवाद  ... जो आमतौर पर अन्य ऐप्स जल्दी हल नहीं करते|</p>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="content">
                    <div className="thumbnail">
                      <p className="SdClientName"> रुपेश घाडगे </p>
                      <img src="https://choiceindia.com/assets/images/trading-app-new/starrating.svg" alt="" className="img-fluid" width={"152"} height={"23"} />
                    </div>
                    <div className="btnNtxt">
                      <div className="sdAllContent">

                        <div className="sd_scroll">
                          <p className="sdCustomSliderHeadig">शानदार यूजर इंटरफेस के साथ स्मूद यूजर फ्रेंडली ऐप। ऐप वास्तव में अच्छा और तेज़ है। कॉन्सेप्ट कमाल का है। उपयोगकर्ता के अनुकूल अच्छे UI के साथ। मुझे यह ऐप पसंद है आया। धन्यवाद</p>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="content">
                    <div className="thumbnail">
                      <p className="SdClientName">हर्षित पोददार</p>
                      <img src="https://choiceindia.com/assets/images/trading-app-new/starrating.svg" alt="" className="img-fluid" width={"152"} height={"23"} />
                    </div>
                    <div className="btnNtxt">
                      <div className="sdAllContent">
                        <div className="sd_scroll">
                          <p className="sdCustomSliderHeadig">उत्कृष्ट!! ऐप न्यूनतम ब्रोकरेज शुल्क के साथ ऑनलाइन ट्रेडिंग को आसान बनाता है। किसी भी तरह की समस्या होने पर टीम तुरंत हल देती है।</p>
                        </div>

                      </div>
                    </div>
                  </div>
                  
                 
                  </Slider>
              </div>

            </div>

          </div>
        </div>
      </section>







    </div>
  );
}

export default AppOTradeTestimonial;
