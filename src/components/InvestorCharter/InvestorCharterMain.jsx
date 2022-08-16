import React from "react";
import stock_broker from "../../assets/pdf/Investor-charter/IC-Annex-A_Stock_Broker.pdf";
import stock_broker_b from "../../assets/pdf/Investor-charter/IC-Annex-B_Stock_Broker.pdf";
import Research_A from "../../assets/pdf/Investor-charter/IC-Annex-A_Research_Analyst.pdf";
import Research_B from "../../assets/pdf/Investor-charter/IC-Annex-B_Research_Analyst.pdf";
import Portfolio_A from "../../assets/pdf/Investor-charter/IC-Annex-A_Portfolio_Manager.pdf";
import Portfolio_B from "../../assets/pdf/Investor-charter/Annex-B_Portfolio_Manager.pdf";
import Investment_A from "../../assets/pdf/Investor-charter/Annex-A_Investment_Advisor.pdf";
import Investment_B from "../../assets/pdf/Investor-charter/Annex-B_Investment_Advisor.pdf";
import Depository_A from "../../assets/pdf/Investor-charter/IC-Annex-A_Depository_Participant.pdf";
import Depository_B from "../../assets/pdf/Investor-charter/IC-Annex-B_Depository_Participant.pdf";
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
                                    <div><a onClick={()=>{window.open(stock_broker)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure B</div>
                                    <div><a onClick={()=>{window.open(stock_broker_b)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
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
                                    <div><a onClick={()=>{window.open(Research_A)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure B</div>
                                    <div><a onClick={()=>{window.open(Research_B)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
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
                                    <div><a onClick={()=>{window.open(Portfolio_A)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure B</div>
                                    <div><a onClick={()=>{window.open(Portfolio_B)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
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
                                    <div><a onClick={()=>{window.open(Investment_A)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure B</div>
                                    <div><a onClick={()=>{window.open(Investment_B)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
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
                                    <div><a onClick={()=>{window.open(Depository_A)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure B</div>
                                    <div><a onClick={()=>{window.open(Depository_B)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
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