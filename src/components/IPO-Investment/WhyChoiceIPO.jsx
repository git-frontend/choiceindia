import React from "react";
import img1 from '../../assets/images/ipo/ipo-account/ipo-invesment-with-expert-report.svg'
import img2 from '../../assets/images/ipo/ipo-account/ipo-investment-with-advisory-video-on-youtube.svg'
import img3 from '../../assets/images/ipo/ipo-account/ipo-clients.svg'
import img4 from '../../assets/images/ipo/ipo-account/ipo-investment-with-25-year-of-experienced-broker.svg'

import LazyLoader from '../Common-features/LazyLoader';
import { Link } from "react-router-dom";

function WhyChoiceIPO() {


  /** scroll id view */

  function chapterScroll(id) {
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

 

  return (
    <div>
      
      <section className="why-choice-ipo">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-first">Why Choice for <span>IPO Investment</span>?</h2>
            </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-md-10">
                  <div className="why-ipo-list">
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img1} alt={"IPO invesment with expert report"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>IPO Report by <br/> Experts</h4>
                      </div>
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img3} alt={"IPO Clients"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>7.5 + Lakhs<br/> Clients</h4>
                      </div>
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img2} alt={"IPO investment with advisory video on YouTube"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>IPO Advisory <br/> Video on YouTube</h4>
                      </div>
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img4} alt={"IPO investment with 25+ year of experienced broker"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>25 + years of <br/>Experience</h4>
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
