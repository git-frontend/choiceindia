import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
function Benefits() {
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
            <section className="benifits-sec">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="caption">
                                <h2 className="title-secnd">Benefits of Our Corporate Demat Account</h2>
                                <p>All-in-One account for all your trading needs and more.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            {
                                view && !view.matches ?
                                    <Slider {...settings2} className="benifits-list-section">
                                        <div className="list-itm">
                                            <span>‘0’</span>
                                            <h5>Account <br/> Opening Fee</h5>
                                        </div>
                                        <div className="list-itm">
                                            <span>‘0’</span>
                                            <h5>AMC for <br/> 1st Yea</h5>
                                        </div>
                                        <div className="list-itm">
                                            <span>‘0’</span>
                                            <h5>Auto Square-off <br/> Charges</h5>
                                        </div>
                                        <div className="list-itm">
                                            <span>‘Free’</span>
                                            <h5>Research <br/> Calls</h5>
                                        </div>

                                    </Slider>
                                    :
                                    <div className="benifits-list-section">
                                    <div className="list-itm">
                                            <span>‘0’</span>
                                            <h5>Account <br/> Opening Fee</h5>
                                        </div>
                                        <div className="list-itm">
                                            <span>‘0’</span>
                                            <h5>AMC for <br/> 1st Yea</h5>
                                        </div>
                                        <div className="list-itm">
                                            <span>‘0’</span>
                                            <h5>Auto Square-off <br/> Charges</h5>
                                        </div>
                                        <div className="list-itm">
                                            <span>‘Free’</span>
                                            <h5>Research <br/> Calls</h5>
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
export default Benefits;