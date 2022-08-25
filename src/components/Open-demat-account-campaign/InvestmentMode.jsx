
import React from "react";
import BrandLogos from '../../assets/images/equity-broking/brand-logo.webp'
import icon1 from '../../assets/images/equity-broking/stock-market-investing.svg'
import icon2 from '../../assets/images/equity-broking/collection.svg'
import icon3 from '../../assets/images/equity-broking/basket.svg'
import icon4 from '../../assets/images/equity-broking/top-picks.svg'
import LazyLoader from '../Common-features/LazyLoader';

function InvestmentMode() {

  return (
    <div>
      
      <section className="investment-mode">
        <div className="container">
            <div className="row flex-sm-row-reverse">
                <div className="col-md-6 justify-content-end d-flex">
                    <LazyLoader src={BrandLogos} alt={"Banner Images"} className={"img-fluid ban-img"} width={"501"} height={"400"} />
                </div>
                <div className="col-md-6">
                    <div className="mode-cont-left">
                    <h2 className="ttl-mn">Investment <span>Mode</span></h2>
                      <div className="mode-cont-itm cont-itm-active">
                          <h3>Stocks</h3>
                          <p>Capital Markets is one of the ideal
                            platforms to make long term investments.
                            With the value added technology tools &amp; one of the most sought after research team
                            in the media, we make your equity trading
                            predictable and your money grow!</p>
                      </div>
                      <div className="mode-cont-itm">
                          <h3>Collections</h3>
                          <p>Check out the most interesting and unique categories of Stock collections, find all your favourite brands and top companies curated according to different categories like blue-chip stocks, leading players in their respective sectors, stocks under 99/- and many more. </p>
                      </div>
                      <div className="mode-cont-itm">
                          <h3>Baskets</h3>
                          <p>A well thought basket of carefully curated stocks from  different categories to give your portfolio the benefits of diversity.</p>
                      </div>
                      <div className="mode-cont-itm">
                          <h3>Our Top Picks</h3>
                          <p>We have hand-picked stocks based on sophisticated methodology to cater the needs of our modern investors.</p>
                      </div>
                    </div>
                </div>
                
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ul className="mode-list">
                      <li className="mode-list-itm active">
                            <span className="img-ic">
                              <LazyLoader src={icon1} alt={"Banner Images"} className={"img-fluid"} width={"80"} height={"80"} />
                            </span>
                            <h3>Stocks</h3>
                        </li>
                        <li className="mode-list-itm">
                            <span className="img-ic">
                              <LazyLoader src={icon2} alt={"Banner Images"} className={"img-fluid"} width={"80"} height={"80"} />
                            </span>
                            <h3>Collections</h3>
                        </li>
                        <li className="mode-list-itm">
                            <span className="img-ic">
                              <LazyLoader src={icon3} alt={"Banner Images"} className={"img-fluid"} width={"80"} height={"80"} />
                            </span>
                            <h3>Baskets</h3>
                        </li>
                        <li className="mode-list-itm">
                            <span className="img-ic">
                              <LazyLoader src={icon4} alt={"Banner Images"} className={"img-fluid"} width={"80"} height={"80"} />
                            </span>
                            <h3>Our Top Picks</h3>
                        </li>
                        
                    </ul>
                    <div className="justify-content-center d-flex">
                        <a href="/" className="btn-bg">Explore All</a>
                    </div>
                </div>  
            </div>
        </div>
    </section>

    
    

   
    
    </div>
  );
}

export default InvestmentMode;
