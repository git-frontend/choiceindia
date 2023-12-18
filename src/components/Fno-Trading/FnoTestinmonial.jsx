
import React from "react";
import Slider from 'react-slick';
import img1 from '../../assets/images/fno-trading/person1.png';
import img2 from '../../assets/images/fno-trading/person2.png';
import img3 from '../../assets/images/fno-trading/person3.png';
import img4 from '../../assets/images/fno-trading/person4.png';
import img5 from '../../assets/images/fno-trading/person5.png';
import img6 from '../../assets/images/fno-trading/person6.png';
import img7 from '../../assets/images/fno-trading/person7.png';
import img8 from '../../assets/images/fno-trading/person8.png';
function FnoTestinmonial() {

    const settings = {
        infinite: true,
        speed: 2000,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        margin:15,
        dots:true,
        autoplaySpeed: 3000,
        slidesToScroll: 3,
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
            <section className="fno-testimonial">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
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
                                            <img src={img1} className="clnt-img" />
                                            <p>Choice has improved my trading experience. The real-time data and pre-built strategies have made options trading a breeze. I highly recommend them.</p>
                                            <h4>Rajesh</h4>
                                            <h5>Mumbai</h5>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="test-box">
                                            <img src={img2} className="clnt-img" />
                                            <p>I've been an Expiry Day Trader for years and Choice has truly been a game-changer. Their tools and market insights have made trading so much easier.</p>
                                            <h4>Anita</h4>
                                            <h5>Delhi</h5>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="test-box">
                                            <img src={img3} className="clnt-img" />
                                            <p>The advanced technical charts by Choice have helped me navigate market volatility confidently. It's a good platform for any Options Trader.</p>
                                            <h4>Suresh</h4>
                                            <h5>Bengaluru</h5>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="test-box">
                                            <img src={img7} className="clnt-img" />
                                            <p>Trading on Expiry Day used to be a stressful experience. Thanks to Choice, I can now trade with accuracy and stay ahead of the market.</p>
                                            <h4>Meena</h4>
                                            <h5>Kolkata</h5>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="test-box">
                                            <img src={img5} className="clnt-img" />
                                            <p>Choice has simplified options trading for me. Their platform is intuitive and the strategies are easy to understand. Kudos!</p>
                                            <h4>Vikram</h4>
                                            <h5>Chennai</h5>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="test-box">
                                            <img src={img6} className="clnt-img" />
                                            <p>I used to worry about trading on Expiry Day, but Choice has put my worries to rest. The real-time updates and insights have made a big difference. Thanks, Choice!</p>
                                            <h4>Preeti</h4>
                                            <h5>Jaipur</h5>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="test-box">
                                            <img src={img4} className="clnt-img" />
                                            <p>I've tried many trading platforms, but Choice stands out. The features are advanced yet user-friendly, making options trading a smooth experience.</p>
                                            <h4>Ishan</h4>
                                            <h5>Pune</h5>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="test-box">
                                            <img src={img8} className="clnt-img" />
                                            <p>Choice has made Expiry Day Trading simple and efficient. The timely alerts and strategies have helped me greatly. Highly recommended!</p>
                                            <h4>Shreya</h4>
                                            <h5>Hyderabad</h5>
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