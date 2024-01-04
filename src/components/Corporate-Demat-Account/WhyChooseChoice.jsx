import React, { useState, useEffect } from "react";
import mcx from '../../assets/images/Corporate-Demat-Account/mcx-award.png';
import BeGameChanger from '../../assets/images/Corporate-Demat-Account/be-game-changer.png';
import IciciBank from '../../assets/images/Corporate-Demat-Account/icici-bank-award.png';
import Slider from 'react-slick';
import LazyLoader from '../Common-features/LazyLoader';
function WhyChooseChoice() {
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
            <section className="why-choose-choice">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h2 className="title-secnd">Why Choose Choice?</h2>
                                <p>We provide access to expert advice, comprehensive financial services, personalized services, and the opportunity to bank substantial returns with professional portfolio management.</p>
                                <p>Our track record of regulatory compliance and industry expertise sets us apart. We are proud to have received multiple awards and recognitions that reflect our commitment to excellence.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {
                                view && !view.matches ?
                                    <Slider {...settings2} className="awrd-list-section">
                                        <div className="list-itm">
                                            <LazyLoader src={mcx} className={'img-fluid'} width={"308"} height={"318"} alt={""} />
                                        </div>
                                        <div className="list-itm">
                                            <LazyLoader src={BeGameChanger} className={'img-fluid'} width={"308"} height={"318"} alt={""} />
                                        </div>
                                        <div className="list-itm">
                                            <LazyLoader src={IciciBank} className={'img-fluid'} width={"308"} height={"318"} alt={""} />
                                        </div>

                                    </Slider>
                                    :
                                    <div className="awrd-list-section">
                                        <div className="list-itm">
                                            <LazyLoader src={mcx} className={'img-fluid'} width={"308"} height={"318"} alt={""} />
                                        </div>
                                        <div className="list-itm">
                                            <LazyLoader src={BeGameChanger} className={'img-fluid'} width={"308"} height={"318"} alt={""} />
                                        </div>
                                        <div className="list-itm">
                                            <LazyLoader src={IciciBank} className={'img-fluid'} width={"308"} height={"318"} alt={""} />
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
export default WhyChooseChoice;