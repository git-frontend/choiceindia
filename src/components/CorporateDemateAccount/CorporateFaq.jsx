
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

function CorporateFaq() {
    const [view, setview] = useState(false);
    const [show, setshow] = useState(false);
    return (
        <div>

            <section className="Dematfaq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-first text-center pb-4">Corporate Demat Account Opening FAQ's</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is a Company or Corporate Demat Account?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        Companies and corporations can also participate in the stock market with a Corporate Demat Account.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Can a Demat and Trading account be opened for a Company in India?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        Yes, Indian companies can open Demat and Trading accounts too. These are called Corporate Demat/Trading accounts.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                <Accordion.Header as="h3" className='faq-header'>What is the procedure to open a demat account for Company?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        Below is the procedure to open corporate demat accounts,<br /><br />
                                        <ul>
                                            <li>Fill Corporate Demat account forms</li>
                                            <li>KYC forms of each account holder</li>
                                            <li>Aadhar and Photos of account holders (signed)</li>
                                            <li>Pan Card copies of each account holder and company</li>
                                            <li>Address proofs of each account holder and company</li>
                                            <li>Cancelled cheques of account holders or last 3 months bank statement</li>
                                            <li>Balance sheet of the partnership of last 2 FY (new companies will have to provide IT returns declaration</li>
                                            <li>Duly filled annexures</li>
                                            <li>FATCA Declaration</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                <Accordion.Header as="h3" className='faq-header'>Which documents are required for a Corporate Or Company demat account?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        Below documents are required for a corporate demat account,<br /><br />
                                        <ul>
                                            <li>Aadhar and Photos of account holders (signed)</li>
                                            <li>Pan Card copies of each account holder and company</li>
                                            <li>Address proofs of each account holder and company</li>
                                            <li>Cancelled cheques of account holders or last 3 months bank statement</li>
                                            <li>Balance sheet of the partnership of last 2 FY (new companies will have to provide IT returns declaration</li>
                                            <li>Duly filled annexures</li>
                                            <li>FATCA Declaration</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
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

export default CorporateFaq;

