
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";
import pdf1 from "../../assets/pdf/File-download/Internal_Control_Policy.pdf";
import pdf2 from "../../assets/pdf/File-download/Internal_Control_Policy_over_Authorised_Person.pdf";
import pdf3 from "../../assets/pdf/File-download/Investor_Grievance_Policy.pdf";
import pdf4 from "../../assets/pdf/File-download/Client_Registration_Account_opening_&_Closure.pdf";
import pdf5 from "../../assets/pdf/File-download/Branches_Open&Close_Allotment_Surrender_of_Trading_Terminals.pdf";
import pdf6 from "../../assets/pdf/File-download/Surveillance_Policy.pdf";
import pdf7 from "../../assets/pdf/File-download/Liquidation_&_close_out_of_position.pdf";
import pdf8 from "../../assets/pdf/File-download/Order_Receipt&Execution_Error_code.pdf";
import pdf9 from "../../assets/pdf/File-download/Outsourcing_Pre-funded_Instruments_Policy.pdf";
import pdf10 from "../../assets/pdf/File-download/Sending_Contract_Notes,Margin_Statement,Statement_of_Accounts_to_Clients.pdf";
import pdf11 from "../../assets/pdf/File-download/dr31052016a0813.pdf";
import pdf12 from "../../assets/pdf/File-download/dr2209201558263.pdf";
import pdf13 from "../../assets/pdf/File-download/dr2209201524fbb.pdf";
import pdf14 from "../../assets/pdf/File-download/physicaldeliverymargin-nse-circular.pdf";
import pdf15 from "../../assets/pdf/File-download/intraday-approved-list.pdf";
import pdf16 from "../../assets/pdf/File-download/fno--.pdf";
import pdf17 from "../../assets/pdf/File-download/approves-delivery-scrips.pdf";
import pdf18 from "../../assets/pdf/File-download/mcx-.pdf";
import pdf19 from "../../assets/pdf/File-download/ncdex-.pdf";
import pdf20 from "../../assets/pdf/File-download/cds-.pdf";
import pdf21 from "../../assets/pdf/File-download/rpf.rar";
import pdf22 from "../../assets/pdf/File-download/NEW Individual Modification Form.pdf";
import pdf23 from "../../assets/pdf/File-download/Closure form.pdf";
import pdf24 from "../../assets/pdf/File-download/dr050620151accb.pdf";
import pdf25 from "../../assets/pdf/File-download/dr050620159838e.pdf";
import pdf26 from "../../assets/pdf/File-download/New combined segment_1.pdf";
import pdf27 from "../../assets/pdf/File-download/dr050620159838e.pdf";
import pdf28 from "../../assets/pdf/File-download/crf-in-vernacular-languages-commodity.rar";
import pdf29 from "../../assets/pdf/File-download/choice Main KYC  Version 1.17 23 5 2022.pdf";
import pdf30 from "../../assets/pdf/File-download/closure-form.pdf";
import pdf31 from "../../assets/pdf/File-download/exchange-circular-20210701-30.pdf";
import pdf32 from "../../assets/pdf/File-download/Nomination.pdf";
import pdf33 from "../../assets/pdf/File-download/nominee-addition-form.pdf";
import pdf34 from "../../assets/pdf/File-download/choice  POA.pdf";
import pdf35 from "../../assets/pdf/File-download/segment-activation-form.pdf";
import pdf36 from "../../assets/pdf/File-download/utility.rar";
import pdf37 from "../../assets/pdf/File-download/autopatchupdate.rar";
import pdf38 from "../../assets/pdf/File-download/userterminal.zip";
import pdf39 from "../../assets/pdf/File-download/cli32bin.zip";
import pdf40 from "../../assets/pdf/File-download/diet32-sp24plus.zip";
import pdf41 from "../../assets/pdf/File-download/dealerterminal.zip";
import pdf42 from "../../assets/pdf/File-download/mgr-1.rar";
import pdf43 from "../../assets/pdf/File-download/mgr-2.rar";




import download from '../../assets/images/file-download/export.webp';

function FileDownloadFaq() {
    return (
        <div>

            <section className="filedownloadfaq">
                <div className="container">
                   
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>Policies</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                       <div className="listing">
                                        <ul>
                                            <li>
                                                <div className="text"> Internal Control Policy</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf1)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Internal Control Policy over Authorised Person</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf2)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Investor Grievance Policy</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf3)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Client Registration Account Opening &amp; Closure</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf4)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Branches Open &amp; Close Allotment Surrender of Trading Terminal</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf5)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> Surveillance Policy</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf6)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Liquidation &amp; close out of position</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf7)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">   Order Receipt &amp; Execution Error code</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf8)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Outsourcing, Pre-funded Instruments Policy</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf9)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Sending Contract Notes, Margin Statement, Statement of Accounts to Clients</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf10)}} className="downloadtext">Download</span></div>
                                            </li>
                                        </ul>
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>choice Peers</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                       <div className="listing">
                                        <ul>
                                            <li>
                                                <div className="text"> Choice Peers International-Brochure</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf11)}} className="downloadtext">Download</span></div>
                                            </li>
                                           
                                        </ul>
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>Choice Group</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                       <div className="listing">
                                        <ul>
                                            <li>
                                                <div className="text">  Choice Group - Brochure</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf12)}} className="downloadtext">Download</span></div>
                                            </li>
                                            
                                        </ul>
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>Choice Broking</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                       <div className="listing">
                                        <ul>
                                            <li>
                                                <div className="text">Choice Broking - Brochure</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf13)}} className="downloadtext">Download</span></div>
                                            </li>
                                           
                                        </ul>
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>Margin Day Opening</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                       <div className="listing">
                                        <ul>
                                            <li>
                                                <div className="text">Mandatory Delivery margins for Delivery Settlement in FNO stocks</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf14)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">Approved Intra day Scrips List in Cash Market</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf15)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">FNO</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf16)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">Approved 2x Delivery Scrips</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf17)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">MCX</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf18)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> NCDEX</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf19)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  CDS</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf20)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> Span File</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf21)}} className="downloadtext">Download</span></div>
                                            </li>
                     
                                        </ul>
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>Account Opening Form</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                       <div className="listing">
                                        <ul>
                                            <li>
                                                <div className="text"> Modification Form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf22)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> Account Closure</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf23)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Pledge Request Form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf24)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  CRF Form in Vernacular Languages Commodity</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf25)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> Common Segment Activation</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf26)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> Dematerialisation Request Form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf27)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> CRF Form in Vernacular Languages Equity</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf28)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Account opening form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf29)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Closure form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf30)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Exchange Circular_20210701-30</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf31)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">   Nomination Form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf32)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">Nominee Addition Form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf33)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> POA</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf34)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Segment Activation form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf35)}} className="downloadtext">Download</span></div>
                                            </li>
                                        </ul>
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>Software</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                       <div className="listing">
                                        <ul>
                                            <li>
                                                <div className="text"> Odin Utility</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf36)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> AtuoPatchupdate</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf37)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> JIFFY User Terminal</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf38)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> JIFFY Dealer Patch</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf39)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> Jiffy Diet Patch</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf40)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">JIFFY Dealer Terminal</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf41)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> MGR-1 REG</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf42)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  MGR-2 REG</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf43)}} className="downloadtext">Download</span></div>
                                            </li>
                                      
                                        </ul>
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                          
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default FileDownloadFaq;

