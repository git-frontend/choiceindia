import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import "../CEBPLPolicies/CEBPL-Policies.scss";

function InvestorCharterMain() {
    return (
        <div>
            <section className="mainwrapquick">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Investor Charter</h2>

                        </div>
                    </div>
                    <div className="row quicklinkswrap">
                        <div className="col-md-12">
                            <h3 className="head">Stock Broker</h3>
                            <div className="subtext">
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure A </div>
                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure B</div>
                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row quicklinkswrap">
                        <div className="col-md-12">
                            <h3 className="head">Research Analyst</h3>
                            <div className="subtext">
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure A </div>
                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure B</div>
                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row quicklinkswrap">
                        <div className="col-md-12">
                            <h3 className="head">Portfolio Managers</h3>
                            <div className="subtext">
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure A </div>
                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure B</div>
                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row quicklinkswrap">
                        <div className="col-md-12">
                            <h3 className="head">Investment Advisors</h3>
                            <div className="subtext">
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure A </div>
                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure B</div>
                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row quicklinkswrap">
                        <div className="col-md-12">
                            <h3 className="head">Depository Participant</h3>
                            <div className="subtext">
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure A </div>
                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure B</div>
                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
}
export default InvestorCharterMain;