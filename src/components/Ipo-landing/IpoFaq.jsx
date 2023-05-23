import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

function IpoFaq() {
    const [view, setview] = useState(false);
    const [show, setshow] = useState(false);
  return (
    <>
        <section className='ipo-faq'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="title-first">Bajaj Energy <span>IPO FAQs</span></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>When will Bajaj Energy IPO open?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The Bajaj Energy IPO was applied for in 2019, and the launch was approved by SEBI in 2021. But the IPO is yet to be officially announced. As no notification is available for the IPO yet, investors must watch for any updates.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is the last date and time for the Bajaj Energy IPO subscription?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        The following documents will be required to open an account for a resident individual with Choice :
                                        <ul>
                                            <li>PAN Card</li>
                                            <li>Cancelled Cheque (that captures the MICR Code)</li>
                                            <li>Passport Size Photograph</li>
                                            <li>Aadhaar Card</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How can I check my Bajaj Energy IPO allotment status?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        The Power of Attorney is a document that gives us the authorization to debit your shares from your Demat Account whenever you sell them. However, till the time you do not submit a POA, you can avail the eDIS facility to sell your holdings. This will require you to authorise your holdings once daily before doing any holding's sell transactions. It is recommended to send a signed copy of your POA since it enables you to sell your holdings seamlessly without the need to authorise online all the time.
                                        A copy of the POA gets emailed to you on your registered email ID, which needs to be physically signed and couriered to us. You can send us the signed POA to our head-office address mentioned on our website - <a href="https://choiceindia.com">https://choiceindia.com</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>When will Bajaj Energy IPO be listed?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        You can courier the signed copy of the POA to our Head Office address mentioned below.<br />
                                        Choice International Limited,<br />
                                        Sunil Patodia Tower,<br />
                                        J B Nagar, Andheri (East), Mumbai 400099.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                                    
                                   
                            
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default IpoFaq