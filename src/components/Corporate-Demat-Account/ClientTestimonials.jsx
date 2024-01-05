import React, { useState, useEffect } from "react";
import search from '../../assets/images/Corporate-Demat-Account/search.svg';
import support from '../../assets/images/Corporate-Demat-Account/support.svg';
import VikramSingh from '../../assets/images/Corporate-Demat-Account/VikramSingh.svg';
import RohiniGupta from '../../assets/images/Corporate-Demat-Account/RohiniGupta.svg';
import amitVerma from '../../assets/images/Corporate-Demat-Account/amitVerma.svg';
import SunitaRao from '../../assets/images/Corporate-Demat-Account/SunitaRao.svg';
import Slider from 'react-slick';
function ClientTestimonials() {
    const [view, setView] = useState({
        matches: window.innerWidth < 767 ? false : true,
    });

    useEffect(() => {
        let mediaQuery = window.matchMedia("(min-width: 767px)");
        mediaQuery.addListener(setView);
        // this is the cleanup function to remove the listener
        return () => mediaQuery.removeListener(setView);
    }, []);

    const settings2 = {
        infinite: true,
        speed: 2000,
        arrows: false,
        slidesToShow: 8,
        autoplay: true,
        margin: 15,
        dots: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
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
                    speed: 1000,
                },
            },
        ],
    };
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

    return (
        <>
            <section className="client-testimonials-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="client-testimonials-head">
                                <h2 className="title-secnd">Client Testimonials</h2>
                                <p className="Testimonials-para1">Hear from our satisfied clients who have experienced the benefits of our
                                    Corporate Demat accounts firsthand.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {
                                view && !view.matches ?
                                    <Slider {...settings2} className="client-list-section">
                                        <div className="list-itm">
                                            <h5>Opening a Corporate Demat account with Choice was one of the best decisions for our startup. It has allowed us to diversify our investment portfolio and ensure financial stability for our company. The process was seamless and their support team is always there to guide us.</h5>
                                            <div className="client-list-itm">
                                                <span>
                                                    <img src={amitVerma} alt={""} />
                                                </span>
                                                <div className="client-details">
                                                    <h6>Amit Verma</h6>
                                                    <p>CEO of a Tech Startup</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-itm">
                                            <h5>As a manufacturing firm, we always look for ways to grow our financial assets. Choice's Corporate Demat account provided us with an easy and efficient way to invest in the stock market. Their low brokerage charges and user-friendly trading platform made the experience even better.</h5>
                                            <div className="client-list-itm">
                                                <span>
                                                    <img src={RohiniGupta} alt={""} />
                                                </span>
                                                <div className="client-details">
                                                    <h6>Rohini Gupta</h6>
                                                    <p>CFO of a Manufacturing Firm</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-itm">
                                            <h5>Our NGO decided to open a Corporate Demat account with Choice to manage our funds more effectively. Their expert-backed investment tips have been invaluable in helping us make informed investment decisions.</h5>
                                            <div className="client-list-itm">
                                                <span>
                                                    <img src={VikramSingh} alt={""} />
                                                </span>
                                                <div className="client-details">
                                                    <h6>Vikram Singh</h6>
                                                    <p>Director of an NGO</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-itm">
                                            <h5>Running a retail business comes with its own set of challenges and financial planning is one of them. Having a Corporate Demat account with Choice has helped me navigate this aspect with ease. Their research tools and resources have been particularly helpful.</h5>
                                            <div className="client-list-itm">
                                                <span>
                                                    <img src={SunitaRao} alt={""} />
                                                </span>
                                                <div className="client-details">
                                                    <h6>Sunita Rao</h6>
                                                    <p>Proprietor of a Retail Business</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                    :
                                    <div className="client-list-section">
                                        <div className="list-itm">
                                            <h5>Opening a Corporate Demat account with Choice was one of the best decisions for our startup. It has allowed us to diversify our investment portfolio and ensure financial stability for our company. The process was seamless and their support team is always there to guide us.</h5>
                                            <div className="client-list-itm">
                                                <span>
                                                    <img src={amitVerma} alt={""} />
                                                </span>
                                                <div className="client-details">
                                                    <h6>Amit Verma</h6>
                                                    <p>CEO of a Tech Startup</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-itm">
                                            <h5>As a manufacturing firm, we always look for ways to grow our financial assets. Choice's Corporate Demat account provided us with an easy and efficient way to invest in the stock market. Their low brokerage charges and user-friendly trading platform made the experience even better.</h5>
                                            <div className="client-list-itm">
                                                <span>
                                                    <img src={RohiniGupta} alt={""} />
                                                </span>
                                                <div className="client-details">
                                                    <h6>Rohini Gupta</h6>
                                                    <p>CFO of a Manufacturing Firm</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-itm">
                                            <h5>Our NGO decided to open a Corporate Demat account with Choice to manage our funds more effectively. Their expert-backed investment tips have been invaluable in helping us make informed investment decisions.</h5>
                                            <div className="client-list-itm">
                                                <span>
                                                    <img src={VikramSingh} alt={""} />
                                                </span>
                                                <div className="client-details">
                                                    <h6>Vikram Singh</h6>
                                                    <p>Director of an NGO</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-itm">
                                            <h5>Running a retail business comes with its own set of challenges and financial planning is one of them. Having a Corporate Demat account with Choice has helped me navigate this aspect with ease. Their research tools and resources have been particularly helpful.</h5>
                                            <div className="client-list-itm">
                                                <span>
                                                    <img src={SunitaRao} alt={""} />
                                                </span>
                                                <div className="client-details">
                                                    <h6>Sunita Rao</h6>
                                                    <p>Proprietor of a Retail Business</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                        <div className="col-md-12 d-flex justify-content-center">
                            <a href="javascript:void(0)" className="btn-bg btn-new" onClick={() => scrollToId('campaignForm')}>Ask Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ClientTestimonials;