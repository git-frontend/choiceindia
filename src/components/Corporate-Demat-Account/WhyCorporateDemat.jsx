import React, { useState, useEffect } from "react";
import process from '../../assets/images/Corporate-Demat-Account/corporate-demat-account-with-streamlined-operations.svg';
import clockstopwatch from '../../assets/images/Corporate-Demat-Account/open-corporate-demat-account-real-time-access.svg';
import money from '../../assets/images/Corporate-Demat-Account/corporate-demat-account-with-cost-effective-trading.svg';
import shieldcheck from '../../assets/images/Corporate-Demat-Account/corporate-demat-account-with-secure-trading.svg';
import transaction from '../../assets/images/Corporate-Demat-Account/corporate-demat-account-with-effortless-transactions.svg';
import LazyLoader from '../Common-features/LazyLoader';
import Slider from 'react-slick';

function WhyCorporateDemat() {

  const [view, setView] = useState({
    matches: window.innerWidth < 767 ? false : true,
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
    margin: 15,
    dots: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          autoplay: true,
          adaptiveHeight: true,
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
                      <div className="bx-item-cont">
                      <span>
                        <LazyLoader src={process} className={'img-fluid'} width={"100"} height={"100"} alt={"Corporate demat account with streamlined operations"} />
                      </span>
                      <h4>Streamlined Operations</h4>
                      <h5>Simplify corporate actions by eliminating the complexities associated with physical securities.</h5>
                      </div>
                      
                    </div>
                    <div className="list-itm">
                    <div className="bx-item-cont">
                      <span>
                        <LazyLoader src={shieldcheck} className={'img-fluid'} width={"100"} height={"100"} alt={"Corporate demat account with secure trading"} />
                      </span>
                      <h4>Secure Trading</h4>
                      <h5>Protect your corporate assets with enhanced security against forgery, damage, and loss.</h5>
                    </div>
                    </div>
                    <div className="list-itm">
                    <div className="bx-item-cont">
                      <span>
                        <LazyLoader src={clockstopwatch} className={'img-fluid'} width={"100"} height={"100"} alt={"Open corporate demat account real-time access"} />
                      </span>
                      <h4>OReal-time Access</h4>
                      <h5>Empower your trades with real-time access to financial instruments. Make informed decisions instantly.</h5>
                    </div>
                    </div>
                    <div className="list-itm">
                    <div className="bx-item-cont">
                      <span>
                        <LazyLoader src={transaction} className={'img-fluid'} width={"100"} height={"100"} alt={"Corporate demat account with effortless transactions"} />
                      </span>
                      <h4>Effortless Transactions</h4>
                      <h5>Experience faster transactions and reduce manual paperwork. Manage your corporate securities efficiently.</h5>
                    </div>
                    </div>
                    <div className="list-itm">
                    <div className="bx-item-cont">
                      <span>
                        <LazyLoader src={money} className={'img-fluid'} width={"100"} height={"100"} alt={"Corporate demat account with cost-effective trading"} />
                      </span>
                      <h4>Cost-effective Trading</h4>
                      <h5>Leverage our low brokerage rates. Our Corporate Demat account offers cost-effectiveness to your business.</h5>
                    </div>
                    </div>

                  </Slider>
                  :
                  <div className="list-section">
                    <div className="list-itm">
                    <div className="bx-item-cont">
                      <span>
                      <LazyLoader src={process} className={'img-fluid'} width={"100"} height={"100"} alt={"Corporate demat account with streamlined operations"} />
                      </span>
                      <h4>Streamlined Operations</h4>
                      <h5>Simplify corporate actions by eliminating the complexities associated with physical securities.</h5>
                    </div>
                    </div>
                    <div className="list-itm">
                    <div className="bx-item-cont">
                      <span>
                      <LazyLoader src={shieldcheck} className={'img-fluid'} width={"100"} height={"100"} alt={"Corporate demat account with secure trading"} />
                      </span>
                      <h4>Secure Trading</h4>
                      <h5>Protect your corporate assets with enhanced security against forgery, damage, and loss.</h5>
                    </div>
                    </div>
                    <div className="list-itm">
                    <div className="bx-item-cont">
                      <span>
                      <LazyLoader src={clockstopwatch} className={'img-fluid'} width={"100"} height={"100"} alt={"Open corporate demat account real-time access"} />
                      </span>
                      <h4>OReal-time Access</h4>
                      <h5>Empower your trades with real-time access to financial instruments. Make informed decisions instantly.</h5>
                    </div>
                    </div>
                    <div className="list-itm">
                    <div className="bx-item-cont">
                      <span>
                      <LazyLoader src={transaction} className={'img-fluid'} width={"100"} height={"100"} alt={"Corporate demat account with effortless transactions"} />
                      </span>
                      <h4>Effortless Transactions</h4>
                      <h5>Experience faster transactions and reduce manual paperwork. Manage your corporate securities efficiently.</h5>
                    </div>
                    </div>
                    <div className="list-itm">
                    <div className="bx-item-cont">
                      <span>
                      <LazyLoader src={money} className={'img-fluid'} width={"100"} height={"100"} alt={"Corporate demat account with cost-effective trading"} />
                      </span>
                      <h4>Cost-effective Trading</h4>
                      <h5>Leverage our low brokerage rates. Our Corporate Demat account offers cost-effectiveness to your business.</h5>
                    </div>
                    </div>
                  </div>
              }
            </div>

            <div className="col-md-12 d-flex justify-content-center">
              <a href="javascript:void(0)" className="btn-bg btn-new corporate-btn" onClick={() => scrollToId('dematformsticky')}>Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default WhyCorporateDemat;