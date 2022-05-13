import  ImageFooter1  from '../../assets/images/icons/google-play.svg';
import  ImageFooter3  from '../../assets/images/icons/app-store-dark.svg';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";

function AppTradeBenefits() {

  return (
    <div className='App-main'>

      <section className="trade-benefits-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-9 col-md-12">
                <div className='trade-benefits-sub'>
                <div className="heading-sec">
								 <h2 className="title-secnd">Trade with the best mobile trading app in India and avail lucrative benefits.</h2>               
							  </div>

                    <ul className='reset'>
                      <li>Free* <span className='clr-cng'>Demat Account Opening</span></li>
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
                    <a href="#" target="_blank" className='link-nrl'>
                      <img src={ImageFooter1} className="img-ico" />
                    </a>
                    <a href="#" target="_blank" className='link-nrl'>
                      <img src={ImageFooter3} className="img-ico" />
                    </a>
                  </div>
            </div>
        </div>
      </section>

  

    

      
    
    </div>
  );
}

export default AppTradeBenefits;
