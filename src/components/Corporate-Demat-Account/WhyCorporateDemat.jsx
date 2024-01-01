import React, { useState, useEffect } from "react";
import process from '../../assets/images/Corporate-Demat-Account/process.svg';


function WhyCorporateDemat() {

    const [view,setView]=useState({
		matches: window.innerWidth < 767 ? false : true ,
	  });

      useEffect(() => {
        let mediaQuery = window.matchMedia("(min-width: 767px)");
        mediaQuery.addListener(setView);
        // this is the cleanup function to remove the listener
        return () => mediaQuery.removeListener(setView);
      }, []);

    const settings2 = {
        infinite: true,
        speed: 2000,
        arrows: false,
        slidesToShow: 8,
        autoplay: false,
        margin:15,
        dots:true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              adaptiveHeight: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              speed: 1000,
            },
          },
        ],
    };
 
    function scrollToId(id) {
      var element = document.getElementById(id);
      var headerOffset = 140;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });
  }
    return (
        <>
            <section className="why-corporate-account">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="why-corporate-heading text-center">
                                <h2 className="title-secnd">Why Open a Corporate Demat Account</h2>
                                <p className="why-corporate-para1">Tailored for businesses, our Corporate Demat account enables stock market investments,<br />
                                    including mutual funds and stocks. It allows businesses to manage their assets or securities efficiently.</p>
                                <p className="why-corporate-para1 para2"> How our account can elevate your corporate trading experience:</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                      {
									view && !view.matches ? 
                          <Slider {...settings2} className="list-section">
                              <div className="list-itm">
                                  <span>
                                    <img src={process} alt={"Intraday Research Calls"}/>
                                  </span>
                                  <h4>Intraday Research <br/> Calls</h4>
                                  <h5>Expert advice for <br/> informed trading.</h5>
                              </div>
                              <div className="list-itm">
                                  <span>
                                    <img src={process} alt={"Technical Charts & Indicators for Day Traders"}/>
                                  </span>
                                  <h4>Technical Charts <br/> & Indicators</h4>
                                  <h5>Comprehensive tools <br/> for market analysis.</h5>
                              </div>
                              <div className="list-itm">
                                  <span>
                                    <img src={process} alt={"One-Click Square-Off all Positions"}/>
                                  </span>
                                  <h4>One-Click Square-Off all Positions</h4>
                                  <h5>Efficient trade <br/> management.</h5>
                              </div>
                              <div className="list-itm">
                                  <span>
                                    <img src={process} alt={"Intraday Trading with Advanced Stock Screeners"} />
                                  </span>
                                  <h4>Advanced <br/> Screeners</h4>
                                  <h5>Filter stocks to <br/> suit your criteria.</h5>
                              </div>
                              <div className="list-itm">
                                  <span>
                                    <img src={process} alt={"Intraday Trading with MTF Facility"}/>
                                  </span>
                                  <h4>MTF <br/> Facility</h4>
                                  <h5>Leverage your <br/> positions easily.</h5>
                              </div>
                              
                          </Slider>
                          :
                          <div className="list-section">
                          <div className="list-itm">
                                  <span>
                                    <img src={process} alt={"Intraday Research Calls"}/>
                                  </span>
                                  <h4>Intraday Research <br/> Calls</h4>
                                  <h5>Expert advice for <br/> informed trading.</h5>
                              </div>
                              <div className="list-itm">
                                  <span>
                                    <img src={process} alt={"Technical Charts & Indicators for Day Traders"}/>
                                  </span>
                                  <h4>Technical Charts <br/> & Indicators</h4>
                                  <h5>Comprehensive tools <br/> for market analysis.</h5>
                              </div>
                              <div className="list-itm">
                                  <span>
                                    <img src={process} alt={"One-Click Square-Off all Positions"}/>
                                  </span>
                                  <h4>One-Click Square-Off <br/> all Positions</h4>
                                  <h5>Efficient trade <br/> management.</h5>
                              </div>
                              <div className="list-itm">
                                  <span>
                                    <img src={process} />
                                  </span>
                                  <h4>MTF <br/> Facility</h4>
                                  <h5>Leverage your <br/> positions easily.</h5>
                              </div>
                              <div className="list-itm">
                                  <span>
                                  <img src={process} alt={"Day Trading with Auto Trade via TradingView"}/>
                                  </span>
                                  <h4>Auto Trade via <br/> TradingView</h4>
                                  <h5>Simplify your <br/> trading activities</h5>
                              </div>
                          </div>
                        }
                      </div>
                      
                      <div className="col-md-12 d-flex justify-content-center">
                            <a href="javascript:void(0)" className="btn-bg btn-new" onClick={() => scrollToId('campaignForm')}>Experience Now</a>
                        </div>
                  </div>
                </div>
            </section>
        </>
    );
}
export default WhyCorporateDemat;