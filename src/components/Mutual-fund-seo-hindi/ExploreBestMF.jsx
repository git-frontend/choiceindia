import React from "react";
import img1 from '../../assets/images/mutual-funds-investment/tax-saving-mutual-funds.svg'
import img2 from '../../assets/images/mutual-funds-investment/debt-mutual-funds.svg'
import img3 from '../../assets/images/mutual-funds-investment/balanced-mutual-funds.svg'
import img4 from '../../assets/images/mutual-funds-investment/large-cap-mutual-funds.svg'
import img5 from '../../assets/images/mutual-funds-investment/mid-cap-mutual-funds.svg'
import img6 from '../../assets/images/mutual-funds-investment/small-cap-mutual-funds.svg'
import img7 from '../../assets/images/mutual-funds-investment/multi-cap-mutual-funds.svg'
import img8 from '../../assets/images/mutual-funds-investment/liquid-mutual-funds.svg'
import img9 from '../../assets/images/mutual-funds-investment/dividend-yield-mutual-funds.svg'
import img10 from '../../assets/images/mutual-funds-investment/sip-investment.svg'

import LazyLoader from '../Common-features/LazyLoader';
import { Link } from "react-router-dom";

function ExploreBestMF() {
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
      <section className="explore-best-mf">
        <div className="container">
          <div className="row">
            <div className="col-md-4 best-mf-cont">
              <h2 className="title-first">चुने सर्वश्रेष्ठ म्यूचुअल फंड निवेश के लिए</h2>
              <p>Experience the convenience and ease in investing with a platform that offers funds across all categories at one place </p>
            </div>
            <div className="col-md-8">
                <div className="best-mf-list">
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img1} alt={"टैक्स सेविंग म्यूचुअल फंड"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>टैक्स सेविंग</h4>
                    </div>
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img2} alt={"डेट म्यूचुअल फंड"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>डेट म्यूचुअल फंड</h4>
                    </div>
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img3} alt={"बैलेंस्ड फंड"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>बैलेंस्ड फंड</h4>
                    </div>
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img4} alt={"लार्ज कैप म्युचुअल फंड"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>लार्ज कैप म्युचुअल फंड</h4>
                    </div>
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img5} alt={"मिड कैप म्युचुअल फंड"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>मिड कैप म्युचुअल फंड</h4>
                    </div>
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img6} alt={"स्मॉल कैप म्यूचुअल फंड"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>स्मॉल कैप म्यूचुअल फंड</h4>
                    </div>
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img7} alt={"मल्टी कैप म्युचुअल फंड"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>मल्टी कैप म्युचुअल फंड</h4>
                    </div>
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img8} alt={"लिक्विड म्युचुअल फंड"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>लिक्विड म्युचुअल फंड</h4>
                    </div>
                    <div className="mf-lis-itm">
                        <span className="sm-img-itm">
                          <LazyLoader src={img9} alt={"डिविडेंड यील्ड फंड"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>डिविडेंड यील्ड फंड</h4>
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
                        <LazyLoader src={img10} alt={"एसआईपी निवेश"} className={"img-fluid"} width={"60"} height={"60"} />
                        <h3>आइए कमाई का आनंद लेने के लिए एसआईपी शुरू करें</h3>
                        <Link to="/mutual-funds-investment"><span onClick={() => { chapterScroll('mutualid')}} className="btn-bg">अभि शुरू करें</span></Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
    </div>
  );
}

export default ExploreBestMF;
