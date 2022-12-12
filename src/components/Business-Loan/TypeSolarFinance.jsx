
import React from "react";

import LazyLoader from "../Common-features/LazyLoader";
import solar from '../../assets/images/business-loan/solar.webp';

function TypeSolarFinance() {

  return (
    <div>

      <section className="inv-fin-banner com-vehlc2 solr-finance">
        <div className="container">
          <div className="row align-items-center justify-content-between flex-row-reverse">
            <div className="col-xl-5 col-md-6">
              <div className="fin-banner-caption">
                <h2 className="title-secnd">Solar Finance</h2>
                <p>
                  A solar loan is a financing option that allows you to purchase your solar power system and pay for the installation costs upfront and then repay the loan over time. Solar loans are designed to make going solar more affordable for Individuals, SSIs &amp; MSMEs....<a href="/"><span className="read-ext">Read more</span></a>
                </p>
                <a href="#"><span class="btn-bg">Know more</span></a>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <LazyLoader src={solar} alt={"Solar Finance"} className={"img-fluid img-banner"} width={"550"} height={"331"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TypeSolarFinance;
