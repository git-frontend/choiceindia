import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from  '@fortawesome/free-solid-svg-icons';
import Navbar from '../Investors-info/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
function CodeConductMenu() {
    return (
        <div>
            <section className="Investormenu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Corporate Governance</h2>
                            <Navbar />
                        </div>
                    </div>
                    <div className="row code-mainwrapper cgmainwrap">
                        <div className="col-md-12">

                           
                                <h3 className="head">Policies</h3>
                                <div className="subtext">
                                    <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Policy For Familiarisation Programme For Independent Directors </div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>

                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Code of Practices and Procedures for fair Disclosure of unpublished Price Sensitive Information </div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>

                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Policy for Preservation of Documents and Archival of Documents </div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Nomination And Remuneration Policy </div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                 
                                  
                                </div>
                           
                           

                        </div>
                       
                       
                      
                      
                    </div>
                    <div className="row code-mainwrapper cgmainwrap">
                        <div className="col-md-12">

                           
                                <h3 className="head">Committee</h3>
                                <div className="subtext">
                                    <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Audit Committee </div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>

                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Nomination and Remuneration Committee</div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>

                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Stakeholder Relationship Committee</div>
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
export default CodeConductMenu;