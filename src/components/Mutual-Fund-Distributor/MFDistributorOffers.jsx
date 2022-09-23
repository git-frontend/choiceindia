import React from 'react';
import img1 from '../../assets/images/mutual-fund-distributor/readymade-mutual-fund-baskets.svg';
import img2 from '../../assets/images/mutual-fund-distributor/free-financial-planner.svg';
import img3 from '../../assets/images/mutual-fund-distributor/expert-rated-mutual-fund-schemes.svg';
import img4 from '../../assets/images/mutual-fund-distributor/goal-based-investment.svg';
import img5 from '../../assets/images/mutual-fund-distributor/instant-redemption.svg';
import img6 from '../../assets/images/mutual-fund-distributor/family-investment-tracker.svg';
import LazyLoader from '../Common-features/LazyLoader';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

function MFDistributorOffers() {

    const settings = {
        infinite: true,
        speed: 1500,
        arrows: false,
        slidesToShow: 6,
        autoplay: false,
        margin: 15,
        dots: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 591,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <section className="franchise-offers distributor-Offers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="titl3">Offerings for Your Clients</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                             <Slider {...settings} className="slider-Offers">
                                <div className='list-itm'>
                                    <span className='itm-img'>
                                        <LazyLoader src={img1} alt={"Readymade Mutual Fund Baskets"} className={"img-fluid"} width={"67"} height={"55"} />
                                    </span>
                                    <h3>Readymade Mutual Fund Baskets</h3>
                                </div>
                                <div className='list-itm'>
                                    <span className='itm-img'>
                                        <LazyLoader src={img2} alt={"Free Financial Planner"} className={"img-fluid"} width={"61"} height={"68"} />
                                    </span>
                                    <h3>Free Financial Planner</h3>
                                </div>
                                <div className='list-itm'>
                                    <span className='itm-img'>
                                        <LazyLoader src={img3} alt={"Expert Rated Mutual Fund Schemes"} className={"img-fluid"} width={"65"} height={"66"} />
                                    </span>
                                    <h3>Expert Rated Schemes</h3>
                                </div>
                                <div className='list-itm'>
                                    <span className='itm-img'>
                                        <LazyLoader src={img4} alt={"Goal Based Investment"} className={"img-fluid"} width={"68"} height={"68"} />
                                    </span>
                                    <h3>Goal Based Investment</h3>
                                </div>
                                <div className='list-itm'>
                                    <span className='itm-img'>
                                        <LazyLoader src={img5} alt={"Instant Redemption"} className={"img-fluid"} width={"63"} height={"67"} />
                                    </span>
                                    <h3>Instant <br/>Redemption</h3>
                                </div>
                                <div className='list-itm'>
                                    <span className='itm-img'>
                                        <LazyLoader src={img6} alt={"Family Investment Tracker"} className={"img-fluid"} width={"68"} height={"67"} />
                                    </span>
                                    <h3>Family Investment Tracker</h3>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
}

export default MFDistributorOffers;