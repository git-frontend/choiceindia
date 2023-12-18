
import React from "react";
import Slider from 'react-slick';
import img1 from '../../assets/images/fno-trading/person1.png';
import img2 from '../../assets/images/fno-trading/person2.png';
import img3 from '../../assets/images/fno-trading/person3.png';
import qoutes from '../../assets/images/intraday-trading/qouats.svg'
function FnoTestinmonial() {

    const settings = {
        infinite: true,
        speed: 2000,
        arrows: false,
        slidesToShow: 3,
        autoplay: false,
        margin:15,
        dots:true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              adaptiveHeight: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              dots:false,
              infinite: false,
            },
          },
        ],
    };

    
    return (
        <>
            <section className="fno-testimonial intr-testimonial">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-md-10'>
                            <div className="heading-sec text-center">
                                <h2 className="title-secnd">Customer Testimonials</h2>
                                <p>Join the thousands of traders who have elevated their trading experience with Choice.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonial-record-sliders">
                                <Slider {...settings} className="sliders-testimonial">
                                    <div className="">
                                        <div className="test-box">
                                            <div className="box-ttl">
                                                <div className="ttl-img">
                                                    <img src={img1} className="clnt-img" />
                                                    <div>
                                                        <h4>Rajesh</h4>
                                                        <h5>Mumbai</h5>
                                                    </div>
                                                </div>
                                                <img src={qoutes} className="img-fluid" />
                                            </div>
                                            <p>Choice has improved my trading experience. The real-time data and pre-built strategies have made
                                                options trading a breeze. I highly recommend them.</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="test-box">
                                            <img src={img2} className="clnt-img" />
                                            <p>I've been an Expiry Day Trader for years and
                                            Choice has truly been a game-changer. Their tools
                                            and market insights have made trading so much
                                            easier
                                            </p>
                                            <h4>Anita</h4>
                                            <h5>Delhi</h5>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="test-box">
                                            <img src={img3} className="clnt-img" />
                                            <p>The advanced technical charts by Choice have
                                                helped me navigate market volatility confidently.
                                                It's a good platform for any Options Trader
                                                </p>
                                            <h4>Suresh</h4>
                                            <h5>Bengaluru</h5>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="test-box">
                                            <img src={img1} className="clnt-img" />
                                            <p>Choice has improved my trading experience. The real-time data and pre-built strategies have made
                                            options trading a breeze. I highly recommend them.</p>
                                            <h4>Rajesh</h4>
                                            <h5>Mumbai</h5>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="test-box">
                                            <img src={img2} className="clnt-img" />
                                            <p>Choice has improved my trading experience. The real-time data and pre-built strategies have made
options trading a breeze. I highly recommend them.</p>
                                            <h4>Rajesh</h4>
                                            <h5>Mumbai</h5>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            

        </>
    );
};
export default FnoTestinmonial;