
import React from "react";
import Speaker from '../../assets/images/refer-earn/speaker.webp';
import LazyLoader from '../Common-features/LazyLoader';

function EarnUp() {

  return (
      <div>
          <section class="refer-footer-top">
              <div class="container">
                  <div class="row">
                      <div class="col-md-12">
                          <div class="top-foot-sec">
                              <div class="foot-sec-left">
                                  <LazyLoader src={Speaker} alt={"Banner Images"} className={"img-fluid"} width={"201"} height={"174"} />
                                      <h3>Earn up to Rs.1000 incentive <span>per referral now!</span> </h3>
                            </div>
                                  <div class="foot-sec-right">
                                      <a href="#home-sec" class="join-btn">Join Now</a>
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
