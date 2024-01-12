
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

function CorporateFaqs() {
    const [view, setview] = useState(false);
    const [show, setshow] = useState(false);
    return (
        <div>

<section className="Dematfaq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="faq-ttl">
                                <h2 className="title-secnd">Corporate Demat Account Opening FAQs</h2>
                                <p>Here are answers to some common queries about Corporate Demat accounts</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-11 col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <h5 className="numbers">1.</h5>
                                    <Accordion.Header as="h3" className='faq-header'>What is a Corporate Demat Account?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    A Corporate Demat Account is an account dedicated towards companies and corporations to help them participate in the stock market and manage their securities
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <h5 className="numbers">2.</h5>
                                    <Accordion.Header as="h3" className='faq-header'>Can a Demat and Trading account be opened for a Company in India?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        Yes, Indian companies can open Demat and Trading accounts too. These are called Corporate Demat/Trading accounts.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <h5 className="numbers">3.</h5>
                                    <Accordion.Header as="h3" className='faq-header'>What is the procedure to open a demat account for the Company?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The procedure to open corporate demat accounts includes: 
                                    <ul>
                                        <li>Filling out forms</li>
                                        <li>Providing KYC details of each account holder</li>
                                        <li>Aadhar and Photos of account holders (signed)</li>
                                        <li>PAN card copies of each account holder and company</li>
                                        <li>Address proofs of each account holder and company</li>
                                        <li>Cancelled cheques of account holders or last 3 months' bank statement</li>
                                        <li>Balance sheet of the partnership of last 2 FY (new companies will have to provide IT returns declaration)</li>
                                        <li>Duly filled annexures</li>
                                        <li>FATCA Declaration</li>
                                    </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <h5 className="numbers">4.</h5>
                                    <Accordion.Header as="h3" className='faq-header'>Which documents are required for a Corporate Or Company demat account?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The required documents for a corporate demat account include: 
                                    <ul>
                                        <li>Aadhar and Photos of account holders (signed)</li>
                                        <li>PAN card copies of each account holder and company</li>
                                        <li>Address proofs of each account holder and company</li>
                                        <li>Cancelled cheques of account holders or the last 3 months' bank statement</li>
                                        <li>Balance sheet of the partnership of last 2 FY (new companies will have to provide IT returns declaration) </li>
                                        <li>Duly filled annexures</li>
                                        <li>FATCA Declaration</li>
                                    </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                    <h5 className="numbers">5.</h5>
                                    <Accordion.Header as="h3" className='faq-header'>How Much Time is Required to Open a Corporate Demat Account?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    If all the documents are in order, it takes 2-3 working days for the account to be active.
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

export default CorporateFaqs;

