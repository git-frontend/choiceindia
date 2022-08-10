import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import "../CEBPLPolicies/CEBPL-Policies.scss";

function InvestorAwarenessMain() {
    return (
        <div>
            <section className="mainwrapquick">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Investor Awareness</h2>

                        </div>
                    </div>
                    <div className=" quicklinkswrap">
                        <div className="row border-bottom">
                            <div className=" col-md-4 col-4 "><h3 className="head">Exchange </h3></div>
                            <div className="col-md-4 col-4 word-wrap"> <h3 className="head">Web Address</h3></div>
                            <div className="col-md-4 col-4 word-wrap"> <h3 className="head">Contact No.</h3></div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-4 col-4 pb-3 pt-3">BSE </div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="https://www.bseindia.com/" target={"_blank"} className="text-decoration-none">www.bseindia.com</a></div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="tel:(91 22) 2272 8517 / 8097" className="text-decoration-none">(91 22) 2272 8517 / 8097</a></div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-4 col-4 pb-3 pt-3">NSE</div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="https://www.nseindia.com/" target={"_blank"} className="text-decoration-none">www.nseindia.com</a></div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="tel:(91 22) 2659 8190 / 91" className="text-decoration-none">(91 22) 2659 8190 / 91</a></div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-4 col-4 pb-3 pt-3">MSEI</div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="https://www.mcxindia.com/" target={"_blank"} className="text-decoration-none">www.mcxindia.com</a></div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="tel:(91 22) 6649 4070" className="text-decoration-none">(91 22) 6649 4070</a></div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-4 col-4 pb-3 pt-3">SEBI</div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="https://www.sebi.gov.in/" target={"_blank"} className="text-decoration-none">www.sebi.gov.in</a>
                            </div>
                            <div className=" col-md-4 col-4 pb-3 pt-3"><a href="tel:(91 22) 6731 9000" className="text-decoration-none">(91 22) 6731 9000</a></div>
                        </div>

                    </div>
                    <p>SEBI now vide its letter dated July 03, 2019 has directed all intermediaries to display the following information on their website to make the complaint redressal mechanism through SCORES more efficient.
                    </p>
                    <p>Filing compliant on SCORES – Easy &amp; quick
                    </p>
                    <p>a. Register on SCORES portal<br />
                        b. Mandatory details for filing complaints on SCORES<br />
                        I. Name, PAN, Address, Mobile Number, E-mail ID


                    </p>
                    <p>c. Benefits:<br />
                        i. Effective Communication
                        <br />
                        ii. Speedy redressal of the grievances

                    </p>
                    <p>*Updation of mandatory KYC fields by March 31, 2022 for more details visit Annexure I KYC Updation</p>

                    <div className="row quicklinkswrap mt-5">
                        <div className="col-md-12">
                        <div className="subtext">
                        <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div ><strong> KYC Updation </strong></div>
                                   <div><FontAwesomeIcon icon={faDownload} className="cursor-pointer"/> <a href="#" className="text-decoration-none">Download</a></div>
                                   </div>
                                   </div>
                        </div>
                        </div>


                </div>
            </section>
        </div>
    );
}
export default InvestorAwarenessMain;