
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Bangalore from '../../assets/images/stock-broker-mumbai/stock-broker-in-bangalore.svg';
import Chennai from '../../assets/images/stock-broker-mumbai/stock-broker-in-chennai.svg';
import Hydrabad from '../../assets/images/stock-broker-mumbai/stock-broker-in-hyderabad.svg';
import Jaipur from '../../assets/images/stock-broker-mumbai/stock-broker-in-jaipur.svg';
import Delhi from '../../assets/images/stock-broker-mumbai/stock-broker-in-delhi.svg';
import Pune from '../../assets/images/stock-broker-mumbai/stock-broker-in-pune.svg';
function Branches() {
 


  return (
    <div>
      <section className="branch" >
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="heading-sec">
                <h2 className="title-first text-center">Our Other Branches Near You</h2>
                <p className="text-center mb-5 branchsubtext">Stock Broker in</p>
              </div>

            </div>
          </div>
          <div className="row" >
            <div className="col-md-12">
              <div>
                
                    <div className="branches-list">

                      <div className="branch-item">
                        <span className="img-itm">
                        <LazyLoader src={Bangalore} alt={"Stock Broker in Bangalore"} className={"img-fluid"} width={"144"} height={"144"}/>

                        </span>
                        <h5>Bangalore</h5>

                      </div>

                      <div className="branch-item">
                        <span className="img-itm">
                        <LazyLoader src={Chennai} alt={"Stock Broker in Chennai"} className={"img-fluid"} width={"144"} height={"144"}/>

                        </span>
                        <h5>Chennai</h5>

                      </div>

                      <div className="branch-item">
                        <span className="img-itm">
                        <LazyLoader src={Hydrabad} alt={"Stock Broker in Hyderabad"} className={"img-fluid"} width={"144"} height={"144"}/>

                        </span>
                        <h5>Hyderabad</h5>

                      </div>

                      {/* <div className="branch-item">
                        <span className="img-itm">
                        <LazyLoader src={Jaipur} alt={"Stock Broker in Jaipur"} className={"img-fluid"} width={"144"} height={"144"}/>

                        </span>
                        <h5>Jaipur</h5>

                      </div> */}
                      <div className="branch-item">
                        <span className="img-itm">
                        <LazyLoader src={Delhi} alt={"Stock Broker in Delhi"} className={"img-fluid"} width={"144"} height={"144"}/>

                        </span>
                        <h5>Delhi</h5>

                      </div>
                      {/* <div className="branch-item">
                        <span className="img-itm">
                        <LazyLoader src={Pune} alt={"Stock Broker in Pune"} className={"img-fluid"} width={"144"} height={"144"}/>

                        </span>
                        <h5>Pune</h5>

                      </div> */}
                      

                    </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>

  );
}

export default Branches;
