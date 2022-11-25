
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

function IPOFaq() {
    const [view, setview] = useState(false);
    const [show, setshow] = useState(false);
    return (
        <div>

            <section className="Dematfaq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-first pb-4">Frequently Asked Questions</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is an IPO?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The question 'what is IPO' may sound quite scary for some as they don't know how to invest in an IPO, and for some, it is quite enticing as it means more money on their investment. So, let's bust this myth and understand what it is!
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Can I cancel or revise my IPO subscription?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Yes. You can both cancel and revise your IPO application. However, you need to ensure that you do so before the issue closes. 
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Can I buy an IPO without a Demat Account?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        The Power of Attorney is a document that gives us the authorization to debit your shares from your Demat Account whenever you sell them. However, till the time you do not submit a POA, you can avail the eDIS facility to sell your holdings. This will require you to authorise your holdings once daily before doing any holding's sell transactions. It is recommended to send a signed copy of your POA since it enables you to sell your holdings seamlessly without the need to authorise online all the time.
                                        A copy of the POA gets emailed to you on your registered email ID, which needs to be physically signed and couriered to us. You can send us the signed POA to our head-office address mentioned on our website - <a href="https://choiceindia.com">https://choiceindia.com</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Can you sell an IPO share immediately? </Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        You can courier the signed copy of the POA to our Head Office address mentioned below.<br />
                                        Choice International Limited,<br />
                                        Sunil Patodia Tower,<br />
                                        J B Nagar, Andheri (East), Mumbai 400099.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                <Accordion.Header as="h3" className='faq-header'>Why should a company go for an initial public offering?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    You can open a low brokerage Demat Account with Choice at zero account opening charges
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

export default IPOFaq;

