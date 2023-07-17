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

            <section className="margin-faq">
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
                                    <Accordion.Header as="h3" className='faq-header'>What are the two segments of margin classification?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        In stock trading, the margin is broadly classified into two spectrums they are– cash and derivative.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is the margin for F&O? </Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                     For the derivative market, the margin is the amount you need to pay to take a position. The margin at the beginning of the trade is known as the initial margin, calculated based on the position you might hold until the expiry date. 
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How much margin is safe?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    A 5% margin is considered very low, whereas a 10% margin is considered healthy, and a 20% is a high margin.
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

