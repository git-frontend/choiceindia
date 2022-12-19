
import React from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import LazyLoader from "../Common-features/LazyLoader";
import time from '../../assets/images/nbfc-indivial-loan/quick-flexi-loan-approval.svg';
import disburse from '../../assets/images/nbfc-indivial-loan/flexi-loan-disbursed-in-48-hours.svg';
import paperwork from '../../assets/images/nbfc-indivial-loan/minimum-paper-work-for-flexi-business-loan.svg';
import fee from '../../assets/images/nbfc-indivial-loan/low-flexi-loan-processing-fees.svg';
function FlexiCreditBusinessBanner() {
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
            <section className="inv-fin-banner flexi-credit-banner">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-md-12">
                            <div className="fin-banner-caption text-center">
                                <h1 className="big-ttl"> Apply for Business Flexi<br /> Credit in India </h1>
                                <p>  Our Flexi-Credit gives you the freedom to withdraw or deposit money multiple times from your loan account and only pay interest on the utilized amount with our efficient business loan facility.</p>
                                <p>Get a Flexi business loan up to<br />
                                Rs. 25 lakhs online. <br />

          
                                    <a href="#"><span className="aply-btn">Apply Now!</span></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center ">
                        <div className="col-xl-12 col-md-12">
                        <Slider {...settings1} className="inv-banner-slider">
                            <div className="carditem-nbfc">
                            <span className='cardimg'>
                                {/* <LazyLoader src={time} alt={"Quick Flexi Loan Approval"} className={"img-fluid img"} width={"45"} height={"34"} /> */}
                                <img src={time} alt="Quick Flexi Loan Approval" className="img-fluid img"  width={"45"} height={"34"}></img> 
                            </span>
                                <h3 className="card-ttl">10 Mins</h3>
                                <p className="subtext">Loan Sanctioned Time</p>
                            </div>
                            <div className="carditem-nbfc">
                            <span className='cardimg'>
                                {/* <LazyLoader src={disburse} alt={"Flexi Loan Disbursed in 48 Hours"} className={"img-fluid img"} width={"45"} height={"50"} /> */}
                                <img src={disburse} alt="Flexi Loan Disbursed in 48 Hours" className="img-fluid img"  width={"45"} height={"50"}></img> 
                            </span>
                                <h3 className="card-ttl">48 Hours</h3>
                                <p className="subtext">to Get Loan Disbursed</p>
                            </div>
                            <div className="carditem-nbfc">
                            <span className='cardimg'>
                                {/* <LazyLoader src={paperwork} alt={"Minimum Paper Work for Flexi Business Loan"} className={"img-fluid img"} width={"45"} height={"34"} /> */}
                                <img src={paperwork} alt="Minimum Paper Work for Flexi Business Loan" className="img-fluid img"  width={"45"} height={"34"}></img> 
                            </span>
                                <h3 className="card-ttl">Minimum</h3>
                                <p className="subtext">Paperwork</p>
                            </div>
                            <div className="carditem-nbfc">
                            <span className='cardimg'>
                                {/* <LazyLoader src={fee} alt={"Low Flexi Loan Processing Fee"} className={"img-fluid img"} width={"45"} height={"34"} /> */}
                                <img src={fee} alt="Low Flexi Loan Processing Fee" className="img-fluid img"  width={"45"} height={"34"}></img> 
                            </span>
                                <h3 className="card-ttl">Low</h3>
                                <p className="subtext">processing Fee</p>
                            </div>
                        </Slider> 
                        </div>
                    </div>
                </div>
            </section>

          
        </div>
    );
}

export default FlexiCreditBusinessBanner;
