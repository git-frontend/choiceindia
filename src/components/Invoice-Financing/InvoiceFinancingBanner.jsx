
import React from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import LazyLoader from "../Common-features/LazyLoader";
import zerocollateral from '../../assets/images/invoice-financing/zero-collateral-for-invoice-finnacing.svg';
import documentation from '../../assets/images/invoice-financing/simple-invoice-financing-documention.svg';
import liquidity from '../../assets/images/invoice-financing/enhance-invoice-financing-liquidity.svg';

function InvoiceFinancingBanner() {
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
            <section className="inv-fin-banner invoicefinance-banner">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className=" col-md-7">
                            <div className="fin-banner-caption">
                                <h1 className="big-ttl"> Invest in Invoice <br /> Financing Online</h1>
                                <p>Choice is offering loans to the anchor’s ecosystem against selling or purchasing invoices. Borrower as Anchor “or” spoke may be decided as per the deal structure and mutual agreement.</p>
                                <p>Apply for invoice financing
                                    In India up to 50 crores.<br />
                                    <a href="#"><span className="aply-btn">Apply Now!</span></a></p>
                            </div>
                        </div>
                        <div className=" col-md-5">
                            <div className="formwrap">
                                
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-md-12">
                            <Slider {...settings1} className="inv-banner-slider">
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            {/* <LazyLoader src={zerocollateral} alt={"Zero Collateral for Invoice Finnacing"} className={"img-fluid img"} width={"50"} height={"50"} /> */}
                                            <img src={zerocollateral} alt="Zero Collateral for Invoice Finnacing" className="img-fluid img"  width={"50"} height={"50"}></img> 
                                        </span>
                                        <h3 className="card-ttl">Zero <br/>Collateral</h3>
                                    </div>
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            {/* <LazyLoader src={documentation} alt={"Simple Invoice Financing Documentation"} className={"img-fluid img"} width={"60"} height={"50"} /> */}
                                            <img src={documentation} alt="Simple Invoice Financing Documentation" className="img-fluid img"  width={"60"} height={"50"}></img> 
                                        </span>
                                        <h3 className="card-ttl">Simplified <br/>Documentation</h3>
                                    </div>
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            {/* <LazyLoader src={liquidity} alt={"Enhance Invoice Financing Liquidity"} className={"img-fluid img"} width={"50"} height={"50"} /> */}
                                            <img src={liquidity} alt="Enhance Invoice Financing Liquidity" className="img-fluid img"  width={"50"} height={"50"}></img> 
                                        </span>
                                        <h3 className="card-ttl">Enhance <br/> Liquidity</h3>
                                    </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default InvoiceFinancingBanner;
