// import React, { useState, useEffect } from "react";
import appbanner from "../../assets/images/bug-bounty/app-banner.png"
import LazyLoader from "../Common-features/LazyLoader";
import { Accordion } from "react-bootstrap";
function BugBountyBanner() {


    return (
        <>
        <section className="bug-banner">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-5 col-md-6">
                        <div className="caption-txt">
                            <h1 className="big-ttl">Choice Bug <br/>Bounty Program</h1>
                            <p className="para">Found a bug on our platform? Report it and get rewarded. Driven by tech, but led by people Choice believes in maintaining the highest levels of security at all times. And to do that we need your help. Scrutinize, search and send us reports on any bugs you find on our app or web platform, and together lets bug it out!</p>
                            <a href="/" className="btn-bg">Submit</a>
                        </div>
                    </div>
                    <div className="col-md-5 d-none d-sm-block">
                        <div className="rightsec">
                                <LazyLoader src={appbanner} alt={"Choice Bug Bounty Program"} className={"img-fluid"} width={"609"} height={"476"} />
                                {/* <img src={Bannerimage} alt="Banner Images" className="img-fluid "></img> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>


      

          
        </>
    );
}
export default BugBountyBanner;