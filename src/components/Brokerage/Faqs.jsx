
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

function Faqs() {
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
                                    <Accordion.Header as="h3" className='faq-header'>How is Brokerage Calculated?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Brokerage is a small fee that is paid to the brokers when an investor initiates a trade. For Delivery, Intraday and Futures, Choice Broking calculates brokerage based on percentage; whereas for Options, it is calculated on the basis of a flat fee. Choice Broking levies one of the lowest brokerage charges for share trading in India.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are Intraday Brokerage Charges and how are they calculated?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Intraday Brokerage Charge is the small percentage of fee traders pay to brokers on their Intraday Trade (when traders buy/sell on the same day). Intraday charges are calculated at 0.02% on Choice Broking.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are Delivery Brokerage Charges and how are they calculated?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Delivery Brokerage Charges are levied on Delivery Trades (when an investor buys on one day and sells on another day). They are calculated at 0.2% on Choice Broking.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are the Brokerage Charges for Equities Trading? </Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The brokerage charges for Equities Trading is 0.02% for Delivery and Intraday, 0.02% for Futures and Rs. 25 per lot. for Options.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are the Brokerage Charges for Futures and Options Trading?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The brokerage charges for Equities Trading is 0.2% for Delivery and Intraday, 0.02% for Futures and Rs. 25 per lot. for Options.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are Depository Participant Charges?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Once an investor buys stocks, they are digitally held by the Depository, i.e., NSDL and CDSL in India. The Depository charges the Depository Participant (broker) a fee for holding these securities (only for delivery), which in turn is charged by the DP to the investor.
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

