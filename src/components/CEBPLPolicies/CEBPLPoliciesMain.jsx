import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from  '@fortawesome/free-solid-svg-icons';

import "../CEBPLPolicies/CEBPL-Policies.scss";

function CEBPLPoliciesMain() {
    return (
        <div>
            <section className="mainwrapquick">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">CEBPL Policies</h2>
                           
                        </div>
                    </div>
                    <div className="row quicklinkswrap">
                        <div className="col-md-12">

                           
                                <h3 className="head">CEBPL Policies</h3>
                                <div className="subtext">
                                    <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Surveillance Policy </div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>

                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Unauthentic News Circulation</div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>

                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Error Account Policy</div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Dormant Account Policy</div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Code of Conduct Conflict of Interest</div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>PMLA Policy 1.8</div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Pre Funded Instrument Policy</div>
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
export default CEBPLPoliciesMain;