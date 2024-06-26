
import React from "react";
import Bannerimage from '../../assets/images/services/financial-services.gif';
import LazyLoader from "../Common-features/LazyLoader";
import SingleTemplate from "../Common-features/SingleTemplate";
import serviceBanner from "../../assets/images/services/servicesBanner_1.mp4"
import { useState } from "react";

function Banner() {

    const [skeleton, setSkeleton] = useState(() => true);
    setTimeout(() => {
      setSkeleton(() => false  );
    }, 3000)

    return (
        <div>


            <section className="bannersection service-banner">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-md-5">
                            <div className="bnr-left">
                                <h1 className="title">Our Services</h1>

                                <p className="para">Our extensive portfolio of services offered to clients, empower them with synergy of having all assistance in one place. </p>

                                <p className="para pt-4">Our focus is to provide services to clients aspiring to be financially disciplined.</p>
                            </div>
                        </div>
                        <div className="col-md-7 d-none d-sm-block">

                            {
                                skeleton?
                                <SingleTemplate/>:
                                <div className="rightsec ">
                                <LazyLoader src={Bannerimage} alt={"Financial Services"} className={"img-fluid top-banner-img"} width={"957"} height={"623"}/>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Banner;
