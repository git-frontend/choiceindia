
import React from "react";
import LazyLoader from "../Common-features/LazyLoader";
import avail from '../../assets/images/nbfc-indivial-loan/avail-man.webp';


function AvailPurposePersonalFinanace() {

    return (
        <div>


            <section className="veh-bnr-btm" id="showForm2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="veh-bnr-list">
                                <div className="bnr-list-itm">
                                    <div className="bnr-list-right d-flex justify-content-end">
                                        <LazyLoader src={avail} alt={"Individual Loan Eligibility"} className={"img-fluid img"} width={"627"} height={"538"} />
                                    </div>
                                    <div className="bnr-list-left">
                                        <h2 className="title-secnd">Who can apply ?</h2>
                                        <p>Salaried and Self-Employed Professionals: Government and Private Sector Employees, Doctors, Chartered Accountant, Architect, Consultant etc</p>
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

export default AvailPurposePersonalFinanace;
