
import React from "react";
import Bannerimage from '../../assets/images/investment-banking/investment-banking-banner.webp';
import LazyLoader from "../Common-features/LazyLoader";
import SingleTemplate from "../Common-features/SingleTemplate";
import { useState } from "react";

function Banner() {

    const [skeleton, setSkeleton] = useState(() => true);
    setTimeout(() => {
      setSkeleton(() => false  );
    }, 3000)

    return (
        <div>


            <section className="bannersection investment-banking-banner">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-md-5">
                            <div className="bnr-left">
                                <h1 className="title">Merchant Banking and Investment Banking</h1>
                            </div>
                        </div>
                        <div className="col-md-7 d-none d-sm-block">                           
                             <div className="rightsec ">
                                <LazyLoader src={Bannerimage} alt={"Merchant Banking and Investment Banking"} className={"img-fluid top-banner-img"} width={"780"} height={"517"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Banner;
