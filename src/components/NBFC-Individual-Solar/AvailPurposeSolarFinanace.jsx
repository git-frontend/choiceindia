
import React from "react";
import LazyLoader from "../Common-features/LazyLoader";
import avail from '../../assets/images/nbfc-indivial-loan/avail-man.webp';

import vehiclepurpose from '../../assets/images/NBFCvehicleLoan/vehiclepurpose.svg';
import bringvehicle from '../../assets/images/NBFCvehicleLoan/bringvehicle.svg';
import usedvehicle from '../../assets/images/NBFCvehicleLoan/usedvehicle.svg';

function AvailPurposeSolarFinanace() {

    return (
        <div>


            <section className="avail" id="showForm2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="veh-bnr-list">
                                <div className="bnr-list-itm">
                                    <div className="bnr-list-right d-flex justify-content-end">
                                        <LazyLoader src={avail} alt={"Individual Loan Eligibility"} className={"img-fluid img"} width={"627"} height={"538"} />
                                    </div>
                                    <div className="bnr-list-left">
                                        <h2 className="title-secnd">Who can avail?</h2>
                                        <p>Individuals or Self Employed Professionals (SEP), on whose household premise the solar panel needs to
be installed should be owned by them</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}

export default AvailPurposeSolarFinanace;
