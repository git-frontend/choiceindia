import React from "react";
import img1 from '../../assets/images/mutual-funds-investment/tax-saving.svg'
import img2 from '../../assets/images/mutual-funds-investment/debt-fund.svg'
import img3 from '../../assets/images/mutual-funds-investment/balance-funds.svg'
import img4 from '../../assets/images/mutual-funds-investment/large-caps.svg'
import img5 from '../../assets/images/mutual-funds-investment/mid-caps.svg'
import img6 from '../../assets/images/mutual-funds-investment/small-caps.svg'
import img7 from '../../assets/images/mutual-funds-investment/multi-caps.svg'
import img8 from '../../assets/images/mutual-funds-investment/liquid-caps.svg'
import img9 from '../../assets/images/mutual-funds-investment/dividend-yield-funds.svg'
import img10 from '../../assets/images/mutual-funds-investment/money-plant.svg'

import LazyLoader from '../Common-features/LazyLoader';

function ExploreBestMF() {

 

  return (
    <div>
      <section className="explore-best-mf">
        <div className="container">
          <div className="row">
            <div className="col-md-4 best-mf-cont">
              <h2 className="title-first">explore the best mutual funds</h2>
              <p>Experience the convenience and ease in investing with a platform that offers funds across all categories at one place </p>
            </div>
            <div className="col-md-8">
                <div className="best-mf-list">
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img1} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Tax Saving</h4>
                    </div>
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img2} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Debt Funds</h4>
                    </div>
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img3} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Balanced Funds</h4>
                    </div>
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img4} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Large Caps</h4>
                    </div>
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img5} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Mid Caps</h4>
                    </div>
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img6} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Small Caps</h4>
                    </div>
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img7} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Multi Caps</h4>
                    </div>
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img8} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Liquid Funds</h4>
                    </div>
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img9} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Dividend Yield Funds</h4>
                    </div>
                </div>
            </div>
          </div>
          
        </div>  
      </section>

      <section className="explr-all">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="explr-sub">
                        <LazyLoader src={img10} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
                        <h3>Let’s Start SIP to enjoy the joy of earning</h3>
                        <a href="#"><span className="btn-bg">Start Now</span></a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
    </div>
  );
}

export default ExploreBestMF;
