
import React from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import LazyLoader from "../Common-features/LazyLoader";
import time from '../../assets/images/nbfc-indivial-loan/time.svg';
import disburse from '../../assets/images/nbfc-indivial-loan/get-loan-to-disburse.svg';
import paperwork from '../../assets/images/nbfc-indivial-loan/paperwork.svg';
import fee from '../../assets/images/nbfc-indivial-loan/processing-fee.svg';
function FlexitabVehLoan() {

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
                    slidesToScroll: 1,
                    dots: true,
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
                                <h2 className="title-first flexititle">Apply for Vehicle Loan Online</h2>
                                <p className="para">Are you struggling for days and still unable to find a way to get your desired vehicle financed even after multiple attempts? Do not worry!
                                    Your search can stop right here with us. We are a customer-oriented organization where we treat our customers like family. We at Choice Finserv offer affordable and budget-friendly vehicle loans making sure that the wheels of your growth keep moving.</p>
                                <br /> <p>Own Your Dream Car and drive away happy with an instant vehicle loan with 100% asset value.
                                    <br /> <b> Apply Now!</b></p>
                            </div>

                        </div>


                    </div>

                </div>
            </section>

            <section className="card-wrap-nbfc">
                <div className="container">
                    <div className="row">
                        <Slider {...settings1}>
                            <div className="col-md-3">
                                <div className="carditem-nbfc">
                                    <span className='cardimg'>
                                        <LazyLoader src={time} alt={"Loans"} className={"img-fluid img"} width={"35"} height={"34"} />
                                    </span>
                                    <h3 className="card-ttl">10 Mins</h3>
                                    <p className="subtext">Loan Sanctioned Time</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="carditem-nbfc">
                                    <span className='cardimg'>
                                        <LazyLoader src={disburse} alt={"Loans"} className={"img-fluid img"} width={"35"} height={"34"} />
                                    </span>
                                    <h3 className="card-ttl">48 Hours</h3>
                                    <p className="subtext">to Get Loan Disbursed</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="carditem-nbfc">
                                    <span className='cardimg'>
                                        <LazyLoader src={paperwork} alt={"Loans"} className={"img-fluid img"} width={"35"} height={"34"} />
                                    </span>
                                    <h3 className="card-ttl">Minimum</h3>
                                    <p className="subtext">Paperwork</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="carditem-nbfc">
                                    <span className='cardimg'>
                                        <LazyLoader src={fee} alt={"Loans"} className={"img-fluid img"} width={"35"} height={"34"} />
                                    </span>
                                    <h3 className="card-ttl">Low</h3>
                                    <p className="subtext">processing Fee</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default FlexitabVehLoan;
