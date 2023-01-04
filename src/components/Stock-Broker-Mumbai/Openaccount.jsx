
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from "react-router-dom";

function Openaccount() {

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
          <section className="openaccount-sec">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="wrapper">
                              <div className="left-sec">
                                 
                                      <h3 className="title-secnd">Open a 100% <span className="free">Free</span><span className="borderbottom"> Demat Account</span></h3>

                                <div className="listing">
                                    <div className="firstrow">
                                        <div className="texting"><span>Zero Account Opening Fee</span></div>
                                        <div className="texting"><span>Zero Account Opening Fee</span></div>
                                    </div>
                                    <div className="secondrow">
                                        <div className="texting"><span>Zero Account Opening Fee</span></div>
                                        <div className="texting"><span>Zero Account Opening Fee</span></div>
                                    </div>
                                </div>
                            </div>
                                  <div className="right-sec">

                                      <Link to='' onClick={() => { chapterScroll('DematAccountForm') }} ><span  className="btn-bg btn-bg-dark">Open Now</span></Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
    </section>

      </div>
  );
}

export default Openaccount;
