
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

function DematFaq() {
    const [view, setview] = useState(false);
    const [show, setshow] = useState(false);
    return (
        <div>

            <section className="Dematfaq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-first text-center pb-4">FAQ's</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>Who can become a Choice Remisier?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Anyone from across India can be a Choice Remisier. Eligibility and qualification criteria are minimal, all we are looking for is willingness and passion.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>How much does a Remisier earn in India?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Remisiers can select from fixed revenue per client or Brokerage sharing options. Sky's the limit as far as earnings are concerned, since we have the entire suite of financial products and customization options.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header><h4 className='faq-header'>What Are the Documents required to Become Choice Remisier?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        <p>The following documents are required to complete Remisier registration with us.</p>
                                        <ul>
                                            <li>PAN Card</li>
                                            <li>Cancelled Cheque (that captures the MICR Code)</li>
                                            <li>Passport Size Photograph</li>
                                            <li>Aadhaar Card</li>
                                            <li>Income Proof</li>
                                        </ul>
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

export default DematFaq;

