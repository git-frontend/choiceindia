
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
                            <h2 className="title-first text-center pb-4">Trading Account Opening <span>Related FAQs</span></h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How much time is required to open a trading account online?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Online account opening has become fairly convenient not to mention quick. If you have all the required documents handy, and the KYC is done, then the account can be opened in 15 minutes. If the KYC is not done then it could take a couple of working days..
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'> Are there any charges applied by stock brokers while opening a trading account online?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    It’s hard to say about other brokers, but Online Trading Account opening or Online Demat Account opening with Choice broking is absolutely free. There are no charges whatsoever.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item' id="faqid">
                                    <Accordion.Header as="h3" className='faq-header'>What are the AMC charges for trading accounts with Choice?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    First year AMC is free, next year onwards Choice Broking takes minimal charges for maintaining and keeping your trading account ready to use whenever you’d like to.
                                    <br/><br/>
                                    After the first year there are *3 plans to choose from:
                                    <ul>
                                    <li>Rs.200/- + GST Yearly Plan</li>
                                    <li>Rs.1500/- + GST - Lifetime AMC Covered</li>
                                    <li>Rs.3000/- Full Refundable AMC (Full amount will be refunded when you close the account with Choice Broking)</li>
                                    </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header' >What documents are required to open a trading account online?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Below are the documents required to open a trading account online, it is helpful to keep them handy when you try to open a trading account online.
                                            <ul>
                                            <li>Address Proof</li>
                                            <li>PAN Card</li>
                                            <li>Cancelled Cheque</li>
                                            <li>Photograph</li>
                                            <li>Signature on a White Paper</li>
                                            <li>Income Proof</li>
                                            </ul>
                                            Note: These must be individual documents and they need to be self-attested before they are uploaded.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header' >Is it necessary to provide power of Attorney (POA) while opening a trading account?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Yes, it is necessary to provide Power of Attorney to your broker. This is part of the account opening procedure and can be directly downloaded from the site. The POA is a critical document so it has to be filled and the attested hard copy has to be mailed to Choice Broking’s HQ. Below is the address,
                                            <br/> <br/>
                                            Courier Address: Courier Address: Choice International Limited,
                                            <br/>
                                            Sunil Patodia Tower,J B Nagar,
                                            <br/>
                                            Andheri (East), Mumbai 400099.,Maharastra
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>Is it Safe to Open a Trading Account Online?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            It’s alright to be concerned about security when it comes to money, but the regulators that govern the market have very strict guidelines about maintaining and operating demat accounts. The technology employed is safe and done in a way that makes Trading/Demat Accounts virtually unhackable.
It’s completely safe to open a trading account online.

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="9" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>Can I use the same trading account for all segments?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Absolutely, Stocks, Currencies, commodities and F&O, you can use the same account for trading in all segments.
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

