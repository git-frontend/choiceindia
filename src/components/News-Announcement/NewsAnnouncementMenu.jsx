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

                    <div className="row quicklinkswrap mb-5 cgmainwrap code-mainwrapper">
                        <div className="col-md-12">
                         
                           
                            <div className="table-responsive">
                            <table className="table table-striped" id="complaints">
                                <thead>
                                    <tr>
                                        <th className="text-uppercase ">sr. no</th>
                                        <th className="text-uppercase ">Month</th>
                                        <th className="text-uppercase text-center">Brought Forward<br/>
                                            ( previous month )</th>
                                        <th className="text-uppercase text-center">Received This<br/> month</th>
                                        <th className="text-uppercase text-center">resolved this<br/> month</th>
                                        <th className="text-uppercase text-center">pending</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >1</td>
                                        <td>April 2020</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">0</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>May 2020</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">0</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>June 2020</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">1</td>
                                        <td className="text-center">1</td>
                                        <td className="text-center">0</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>July 2020</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">3</td>
                                        <td className="text-center"> 1</td>
                                        <td className="text-center">2</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>August 2020</td>
                                        <td className="text-center">2</td>
                                        <td className="text-center">4</td>
                                        <td className="text-center">6</td>
                                        <td className="text-center">0</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>September 2020</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">21</td>
                                        <td className="text-center">11</td>
                                        <td className="text-center">10</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>October 2020</td>
                                        <td className="text-center">10</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">1</td>
                                        <td className="text-center">9</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>November 2020</td>
                                        <td className="text-center">9</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">9</td>
                                        <td className="text-center">0</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>December 2020</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">0</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>January 2021</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">0</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>February 2021</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">2</td>
                                        <td className="text-center">2</td>
                                        <td className="text-center" >0</td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>March 2021</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">2</td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">2</td>
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