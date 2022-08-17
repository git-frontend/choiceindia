import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from  '@fortawesome/free-solid-svg-icons';
import Navbar from '../Investors-info/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
function NewsAnnouncement() {
    return (
        <div>
            <section className="Investormenu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">News &amp; Announcements</h2>
                            <Navbar />
                        </div>
                        
                    </div>
                    <div className="row code-mainwrapper cgmainwrap">
                        <div className="col-md-12">

                        <div className="d-flex ">
                                <h3 className="head w-25">Date &amp; Time</h3>
                                <h3 className="head w-25">Headlines</h3>
                                <h3 className="head w-25">News Details</h3>
                                <h3 className="head w-25">PDF</h3>
                                </div>
                                <div className="subtext">
                                   

                                <div className="border-bottom d-flex  pb-3 pt-3">
                                   <div className="w-25">18-05-2022 </div>
                                   <div className="w-25">Board Meeting Intimation for Intimation Of Board Meeting</div>
                                   <div className="w-25">CHOICE INTERNATIONAL LTD.has informed BSE that the meeting of the Board of Directors of the Company is scheduled on 24/05/2022...</div>
                                   <div className="w-25"><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>

                                  
                                   
                                 
                                  
                                </div>
                           
                           

                        </div>
                       
                       
                       
                      
                    </div>
                 

                </div>
            </section>
        </div>
    );
}
export default NewsAnnouncement;