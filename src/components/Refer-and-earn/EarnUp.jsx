
import React from "react";
import Speaker from '../../assets/images/refer-earn/earn-demat-account-referral-incentive.webp';
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from "react-router-dom";

function EarnUp() {

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
          <section className="refer-footer-top">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="top-foot-sec">
                              <div className="foot-sec-left">
                                  <LazyLoader src={Speaker} alt={"Earn Demat Account Referral Incentive"} className={"img-fluid"} width={"80"} height={"77"} />
                                      <h3>Earn up to Rs.500 incentive <span>per referral now!</span> </h3>
                            </div>
                                  <div className="foot-sec-right">
                                      <Link to='/refer-and-earn' onClick={() => { chapterScroll('refer&earn') }}  className="join-btn cursor-pointer">Join Now</Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
    </section>

      </div>
  );
}

export default EarnUp;
