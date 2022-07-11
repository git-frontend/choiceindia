
import React from "react";
import { useState } from "react";

function OurPerformance() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>


      <section className="our-performance">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="heading text-center">
                Our Performance
              </h3>
            </div>
          </div>
          <div className="row gx-5 mt-5 pt-5 ">
            <div className="col-xl-4 col-md-6">

              <div className="progress-bar-performance">
                <div className="card">
                  <div className="percent">
                    <svg className="sb-bar">
                      <circle cx="150" cy="150" r="145"></circle>
                      <circle cx="150" cy="150" r="145" style={{ '--percent': '45' }}></circle>
                    </svg>
                    <svg className="c-quant-bar">
                      <circle cx="125" cy="125" r="120"></circle>
                      <circle cx="125" cy="125" r="120" style={{ '--percent': '55' }}></circle>
                    </svg>
                    <svg className="jiffy-signal-bar">
                      <circle cx="100" cy="100" r="95"></circle>
                      <circle cx="100" cy="100" r="95" style={{ '--percent': '50' }}></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-md-6">
              <div className="performance-tabs SB-bloc-tabs">
                <button
                  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(1)}
                >
                  Weekly

                </button>
                <button
                  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)}
                >
                  Monthly

                </button>
                <button
                  className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(3)}
                >
                  Quarterly

                </button>
              </div>
              <div className="heading-content-tabs ">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                  <div className="wrapper">
                    <div className="wrap">
                      <div className="colorwrap blue"> </div>
                      <div className="wrap-des">
                        <p className="percentage">45%</p>
                      </div>
                    </div>
                    <div className="wrap">
                      <div className="colorwrap green"> </div>
                      <div className="wrap-des">
                        <p className="subtext">C-Quant</p>
                        <p className="percentage">60%</p>
                      </div>
                    </div>
                    <div className="wrap">
                      <div className="colorwrap yellow"> </div>
                      <div className="wrap-des">
                        <p className="subtext">Jiffy Signal</p>
                        <p className="percentage">65%</p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                  <div className="wrapper">

                    <div className="wrap">
                      <div className="colorwrap yellow"> </div>
                      <div className="wrap-des">
                        <p className="subtext">Jiffy Signal</p>
                        <p className="percentage">65%</p>
                      </div>

                    </div>
                    <div className="wrap">
                      <div className="colorwrap blue"> </div>
                      <div className="wrap-des">
                        <p className="percentage">45%</p>
                      </div>

                    </div>
                    <div className="wrap">
                      <div className="colorwrap green"> </div>
                      <div className="wrap-des">
                        <p className="subtext">C-Quant</p>
                        <p className="percentage">60%</p>
                      </div>

                    </div>

                  </div>
                </div>
                <div
                  className={toggleState === 3 ? "content  active-content" : "content"}>
                  <div className="wrapper">

                    <div className="wrap">
                      <div className="colorwrap yellow"> </div>
                      <div className="wrap-des">
                        <p className="subtext">Jiffy Signal</p>
                        <p className="percentage">65%</p>
                      </div>

                    </div>

                    <div className="wrap">
                      <div className="colorwrap green"> </div>
                      <div className="wrap-des">
                        <p className="subtext">C-Quant</p>
                        <p className="percentage">60%</p>
                      </div>
                    </div>
                    <div className="wrap">
                      <div className="colorwrap blue"> </div>
                      <div className="wrap-des">
                        <p className="percentage">45%</p>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default OurPerformance;
