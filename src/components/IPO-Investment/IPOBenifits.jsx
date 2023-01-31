import React from "react";
import img1 from '../../assets/images/ipo/discount-price.svg'
import img2 from '../../assets/images/ipo/short-term.svg'
import img3 from '../../assets/images/ipo/listing-gains.svg'

import LazyLoader from '../Common-features/LazyLoader';
import { Link } from "react-router-dom";

function IPOBenifits() {

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
      
      <section className="ipo-more-benifits">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-first">IPO Investment + <span>More Benefits</span>  </h2>
            </div>
          </div>
          <div className="row">
              <div className="col-md-12">
                  <div className="ipo-benifits-list">
                      <div className="benifits-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img1} alt={"IPO investment at discounted price"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h3>Discounted <br/>Price</h3>
                      </div>
                      <div className="benifits-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img2} alt={"IPO investment with more profit in short term"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h3>More profit in <br/>short term</h3>
                      </div>
                      <div className="benifits-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img3} alt={"Invest in IPO for listing gains"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h3>Listing Gains</h3>
                      </div>
                  </div>
              </div>
          </div>
        </div>  
      </section>


      <section className="get-start benefits-form">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="get-start-sub">
                        <h3>Open 100% Free Demat Account with us</h3>
                        <div onClick={() => { chapterScroll('ipoForm')}} className="btn-bg btn-bg-dark cursor-pointer">Open Now</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    

   
    
    </div>
  );
}

export default IPOBenifits;
