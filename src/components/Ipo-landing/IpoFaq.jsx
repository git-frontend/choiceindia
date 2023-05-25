import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

function IpoFaq() {
    const [view, setview] = useState(false);
    const [show, setshow] = useState(false);
  return (
    <>
        <section className='ipo-faq'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="title-first">Bajaj Energy <span>IPO FAQs</span></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>When will Bajaj Energy IPO open?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The Bajaj Energy IPO was applied for in 2019, and the launch was approved by SEBI in 2021. But the IPO is yet to be officially announced. As no notification is available for the IPO yet, investors must watch for any updates.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is the last date and time for the Bajaj Energy IPO subscription?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Since the company has not issued the IPO officially yet, there is no information on the subscription closing date and time. However, investors usually have three to six days to bid for an IPO subscription. Beyond this, the IPOs have another lock-in period of up to 180 days. So, it is vital to keep these factors in mind when investing.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How can I check my Bajaj Energy IPO allotment status?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    It is possible to check the Bajaj Energy IPO allotment status on the portal of your broker or registrar. Information regarding the allotment status is also conveyed via email and SMS from issuing and holding authorities, like the BSE, NSE, CDSL, and NSDL.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>When will Bajaj Energy IPO be listed?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The Bajaj Energy IPO aims to raise Rs. 5450 crores of capital to acquire 6,99,36,900 equity shares of Lalitpur Power Generation Company. However, despite getting approval from SEBI for a 2021 launch, the company is yet to issue its IPO in the market. 
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>When will the Bajaj Energy IPO refund initiate?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The IPO refunds are usually initiated based on the refund date issued by SEBI. Once the dates are finalized, your respective banks can initiate the refund if the allotment is not obtained. If the banks cannot unlock your funds within the fund initiation date, it is relieved by the mandate end date. If there is any discrepancy regarding this, investors need to reach out to the banks immediately.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>When will Bajaj Energy shares be credited?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The shares are credited to the investor's DEMAT account once allotment is issued successfully. This can only be viewed after the declared period is over.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Can I revise or cancel my IPO application?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Yes, it is possible to revise or cancel an IPO application if you do it within the IPO subscription closing date. 
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>When can I apply for an IPO on the last day of an IPO?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The time of applying for any IPO is usually between Monday to Friday each week, which are the normal business days for the market. Still, it is recommended to contact your registrar for any further information. 
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

export default IpoFaq