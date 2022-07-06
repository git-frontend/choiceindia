
import React from "react";


function OurPerformance() {

  return (
    <div>


      <section className="our-performance">
        <div className="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="title-first text-center">
                Our Performance
              </h3>
            </div>
          </div>
          <div className="row gx-5 align-items-center">
            <div className="col-md-6">
            
              <div className="progress-bar-performance">
                <div class="card">
                  <div class="percent">
                    <svg className="sb-bar">
                      <circle cx="150" cy="150" r="145"></circle>
                      <circle cx="150" cy="150" r="145" style={{'--percent': '80'}}></circle>
                    </svg>
                    <svg className="c-quant-bar">
                      <circle cx="125" cy="125" r="120"></circle>
                      <circle cx="125" cy="125" r="120" style={{'--percent': '50'}}></circle>
                    </svg>
                    <svg className="jiffy-signal-bar">
                      <circle cx="105" cy="105" r="100"></circle>
                      <circle cx="105" cy="105" r="100" style={{'--percent': '50'}}></circle>
                    </svg>
                  </div>
                  <div class="title">
                    <h2>HTML</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">

            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default OurPerformance;
