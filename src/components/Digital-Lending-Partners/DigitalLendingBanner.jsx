import React from "react";
import { useState } from "react";
import "./digitalpartner.scss";
import digitalpart1 from '../../assets/images/Digital-Lending-Partners/digitalpart1.svg';
import digitalpart2 from '../../assets/images/Digital-Lending-Partners/digitalpart2.svg';
import digitalpart3 from '../../assets/images/Digital-Lending-Partners/digitalpart3.svg';
import LazyLoader from '../Common-features/LazyLoader';



import {
  useLocation,
} from 'react-router-dom';

function DigitalLendingBanner() {


  const location = useLocation();


  return (
    <div>
      <section className="digital-partner-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="big-ttl mb-5">
                Digital Lending Partners
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="carditem-list">
                <div className="digital-carditem">
                  <span className="digiimg">
                    <LazyLoader src={digitalpart1} alt={"Banner Images"} className={"img-fluid"} />
                  </span>
                  <h3 className="digi-card-title">
                    Choice International Ltd.
                  </h3>
                  <p className="digi-subtext">
                    Choice Group, incorporated in 1992, is a financial institution which finds its legacy in solving financial problems and bridging gaps for individuals, institutions and governments.
                  </p>
                  <span className="knw-btn"><a href="">Know More</a></span>
                </div>
                <div className="digital-carditem">
                  <span className="digiimg">
                    <LazyLoader src={digitalpart2} alt={"Banner Images"} className={"img-fluid"} />
                  </span>
                  <h3 className="digi-card-title">
                    Seeds Fincap Pvt Ltd
                  </h3>
                  <p className="digi-subtext">
                    SEEDS FINCAP PVT. LTD. is a Delhi NCR-based non-deposit-taking NBFC. With its headquarters in Gurugram (erstwhile ‘Gurgaon), its aim to serve a million MSMEs - Micro, Small, and Medium Enterprises in India in this decade!
                  </p>
                  <span className="knw-btn"><a href="">Know More</a></span>
                </div>
                <div className="digital-carditem">
                  <span className="digiimg">
                    <LazyLoader src={digitalpart3} alt={"Banner Images"} className={"img-fluid"} />
                  </span>
                  <h3 className="digi-card-title">
                    Indinvoice Tech Solutions Pvt Ltd
                  </h3>
                  <p className="digi-subtext">
                    Cashinvoice leverages technology to transform supply chain finance. Their mission is to help corporates of all sizes unlock value locked within the supply chain to optimize their working capital more efficiently.
                  </p>
                  <span className="knw-btn"><a href="">Know More</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DigitalLendingBanner;