import React from "react";
import img1 from '../../assets/images/choice-logo.svg';

import LazyLoader from "../Common-features/LazyLoader";

function ChargesComparison() {

    return (
        <div>
            <section className="charges-comparison" id="intradaycharges" >
                <div className="container" id="showForm">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-md-8">
                            <div className="hading-text">
                                <h2 className="ttl2-sm">Intraday Charges Comparison</h2>
                                <p>Mr. Amit bought 100 shares <span>@ Rs. 196</span> and sold them <span>@ Rs. 200</span>, the total turnover is Rs. 39,600.</p>
                            </div>
                            
                        </div>  
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="comparison-table-data">
                                <table className="">
                                    <thead>
                                        <th className="radius-left">Charges &amp; <span>Fee</span></th>
                                        <th className="highlt1">
                                            <LazyLoader src={img1} alt={"Sub Broker Franchise Without Deposit"} className={"img-fluid"} />
                                        </th>
                                        <th className="radius-right">Discount Brokers’</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="txt1">
                                                Brokerage Rate <span>(Intraday)</span> 
                                            </td>
                                            <td className="txt2">
                                                0.02%
                                            </td>
                                            <td className="txt2">
                                                0.03%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="txt1">
                                                Brokerage Fee
                                            </td>
                                            <td className="txt2">
                                                ₹ 7.92
                                            </td>
                                            <td className="txt2">
                                                ₹ 11.88
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="txt1">
                                                STT Charge
                                            </td>
                                            <td className="txt2">
                                                ₹ 5.00
                                            </td>
                                            <td className="txt2">
                                                ₹ 5.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="txt1">
                                                Exchange txn charge
                                            </td>
                                            <td className="txt2">
                                                ₹ 1.29
                                            </td>
                                            <td className="txt2">
                                                ₹ 1.37
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="txt1">
                                                GST
                                            </td>
                                            <td className="txt2">
                                                ₹ 1.66
                                            </td>
                                            <td className="txt2">
                                            ₹ 2.38
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="txt1">
                                                Stamp duty
                                            </td>
                                            <td className="txt2">
                                                ₹ 0.79
                                            </td>
                                            <td className="txt2">
                                                ₹ 0.59
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="txt1">
                                            SEBI charges
                                            </td>
                                            <td className="txt2">
                                            ₹ 0.04
                                            </td>
                                            <td className="txt2">
                                            ₹ 0.04
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="txt1 bld-txt radius-left-bottom">
                                            Total Tax and <span>Charges</span>
                                            </td>
                                            <td className="txt2 bld-txt highlt2">
                                                <span className="valtxt">₹ 16.7</span>
                                            
                                            </td>
                                            <td className="txt2 bld-txt radius-right-bottom">
                                            ₹ 21.26
                                            </td>
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

export default ChargesComparison;
