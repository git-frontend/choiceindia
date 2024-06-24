
import React from "react";
import Bannerimage from '../../assets/images/about-us/about-choice.webp';
import LazyLoader from '../Common-features/LazyLoader';

function Banner() {

  return (
    <div>
      
     
    <section className="bannersection">
        <div className="container">
            <div className="row gx-5 align-items-center">
                <div className="col-md-6">
                    <h1 className="title">About Us</h1>

                    <p className="para">Choice Group, incorporated in 1992, is a financial institution which finds its legacy in solving financial problems and bridging gaps for individuals, institutions and governments.</p>

                    <p className="para pt-4">For past 31 years we are committed to help our clients achieve their financial aspirations and promote value creation for society.</p>
                </div>
                <div className="col-md-6 d-none d-sm-block">
                    <div className="rightsec">

                              <LazyLoader src={Bannerimage} alt={"About Choice"} className={"img-fluid"} width={"609"} height={"476"} />
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    
    </div>
  );
}

export default Banner;
