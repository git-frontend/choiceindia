
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

function Faqs() {
    const [view, setview] = useState(false);
    const [show, setshow] = useState(false);
    return (
        <div>

            <section className="Dematfaq demat-campaign-faq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-secnd pb-4 text-center">Demat Account Opening <span className="related-faq">Related FAQs</span></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How do I open an account online?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    You can open a Choice account online using the <Link to="https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy&pli=1">Android</Link> or <Link to="https://apps.apple.com/us/app/jiffy-online-trading-app/id1327801261">iOS</Link> app or via the <Link to="https://finx.choiceindia.com/auth/login">website</Link>. The account opening process is very simple. With some basic information and uploading of certain documents like PAN, Address Proof, Bank Details, Photo and Contact Details the signup process takes less than 5 minutes.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is the Power of Attorney (PoA) and why is it needed?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Intraday Brokerage Charge is the small percentage of fee traders pay to brokers on their Intraday Trade (when traders buy/sell on the same day). Intraday charges are calculated at 0.02% on Choice Broking.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is the Power of Attorney (PoA) and why is it needed?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Delivery Brokerage Charges are levied on Delivery Trades (when an investor buys on one day and sells on another day). They are calculated at 0.2% on Choice Broking.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How do I open a Trading Account without opening a Demat account?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The brokerage charges for Equities Trading is 0.02% for Delivery and Intraday, 0.02% for Futures and Rs. 25 per lot. for Options.
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

