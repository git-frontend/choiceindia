
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import Image7 from '../../assets/images/open-demat-account/low-brokerage-demat-account.svg';
import Image8 from '../../assets/images/open-demat-account/free-call-for-trade-facility.svg';
import Image9 from '../../assets/images/open-demat-account/free-paperless-demat-account-opening.svg';
import Image10 from '../../assets/images/open-demat-account/advanced-trading-app-platform.svg';
import Image11 from '../../assets/images/open-demat-account/refer-and-earn-demat-account.svg';
function HindiWhyOpenTradingAccount() {

  const settings = {
    infinite: false,
    speed: 1500,
    margin:15,
    arrows: false,
    slidesToShow: 3,
    autoplay: false,
    dots: true,
    autoplaySpeed: 3000,
    slidesToScroll: 3,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
        },
      },
    ],
  };

  return (
    <div>
       <section className="adv-sect" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="sectext">
                                <h2>चॉइस के साथ मुफ़्त डीमैट खाता खोलें</h2>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="pl-4">
                                <Slider {...settings} id="advslider" className="adv-sect-slider">
                                <div className="card adv-card">
                                            <div className="icon-wrap">
                                                <img src={Image7} width={"40"} height={"41"} className="img-fluid" alt={"Low Brokerage Demat Account"} />
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">कम ब्रोकरेज  </h5>
                                                <p>ब्रोकरेज शुल्क 2 पैसे से भी कम हैं।</p>
                                            </div>
                                        </div>
                                        <div className="card adv-card">
                                            <div className="icon-wrap">
                                                <img src={Image8} width={"40"} height={"41"} alt={"Free Call for Trade Facility"} className="img-fluid lazyload" />
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">ट्रेड  सुविधा के लिए मुफ्त कॉल</h5>
                                                <p>  हमारे ग्राहक फोन पर मुफ्त में ट्रेड करने का विकल्प चुन सकते हैं।    </p>
                                            </div>
                                        </div>
                                        <div className="card adv-card">
                                            <div className="icon-wrap">
                                                <img src={Image11} width={"40"} height={"41"} alt={"Refer and Earn Demat Account"} className="img-fluid lazyload" />
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">पेपरलेस खाता खोले</h5>
                                                <p>
                                                5 मिनट के भीतर ऑनलाइन पेपरलेस डीमैट खाता खोलें। 
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card adv-card">
                                            <div className="icon-wrap">
                                                <img src={Image10} width={"40"} height={"41"} alt={"Advanced Trading App &amp; Platform"} className="img-fluid lazyload" />
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">तकनीकी रूप से उन्नत प्लैटफ़ॉर्म</h5>
                                                <p>
                                                अत्याधुनिक सुविधाओं के साथ वेबसाइट या एंड्रॉइड और आईओएस ऐप के माध्यम से ट्रेड करें।
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card adv-card">
                                            <div className="icon-wrap">
                                                <img src={Image9} width={"40"} height={"41"} alt={"Free Paperless Demat Account Opening"} className="img-fluid lazyload" />
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">रेफ़रल से अधिक कमाएँ</h5>
                                                <p>
                                                एक पुरस्कृत रेफरल कार्यक्रम जो कमाई के जीवन भर के स्रोत में योगदान कर सकता है।
                                                </p>
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

export default HindiWhyOpenTradingAccount;
