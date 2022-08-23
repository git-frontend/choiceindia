
import React from "react";
import img1 from '../../assets/images/open-demat-account/jiffy-trading-app.webp'
import img2 from '../../assets/images/demat-images/trusted-clients.svg'
import img3 from '../../assets/images/demat-images/top-rated.svg'
import img4 from '../../assets/images/demat-images/secured-trading.svg'

import LazyLoader from '../Common-features/LazyLoader';

function TrackRecord() {



  return (
    <div>

      <section className="demat-track-order">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-first">our track record says it all</h2>
              <div className="track-order-list">
                <div className="track-itm">
                  <h4>TATAELXSI</h4>
                  <ul>
                    <li>
                      <h4>Entry Price</h4>
                      <h3>441</h3>
                    </li>
                    <li>
                      <h4>Target Price</h4>
                      <h3>535</h3>
                    </li>
                  </ul>
                  <h4 className="md-profit"><span>Profit: <span>4.86%</span></span></h4>
                  <h4 className="trg-achv">Target Achieved: 150 Days</h4>
                </div>
                <div className="track-itm">
                  <h4>SBIN</h4>
                  <ul>
                    <li>
                      <h4>Entry Price</h4>
                      <h3>441</h3>
                    </li>
                    <li>
                      <h4>Target Price</h4>
                      <h3>535</h3>
                    </li>
                  </ul>
                  <h4 className="md-profit"><span>Profit: <span>4.86%</span></span></h4>
                  <h4 className="trg-achv">Target Achieved: 150 Days</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-5 d-flex justify-content-center"><a href="/"><span className="btn-bg">Yes , I am in </span></a></div>
          </div>
        </div>
      </section>

      <section className="record-track-scnd">
          <div className="container">
              <div className="row flex-md-row-reverse align-items-center justify-content-between">
                  <div className="col-md-7">
                      <h2 className="title-first">One App for All Segments</h2>
                      <div className="track-scnd-list">
                          <div className="scnd-list-itm">
                            <LazyLoader src={img2} alt={"trusted clients"} className={"img-fluid"} width={"71"} height={"71"} />
                            <h3>trusted clients</h3>
                          </div>
                          <div className="scnd-list-itm">
                            <LazyLoader src={img3} alt={"top rated trading app"} className={"img-fluid"} width={"71"} height={"71"} />
                            <h3>top rated trading app</h3>
                          </div>
                          <div className="scnd-list-itm">
                            <LazyLoader src={img4} alt={"secured trading platform "} className={"img-fluid"} width={"65"} height={"78"} />
                            <h3>secured trading platform </h3>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-center">
                      <LazyLoader src={img1} alt={"our track record"} className={"img-fluid"} width={"320"} height={"647"} />
                  </div>
              </div>
          </div>
      </section>

      <section className="record-count">
        <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <div className="record-count-list">
                    <div className="record-count-itm">
                        <h3>5L+</h3>
                        <h4>App Downloads</h4>
                    </div>
                    <div className="record-count-itm">
                        <h3>25</h3>
                        <h4>Years of Experience</h4>
                    </div>
                    <div className="record-count-itm">
                        <h3>48</h3>
                        <h4>Local Branches</h4>
                    </div>
                    <div className="record-count-itm">
                        <h3>1500+</h3>
                        <h4>Authorised Person</h4>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </section>

    </div>
  );
}

export default TrackRecord;
