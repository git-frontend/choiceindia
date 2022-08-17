import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from  '@fortawesome/free-solid-svg-icons';
import Navbar from '../Investors-info/Navbar';
// import "../CodeConduct/code-conduct.scss";
import "./news-announcement.scss";
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

                    <div className="row quicklinkswrap mb-5 cgmainwrap code-mainwrapper">
                        <div className="col-md-12">
                         
                           
                            <div className="table-responsive">
                            <table className="table " id="complaints">
                                <thead>
                                    <tr>
                                        <th className="pb-3">Date &amp; Time</th>
                                        <th className="w-25 pb-3">Headlines</th>
                                        <th className="w-50 pb-3">News Details</th>
                                        <th className="pb-3">PDF</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>18-05-2022</td>
                                        <td className="w-25">Board Meeting Intimation for Intimation Of Board Meeting</td>
                                        <td className="w-50">CHOICE INTERNATIONAL LTD.has informed BSE that the meeting of the Board of Directors of the Company is scheduled on 24/05/2022...</td>
                                       <td><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></td>
                                    </tr>
                                  
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>

                 


                </div>












            </section>
        </div>
    );
}
export default NewsAnnouncement;