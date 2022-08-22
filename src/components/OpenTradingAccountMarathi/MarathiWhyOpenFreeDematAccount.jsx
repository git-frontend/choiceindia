
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import Image7 from '../../assets/images/open-demat-account/low-brokerage-demat-account.svg';
import Image8 from '../../assets/images/open-demat-account/free-call-for-trade-facility.svg';
import Image9 from '../../assets/images/open-demat-account/free-paperless-demat-account-opening.svg';
import Image10 from '../../assets/images/open-demat-account/advanced-trading-app-platform.svg';
import Image11 from '../../assets/images/open-demat-account/refer-and-earn-demat-account.svg';
function WhyOpenFreeDematAccount() {

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
          loop: true,
            infinite:true,
            autoplaySpeed: 5000,
            autoplay: true,
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
                                <h2>आमच्याकडेच डिमॅट खाते का ओपन करावे?</h2>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="pl-4">
                                <Slider {...settings} id="advslider" className="adv-sect-slider">
                                <div className="card adv-card">
                                            <div className="icon-wrap">
                                                <img src={Image7} width={"40"} height={"41"} className="img-fluid" alt={"कमी ब्रोकरेज डिमॅट खाते"} />
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">कमी ब्रोक्रेज</h5>
                                                <p> कमी ब्रोक्रेज चार्जेस: किमान २ पैसे</p>
                                            </div>
                                        </div>
                                        <div className="card adv-card">
                                            <div className="icon-wrap">
                                                <img src={Image8} width={"40"} height={"41"} alt={"ट्रेड सुविधेसाठी विनामूल्य कॉल"} className="img-fluid lazyload" />
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">ट्रेडिंगसाठी मोफत कॉलची सुविधा</h5>
                                                <p> आमचे ग्राहक ट्रेडिंगसाठी मोफत कॉलच्या पर्यायाची निवड करु शकतात </p>
                                            </div>
                                        </div>
                                        <div className="card adv-card">
                                            <div className="icon-wrap">
                                                <img src={Image9} width={"40"} height={"41"} alt={"मोफत पेपरलेस डिमॅट खाते उघडणे"} className="img-fluid lazyload" />
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">पेपरलेस खाते ओपन करण्याची सुविधा</h5>
                                                <p>
                                                ऑनलाईन सुविधेमुळे कागदपत्रांशिवाय पाच मिनिटात खाते ओपन करु शकता.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card adv-card">
                                            <div className="icon-wrap">
                                                <img src={Image10} width={"40"} height={"41"} alt={"प्रगत ट्रेडिंग अँप आणि प्लॅटफॉर्म"} className="img-fluid lazyload" />
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">अत्याधुनिक तंत्रज्ञानाने समृद्ध व्यासपीठ (Platform)</h5>
                                                <p>
                                                संकेतस्थळ किंवा अँड्रॉईड आणि आयओएस अँपमुळे ट्रेडिंग होते अतिशय सोपे
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card adv-card">
                                            <div className="icon-wrap">
                                                <img src={Image11} width={"40"} height={"41"} alt={"डीमॅट खाते रेफेर करा आणि कमवा"} className="img-fluid lazyload" />
                                            </div>
                                            <div className="card-block">

                                                <h5 className="card-title">संदर्भातून referrals जास्तीत जास्त कमावण्याची संधी</h5>
                                                <p>
                                                एक पुरस्कत रेफरल प्रोग्राम तुम्हाला आयुष्यभर कमाईच्या स्रोतामध्ये योगदान देऊ शकतो.
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

export default WhyOpenFreeDematAccount;
