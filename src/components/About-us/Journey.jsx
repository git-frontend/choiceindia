
import React from "react";
import "../../assets/css/aboutus.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
function Journey() {
    const settings = {
        infinite: true,
        speed: 1500,
        arrows: false,
        slidesToShow: 4,
        autoplay: false,
        margin:15,
        dots:true,
        autoplaySpeed: 1000,
        slidesToScroll: 4,
    };
  return (
    <div>
      
        <section className="Journey">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                    <h2 className="heading">Our Journey</h2>
                    <p className="journeyinfo">Our long journey has several milestones but the most important one has been our client’s trust which we cherish the most.</p>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                  <div className="Journeyyear">
                  <Slider {...settings} className="Journeynumber">
                      <div className="Journey-item">
                          <div className="year">
                              <div className="number">
                                1992
                              </div>
                          </div>
                          <div className="subtext"><p>Group  Incorporation</p></div>
                      </div>
                      <div className="Journey-item">
                          <div className="year">
                              <div className="number">
                              2008
                              </div>
                          </div>
                          <div className="subtext"><p>Took over a listed NBFC Choice International</p></div>
                      </div>
                      <div className="Journey-item">
                          <div className="year">
                              <div className="number">
                                2010
                              </div>
                          </div>
                          <div className="subtext"><p>Equity &amp; Commodity Broking Liscense</p></div>
                      </div>
                      <div className="Journey-item">
                          <div className="year">
                              <div className="number">
                               2011
                              </div>
                          </div>
                          <div className="subtext"><p>Group  Incorporation</p></div>
                      </div>
                      <div className="Journey-item">
                          <div className="year">
                              <div className="number">
                                1992
                              </div>
                          </div>
                          <div className="subtext"><p>Group  Incorporation</p></div>
                      </div>
                      <div className="Journey-item">
                          <div className="year">
                              <div className="number">
                                1992
                              </div>
                          </div>
                          <div className="subtext"><p>Group  Incorporation</p></div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
        </section>
      
    
    </div>
  );
}

export default Journey;
