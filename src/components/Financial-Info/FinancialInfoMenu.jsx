import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from  '@fortawesome/free-solid-svg-icons';
import Navbar from '../Investors-info/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
function FinancialInfoMenu() {
    return (
        <div>
            <section className="Investormenu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Financial-Info</h2>
                            <Navbar />
                        </div>
                    </div>
                    <div className="row code-mainwrapper cgmainwrap">
                        <div className="col-md-12">

                           
                                <h3 className="head">Financial Year 2021 - 22</h3>
                                <div className="subtext">
                                   

                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>December 2021</div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>

                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>September 2021 </div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>June 2021</div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                 
                                  
                                </div>
                           
                           

                        </div>
                       
                       
                       
                      
                    </div>
                  

                </div>
            </section>
        </div>
    );
}
export default FinancialInfoMenu;