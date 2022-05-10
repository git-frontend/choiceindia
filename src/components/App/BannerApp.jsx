import  AppImage0  from '../../assets/images/app/banner-app.jpg';
import  ImageFooter1  from '../../assets/images/icons/google-play.svg';
import  ImageFooter2  from '../../assets/images/icons/app-store.svg';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";

function BannerCareer() {

  return (
    <div className='App-main'>
      
     
    <section className="banner-app">
         <img src={AppImage0} className="ban-img"/>
         <div className='app-banner-caption'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='caption-cont'>
                            <h1 className='big-ttl'>Super App for <br/> Everyday Finance</h1>
                            <div className="wrap-app-links">
                              <a href="#" target="_blank" className='link-nrl'>
                                <img src={ImageFooter1} className="img-ico" />
                              </a>
                              <a href="#" target="_blank" className='link-nrl'>
                                <img src={ImageFooter2} className="img-ico" />
                              </a>
                            </div>
                            <p>Trusted by 4+ Lakh Users</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </section>

    <section className="app-benefits-section">
				<div className="container">
					<div className="row">
          <div className="col-lg-4">
							<div className="heading-sec">
								<h2 className="title-first">App with <br/>Multiple Benefits</h2>
								<p>Discover why Lakhs of customers choose to invest with CHOICE</p>
                <a href="#" className="btn-bg">Sign Up</a>
							</div>
						</div>
						<div className="col-lg-8 d-flex justify-content-end">
							<div className="benifit-value-list">
								
								<div className="benifit-value-item">
									<h4>Equity <br/>Broking</h4>
								</div>
                <div className="benifit-value-item">
									<h4>Wealth <br/> Management</h4>
								</div>
                <div className="benifit-value-item">
									<h4>Insurance <br/> Intellimart</h4>
								</div>
								<div className="benifit-value-item">
									<h4>Swift <br/>Loans</h4>									
								</div>
								
							</div>
						</div>
						
					</div>
				</div>
			</section>


      <section className="trade-benefits-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
                <div className='trade-benefits-sub'>
                <div className="heading-sec">
								<h2 className="title-secnd">Trade with the best mobile trading app in India and avail lucrative benefits.</h2>               
							</div>

                    <ul className='reset'>
                      <li>Free* Demat Account Opening</li>
                      <li>Zero Account Opening Fees*</li>
                      <li>Low Brokerage Charges</li>
                      <li>Trade at 2 Paise*</li>
                      <li>Free Research with 80% success ratio</li>
                    </ul>
                    <a href="#" className="btn-bg">Get Started</a>
                </div>
						</div>
					</div>
				</div>
			</section>

  

    

      
    
    </div>
  );
}

export default BannerCareer;
