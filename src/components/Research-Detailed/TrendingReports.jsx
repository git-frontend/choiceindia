
import React from "react";
import thumb1 from '../../assets/images/research/thumbnail-1.webp';


function TrendingReports() {

  return (
    <div>


      <section className="res-trending-reports">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              
              <div className="heading-sec">
                <h3 className="title-first">Trending Reports</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="res-detailtab-cont">
                <div className="res-detailtab-list">
                  <div className="res-tab-itm">
                    <div className="tab-itm-img">
                      <img src={thumb1} alt="Banner Images" className="img-fluid thumb-img" width="237" height="257"></img>
                    </div>
                    <div className="tab-itm-des">
                      <h3 className="ttl-des">Equity Research Report <span className="info-txt">WINDLAS ( BSE )</span> </h3>
                      <p className="tag-pref">FUNDAMENTAL</p>
                      <div className="itm-des-sub">
                        <span className="date-post">03 Mar 2022</span>
                        <a href="#" className="post-read">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="res-tab-itm">
                    <div className="tab-itm-img">
                      <img src={thumb1} alt="Banner Images" className="img-fluid thumb-img" width="237" height="257"></img>
                    </div>
                    <div className="tab-itm-des">
                      <h3 className="ttl-des">Equity Research Report <span className="info-txt">WINDLAS ( BSE )</span> </h3>
                      <p className="tag-pref">FUNDAMENTAL</p>
                      <div className="itm-des-sub">
                        <span className="date-post">03 Mar 2022</span>
                        <a href="#" className="post-read">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="res-tab-itm">
                    <div className="tab-itm-img">
                      <img src={thumb1} alt="Banner Images" className="img-fluid thumb-img" width="237" height="257"></img>
                    </div>
                    <div className="tab-itm-des">
                      <h3 className="ttl-des">Equity Research Report <span className="info-txt">WINDLAS ( BSE )</span> </h3>
                      <p className="tag-pref">FUNDAMENTAL</p>
                      <div className="itm-des-sub">
                        <span className="date-post">03 Mar 2022</span>
                        <a href="#" className="post-read">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="res-tab-itm">
                    <div className="tab-itm-img">
                      <img src={thumb1} alt="Banner Images" className="img-fluid thumb-img" width="237" height="257"></img>
                    </div>
                    <div className="tab-itm-des">
                      <h3 className="ttl-des">Equity Research Report <span className="info-txt">WINDLAS ( BSE )</span> </h3>
                      <p className="tag-pref">FUNDAMENTAL</p>
                      <div className="itm-des-sub">
                        <span className="date-post">03 Mar 2022</span>
                        <a href="#" className="post-read">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 d-flex justify-content-center">
                  <a className="btn-bg" href="/">Explore All</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default TrendingReports;
