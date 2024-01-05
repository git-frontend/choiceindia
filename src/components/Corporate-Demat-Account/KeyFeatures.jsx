import React, { useState, useEffect } from "react";
import search from '../../assets/images/Corporate-Demat-Account/search.svg';
import support from '../../assets/images/Corporate-Demat-Account/support.svg';
import reliable from '../../assets/images/Corporate-Demat-Account/reliable.svg';
import checkcircle from '../../assets/images/Corporate-Demat-Account/check-circle.svg';
import LazyLoader from '../Common-features/LazyLoader';
import Slider from 'react-slick';
function KeyFeatures() {
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
        autoplay: false,
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


    return (
        <>
            <section className="key-features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h2 className="title-secnd">Key Features of Corporate Demat Account</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {
                                view && !view.matches ?
                                    <Slider {...settings2} className="key-list-section">
                                        <div className="list-itm">
                                            <span>
                                                <LazyLoader src={search} className={'img-fluid'} width={"56"} height={"56"} alt={""} />
                                            </span>
                                            <h4>Research Services</h4>
                                            <h5>A dedicated research team offering Technical and Fundamental Research free of cost.</h5>
                                        </div>
                                        <div className="list-itm">
                                            <span>
                                                <LazyLoader src={support} className={'img-fluid'} width={"56"} height={"56"} alt={""} />
                                            </span>
                                            <h4>Customer Support</h4>
                                            <h5>Excellent support team available via phone, email, and our branch offices, to guide you at every
                                                step.</h5>
                                        </div>
                                        <div className="list-itm">
                                            <span>
                                                <LazyLoader src={reliable} className={'img-fluid'} width={"56"} height={"56"} alt={""} />
                                            </span>
                                            <h4>Reliable Expertise</h4>
                                            <h5>25+ years of expertise in the finance domain, Choice is a trusted name in the broking industry.</h5>
                                        </div>
                                        <div className="list-itm">
                                            <span>
                                                <LazyLoader src={checkcircle} className={'img-fluid'} width={"56"} height={"56"} alt={""} />
                                            </span>
                                            <h4>Locally Available</h4>
                                            <h5>With 104+ local offices across the country, we are always within your reach.</h5>
                                        </div>

                                    </Slider>
                                    :
                                    <div className="key-list-section">
                                        <div className="list-itm">
                                            <span>
                                            <LazyLoader src={search} className={'img-fluid'} width={"56"} height={"56"} alt={""} />
                                            </span>
                                            <h4>Research Services</h4>
                                            <h5>A dedicated research team offering Technical and Fundamental Research free of cost.</h5>
                                        </div>
                                        <div className="list-itm">
                                            <span>
                                            <LazyLoader src={support} className={'img-fluid'} width={"56"} height={"56"} alt={""} />
                                            </span>
                                            <h4>Customer Support</h4>
                                            <h5>Excellent support team available via phone, email, and our branch offices, to guide you at every
                                                step.</h5>
                                        </div>
                                        <div className="list-itm">
                                            <span>
                                            <LazyLoader src={reliable} className={'img-fluid'} width={"56"} height={"56"} alt={""} />
                                            </span>
                                            <h4>Reliable Expertise</h4>
                                            <h5>25+ years of expertise in the finance domain, Choice is a trusted name in the broking industry.</h5>
                                        </div>
                                        <div className="list-itm">
                                            <span>
                                            <LazyLoader src={checkcircle} className={'img-fluid'} width={"56"} height={"56"} alt={""} />
                                            </span>
                                            <h4>Locally Available</h4>
                                            <h5>With 104+ local offices across the country, we are always within your reach.</h5>
                                        </div>

                                    </div>
                            }
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
export default KeyFeatures;