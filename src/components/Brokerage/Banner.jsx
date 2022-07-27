
import React from "react";
import Bannerimage from '../../assets/images/brokerage-charges/banner-img.webp';
import LazyLoader from '../Common-features/LazyLoader';

function Banner() {

  return (
    <div>
      
     
    <section className="bannersection">
        <div className="container">
            <div className="row gx-5 align-items-center">
                <div className="col-md-6">
                    <h1 className="title">Brokerage Charges</h1>
                    <p className="para">Trade with low* brokerage charges and avail a host of facilities with one of the best broking companies in India.</p>
                    <a href="/" className="btn-bg mt-4">Open A Free Demat Account</a>
                </div>
                <div className="col-md-6">
                    <div className="rightsec">
                        <LazyLoader src={Bannerimage} alt={"Banner Images"} className={"img-fluid"} width={"609"} height={"476"} />
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    
    </div>
  );
}

export default Banner;
