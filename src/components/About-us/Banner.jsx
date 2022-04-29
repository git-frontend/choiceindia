
import React from "react";
import "../../assets/css/aboutus.scss";
import Bannerimage from '../../assets/images/about-us/banner.png';
function Banner() {

  return (
    <div>
      
     
    <section className="bannersection">
        <div className="container">
            <div className="row gx-5">
                <div className="col-md-6">
                    <h1 className="title">About Us</h1>

                    <p className="para">Choice Group, incorporated in 1992, is a financial institution which finds its legacy in solving financial problems and bridging gaps for individuals, institutions and governments.</p>

                    <p className="para pt-4">For past 25 years we are committed to help our clients achieve their financial aspirations and promote value creation for society.</p>
                </div>
                <div className="col-md-6">
                    <img src={Bannerimage} alt="Banner Images" className="img-fluid "></img>
                </div>
            </div>
        </div>
    </section>
      
    
    </div>
  );
}

export default Banner;
