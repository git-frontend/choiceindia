
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

function SubBrokerFaqs() {
    const [view, setview] = useState(false);
    const [show, setshow] = useState(false);
    return (
        <div>

            <section className="sub-broker-faq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pb-4">
                            <div className="head-ttln">
                                <h2 className="title-first">Sub Broker Franchise FAQs?</h2>
                                <p className="sml-para-dv">Learn more about becoming a sub broker with Choice through our FAQs.</p>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is the role of a sub broker?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    A sub broker acts as an intermediary, connecting clients with stockbrokers to facilitate investments.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Is sub broking profitable?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Sub broking can be highly profitable, depending on the volume and quality of business generated.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Is sub broking a good career?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Yes, sub broking can be a rewarding career path, offering substantial earning potential.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How to get a sub broker license?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    To obtain a sub broker license, you need to partner with a registered stock brokerage firm such as Choice and complete the necessary qualifications.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How do I withdraw funds as a sub broker in Choice?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The withdrawal process is simple and can be accessed through our partner portal.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How much deposit is required to be a Choice sub broker?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Choice offers the option to start a sub brokership with a minimal refundable deposit, making it accessible to a wide range of individuals.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What kind of support will a sub broker get from Choice?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Choice provides dedicated support, training, and marketing assistance to help sub brokers succeed.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How can sub brokers check their earnings?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Our partner portal allows sub brokers to easily track their earnings and performance.</Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default SubBrokerFaqs;

