import React from 'react'
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
                                    <Accordion.Header as="h3" className='faq-header'>What are ‘calls’ and ‘puts’ in the NSE option chain?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        In an NSE option chain, calls provide information about the buying performance pertaining to different options contracts, while puts signify the selling information for the same.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How does the option chain work?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    An option chain is a chart that details all the options contracts in the market and gives an overview of their bidding prices, volatility and an estimate of their future performance. You can use it to decide on purchasing or selling an options contract.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is NSE option chain data?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The NSE option chain data consists of information about the essentials of the options contracts available in the market. The data is focused on the performance of each contract to help traders make informed decisions.
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