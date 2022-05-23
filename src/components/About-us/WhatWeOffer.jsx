
import React from "react";
import TaxAdvisory from '../../assets/images/about-us/tax-advisory.png';
import EquityBroking from '../../assets/images/about-us/equity-broking.png';
import WealthManagement from '../../assets/images/about-us/wealth-management.png';
import Insurance from '../../assets/images/about-us/insurance.png';
import Loans from '../../assets/images/about-us/loans.png';
import CapitalAdvisory from '../../assets/images/about-us/capital-advisory.png';
import ManagementConsult from '../../assets/images/about-us/management-consult.png';
import GovernmentAdvisory from '../../assets/images/about-us/government-advisory.png';

import Slider from "react-slick";
function WhatWeOffer() {
    const settings = {
        infinite: true,
        speed: 1500,
        arrows: false,
        slidesToShow: 4,
        autoplay: false,
        margin:20,
        dots:true,
        autoplaySpeed: 1000,
        slidesToScroll: 4,
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
                        <p>We offer a wide range of customized services, empowering our clients to manage their finances under one roof</p>
                      </div>
                    </div>
                  </div>
                <div className="row">
                    <div className="col-md-12">
                      <div className="offer-list">
                        <Slider {...settings} className="offer-slider">
                      
                            <div className="card ">
                              <div className="img-itm">
                                <img src={EquityBroking} className="img-fluid" />
                              </div>
                              <div className="namedesg">
                                  <h4 className="title">Equity Broking</h4>
                                  <p className="text">Invest in Capital Markets with our smart insights &amp; recommendations.</p>
                              </div>
                            </div>
                      
                        
                          <div className="card ">
                            <span className="img-itm">
                              <img src={WealthManagement} className="img-fluid" />
                            </span>
                            <div className="namedesg">
                                <h4 className="title">Wealth Management</h4>
                                <p className="text">We help individuals &amp; organizations achieving their monetary objectives.</p>
                            </div>
                          </div>
                         
                         
                          <div className="card ">
                            <div className="img-itm">
                              <img src={Insurance} className="img-fluid" />
                            </div>
                            <div className="namedesg">
                                <h4 className="title">Insurance</h4>
                                <p className="text">We help you in finding the right insurance policies for unforeseen events.</p>
                            </div>
                          </div>
                          
                         
                          <div className="card ">
                            <div className="img-itm">
                              <img src={Loans} className="img-fluid" />
                            </div>
                            <div className="namedesg">
                                <h4 className="title">Loans</h4>
                                <p className="text">Choice Retail Loans team covers all loan requirements under one single umbrella.</p>
                            </div>
                          </div>
                        
                          
                            <div className="card">
                              <div className="img-itm">
                                <img src={CapitalAdvisory} className="img-fluid" />
                              </div>
                              <div className="namedesg">
                                  <h4 className="title">Capital Advisory</h4>
                                  <p className="text">We help institutions optimise capital flows, transactions and liquidity.</p>
                              </div>
                            </div>
                   
                        
                            <div className="card">
                              <div className="img-itm">
                                <img src={ManagementConsult} className="img-fluid" />
                              </div>
                              <div className="namedesg">
                                  <h4 className="title">Management Consult...</h4>
                                  <p className="text">Our team closely work with business leaders focusing on solving thier problems.</p>
                              </div>
                            </div>
                    
                         
                          <div className="card">
                            <div className="img-itm">
                              <img src={GovernmentAdvisory} className="img-fluid" />
                            </div>
                            <div className="namedesg">
                                <h4 className="title">Government Advisory</h4>
                                <p className="text">We help governments with development and financial projects for national interest</p>
                            </div>
                          </div>
                         
                         
                          <div className="card">
                            <div className="img-itm">
                              <img src={TaxAdvisory} className="img-fluid" />
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
