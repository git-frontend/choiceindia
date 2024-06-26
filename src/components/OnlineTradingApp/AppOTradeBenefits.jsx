
import React from "react";
import appstore from '../../assets/images/icons/app-store.svg';
import LazyLoader from '../Common-features/LazyLoader';
function AppOTradeBenefits() {

  return (
    <div className='App-main'>

      

      <section className='app-cont-sec app-cont-sec-sub'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className="heading-sec-black">
                <h2 className="title-secnd">Top Rated Trading App</h2>
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
                  <p>Rated by</p>
                    <h3 className="title-secnd">8K+ Users</h3>
                    
                  </div>
                </li>
                <li className='cont-sec-item'>
                  <div className="heading-sec">
                    <h3 className="title-secnd">Fast &amp; Secured</h3>
                    <p>App</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="wrap-app-links d-flex justify-content-center">
                <a href="https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy" target="_blank" className='link-nrl white'>
                      <svg width="30" height="30" viewBox="0 0 41 46" fill="none" xmlns="http://www.w3.org/2000/svg" className='ico-sm'>
                        <path d="M0.549316 4.31975C0.549316 3.28063 0.84049 2.49725 1.31842 1.99816L1.3579 1.96035L22.8228 23.0876V23.4841L1.3579 44.6114L1.31843 44.5736C0.840494 44.0745 0.549316 43.2911 0.549316 42.252V4.31975Z" fill="black" stroke="#ffffff" strokeWidth="0.25" />
                        <path d="M38.4983 25.5919L38.4983 25.5919L30.1199 30.2505L30.1199 30.2505L30.0386 30.2957L23.0737 23.4752V23.0907L30.042 16.2717L38.4982 20.9723C38.4982 20.9723 38.4983 20.9723 38.4983 20.9723C39.6724 21.6258 40.2283 22.4683 40.2283 23.2827C40.2283 24.0971 39.6724 24.9392 38.4983 25.5919Z" fill="black" stroke="#ffffff" strokeWidth="0.25" />
                        <path d="M1.62287 45.1122L22.8585 23.4627L29.9121 30.6537L4.95617 45.111C4.95616 45.111 4.95615 45.111 4.95613 45.111C3.56725 45.9149 2.36921 45.8304 1.62287 45.1122Z" fill="black" stroke="#ffffff" strokeWidth="0.25" />
                        <path d="M1.62287 1.45625C2.36922 0.738031 3.56727 0.653568 4.95617 1.4575L29.9121 15.9147L22.8585 23.1058L1.62287 1.45625Z" fill="black" stroke="#ffffff" strokeWidth="0.25" />
                      </svg>

                      <span className='blackcolor'>Google Play</span>
                    </a>
                    <a href="https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261?ls=1" target="_blank" className='link-nrl white'>
                    <LazyLoader src={appstore} className={"img-fluid"} alt={"App Store"} width={"27"} height={"24"}/>

                      <span className='blackcolor'>App Store</span>
                    </a>
            </div>
          </div>
        </div>
      </section>







    </div>
  );
}

export default AppOTradeBenefits;
