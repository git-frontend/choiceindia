
import React from "react";
import Speaker from '../../assets/images/refer-earn/speaker.webp';
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from "react-router-dom";

function EarnUp() {

  return (
      <div>
          <section className="refer-footer-top">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="top-foot-sec">
                              <div className="foot-sec-left">
                                  <LazyLoader src={Speaker} alt={"Banner Images"} className={"img-fluid"} width={"80"} height={"77"} />
                                      <h3>Earn up to Rs.1000 incentive <span>per referral now!</span> </h3>
                            </div>
                                  <div className="foot-sec-right">
                                      <Link  to="/refer-and-earn" className="join-btn">Join Now</Link>
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
