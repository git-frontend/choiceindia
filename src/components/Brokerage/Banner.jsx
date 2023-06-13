import { useState } from "react";
import React from "react";
import Bannerimage from '../../assets/images/brokerage-charges/banner-img.webp';
import glossary from '../../assets/images/brokerage-charges/money.svg';
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from "react-router-dom";


import { Accordion } from "react-bootstrap";

function Banner() {
    const[ischeck,setIscheck]=useState(false);
  return (
    <div>
      
     
    <section className="bannersection" onMouseOver={()=>setIscheck(true)}>
        <div className="container">
            <div className="row gx-5 align-items-center">
                <div className="col-md-6">
                    <h1 className="title">Brokerage Charges</h1>
                    <p className="para">Trade with low* brokerage charges and avail a host of facilities with one of the best broking companies in India.</p>
                    <Link to="/open-free-demat-account"><span  className="btn-bg mt-4">Open A Free Demat Account</span></Link>
                </div>
                <div className="col-md-6">
                    <div className="rightsec d-none d-sm-block">
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
