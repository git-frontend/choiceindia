
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import Image7 from '../../assets/images/open-demat-account/equity-brokerage-charges.svg';
import Image8 from '../../assets/images/open-demat-account/currency-brokerage-charges.svg';
import Image9 from '../../assets/images/open-demat-account/commodity-brokerage-charges.svg';


function LowBrokerageDematAccount() {

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
                                <h2 className="secttitle">कमी ब्रोक्रेरजने डिमॅट अकाऊंट ओपन करा!</h2>
                                <p>आमच्याकडे इंट्राडे, वितरण (डिलिव्हरी) आणि तुमच्या भविष्याचा विचार करुनच ठराविक प्रमाणात ब्रोकरेज आकारले जाते. तसेच पर्यायांसाठी ब्रोकरेजची गणना ही फ्लॅट फीच्या आधारे केली जाते.</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <Slider {...settings} id="advslider" className="">

                                        <div className="col-md-4 item p-md-2" data-toggle="modal" data-target="#myModal1">
                                            <div className="card adv-card">
                                                <div className="icon-wrap">
                                                    <img src={Image7}  width={"83"} height={"83"} className="img-fluid" alt={"इक्विटी ब्रोकरेज शुल्क"} />
                                                </div>

                                                <div className="card-block">

                                                    <h5 className="card-title">इक्विटी</h5>
                                                    <hr></hr>
                                                    <ul className="charge-lists">
                                                        <li>
                                                        डिलिव्हरी <span>0.२०%</span>
                                                        </li>
                                                        <li>
                                                        इंट्राडे <span>0.०२%</span>
                                                        </li>
                                                        <li>
                                                        फ्यूचर <span>0.०२%</span>
                                                        </li>
                                                        <li>
                                                        ऑप्शन <span>रु. २५ प्रति लॉट</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 item  p-md-2" data-toggle="modal" data-target="#myModal2">
                                            <div className="card adv-card">
                                                <div className="icon-wrap">
                                                    <img src={Image8}  width={"84"} height={"83"} alt={"चलन दलाली शुल्क"} className="img-fluid lazyload" />
                                                </div>
                                                <div className="card-block">

                                                    <h5 className="card-title">चलन</h5>
                                                    <hr></hr>
                                                    <ul className="charge-lists">

                                                        <li>
                                                        फ्यूचर <span>0.०२%</span>
                                                        </li>
                                                        <li>
                                                        ऑप्शन <span>रु. २० प्रति लॉट</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 item p-md-2" data-toggle="modal" data-target="#myModal5">
                                            <div className="card adv-card">
                                                <div className="icon-wrap">
                                                    <img src={Image9}  width={"84"} height={"64"} alt={"कमोडिटी ब्रोकरेज चार्जेस"} className="img-fluid lazyload" />
                                                </div>
                                                <div className="card-block">

                                                    <h5 className="card-title">कमोडिटी</h5>
                                                    <hr></hr>
                                                    <ul className="charge-lists">

                                                        <li>
                                                        फ्यूचर्स <span>0.०२%</span>
                                                        </li>
                                                        <li>
                                                        ऑप्शंस <span>रु. ५० प्रति लॉट</span>
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

export default LowBrokerageDematAccount;
