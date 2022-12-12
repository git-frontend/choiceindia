
import React from "react";

import LazyLoader from "../Common-features/LazyLoader";
import commercialvehicle from '../../assets/images/business-loan/commercial-vehicle.webp';

function TypesOfCommercial() {
 
  return (
    <div>

      <section className="inv-fin-banner com-vehlc2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-md-6">
              <div className="fin-banner-caption">
                <h2 className="title-secnd">Commercial Vehicle Loan</h2>
                <p>
                Are you struggling for days and still unable to find a way to get your desired vehicle financed even after multiple attempts? Do ...<a href="/"><span className="read-ext">Read more</span></a>
                </p>
                <a href="#"><span class="btn-bg">Know more</span></a>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <LazyLoader src={commercialvehicle} alt={"commercial-vehicle"} className={"img-fluid img-banner"} width={"650"} height={"251"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TypesOfCommercial;
