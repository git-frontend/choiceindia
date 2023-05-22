import React from "react";
import icon1 from '../../assets/images/ipo-landing/bajaj-energy.svg'
import LazyLoader from '../Common-features/LazyLoader';



function Banner() {

  return (
    <>
      <section className="ipo-banner">
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="banner-caption">
                        <div className="cmp-logo">
                          <span className="img-brder">
                            <LazyLoader src={icon1} alt={""} className={"img-fluid"} width={"117"} height={"45"} />
                          </span>
                        </div>
                        <div className="heading-sec">
                            <h3 className="title-secnd">Bajaj Energy IPO</h3>
                            <p>Bajaj Energy Limited</p>
                        </div>
                    </div>
                    <div className="banner-card">
                        <ul>
                          <li>
                            <span className="scr-date">Open Date</span>
                            <span className="date">11th May 2023</span>
                          </li>
                          <li>
                            <span className="scr-date">Open Date</span>
                            <span className="date">11th May 2023</span>
                          </li>
                          <li>
                            <span className="scr-date">Open Date</span>
                            <span className="date">11th May 2023</span>
                          </li>
                          <li>
                            <span className="scr-date">Open Date</span>
                            <span className="date">11th May 2023</span>
                          </li>
                          <li>
                            <span className="scr-date">Open Date</span>
                            <span className="date">11th May 2023</span>
                          </li>
                          <li>
                            <span className="scr-date">Open Date</span>
                            <span className="date">11th May 2023</span>
                          </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
