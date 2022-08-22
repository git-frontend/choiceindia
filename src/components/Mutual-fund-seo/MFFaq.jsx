
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

function MFFaq() {
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
                                    <Accordion.Header> <h4 className='faq-header'>How much time does it take to start investing in Mutual Funds?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    It takes 5 minutes to complete the account opening process and once you have completed the process you can start investing in mutual funds.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>How to Invest in Mutual Funds?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    It takes 5 minutes to complete the account opening process and once you have completed the process you can start investing in mutual funds.It takes 5 minutes to complete the account opening process and once you have completed the process you can start investing in mutual funds.It takes 5 minutes to complete the account opening process and once you have completed the process you can start investing in mutual funds.

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

export default MFFaq;

