
import React from "react";
import "./research-new.scss"
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import item1 from '../../assets/images/research/slider-item-one.webp';

function CollectionSlider() {
    const settings1 = {
        infinite: true,
        speed: 2500,
        vertical: true,
        focusOnSelect: true,
        touchMove: true,
        arrows: false,
        slidesToShow: 4,
        autoplay: true,
        dots: false,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: false,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: false,
                },
            },
        ],
    };
    return (
        <div>


            <section className="collectons">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className='sliderwrap'>
                                <slider {...settings1} className="collection-slider">
                                    <div className="slider-item active">
                                        <h3 className="headtext">Collections</h3>
                                        <p className="subtext">Check out the most interesting and unique categories of Stock collections</p>
                                    </div>
                                    <div className="slider-item ">
                                        <h3 className="headtext">Baskets</h3>
                                        <p className="subtext">Curated stock Baskets from different categories to provide diversification benefits</p>
                                    </div>
                                    <div className="slider-item ">
                                        <h3 className="headtext">Our Top Picks</h3>
                                        <p className="subtext">Check out the most interesting and unique categories of Stock collections</p>
                                    </div>
                                </slider>
                            </div>
                            <div class="mt-5">
                                <a class="btn-bg btn-light" href="/">Explore All</a>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-6">
                            <div className="imgwrap">
                                <img src={item1} alt="Collection" className="img-fluid" width={"782"} height={"715"}></img>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default CollectionSlider;
