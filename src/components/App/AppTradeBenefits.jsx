
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";


function AppTradeBenefits() {

  return (
    <div className='App-main'>

      <section className="trade-benefits-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-11 col-md-12">
                <div className='trade-benefits-sub'>
                <div className="heading-sec">
								 <h2 className="title-secnd">Trade with the best mobile trading app in India and <br/> avail lucrative benefits.</h2>               
							  </div>

                    <ul className='reset'>
                      <li>Free* <span className='clr-cng'>Demat Account Opening</span></li>
                      <li>Zero Account Opening Fees*</li>
                      <li>Low Brokerage Charges</li>
                      <li>Trade at 2 Paise*</li>
                      <li>Free Research with 80% success ratio</li>
                    </ul>
                    <a href="/" className="btn-bg">Get Started</a>
                </div>
						</div>
					</div>
				</div>
			</section>

      <section className='app-cont-sec'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                  <div className="heading-sec">
                    <h3 className="title-secnd">Manage Your Wealth On the Go</h3>               
                  </div>
                  <ul className='cont-sec-list'>
                      <li className='cont-sec-item'>
                        <div className="heading-sec">
                            <h3 className="title-secnd">4+ Lakhs</h3>         
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
                            <h3 className="title-secnd">5K + Users</h3>         
                            <p>Rated Till Now</p>      
                        </div>
                      </li>
                  </ul>
                </div>
                <div className="wrap-app-links d-flex justify-content-center">
                          <a href="/" target="_blank" className='link-nrl black'>
                              <svg width="30" height="30" viewBox="0 0 41 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="ico-sm">
                              <path d="M0.549316 4.31975C0.549316 3.28063 0.84049 2.49725 1.31842 1.99816L1.3579 1.96035L22.8228 23.0876V23.4841L1.3579 44.6114L1.31843 44.5736C0.840494 44.0745 0.549316 43.2911 0.549316 42.252V4.31975Z" fill="white" stroke="#000000" strokeWidth="0.25"/>
                              <path d="M38.4983 25.5919L38.4983 25.5919L30.1199 30.2505L30.1199 30.2505L30.0386 30.2957L23.0737 23.4752V23.0907L30.042 16.2717L38.4982 20.9723C38.4982 20.9723 38.4983 20.9723 38.4983 20.9723C39.6724 21.6258 40.2283 22.4683 40.2283 23.2827C40.2283 24.0971 39.6724 24.9392 38.4983 25.5919Z" fill="white" stroke="#000000" strokeWidth="0.25"/>
                              <path d="M1.62287 45.1122L22.8585 23.4627L29.9121 30.6537L4.95617 45.111C4.95616 45.111 4.95615 45.111 4.95613 45.111C3.56725 45.9149 2.36921 45.8304 1.62287 45.1122Z" fill="white" stroke="#0066B3" strokeWidth="0.25"/>
                              <path d="M1.62287 1.45625C2.36922 0.738031 3.56727 0.653568 4.95617 1.4575L29.9121 15.9147L22.8585 23.1058L1.62287 1.45625Z" fill="white" stroke="#000000" strokeWidth="0.25"/>
                              </svg>

                                <span className='whitecolor'>Google Play</span>
                              </a>
                              <a href="/" target="_blank" className='link-nrl black'>
                              <svg width="30" height="30" viewBox="0 0 31 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="ico-sm">
                              <path fillRule="evenodd" clipRule="evenodd" d="M25.6833 21.0736C25.7212 18.1304 27.2631 15.4118 29.7687 13.8702C28.1808 11.6007 25.6166 10.2135 22.8495 10.1268C19.9383 9.82102 17.1161 11.8701 15.6326 11.8701C14.1204 11.8701 11.8364 10.1572 9.3768 10.2078C6.14068 10.3124 3.19687 12.1091 1.62242 14.9404C-1.73041 20.7496 0.770502 29.2872 3.98224 33.9829C5.58914 36.2823 7.46714 38.8507 9.92447 38.7597C12.3291 38.6599 13.2272 37.2252 16.1298 37.2252C19.0055 37.2252 19.8481 38.7597 22.3553 38.7017C24.9356 38.6598 26.5613 36.3922 28.1118 34.071C29.2664 32.4327 30.1548 30.6219 30.7442 28.7058C27.6796 27.4087 25.6869 24.4036 25.6833 21.0736Z" fill="#FFFFFF"/>
                              <path fillRule="evenodd" clipRule="evenodd" d="M20.704 7.28729C22.0332 5.49957 22.6881 3.20176 22.5295 0.881836C20.4987 1.1208 18.6228 2.20817 17.2756 3.9273C15.9453 5.62345 15.2714 7.84247 15.4023 10.0956C17.4603 10.1193 19.4143 9.08428 20.704 7.28729Z" fill="#FFFFFF"/>
                            </svg>

                                <span className='whitecolor'>App Store</span>
                              </a>
                  </div>
            </div>
        </div>
      </section>

  

    

      
    
    </div>
  );
}

export default AppTradeBenefits;
