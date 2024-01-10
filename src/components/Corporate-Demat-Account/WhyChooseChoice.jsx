import React, { useState, useEffect } from "react";
import mcx from '../../assets/images/free-demat-compaign/mcx-awards-2022.webp';
import BeGameChanger from '../../assets/images/free-demat-compaign/gratitude-awards.webp';
import IciciBank from '../../assets/images/free-demat-compaign/achievers-brokers-club.webp';
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 1000,
                    autoplay: true,
                },
            },
        ],
    };


    return (
        <>
            <section className="why-choose-choice">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="caption">
                                <h2 className="title-secnd">Why Choose Choice?</h2>
                                <p>We provide access to expert advice, comprehensive financial services, personalized services, and the opportunity to bank substantial returns with professional portfolio management.</p>
                                <p>Our track record of regulatory compliance and industry expertise sets us apart. We are proud to have received multiple awards and recognitions that reflect our commitment to excellence.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            {
                                view && !view.matches ?
                                    <Slider {...settings2} className="awrd-list-section">
                                        <div className="list-itm">
                                            <LazyLoader src={mcx} className={'img-fluid'} width={"308"} height={"318"} alt={"MCX Awards 2022"} />
                                        </div>
                                        <div className="list-itm">
                                            <LazyLoader src={BeGameChanger} className={'img-fluid'} width={"308"} height={"318"} alt={"Gratitude Awards"} />
                                        </div>
                                        <div className="list-itm">
                                            <LazyLoader src={IciciBank} className={'img-fluid'} width={"308"} height={"318"} alt={"Achievers Broker's Club"} />
                                        </div>

                                    </Slider>
                                    :
                                    <div className="awrd-list-section">
                                        <div className="list-itm">
                                            <LazyLoader src={mcx} className={'img-fluid'} width={"308"} height={"318"} alt={"MCX Awards 2022"} />
                                        </div>
                                        <div className="list-itm">
                                            <LazyLoader src={BeGameChanger} className={'img-fluid'} width={"308"} height={"318"} alt={"Gratitude Awards"} />
                                        </div>
                                        <div className="list-itm">
                                            <LazyLoader src={IciciBank} className={'img-fluid'} width={"308"} height={"318"} alt={"Achievers Broker's Club"} />
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