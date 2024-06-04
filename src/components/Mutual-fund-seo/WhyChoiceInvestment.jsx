import React from "react";
import img1 from '../../assets/images/mutual-funds-investment/mutual-funds-basket-investment.svg'
import img2 from '../../assets/images/mutual-funds-investment/rated-mutual-fund-schemes.svg'
import img3 from '../../assets/images/mutual-funds-investment/goal-based-mutual-fund-investment-options.svg'
import img4 from '../../assets/images/mutual-funds-investment/top-rated-mutual-fund-platform.svg'

import LazyLoader from '../Common-features/LazyLoader';

function WhyChoiceIPO() {

 

  return (
    <div>
      
      <section className="why-choice-invest">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-first text-center">Investing in Mutual Funds got Easier with Choice</h2>
            </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-md-10">
                  <div className="why-ipo-list">
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img1} alt={"Mutual Fund Basket Investment"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>Readymade <br/>Baskets</h4>
                      </div>
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img2} alt={"Choice Rated Mutual Fund Schemes"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>Choice Rated <br/>Schemes</h4>
                      </div>
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img3} alt={"Goal Based Mutual Fund Investment Options"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>Goal Based <br/>Investment</h4>
                      </div>
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img4} alt={"top-rated-mutual-fund-platform"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>Top Rated Mutual <br/>Fund Platform</h4>
                      </div>
                  </div>
              </div>
          </div>
        </div>  
      </section>
    </div>
  );
}

export default WhyChoiceIPO;
