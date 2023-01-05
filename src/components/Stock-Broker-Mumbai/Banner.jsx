
import React, { useState } from "react";
import DematAccountForm from '../Common-features/DematAccountForm'
import LazyLoader from '../Common-features/LazyLoader';
import Navigation from '../../assets/images/stock-broker-mumbai/stock-broker-google-map-location.svg';
import Call from '../../assets/images/stock-broker-mumbai/stock-broker-contact-number.gif';
function Banner() {
  const [showterm, setshowterm]=useState(false);


  return (
    <div>
      <section className="stockbanner">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-xl-8 col-md-6">
              <div className="wrap-banner">
                <div className="heading-sec">
                  <h1 className="big-ttl"><span className='highlightblue'>Stock Broker</span>  in Mumbai</h1>
                  <p className="text">Choice is one of the best stock brokers in Mumbai, offering financial services in addition to investing in stocks, mutual funds, bonds, NPS, PPF, corporate FDs, and other financial instruments.{!showterm ? <span onClick={()=>{setshowterm(true);console.log("hhh")}}>... <em className="btn-read">View more</em></span>:""}{showterm ?<span>&nbsp;Open a free Demat account with us to begin your investment journey with India's leading stock broker, headquartered in Mumbai. If you are looking for a stock broker in your area, we have two branches in Mumbai that can offer you support and assistance with your financial needs.
                  <span onClick={()=>{setshowterm(false);console.log("hhh")}}>&nbsp;<em className="btn-read">View less</em></span></span>:""}</p>
                </div>
                <div className="details">
                    <div className="navigation">
                   <a href="https://goo.gl/maps/nVAcmGtwDV5wQVbA9" target="_blank"> <LazyLoader src={Navigation} alt={"Google Map Location for Stock Broker in Mumbai"} className={"img-fluid"} width={"28"} height={"28"}/></a>
                    </div>
                    <div className="calldetail">
                    {/* <span className="callwrap active"><LazyLoader src={Call} alt={"Banner Images"} className={"img-fluid"} width={"34"} height={"34"}/></span>
                    <a href="tel:022 6707 9999" target="_blank">022 6707 9999</a> */}
                    <a href="tel:022 6707 9999" target="_blank" class="calldetail">
                    <span className="callwrap "><LazyLoader src={Call} alt={"Contact Number for Stock Broker in Mumbai"} className={"img-fluid"} width={"34"} height={"34"}/></span>
                      <span class="text">022 6707 9999</span>
                    </a>
                    </div>
                </div>

                <div className="companydetail">
                    <div className="address">
                        <p className="heading">Address:</p>
                        <p className="text">Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri East, Mumbai, Maharashtra 400099</p>
                    </div>
                    <div className="timing">
                        <p className="heading">Business Hours:</p>
                        <p className="text"><span className="day">Monday to Friday:</span> <span className="time">8:30 am - 7:00 pm</span></p>
                        <p className="text"><span className="day">Saturday:</span> <span className="time">10:00 am - 4:00 pm</span></p>
                    </div>
                </div>
                
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex justify-content-end mt-5" id="DematAccountForm">
           
              <DematAccountForm />
            </div>
          </div>

        </div>
      </section>

      

    </div>
  );
}

export default Banner;
