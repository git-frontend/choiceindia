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
              <h2 className="title-first text-center">चॉइस के साथ निवेश क्यूँ करें?</h2>
            </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-md-10">
                  <div className="why-ipo-list">
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img1} alt={"म्यूचुअल फंड बास्केट निवेश"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>रेडीमेड <br/>बास्केट्स</h4>
                      </div>
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img2} alt={"चॉइस रेटेड म्यूचुअल फंड योजनाएं"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>चॉइस रेटेड <br/>योजनाएं</h4>
                      </div>
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img3} alt={"लक्ष्य आधारित म्युचुअल फंड निवेश विकल्प"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>लक्ष्य आधारित <br/>निवेश</h4>
                      </div>
                      <div className="why-itm">
                          <span className="sm-img-itm">
                            <LazyLoader src={img4} alt={"टॉप रेटेड म्यूचुअल फंड प्लेटफॉर्म"} className={"img-fluid"} width={"60"} height={"60"} />
                          </span>
                          <h4>टॉप रेटेड म्यूचुअल <br/>फंड प्लेटफॉर्म</h4>
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
