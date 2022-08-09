
import React from "react";
import BrandLogos from '../../assets/images/equity-broking/brand-logo.webp'
import LazyLoader from '../Common-features/LazyLoader';

function InvestmentMode() {

  return (
    <div>
      
      <section className="investment-mode">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="mode-cont-left">
                        <h2 className="ttl-mn">Investment <span>Mode</span></h2>
                        <h3>Stocks</h3>
                        <p>Capital Markets is one of the ideal
    platforms to make long term investments.
    With the value added technology tools &amp; one of the most sought after research team
    in the media, we make your equity trading
    predictable and your money grow!</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <LazyLoader src={BrandLogos} alt={"Banner Images"} className={"img-fluid"} width={"609"} height={"476"} />
                </div>
            </div>
        </div>
    </section>

    
    

   
    
    </div>
  );
}

export default InvestmentMode;
