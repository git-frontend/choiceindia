
import React from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import LazyLoader from "../Common-features/LazyLoader";
import zerocollateral from '../../assets/images/channel-finance/zero-collateral.svg';
import FullFledged from '../../assets/images/channel-finance/full-fledged.svg';
import HighValue from '../../assets/images/channel-finance/high-value.svg';
import Documentation from '../../assets/images/channel-finance/digital-documentation.svg';

function ChannelFinanceBanner() {
    const settings1 = {
        infinite: true,
        speed: 1500,
        slidesToShow:4,
        arrows: false,
        autoplay: false,
        dots: false,
        autoplaySpeed: 1500,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
        
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              infinite: false,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:true,
            }
          }
         
        ]
    
      };
    return (
        <div>
            <section className="inv-fin-banner channel-ban-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-md-12">
                            <div className="fin-banner-caption text-center">
                                <h1 className="big-ttl"> Empower Your Business <br/>
                                    With Channel Finance</h1>
                                <p>We provide Working capital finance like in form of channel finance limit generally to selected “Spoke” on the recommendation of anchor, for the purpose of selling or buying of products and services.</p>
                                <p>Apply for channel finance<br />
                                facility up to 50 crores.<br />
                                    <a href="#"><span className="aply-btn">Apply Now!</span></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Slider {...settings1} className="inv-banner-slider">
                                <div className="col-md-3">
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            <LazyLoader src={zerocollateral} alt={"Zero Collateral"} className={"img-fluid img"} width={"50"} height={"50"} />
                                        </span>
                                        <h3 className="card-ttl">Zero <br/>Collateral</h3>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            <LazyLoader src={FullFledged} alt={"Full-Fledged Loan Assistance"} className={"img-fluid img"} width={"50"} height={"50"} />
                                        </span>
                                        <h3 className="card-ttl">Full-Fledged <br/>Loan Assistance</h3>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            <LazyLoader src={HighValue} alt={"High Value Working Capital"} className={"img-fluid img"} width={"60"} height={"50"} />
                                        </span>
                                        <h3 className="card-ttl">High Value <br/>Working Capital</h3>
                                       
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            <LazyLoader src={Documentation} alt={"Digital Documentation Process"} className={"img-fluid img"} width={"35"} height={"50"} />
                                        </span>
                                        <h3 className="card-ttl">Digital <br/> DocumentationProcess</h3>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ChannelFinanceBanner;
