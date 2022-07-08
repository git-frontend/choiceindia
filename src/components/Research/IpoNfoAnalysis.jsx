
import React from "react";
import thumb1 from '../../assets/images/research/thumbnail-img13.webp';
import thumb2 from '../../assets/images/research/thumbnail-img14.webp';
import thumb3 from '../../assets/images/research/thumbnail-img15.webp';
import thumb4 from '../../assets/images/research/thumbnail-img16.webp';


function IpoNfoAnalysis() {



  return (
    <div>

      <div className="research-tab-cont">
        <div className="research-tab-list">
            <div className="res-tab-itm">
                <div className="tab-itm-img">
                   <img src={thumb1} alt="Banner Images" className="img-fluid thumb-img" width={"231"} height={"251"}></img>
                </div>
                <div className="tab-itm-des">
                    <h5 className="ttl-des">Private demand grew by 7% in Q3FY22 says Central Bank.</h5>
                    <p>Private demand grew by 7% in Q3FY22 and picked up 14.5% sequentially.</p>
                    <div className="itm-des-sub">
                        <span className="date-post">03 Mar 2022</span>
                        <a href="#" className="btn-sm grn-btn">SUBSCRIBE</a>
                    </div>
                </div>
            </div>
            <div className="res-tab-itm">
                <div className="tab-itm-img">
                   <img src={thumb2} alt="Banner Images" className="img-fluid thumb-img" width={"231"} height={"251"}></img>
                </div>
                <div className="tab-itm-des">
                    <h5 className="ttl-des">Private demand grew by 7% in Q3FY22 says Central Bank.</h5>
                    <p>Private demand grew by 7% in Q3FY22 and picked up 14.5% sequentially.</p>
                    <div className="itm-des-sub">
                        <span className="date-post">03 Mar 2022</span>
                        <a href="#" className="btn-sm red-btn">AVOID</a>
                    </div>
                </div>
            </div>
            <div className="res-tab-itm">
                <div className="tab-itm-img">
                   <img src={thumb3} alt="Banner Images" className="img-fluid thumb-img" width={"231"} height={"251"}></img>
                </div>
                <div className="tab-itm-des">
                    <h5 className="ttl-des">Private demand grew by 7% in Q3FY22 says Central Bank.</h5>
                    <p>Private demand grew by 7% in Q3FY22 and picked up 14.5% sequentially.</p>
                    <div className="itm-des-sub">
                        <span className="date-post">03 Mar 2022</span>
                        <a href="#" className="btn-sm red-btn">AVOID</a>
                    </div>
                </div>
            </div>
            <div className="res-tab-itm">
                <div className="tab-itm-img">
                   <img src={thumb4} alt="Banner Images" className="img-fluid thumb-img" width={"231"} height={"251"}></img>
                </div>
                <div className="tab-itm-des">
                    <h5 className="ttl-des">Private demand grew by 7% in Q3FY22 says Central Bank.</h5>
                    <p>Private demand grew by 7% in Q3FY22 and picked up 14.5% sequentially.</p>
                    <div className="itm-des-sub">
                        <span className="date-post">03 Mar 2022</span>
                        <a href="#" className="btn-sm grn-btn">SUBSCRIBE</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5 d-flex justify-content-center"><a class="btn-bg" href="/">Explore All</a></div>
      </div>


     

    </div>
  );
}

export default IpoNfoAnalysis;
