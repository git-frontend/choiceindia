
import React from "react";
import NBFCMenu from '../Common-features/NBFCMenu';
import LazyLoader from "../Common-features/LazyLoader";
import avail from '../../assets/images/solar-finance/avail-solar.webp';
function AvailSolar() {

    return (
        <div>


<section className="solar-avail-bnr" id="showForm">
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="veh-bnr-list">
                      <div className="bnr-list-itm">
                        <div className="bnr-list-right d-flex justify-content-end">
                              <LazyLoader src={avail} alt={"Solar Financing for MSME"} className={"img-fluid img"} width={"572"} height={"573"} />
                          </div>
                          <div className="bnr-list-left">
                              <h2 className="title-secnd">Who can avail?</h2>
                              <p>Business owners from MSME and Small Scale industries are eligible to apply.</p>
                          </div>
                      </div>
                      <NBFCMenu />
                </div>
            </div>
        </div>
        
      </div>
    </section>

        </div>
    );
}

export default AvailSolar;
