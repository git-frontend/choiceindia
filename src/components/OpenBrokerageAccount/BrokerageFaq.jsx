
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
                            <h2 className="title-first text-center pb-4">Brokerage Account Opening FAQ's</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>  How much time is required to open a brokerage account online?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        If you have all your documents handy, it should take 4-5 minutes to open a brokerage account online.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>What are the charges at Choice for Opening a brokerage account?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        There are no charges for opening a Brokerage Account at Choice.

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header><h4 className='faq-header'>Are any AMC charges applied on the brokerage account opened with Choice?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        When you open a brokerage account with Choice, you get free AMC charges for the first year. After, the first year you can select from the below 3 plans:<br /><br />
                                        <ul>
                                            <li>Rs.200/- + GST Yearly Plan</li>
                                            <li>Rs.1500/- + GST - Lifetime AMC Covered</li>
                                            <li>Rs.3000/- Full Refundable AMC (Full amount will be refunded when you close the account with us)</li>
                                        </ul>
                                        <br />
                                        *In case no scheme is selected by you then by default AMC as per the annual plan will be charged at the end of the first year.<br />
                                        For a Corporate Account, the AMC charges applicable from the 1st year are – 1000/- + GST per Annum Plan.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header><h4 className='faq-header'>Is it necessary to send a POA to activate a brokerage account with Choice?</h4> </Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        No, it is not necessary to send a POA to activate a brokerage account with Choice.<br /><br />
                                        However, You will need to send a signed copy of your Power of Attorney (POA) to the Choice Head Office after opening a brokerage account.<br /><br />
                                        The POA will give the authorization to sell your shares from your Demat account without the need to authorize them online all the time whenever you sell them.<br /><br />
                                        Choice Head Office Address:<br />
                                        Choice House, Shree Shakambhari Corporate Park<br />
                                        Plot No. 156-158, J B Nagar, Andheri (East)<br />
                                        Mumbai, Maharashtra - 400099

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                    <Accordion.Header > <h4 className='faq-header'>Can I use the same brokerage account for all segments?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        Yes, you can use the same brokerage account for trading in all segments.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'> Which documents are required for opening a brokerage account online with Choice?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        You are required to provide the following documents to open a brokerage account online with Choice.<br /><br />
                                        <ul className="documentlist">
                                            <li><strong>A Valid Proof of Identity</strong>(Your proof of address can include any of the following):<br />
                                                <p>1. Aadhar Card</p>
                                                <p>2. Voter ID card</p>
                                                <p>3. Passport</p>
                                                <p>4. Driving License</p>
                                            </li><br />
                                                    <li><strong>A Valid Proof of Income</strong>(If you want to trade in the F&amp;O segment you have to submit any of these following documents): <br /> 
                                                        <p>1. A copy of IT returns submitted to the IT department</p>
                                                        <p>2. A copy of annual income audited by a CA</p>
                                                        <p>3. Last 6 months bank statement</p>
                                                        <p>4. Demat account statement with a DP</p>
                                                        <p>5. Net worth certificate</p>
                                                        <p>6. Copy of your Salary slip and Form 16 (for salaried employees)</p>
                                                    </li><br />
                                                            <li><strong>A Valid Proof of your corresponding Bank Account</strong><br />
                                                                <p>1. A cancelled cheque of the bank to be linked with your Trading Account</p>
                                                                <p>2. Bank passbook with the IFSC code clearly printed on it</p>
                                                            </li>
                                                            </ul>
                                                            </Accordion.Body>
                                                        </Accordion.Item>


                                                    </Accordion>
                                                        {
                                                            view ?
                                                                <Accordion defaultActiveKey="" flush className='open-demat-faqs-accordion'>

                                                                    <Accordion.Item eventKey="6" className='faq-item'>
                                                                        <Accordion.Header> <h4 className='faq-header'>Can I open a free brokerage account online with Choice?</h4></Accordion.Header>
                                                                        <Accordion.Body className='open-demat-faq-body'>
                                                                        Yes, you can open a free brokerage account online with Choice.<br /><br />
                                                                        <ul>
                                                                            <li>
                                                                            You must be 18 years of age and above
                                                                            </li>
                                                                            <li>
                                                                            You must be a resident of India
                                                                            </li>
                                                                            <li>
                                                                            You must have all the documents required to open a brokerage account online
                                                                            </li>
                                                                        </ul>
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>
                                                                    

                                                                    <button className="btn-bg btn-banner justify-content-center d-flex mx-auto mt-6" onClick={() => setview(false)} >&nbsp;View less</button>

                                                                </Accordion>


                                                                :
                                                                <div className="accordion-view-more">
                                                                    <button className="btn-bg btn-banner  justify-content-center d-flex mx-auto mt-6" onClick={() => setview(!show)}>View more</button>
                                                                </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            </section>
                                        </div>

                                        )
}

                                        export default DematFaq;

