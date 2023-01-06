
import React from "react";
import { useState } from "react";
// import "./GovernmentAdv.scss";
import GovernmentAdvBan from '../../assets/images/goverment-advisory/government-advisory-banner.webp';
import LazyLoader from "../Common-features/LazyLoader";

function Banner() {

  const [skeleton, setSkeleton] = useState(() => true);
  setTimeout(() => {
    setSkeleton(() => false);
  }, 3000)

  return (
    <div>

      <section className="goverment-advisorysection">
        <div className="container">
          <div className="row align-items-center">
            <div className="left-sec">
              <h1 className="big-ttl title">Government Advisory</h1>
              <p className="para">We collaborate for pioneering projects to consult for the development and progress of our nation. Our experienced research team is capable to deploy research, sampling & survey operations.
                </p>
                <p className="para pt-4">We provide end to end bid process management sevices to governments from bid solicitation to project delivery.</p>
            </div>
            <div className="right-sec">
                <LazyLoader src={GovernmentAdvBan} className={'img-fluid'} width={"502"} height={"343"} alt={"Government Advisory"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
