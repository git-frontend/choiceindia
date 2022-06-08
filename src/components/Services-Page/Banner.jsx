
import React from "react";
import Bannerimage from '../../assets/images/services/banner-top.webp';
function Banner() {

  return (
    <div>
      
     
    <section className="bannersection service-banner">
        <div className="container">
            <div className="row gx-5 align-items-center">
                <div className="col-md-4">
                    <h1 className="title">Our Services</h1>

                    <p className="para">Our extensive portfolio of services offered to clients, empower them with synergy of having all assistance in one place. </p>

                    <p className="para pt-4">Our focus is to provide services to clients aspiring to be financially disciplined.</p>
                </div>
                <div className="col-md-8">
                    <div className="rightsec">

                    <img src={Bannerimage} alt="Banner Images" className="img-fluid top-banner-img"></img>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    
    </div>
  );
}

export default Banner;
