import React from 'react';
import ImageSub13 from '../../assets/images/sub-broker/sub-broker-eligibility.svg';
import ImageSub14 from '../../assets/images/sub-broker/sell-financial-services.svg';
import ImageSub15 from '../../assets/images/sub-broker/sub-broker-franchise-business.svg';
import ImageSub16 from '../../assets/images/sub-broker/become-a-sub-broker.webp';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from 'react-router-dom';

function WhoEligibleToSubBroker() {

    function scrollToId(id) {
        var element = document.getElementById(id);
        var headerOffset = 140;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    const settings = {
        infinite: true,
        speed: 1500,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        margin: 15,
        dots: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
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
        <div>
            <section className="franchise-eligb">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="eligb-left-sec">
                                <h2 className="titl3">ఛాయిస్‌ సబ్‌ బ్రోకర్‌గా మారేందుకు ఎవరు అర్హులు?</h2>
                                <p className="sml-para-dv">Aనిలకడగా ఉండే ఆదాయ వనరును సృష్టించేందుకు ఆసక్తి ఉన్నవాళ్లు కావొచ్చు</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="eligb-right-sec">
                                <Slider {...settings} className="slider-eligb">
                                    <div className="">
                                        <LazyLoader src={ImageSub13} alt={"సబ్ బ్రోకర్ కావడానికి అర్హత"} className={"img-fluid"} width={"74"} height={"74"} />
                                        {/* <img src={ImageSub13} alt="Individual must be 18+ years of age" className="img-fluid" width="74" height="74" /> */}
                                        <h4>భాగస్వాముల వయస్సు 18 సంవత్సరాలు దాటి ఉండాలి</h4>
                                    </div>
                                    <div className="">
                                        <LazyLoader src={ImageSub14} alt={"ఆర్థిక సేవలను అమ్మండి"} className={"img-fluid"} width={"74"} height={"74"} />
                                        {/* <img src={ImageSub14} alt="A knack to sell products effortlessly" className="img-fluid" width="74" height="74" /> */}
                                        <h4>ఉత్పత్తులను సమర్థవంతంగా విక్రయించే అవకాశం తలుపుతడుతున్నవాళ్లు</h4>
                                    </div>
                                    <div className="">
                                        <LazyLoader src={ImageSub15} alt={"సబ్-బ్రోకర్ ఫ్రాంచైజ్ వ్యాపారం"} className={"img-fluid"} width={"74"} height={"74"} />
                                        {/* <img src={ImageSub15} alt="A desire to be your own boss" className="img-fluid" width="74" height="74" /> */}
                                        <h4>మీకు మీరే యజమానిగా ఉండాలనే కోరిక ఉన్నవాళ్లు</h4>
                                    </div>
                                </Slider>
                                <div className="eligb-img-sec">
                                    <LazyLoader src={ImageSub16} alt={"సబ్ బ్రోకర్ అవ్వండి"} className={"img-fluid"} width={"384"} height={"384"} />
                                    {/* <img src={ImageSub16} alt="Become a Sub Broker &amp; Currency Broking" className="img-fluid" width="384" height="384" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="box-mid-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mid-blue-cont">
                                <h4>మీరు మా భాగస్వామి అయితే వృద్ధి ఖచ్చితంగా ఉంటుంది</h4>
                                <Link to={(window.location.pathname =="/campaign/sub-broker-franchise")? "/campaign/sub-broker-franchise":(window.location.pathname =="/sub-broker-franchise")? "/sub-broker-franchise":""} className="btn-bg" onClick={()=>scrollToId('sub-broker-form')}><span>ఇప్పుడే చేరండి</span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default WhoEligibleToSubBroker;