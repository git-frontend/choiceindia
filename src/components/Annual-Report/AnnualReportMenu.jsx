import React from "react";
import pdf1 from "../../assets/pdf/annual-report/Annual Report.pdf";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Common-features/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Common-features/navbar.scss";
import "../Corporate-Governance/corporate-governance.scss";
function AnnualReportMenu() {
    return (
        <div>
            <section className="Investormenu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Annual Report</h2>
                            <Navbar />
                        </div>
                    </div>
                    <div className="row code-mainwrapper cgmainwrap">
                        <div className="col-md-12">

                            <div className="d-flex justify-content-between">

                                <h3 className="head">Description</h3>

                            </div>
                            <div className="subtext">


                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annual Return 2021 - 2022 </div>

                                    <div><FontAwesomeIcon icon={faEye} onClick={()=>{window.open(pdf1)}} className="cursor-pointer" /></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annual Return 2020 - 2021 </div>

                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>

                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>The Notice 28th AGM </div>

                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annual Report 2020 - 2021</div>

                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>


                            </div>



                        </div>




                    </div>
                    <div className="row code-mainwrapper cgmainwrap">
                        <div className="col-md-12">

                            <div className="d-flex justify-content-between">

                                <h3 className="head">Description</h3>

                            </div>
                            <div className="subtext">


                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Financial Statements of Subsidiaries 2020-21</div>

                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>

                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Financial Statements of Subsidiaries 2019-20 </div>

                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Financial Statements of Subsidiaries 2018-19</div>

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
export default AnnualReportMenu;