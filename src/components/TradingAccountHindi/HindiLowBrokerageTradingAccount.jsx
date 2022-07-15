
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import Image7 from '../../assets/images/open-demat-account/equity-brokerage-charges.svg';
import Image8 from '../../assets/images/open-demat-account/currency-brokerage-charges.svg';
import Image9 from '../../assets/images/open-demat-account/commodity-brokerage-charges.svg';


function HindiLowBrokerageTradingAccount() {

    const settings = {
        infinite: true,
        speed: 1500,
        margin: 15,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
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
            <section className="Lowbrokerage" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h2 className="secttitle">कम ब्रोकरेज ट्रेडिंग अकाउंट खोलें</h2>
                                <p>ब्रोकरेज इंट्राडे, डिलीवरी और फ्यूचर्स के लिए प्रतिशत के आधार पर चार्ज किया जाता है जबकि ऑप्शंस के लिए ब्रोकरेज की गणना एक फ्लैट शुल्क के आधार पर की जाती है।</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <Slider {...settings} id="advslider" className="">

                                        <div className="col-md-4 item p-md-2" data-toggle="modal" data-target="#myModal1">
                                            <div className="card adv-card">
                                                <div className="icon-wrap">
                                                    <img src={Image7}  width={"28"} height={"26"} className="img-fluid" alt={"इक्विटी ब्रोकरेज शुल्क"} />
                                                </div>

                                                <div className="card-block">

                                                    <h5 className="card-title">इक्विटी</h5>
                                                    <hr></hr>
                                                    <ul className="charge-lists">
                                                        <li>
                                                        इंट्राडे <span>0.20%</span>
                                                        </li>
                                                        <li>
                                                        डिलीवरी <span>0.02%</span>
                                                        </li>
                                                        <li>
                                                        फ्यूचर्स <span>0.02%</span>
                                                        </li>
                                                        <li>
                                                        ऑप्शंस <span>₹ 25 प्रति लॉट</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 item  p-md-2" data-toggle="modal" data-target="#myModal2">
                                            <div className="card adv-card">
                                                <div className="icon-wrap">
                                                    <img src={Image8}  width={"28"} height={"28"} alt={"मुद्रा ब्रोकरेज शुल्क"} className="img-fluid lazyload" />
                                                </div>
                                                <div className="card-block">

                                                    <h5 className="card-title">करन्सी</h5>
                                                    <hr></hr>
                                                    <ul className="charge-lists">

                                                        <li>
                                                        फ्यूचर्स <span>0.02%</span>
                                                        </li>
                                                        <li>
                                                        ऑप्शंस <span>₹ 20 प्रति लॉट</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 item p-md-2" data-toggle="modal" data-target="#myModal5">
                                            <div className="card adv-card">
                                                <div className="icon-wrap">
                                                    <img src={Image9}  width={"28"} height={"28"} alt={"कमोडिटी ब्रोकरेज शुल्क"} className="img-fluid lazyload" />
                                                </div>
                                                <div className="card-block">

                                                    <h5 className="card-title">कमोडिटी</h5>
                                                    <hr></hr>
                                                    <ul className="charge-lists">

                                                        <li>
                                                        फ्यूचर्स <span>0.02%</span>
                                                        </li>
                                                        <li>
                                                        ऑप्शंस <span>₹ 50 प्रति लॉट</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>


                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    );
}

export default HindiLowBrokerageTradingAccount;
