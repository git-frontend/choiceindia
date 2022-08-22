
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

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
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Internal Control Policy over Authorised Person</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Investor Grievance Policy</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Client Registration Account Opening &amp; Closure</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Branches Open &amp; Close Allotment Surrender of Trading Terminal</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> Surveillance Policy</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Liquidation &amp; close out of position</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">   Order Receipt &amp; Execution Error code</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Outsourcing, Pre-funded Instruments Policy</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Sending Contract Notes, Margin Statement, Statement of Accounts to Clients</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
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
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span className="downloadtext">Download</span></div>
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
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span className="downloadtext">Download</span></div>
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
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span className="downloadtext">Download</span></div>
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
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">Approved Intra day Scrips List in Cash Market</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">FNO</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">Approved 2x Delivery Scrips</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">MCX</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> NCDEX</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  CDS</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> Span File</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
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
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> Account Closure</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Pledge Request Form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  CRF Form in Vernacular Languages Commodity</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> Common Segment Activation</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> Dematerialisation Request Form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> CRF Form in Vernacular Languages Equity</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Account opening form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Closure form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Exchange Circular_20210701-30</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">   Nomination Form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">Nominee Addition Form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> POA</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Segment Activation form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
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
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> AtuoPatchupdate</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> JIFFY User Terminal</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> JIFFY Dealer Patch</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> Jiffy Diet Patch</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">JIFFY Dealer Terminal</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> MGR-1 REG</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  MGR-2 REG</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span className="downloadtext">Download</span></div>
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

