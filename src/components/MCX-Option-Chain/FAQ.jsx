import React from "react";
import { Accordion } from "react-bootstrap";

function FAQ() {
  return (
    <>
       <section className="Dematfaq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-first text-center pb-4">Frequently Asked Questions</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What Are The Benefits Of MCX Options Trading?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        MCX options trading benefits include a well-structured platform having clear information about trading volumes and strike prices. You also get several contracts of options which provide diversification.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How to Start Trading On MCX Options?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        To begin MCX options trading, you need open a demat account with a reliable broker or online platform.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What Is the Last Traded Option?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        The last traded option refers to the latest or last price at which the option was traded.
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

export default FAQ