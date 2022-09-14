
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

function MFDistributorFaqs() {
    const [view, setview] = useState(false);
    const [show, setshow] = useState(false);
    return (
        <div>

            <section className="Dematfaq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-first text-center pb-4">FAQ's</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>Is it necessary to clear the NISM exam to become a mutual fund distributor in India?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    To become a mutual fund distributor, one has to gain knowledge about the products and nitty-gritties of mutual funds. Hence, one has to obtain AMFI certification.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>What are the career prospects of being a mutual fund distributor?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Opting for a career has many advantages such as being your own boss, earning passive income etc. Also, one has the flexibility to earn the income as per his/her goals as the payment is subjective of selling maximum schemes.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header><h4 className='faq-header'>What is the process for senior citizens to become a mutual fund distributor?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Mutual Fund gives the senior citizen the opportunity to channelise their energies in creating a source of income. For this, senior citizens are individuals who qualify under the criteria stipulated by SEBI vide its Circular no. CIR/ MFD/DF/5/2010 dated June 24, 2010 i.e. a person who has attained age of 50 years as on May 31, 2010 OR a person who has at least 10 years experience in the securities market as on May 31, 2010.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header><h4 className='faq-header'>How to become a mutual fund distributor?</h4> </Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Anyone holding an AMFI certificate is eligible to become a Mutual Fund distributor. In order to become a mutual fund distributor with Choice India, one can fill the registration details. An expert team shall be assisting them via <a href="mailto:customercare@investica.com">customercare@investica.com</a> or +91 8080808875, once the details have been verified and approved. <br/>
Note: Investica is a part of Choice Wealth Pvt ltd and registered under the ARN Code: 78908

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                    <Accordion.Header > <h4 className='faq-header'>What is the process for mutual fund agent registration?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Once, you have completed your AMFI Certification. You can then login to www.choiceindia.com and start a fruitful journey by following the steps mentioned there.
                                    </Accordion.Body>
                                </Accordion.Item>



                            </Accordion>
                            {
                                view ?
                                    <Accordion defaultActiveKey="5" flush className='open-demat-faqs-accordion'>
                                        <Accordion.Item eventKey="5" className='faq-item'>
                                            <Accordion.Header> <h4 className='faq-header'> How much does a mutual fund distributor earn?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            It completely depends on the individual. There is no set bar to earning. The more you sell, the more you can earn.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" className='faq-item'>
                                            <Accordion.Header> <h4 className='faq-header'>When will I get the commission of the investment?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            The payouts with Choice are released on a monthly basis. One can track the status of your clients payments with the CRM access provided to you once you are registered with Choice.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7" className='faq-item'>
                                            <Accordion.Header><h4 className='faq-header'>What is the minimum &amp; maximum age to apply for ARN?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            The minimum age for being a Mutual Fund distributor is 18 years, while there is no maximum age limit to this.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8" className='faq-item'>
                                            <Accordion.Header><h4 className='faq-header'>Why is ARN code necessary?</h4> </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            As we follow rules prescribed by the regulators, the ARN Code is a mandate to every mutual fund distributor.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <button className="btn-bg btn-banner justify-content-center d-flex mx-auto mt-6" onClick={() => setview(false)} >&nbsp;View less</button>

                                    </Accordion>


                                    :
                                    <div className="accordion-view-more">
                                        <button className="btn-bg btn-banner  justify-content-center d-flex mx-auto mt-6" onClick={() => setview(!show)}>View more</button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default MFDistributorFaqs;

