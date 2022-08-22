import React from "react";
import img1 from '../../assets/images/mutual-funds-investment/baskets.svg'
import img2 from '../../assets/images/mutual-funds-investment/rated.svg'
import img3 from '../../assets/images/mutual-funds-investment/goals.svg'
import img4 from '../../assets/images/mutual-funds-investment/top-rank.svg'

import LazyLoader from '../Common-features/LazyLoader';

function WhyChoiceIPO() {

 

  return (
    <div>
      
      <section className="why-choice-invest">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-first text-center">Why Choice for Investment?</h2>
            </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-md-10">
                  <div className="why-ipo-list">
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img1} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>Readymade <br/>Baskets</h4>
                      </div>
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img2} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>Choice Rated <br/>Schemes</h4>
                      </div>
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img3} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>Goal Based <br/>Investment</h4>
                      </div>
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img4} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
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
