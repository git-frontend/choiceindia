import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

function MarginFaq() {
    const [view, setview] = useState(false);
    const [show, setshow] = useState(false);
    
    /** scroll id view */

  function chapterScroll(id) {
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
    return (
        <div>

            <section className="mutual-faq">
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
                                    <Accordion.Header as="h3" className='faq-header'>How much can I invest in a mutual fund?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The best part about SIP is that there is no maximum limit. You can invest your desired sum in the form of SIPs. But most mutual fund houses require a minimum investment of Rs 500.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are the types of mutual funds available?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Mutual funds are classified into equity, debt and hybrid, depending on the underlying instrument. Each one possesses different risks and opportunities, and it is vital to analyse them before investing.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Can I modify the amount invested in mutual funds?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Whether you are investing through SIPs or using periodic lump sum investments, mutual funds allow you the flexibility to alter your contribution. If you feel that you need to increase or decrease your amount to achieve your goals based on the output from the mutual fund return calculator, you can do so without trouble.
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

export default MarginFaq;

