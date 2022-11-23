
import React from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import LazyLoader from "../Common-features/LazyLoader";
import time from '../../assets/images/nbfc-indivial-loan/time.webp';
import disburse from '../../assets/images/nbfc-indivial-loan/get-loan-to-disburse.webp';
import paperwork from '../../assets/images/nbfc-indivial-loan/paperwork.webp';
import fee from '../../assets/images/nbfc-indivial-loan/processing-fee.webp';
function flexitab() {

    const settings1 = {
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
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
              slidesToScroll: 1
            }
          }
         
        ]
    
      };
    return (
        <div>


            <section className="flexitabcontent">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 mx-auto">
                            <div className="heading-sec text-center">
                            <h2 className="title-first flexititle">Apply for Flexi Credit Loan in India</h2>
                            <p className="para">Our Flexi-Credit has the freedom to withdraw or deposit money at the same or multiple times from your loan accounts as desired with our efficient business loan facility. We at Choice Finserv understand the management of finances and value money and thus, only charge the interest on the utilized amount. You will have the flexibility of reducing or increasing the repayment amount and tenure period.</p>
                            <br/> <p> Get a Flexi business loan up to 
                           <br/> Rs. 25 lakhs online. 
                           <br/><b> Apply Now!</b></p>
                            </div>
                           
                        </div>
                        
                      
                    </div>

                </div>
            </section>

            <section className="card-wrap">
                <div className="container">
                    <div className="row">
                    <Slider {...settings1}>
                        <div className="col-md-3">
                            <div className="carditem">
                            <span className='cardimg'>
                                <LazyLoader src={time} alt={"Loans"} className={"img-fluid img"} width={"35"} height={"34"} />
                            </span>
                                <h3 className="card-ttl">10 Mins</h3>
                                <p className="subtext">Loan Sanctioned Time</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="carditem">
                            <span className='cardimg'>
                                <LazyLoader src={disburse} alt={"Loans"} className={"img-fluid img"} width={"35"} height={"34"} />
                            </span>
                                <h3 className="card-ttl">48 Hours</h3>
                                <p className="subtext">to Get Loan Disbursed</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="carditem">
                            <span className='cardimg'>
                                <LazyLoader src={paperwork} alt={"Loans"} className={"img-fluid img"} width={"35"} height={"34"} />
                            </span>
                                <h3 className="card-ttl">Paperless</h3>
                                <p className="subtext">Documentation</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="carditem">
                            <span className='cardimg'>
                                <LazyLoader src={fee} alt={"Loans"} className={"img-fluid img"} width={"35"} height={"34"} />
                            </span>
                                <h3 className="card-ttl">Minimum</h3>
                                <p className="subtext">Paperwork</p>
                            </div>
                        </div>
                        </Slider> 
                    </div>
                </div>
            </section>

        </div>
    );
}

export default flexitab;
