
import React, { useState } from "react";
import DematAccountForm from '../Common-features/DematAccountForm'
import LazyLoader from '../Common-features/LazyLoader';
import Navigation from '../../assets/images/stock-broker-mumbai/navigation.svg';
// import Call from '../../assets/images/stock-broker-mumbai/call.json';
// import data from './data.json';
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
                  <p>Choice is one of the best stock brokers in Mumbai, offering financial services in addition to investing in stocks, mutual funds, bonds, NPS, PPF, corporate FDs, and other financial instruments.{!showterm ? <span onClick={()=>{setshowterm(true);console.log("hhh")}}>... <em className="btn-read">View more</em></span>:""}{showterm ?<span>&nbsp;Open a free Demat account with us to begin your investment journey with India's leading stock broker, headquartered in Mumbai. If you are looking for a stock broker in your area, we have two branches in Mumbai that can offer you support and assistance with your financial needs.
                  <span onClick={()=>{setshowterm(false);console.log("hhh")}}>&nbsp;<em className="btn-read">View less</em></span></span>:""}</p>
                </div>
                <div className="details">
                    <div className="navigation">
                    <LazyLoader src={Navigation} alt={"Navigation"} className={"img-fluid"} width={"28"} height={"28"}/>
                    </div>
                    <div className="calldetail">
                    {/* <LazyLoader src={Call} alt={"Banner Images"} className={"img-fluid"} width={""} height={""}/> */}
                    </div>
                </div>

                <div className="companydetail">
                    <div className="address">
                        <p className="heading">Address:</p>
                        <p className="text">Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri East, Mumbai, Maharashtra 400099</p>
                    </div>
                    <div className="timing">
                        <p className="heading">Business Hours:</p>
                        <p className="text">Monday to Friday: 8:30 am - 7:00 pm</p>
                        <p className="text">Saturday: 10:00 am - 4:00 pm</p>
                    </div>
                </div>
                
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex justify-content-end">
           
              <DematAccountForm />
            </div>
          </div>

        </div>
      </section>

      

    </div>
  );
}

export default Banner;
