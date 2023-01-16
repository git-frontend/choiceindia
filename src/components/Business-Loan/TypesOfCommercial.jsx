
import React, { useState } from "react";
import LazyLoader from "../Common-features/LazyLoader";
import commercialvehicle from '../../assets/images/business-loan/commercial-vehicle.webp';
import { Link } from "react-router-dom";
function TypesOfCommercial() {
  const [show, setshow]=useState(false);
  return (
    <div>

      <section className="inv-fin-banner com-vehlc2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-md-6">
              <div className="fin-banner-caption">
                <h2 className="title-secnd">Commercial Vehicle Loan</h2>
                <p>Are you struggling for days and still unable to find a way to get your desired vehicle financed even after multiple attempts? Do{!show ? <span onClick={()=>{setshow(true);console.log("hhh")}}>... <em className="read-ext">Read more</em></span>:""}{show ?<span>&nbsp;not worry! <br/>
Your search can stop right here with us. We are a customer-oriented organization where we treat our customers like family. We at Choice Finserv offer affordable and budget-friendly vehicle loans making sure that the wheels of your growth keep moving.<span onClick={()=>{setshow(false);console.log("hhh")}}>&nbsp;<em className="read-ext">Read less</em></span></span>:""}</p>
                <Link to="/commercial-vehicle-loan"><span class="btn-bg">Know more</span></Link>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end d-none d-sm-block">
              <LazyLoader src={commercialvehicle} alt={"Commercial Vehicle Loan"} className={"img-fluid img-banner"} width={"650"} height={"251"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TypesOfCommercial;
