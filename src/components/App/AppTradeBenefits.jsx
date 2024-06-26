
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import { FaRupeeSign } from 'react-icons/fa';
import { IoMdSearch } from 'react-icons/io';
import Vector1 from '../../assets/images/app/signal-arrow.svg';
import Vector2 from '../../assets/images/app/sector.svg';
import appstorelight from '../../assets/images/icons/app-store-light.svg';
import LazyLoader from '../Common-features/LazyLoader';
import {useEffect, useState} from 'react';

function AppTradeBenefits() {

  const[checkBrowser, setcheckBrowser] = useState(() => '');
  const[checkDevice, setcheckDevice] = useState(() => '');

  function getBrowserDetails() {

   
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
    {
        setcheckBrowser(() => 'Opera');
    }
    else if(navigator.userAgent.indexOf("Edg") != -1 )
    {
        setcheckBrowser(() => 'Edge');
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        setcheckBrowser(() => 'Chrome');
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        setcheckBrowser(() => 'Safari');
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
        setcheckBrowser(() => 'Firefox');
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
        setcheckBrowser(() => 'IE');
    }  
    else 
    {
        setcheckBrowser(() => 'unknown');
    }

    
  }

  function getDeviceDetails() {
    var platform = ["Windows", "Android", "iOS"];

    for (var i = 0; i < platform.length; i++) {

        if (navigator.userAgentData.platform.indexOf(platform[i]) >- 1) {

            console.log('DEEVID',platform[i])
        }
    }
  }

  useEffect(() => {
    if(navigator.userAgentData){
      getBrowserDetails();
      getDeviceDetails();
    }
  },[])

  return (
    <div className='App-main'>

      <section className="trade-benefits-section">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-6 col-md-12">
              <div className="benefits-list-top">
                <div className="list-top-itm">
                  <h3><span className="sm-ico"><FaRupeeSign /></span>0</h3>
                  <h4>Account Opening</h4>
                  <h6>Charges &amp; AMC for 1st Year</h6>
                </div>
                <div className="list-top-itm">
                  <h3><IoMdSearch /></h3>
                  <h4>Expert Research</h4>
                  <h6>Advisory</h6>
                </div>
                <div className="list-top-itm">
                  <h3><span className="sm-ico"><FaRupeeSign /></span>10</h3>
                  <h4>Lowest DP</h4>
                  <h6>Charges</h6>
                </div>
              </div>
              <div className="free-tool-sec">
                <h4 className="tool-ttl">Free Tools worth  <FaRupeeSign className="ico" />50000</h4>
                <div className="tool-sec-list">
                  <div className="sec-list-itm">
                    <div className="list-itm-lft">
                      <LazyLoader src={Vector1} className={"img-fluid sm-img"} alt={"Signal"} width={"33"} height={"30"} />
                      <h5>Signal</h5>
                    </div>
                    <div className="list-itm-rht">
                      <h6>An Automated Research Engine with 5 Customised strategies</h6>
                    </div>
                  </div>
                  <div className="sec-list-itm">
                    <div className="list-itm-lft">
                      <LazyLoader src={Vector2} className={"img-fluid sm-img"} alt={"Stratezy"} width={"31"} height={"31"} />
                      <h5>Stratezy</h5>
                    </div>
                    <div className="list-itm-rht">
                      <h6>Create, Backtest and Optimize Strategies on Past Data</h6>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="benefits-ttl">Open Demat Account with <span>Choice</span></h3>
            </div>
          </div>
        </div>
      </section>

      <section className='app-cont-sec'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className="heading-sec">
                <h2 className="title-secnd">Manage Your Wealth On the Go</h2>
              </div>
              <ul className='cont-sec-list'>
                <li className='cont-sec-item'>
                  <div className="heading-sec">
                    <h3 className="title-secnd">7.5+ Lakhs</h3>
                    <p>App Downloads</p>
                  </div>
                </li>
                <li className='cont-sec-item'>
                  <div className="heading-sec">
                    <h3 className="title-secnd">Fast &amp; Secured</h3>
                    <p>App</p>
                  </div>
                </li>
                <li className='cont-sec-item'>
                  <div className="heading-sec">
                    <h3 className="title-secnd">8K + Users</h3>
                    <p>Rated Till Now</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="wrap-app-links d-flex justify-content-center">
              <a href="https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy" target="_blank" rel="noreferrer" className='link-nrl black'>
                <svg width="30" height="30" viewBox="0 0 41 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="ico-sm">
                  <path d="M0.549316 4.31975C0.549316 3.28063 0.84049 2.49725 1.31842 1.99816L1.3579 1.96035L22.8228 23.0876V23.4841L1.3579 44.6114L1.31843 44.5736C0.840494 44.0745 0.549316 43.2911 0.549316 42.252V4.31975Z" fill="white" stroke="#000000" strokeWidth="0.25" />
                  <path d="M38.4983 25.5919L38.4983 25.5919L30.1199 30.2505L30.1199 30.2505L30.0386 30.2957L23.0737 23.4752V23.0907L30.042 16.2717L38.4982 20.9723C38.4982 20.9723 38.4983 20.9723 38.4983 20.9723C39.6724 21.6258 40.2283 22.4683 40.2283 23.2827C40.2283 24.0971 39.6724 24.9392 38.4983 25.5919Z" fill="white" stroke="#000000" strokeWidth="0.25" />
                  <path d="M1.62287 45.1122L22.8585 23.4627L29.9121 30.6537L4.95617 45.111C4.95616 45.111 4.95615 45.111 4.95613 45.111C3.56725 45.9149 2.36921 45.8304 1.62287 45.1122Z" fill="white" stroke="#0066B3" strokeWidth="0.25" />
                  <path d="M1.62287 1.45625C2.36922 0.738031 3.56727 0.653568 4.95617 1.4575L29.9121 15.9147L22.8585 23.1058L1.62287 1.45625Z" fill="white" stroke="#000000" strokeWidth="0.25" />
                </svg>

                <span className='whitecolor'>Google Play</span>
              </a>
              <a href="https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261?ls=1" target="_blank" className='link-nrl black'>
              <LazyLoader src={appstorelight} className={"img-fluid"} alt={"App Store"} width={"27"} height={"24"}/>

                <span className='whitecolor'>App Store</span>
              </a>
            </div>

            <div>

            </div>
          </div>
        </div>
      </section>







    </div>
  );
}

export default AppTradeBenefits;
