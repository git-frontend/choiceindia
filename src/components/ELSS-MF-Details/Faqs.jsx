
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

function Faqs() {
    const [view, setview] = useState(false);
    const [show, setshow] = useState(false);
    return (
        <div>

            <section className="Dematfaq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-first text-center pb-4">Frequently Asked <span>Questions</span></h2>
                        </div>

                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How do ELSS Funds help you save taxes?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    You can claim a tax benefit of up to 1,50,000 under Section 80C of the Income Tax Act. ELSS fund is a popular and fast growing Tax Saving Investment instrument.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Is Investment in ELSS funds risky?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        The following documents will be required to open an account for a resident individual with Choice :
                                        <ul>
                                            <li>PAN Card</li>
                                            <li>Cancelled Cheque (that captures the MICR Code)</li>
                                            <li>Passport Size Photograph</li>
                                            <li>Address Proof</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is the investment limit in ELSS Mutual Funds?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        The Power of Attorney is a document that gives us the authorization to debit your shares from your Demat Account whenever you sell them. However, till the time you do not submit a POA, you can avail the eDIS facility to sell your holdings. This will require you to authorise your holdings once daily before doing any holding's sell transactions. It is recommended to send a signed copy of your POA since it enables you to sell your holdings seamlessly without the need to authorise online all the time.
                                        A copy of the POA gets emailed to you on your registered email ID, which needs to be physically signed and couriered to us. You can send us the signed POA to our head-office address mentioned on our website - <a href="https://choiceindia.com">https://choiceindia.com</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How long should you stay invested into Tax Saving Funds?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        You can courier the signed copy of the POA to our Head Office address mentioned below.<br />
                                        Choice International Limited,<br />
                                        Sunil Patodia Tower,<br />
                                        J B Nagar, Andheri (East), Mumbai 400099.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item' id="faqid">
                                    <Accordion.Header as="h3" className='faq-header'>Can I withdraw my investments from ELSS Fund before 3 years?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    You can open a low brokerage Demat Account with Choice at zero account opening charges.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header' >How much maximum tax you can save under ELSS Funds?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            NSE/BSE mandates a Demat with your Trading Account for securities. Currency and Commodities do not require a Demat Account, so if your trading requirements are restricted to that; a Trading Account can be opted for. This will have to be specified in the documentation process with the broker. For more information regarding the same, you can contact our customer care team at care@choiceindia.com
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header' >An I make Lumpsum investments in Tax Saving Mutual Funds?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            You will be required to provide us with the CML (Client Master List) Copy of your earlier DP and open a new Demat Account with us.
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

export default Faqs;

