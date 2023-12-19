
import React from "react";
import Slider from 'react-slick';
import img1 from '../../assets/images/intraday-trading/person1.png';
import img2 from '../../assets/images/intraday-trading/person2.png';
import img3 from '../../assets/images/intraday-trading/person3.png';
import img4 from '../../assets/images/intraday-trading/person4.png';
import img5 from '../../assets/images/intraday-trading/person5.png';
import img6 from '../../assets/images/intraday-trading/person6.png';
import img7 from '../../assets/images/intraday-trading/person7.png';
import img8 from '../../assets/images/intraday-trading/person8.png';
import qoutes from '../../assets/images/intraday-trading/qouats.svg'
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
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
                        <div className='col-xl-10 col-md-12'>
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
                                                        <h4>Ravi Sharma</h4>
                                                        <h5>Mumbai</h5>
                                                    </div>
                                                </div>
                                                <img src={qoutes} className="img-fluid" />
                                            </div>
                                            <p>Choice has truly transformed my intraday trading experience. The One-Click Square-Off feature is a game-changer!</p>
                                        </div>
                                    </div>
                                    <div className="">
                                    <div className="test-box">
                                            <div className="box-ttl">
                                                <div className="ttl-img">
                                                    <img src={img2} className="clnt-img" />
                                                    <div>
                                                        <h4>Anjali Gupta</h4>
                                                        <h5>Delhi</h5>
                                                    </div>
                                                </div>
                                                <img src={qoutes} className="img-fluid" />
                                            </div>
                                            <p>The Research Intraday Calls from Choice have been incredibly helpful in making informed trading decisions. Highly recommend.</p>
                                        </div>
                                    </div>
                                    <div className="">
                                    <div className="test-box">
                                            <div className="box-ttl">
                                                <div className="ttl-img">
                                                    <img src={img3} className="clnt-img" />
                                                    <div>
                                                        <h4>Suresh Nair</h4>
                                                        <h5>Chennai</h5>
                                                    </div>
                                                </div>
                                                <img src={qoutes} className="img-fluid" />
                                            </div>
                                            <p>The Advanced Screeners feature allows me to filter stocks based on my criteria. It's a great tool for any day trader.</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="test-box">
                                            <div className="box-ttl">
                                                <div className="ttl-img">
                                                    <img src={img6} className="clnt-img" />
                                                    <div>
                                                        <h4>Priya Singh</h4>
                                                        <h5>Kolkata</h5>
                                                    </div>
                                                </div>
                                                <img src={qoutes} className="img-fluid" />
                                            </div>
                                            <p>Trading directly from charts has never been easier. Thanks to Choice, I can execute trades quickly and efficiently.</p>
                                        </div>
                                    </div>
                                    <div className="">
                                    <div className="test-box">
                                            <div className="box-ttl">
                                                <div className="ttl-img">
                                                    <img src={img5} className="clnt-img" />
                                                    <div>
                                                        <h4>Amit Patel</h4>
                                                        <h5>Ahmedabad</h5>
                                                    </div>
                                                </div>
                                                <img src={qoutes} className="img-fluid" />
                                            </div>
                                            <p>The Trending Strike feature keeps me ahead of the market. It's real-time data at its best!</p>
                                        </div>
                                    </div>
                                    <div className="">
                                    <div className="test-box">
                                            <div className="box-ttl">
                                                <div className="ttl-img">
                                                    <img src={img4} className="clnt-img" />
                                                    <div>
                                                        <h4>Vijay Kumar</h4>
                                                        <h5>Hyderabad</h5>
                                                    </div>
                                                </div>
                                                <img src={qoutes} className="img-fluid" />
                                            </div>
                                            <p>Choice's Technical Charts and indicators are comprehensive and easy to use. They've made market analysis a breeze.</p>
                                        </div>
                                    </div>
                                    <div className="">
                                    <div className="test-box">
                                            <div className="box-ttl">
                                                <div className="ttl-img">
                                                    <img src={img7} className="clnt-img" />
                                                    <div>
                                                        <h4>Meena Gupte</h4>
                                                        <h5>Pune</h5>
                                                    </div>
                                                </div>
                                                <img src={qoutes} className="img-fluid" />
                                            </div>
                                            <p>Instant Order Execution is crucial for intraday trading. With Choice, I never miss a trading opportunity.</p>
                                        </div>
                                    </div>
                                    <div className="">
                                    <div className="test-box">
                                            <div className="box-ttl">
                                                <div className="ttl-img">
                                                    <img src={img5} className="clnt-img" />
                                                    <div>
                                                        <h4>Rajesh Agarwal</h4>
                                                        <h5>Jaipur</h5>
                                                    </div>
                                                </div>
                                                <img src={qoutes} className="img-fluid" />
                                            </div>
                                            <p>The Auto Trade via TradingView feature has simplified my trading activities. Choice has truly made intraday trading easy.</p>
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