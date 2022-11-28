
import React from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import LazyLoader from "../Common-features/LazyLoader";
import low from '../../assets/images/nbfc-indivial-loan/low.svg';
import nocharges from '../../assets/images/nbfc-indivial-loan/no-charges.svg';
import interestrate from '../../assets/images/nbfc-indivial-loan/interestrate.svg';
import flexibleoption from '../../assets/images/nbfc-indivial-loan/flexibleoption.svg';
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
              slidesToScroll: 1,
              dots:true,
            }
          }
         
        ]
    
      };
    return (
        <div>


            <section className="inv-fin-why-ch">
                <div className="container">
                    <div className="row">
                        <div className="heading-sec text-center">
                            <h2 className="title-first pb-5">Why Choose Us For Felxi<br/>Credit  Loan?</h2>
                        </div>
                    </div>
                    <div className="row">
                    <Slider {...settings1} className="why-ch-slider">
                        <div className="col-md-3">
                            <div className="carditem-nbfc">
                            <span className='cardimg'>
                                <LazyLoader src={low} alt={"Loans"} className={"img-fluid img"} width={"50"} height={"34"} />
                            </span>
                                <h3 className="card-ttl">Low</h3>
                                <p className="subtext">Processing speed</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="carditem-nbfc">
                            <span className='cardimg'>
                                <LazyLoader src={nocharges} alt={"Loans"} className={"img-fluid img"} width={"50"} height={"34"} />
                            </span>
                                <h3 className="card-ttl">No</h3>
                                <p className="subtext">Foreclosure charges</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="carditem-nbfc">
                            <span className='cardimg'>
                                <LazyLoader src={interestrate} alt={"Loans"} className={"img-fluid img"} width={"50"} height={"34"} />
                            </span>
                                <h3 className="card-ttl">Attractive</h3>
                                <p className="subtext">Interest rates </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="carditem-nbfc">
                            <span className='cardimg'>
                                <LazyLoader src={flexibleoption} alt={"Loans"} className={"img-fluid img"} width={"50"} height={"34"} />
                            </span>
                                <h3 className="card-ttl">Flexible</h3>
                                <p className="subtext">Repayment Options</p>
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
