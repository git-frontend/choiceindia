
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

function FileDownloadFaq() {
    return (
        <div>

            <section className="filedownloadfaq">
                <div className="container">
                   
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>policies</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        Your account will be activated within 4 hours of document submission. If there is any gap in the documentation, the Choice Broking support team will reach out to you. Once your account is activated you will receive an email from Choice Broking informing you about the same.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>What are the documents required to open a Demat Account?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        The following documents will be required to open an account for a resident individual with Choice Broking:
                                        <ul>
                                            <li>PAN Card</li>
                                            <li>Cancelled Cheque (that captures the MICR Code)</li>
                                            <li>Passport Size Photograph</li>
                                            <li>Aadhaar Card</li>
                                            <li>Aadhaar Card</li>

                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header><h4 className='faq-header'>What is the Power of Attorney (PoA) and why is it needed?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        The Power of Attorney is a document that gives us the authorization to debit your shares from your Demat Account whenever you sell them. However, till the time you do not submit a POA, you can avail the eDIS facility to sell your holdings. This will require you to authorise your holdings once daily before doing any holding's sell transactions. It is recommended to send a signed copy of your POA since it enables you to sell your holdings seamlessly without the need to authorise online all the time.
                                        A copy of the POA gets emailed to you on your registered email ID, which needs to be physically signed and couriered to us. You can send us the signed POA to our head-office address mentioned on our website - <a href="https://choiceindia.com">https://choiceindia.com</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header><h4 className='faq-header'>Where should I courier the Power of Attorney?</h4> </Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        You can courier the signed copy of the POA to our Head Office address mentioned below.<br />
                                        Choice International Limited,<br />
                                        Sunil Patodia Tower,<br />
                                        J B Nagar, Andheri (East), Mumbai 400099.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                    <Accordion.Header > <h4 className='faq-header'>Are there any charges for Demat Account opening with Choice Broking? </h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    You can open a low brokerage Demat Account with Choice Broking at zero account opening charges
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

