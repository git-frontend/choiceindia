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
                            <h2 className="titl3">आपके ग्राहकों के लिए पेशकश</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                             <Slider {...settings} className="slider-Offers">
                                <div className='list-itm'>
                                    <span className='itm-img'>
                                        <LazyLoader src={img1} alt={"रेडीमेड म्यूचुअल फंड बास्केट"} className={"img-fluid"} width={"67"} height={"55"} />
                                    </span>
                                    <h3>रेडीमेड म्यूचुअल फंड बास्केट</h3>
                                </div>
                                <div className='list-itm'>
                                    <span className='itm-img'>
                                        <LazyLoader src={img2} alt={"फ्री फाइनेंशियल प्लानर"} className={"img-fluid"} width={"61"} height={"68"} />
                                    </span>
                                    <h3>फ्री फाइनेंशियल प्लानर</h3>
                                </div>
                                <div className='list-itm'>
                                    <span className='itm-img'>
                                        <LazyLoader src={img3} alt={"एक्सपर्ट रेटेड म्युचुअल फंड योजनाएं"} className={"img-fluid"} width={"65"} height={"66"} />
                                    </span>
                                    <h3>एक्सपर्ट्स द्वारा रेटेड योजनाएं</h3>
                                </div>
                                <div className='list-itm'>
                                    <span className='itm-img'>
                                        <LazyLoader src={img4} alt={"लक्ष्य आधारित निवेश:"} className={"img-fluid"} width={"68"} height={"68"} />
                                    </span>
                                    <h3>लक्ष्य आधारित निवेश</h3>
                                </div>
                                <div className='list-itm'>
                                    <span className='itm-img'>
                                        <LazyLoader src={img5} alt={"तत्काल मोचन"} className={"img-fluid"} width={"63"} height={"67"} />
                                    </span>
                                    <h3>तत्काल <br/>रिडेम्पशन</h3>
                                </div>
                                <div className='list-itm'>
                                    <span className='itm-img'>
                                        <LazyLoader src={img6} alt={"फैमिली इन्वेस्टमेंट ट्रैकर"} className={"img-fluid"} width={"68"} height={"67"} />
                                    </span>
                                    <h3>परिवार निवेश ट्रैकर</h3>
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