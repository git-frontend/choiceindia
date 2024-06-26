
import React from "react";
import TaxAdvisory from '../../assets/images/about-us/tax-advisory.webp';
import EquityBroking from '../../assets/images/about-us/equity-broking.webp';
import WealthManagement from '../../assets/images/about-us/wealth-management.webp';
import Insurance from '../../assets/images/about-us/insurance-service.webp';
import Loans from '../../assets/images/about-us/loans.webp';
import CapitalAdvisory from '../../assets/images/about-us/capital-advisory.webp';
import ManagementConsult from '../../assets/images/about-us/management-consultancy.webp';
import GovernmentAdvisory from '../../assets/images/about-us/government-advisory.webp';
import LazyLoader from '../Common-features/LazyLoader';

import Slider from "react-slick";
function WhatWeOffer() {
  const settings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    margin: 20,
    dots: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>

      <section className="Offer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-sec text-center">
                <h3 className="title-first">What we Offer</h3>
                <p>We offer a wide range of customized services, empowering our clients to manage their finances <br /> under one roof</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="offer-list">
                <Slider {...settings} className="offer-slider">

                  <div className="card ">
                    <div className="img-itm">
                      <LazyLoader src={EquityBroking} className={"img-fluid"} alt={"Equity Broking"} width={"50"} height={"50"} />
                    </div>
                    <div className="namedesg">
                      <h4 className="title">Equity Broking</h4>
                      <p className="text">Invest in Capital Markets with our smart insights &amp; recommendations.</p>
                    </div>
                  </div>


                  <div className="card ">
                    <span className="img-itm">
                      <LazyLoader src={WealthManagement} className={"img-fluid"} alt={"Wealth Management"} width={"50"} height={"50"} />
                    </span>
                    <div className="namedesg">
                      <h4 className="title">Wealth Management</h4>
                      <p className="text">We help individuals &amp; organizations in achieving their monetary objectives.</p>
                    </div>
                  </div>


                  <div className="card ">
                    <div className="img-itm">
                      <LazyLoader src={Insurance} className={"img-fluid"} alt={"Insurance Service"} width={"46"} height={"46"} />
                    </div>
                    <div className="namedesg">
                      <h4 className="title">Insurance</h4>
                      <p className="text">Find the right insurance policies for unforeseen events with us.</p>
                    </div>
                  </div>


                  <div className="card ">
                    <div className="img-itm">
                      <LazyLoader src={Loans} className={"img-fluid"} alt={"Loans"} width={"50"} height={"51"} />
                    </div>
                    <div className="namedesg">
                      <h4 className="title">Loans</h4>
                      <p className="text">Choice Retail Loans team covers all loan requirements under one single umbrella.</p>
                    </div>
                  </div>


                  <div className="card">
                    <div className="img-itm">
                      <LazyLoader src={CapitalAdvisory} className={"img-fluid"} alt={"Capital Advisory"} width={"50"} height={"50"} />
                    </div>
                    <div className="namedesg">
                      <h4 className="title">Capital Advisory</h4>
                      <p className="text">We help institutions optimise capital flows, transactions and liquidity.</p>
                    </div>
                  </div>


                  <div className="card">
                    <div className="img-itm">
                      <LazyLoader src={ManagementConsult} className={"img-fluid"} alt={"Management Consultancy"} width={"50"} height={"50"} />
                    </div>
                    <div className="namedesg">
                      <h4 className="title">Management Consultancy</h4>
                      <p className="text">Our team closely work with business leaders focusing on solving thier problems.</p>
                    </div>
                  </div>


                  <div className="card">
                    <div className="img-itm">
                      <LazyLoader src={GovernmentAdvisory} className={"img-fluid"} alt={"Government Advisory"} width={"50"} height={"50"} />
                    </div>
                    <div className="namedesg">
                      <h4 className="title">Government Advisory</h4>
                      <p className="text">We help governments with development and financial projects for national interest</p>
                    </div>
                  </div>


                  <div className="card">
                    <div className="img-itm">
                      <LazyLoader src={TaxAdvisory} className={"img-fluid"} alt={"Tax Advisory"} width={"50"} height={"50"} />
                    </div>
                    <div className="namedesg">
                      <h4 className="title">Tax Advisory</h4>
                      <p className="text">Our team is well equipped with everything to deliver efficient tax management.</p>
                    </div>
                  </div>

                </Slider>
              </div>
            </div>

          </div>
        </div>

      </section>


    </div>
  );
}

export default WhatWeOffer;
