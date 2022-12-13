
import React from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import LazyLoader from "../Common-features/LazyLoader";
import LoanSanction from '../../assets/images/solar-finance/loan-sanction.svg';
import GetLoan from '../../assets/images/solar-finance/get-loan.svg';
import Paperwork from '../../assets/images/solar-finance/paperwork.svg';
import ProcessingFee from '../../assets/images/solar-finance/processing-fee.svg';
import {Link} from 'react-router-dom';

function SolarFinanceBanner() {
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
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              infinite: false,
              dots: true,
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
            <section className="solar-fin-banner solar-ban-bg">
                <div className="container">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xl-8 col-md-12">
                            <div className="fin-banner-caption text-center">
                                <h1 className="big-ttl">Apply for<br/>
                                    solar finance!</h1>
                                <p>Our solar financing solution allows you to purchase your solar power system and pay for the installation
                                    costs upfront and then repay the loan over time.
                                </p>
                                <p>Get solar finance loan up to Rs25 lakh online.<br />
                                <Link to="/invoice-financing"><span className="aply-btn">Apply Now!</span></Link></p>
                            </div>
                        </div>
                        {/* <div className="col-md-6">

                        </div> */}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Slider {...settings1} className="solar-banner-slider">
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            {/* <LazyLoader src={zerocollateral} alt={"Zero Collateral for Channel Finnacing"} className={"img-fluid img"} width={"50"} height={"50"} /> */}
                                            <img src={LoanSanction} alt="Loan Sanction Time" className="img-fluid img"  width={"45"} height={"34"}></img> 
                                        </span>
                                        <h3 className="card-ttl">10 Mins</h3>
                                        <p className="subtext">Loan Sanction Time</p>
                                    </div>
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            {/* <LazyLoader src={FullFledged} alt={"Full Feldge Channel Financing Assistance"} className={"img-fluid img"} width={"45"} height={"50"} /> */}
                                            <img src={GetLoan} alt="Get Loan Disbursed" className="img-fluid img"  width={"60"} height={"50"}></img> 
                                        </span>
                                        <h3 className="card-ttl">48 Hours</h3>
                                        <p className="subtext">to Get Loan Disbursed</p>
                                    </div>
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            {/* <LazyLoader src={HighValue} alt={"High Value Channel Financing"} className={"img-fluid img"} width={"45"} height={"50"} /> */}
                                            <img src={Paperwork} alt="Paperwork" className="img-fluid img"  width={"45"} height={"34"}></img> 
                                        </span>
                                        <h3 className="card-ttl">Minimum</h3>
                                        <p className="subtext">Paperwork</p>
                                    </div>
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            {/* <LazyLoader src={Documentation} alt={"Digital Channel Financing Documentation"} className={"img-fluid img"} width={"30"} height={"45"} /> */}
                                            <img src={ProcessingFee} alt="Processing Fee" className="img-fluid img"  width={"45"} height={"34"}></img> 
                                        </span>
                                        <h3 className="card-ttl">Low</h3>
                                        <p className="subtext">Processing Fee</p>
                                    </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SolarFinanceBanner;
