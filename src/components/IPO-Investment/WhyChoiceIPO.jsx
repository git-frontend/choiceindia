import React from "react";
import img1 from '../../assets/images/ipo/ipo-report.svg'
import img2 from '../../assets/images/ipo/ipo-recommendation.svg'
import img3 from '../../assets/images/ipo/ipo-clients.svg'
import img4 from '../../assets/images/ipo/experience.svg'

import LazyLoader from '../Common-features/LazyLoader';

function WhyChoiceIPO() {

 

  return (
    <div>
      
      <section className="why-choice-ipo">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-first">Why Choice for IPO Investment?</h2>
            </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-md-10">
                  <div className="why-ipo-list">
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img1} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>IPO Report by <br/> Experts</h4>
                      </div>
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img2} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>IPO Recommendation <br/> Video on YouTube</h4>
                      </div>
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img3} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>1.5 + Lakhs<br/> Clients</h4>
                      </div>
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img4} alt={" insurance  services"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>25 + years of <br/>Experience</h4>
                      </div>
                  </div>
              </div>
          </div>
        </div>  
      </section>

      <section className="get-start get-start-scnd">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="get-start-sub">
                        <h3>Open a Free Account to Invest in IPO with Choice</h3>
                        <a href="/" className="btn-bg btn-bg-dark">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  );
}

export default WhyChoiceIPO;
