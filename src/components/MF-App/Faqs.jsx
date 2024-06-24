
import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";

function Faqs() {
    return (
        <>
            <section className="Dematfaq mf-faq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-secnd text-center pb-4">Frequently Asked <span>Questions</span></h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How can I buy mutual funds through the Choice FinX mutual fund app?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    First you need to download Choice FinX and complete the registration process. KYC (Know Your Customer) is the most important part of the registration process. KYC approval is done by Third Party agencies called KRA’s which takes about a week. Once done you can start investing in Mutual Fund Schemes.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How much time does it take to activate OTM from the bank?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    OTM’s or One Time Mandates usually takes a minimum of 14 days to a maximum of 45 days activation. The speed of the approval depends on your bank. Post KYC, soon as you pay the first installment, the approval process starts and is completed before the next SIP installment.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How can I transfer my existing mutual fund portfolio to Choice FinX?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Submit a filled COB - Change of Broker Form to us and your portfolio will start reflecting in Choice FinX in a week. You will need to get in touch with the Customer Care team and they will send you the COB form immediately.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Can I track my external mutual fund portfolio in Choice FinX?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Yes, you can add the mutual funds you have invested in before and track them with Choice FinX.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item' id="faqid">
                                    <Accordion.Header as="h3" className='faq-header'>Is opening a mutual fund account with Choice FinX free?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Absolutely. No charges for opening a mutual fund account with Choice FinX.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header' >Can I invest in direct mutual funds with Choice FinX?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Yes, Choice FinX has both options for Regular and Direct mutual fund investing. You can choose the option that suits your investment style.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header' >Does Choice FinX recommend mutual funds schemes for the Investment?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Choice FinX has ready-made Mutual Fund Baskets like Wealth creator, Child education, Tax saviour and many more which are curated by experts. You just need to pick the one that suits you and start. You can also use the Goal option, which has predefined goals like international vacation, overseas education, dream car or create your own goals. The best schemes required for you to achieve the goal will be attached to the goal.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>Can I track my family's investment in Choice FinX?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Yes, there is a dedicated Family feature for that. You can add the member of the family and track their investments with your own Choice FinX account
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

export default Faqs;

