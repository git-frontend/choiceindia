import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from  '@fortawesome/free-solid-svg-icons';
import Navbar from '../Investors-info/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
function NoticesMenu() {
    return (
        <div>
            <section className="Investormenu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Notices</h2>
                            <Navbar />
                        </div>
                    </div>
                    <div className="row code-mainwrapper cgmainwrap">
                        <div className="col-md-12">

                       
                                <h3 className="head">RIGHT ISSUE</h3>
                                <h4 className="head">Description</h4>
                               
                               
                                <div className="subtext">
                                   

                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Right Issue - Letter of Offer </div>
                                
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>

                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Common Application Form</div>
                                 
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Abridge Letter of Offer</div>
                                   
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Right Entitlement Letter</div>
                                   
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Newspaper Publication of Pre - Issue Opening Advertisement of Right Issue</div>
                                   
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                 
                                  
                                </div>
                           
                           

                        </div>
                       
                       
                       
                      
                    </div>
                    <div className="row code-mainwrapper cgmainwrap">
                        <div className="col-md-12">

                       
                              
                                <h3 className="head">Description</h3>
                               
                               
                                <div className="subtext">
                                   

                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Postal Ballot Final</div>
                                
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>

                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>AGM Notice 2020 - 21</div>
                                 
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>AGM Notice 2019 - 20</div>
                                   
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>EGM Notice 2019</div>
                                   
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>AGM Notice 2019</div>
                                   
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
export default NoticesMenu;