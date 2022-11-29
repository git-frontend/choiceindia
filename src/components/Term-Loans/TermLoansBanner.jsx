
import React from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import LazyLoader from "../Common-features/LazyLoader";
import Quick from '../../assets/images/term-loans/quick.svg';
import Digital from '../../assets/images/term-loans/digital.svg';
import Minimum from '../../assets/images/term-loans/minimum.svg';

function TermLoansBanner() {
    const settings1 = {
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
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
            <section className="inv-fin-banner term-loan-ban">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-md-12">
                            <div className="fin-banner-caption text-center">
                                <h1 className="big-ttl"> Get Term Loan for <br /> Business Online</h1>
                                <p>Our Term Loans are designed to suit your various financial business needs and help offer capital for expenditure and expansion and are best suited for your pre-defined expenditures.</p>
                                <p>Apply for business term loan online<br />
                                    at the lowest interest rate.<br />
                                    <a href="#"><span className="aply-btn">Apply Now!</span></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-md-12">
                            <Slider {...settings1} className="inv-banner-slider">
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            <LazyLoader src={Quick} alt={"Quick"} className={"img-fluid img"} width={"50"} height={"50"} />
                                        </span>
                                        <h3 className="card-ttl">Quick</h3>
                                        <p className="subtext">Sanction</p>
                                    </div>
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            <LazyLoader src={Digital} alt={"Digital"} className={"img-fluid img"} width={"50"} height={"50"} />
                                        </span>
                                        <h3 className="card-ttl">Digital</h3>
                                        <p className="subtext">Disbursement</p>
                                    </div>
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            <LazyLoader src={Minimum} alt={"Minimum"} className={"img-fluid img"} width={"50"} height={"50"} />
                                        </span>
                                        <h3 className="card-ttl">Minimum</h3>
                                        <p className="subtext">Paperwork</p>
                                    </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TermLoansBanner;
