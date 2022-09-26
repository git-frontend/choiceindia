
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

function MinorFaq() {
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

            <section className="Dematfaq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-first text-center pb-4">Minor Demat Account Opening FAQ's</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>What is a Minor Demat Account?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        When a Demat account is opened in the name of the Minor; it’s known as Minor Demat Account. The account will be operated by the natural guardian (parents) or court-appointed guardian.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>Can minors open demat accounts in India?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        Yes, minors can have a demat account opened, but it will be operated by a guardian until the minor becomes a major.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header><h4 className='faq-header'>What is the procedure to open a demat account for Minor?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        The procedure remains the same as opening a regular demat account.<br /><br />
                                        <ol>
                                            <li>Fill the standard demat account form by Guardian</li>
                                            <li>Two KYC forms need to be submitted, one of the Guardian which will collect the bank details, salary range etc. 2nd KYC collects the minor’s basic details to connect it with the guardian, 2nd KYC has to be signed by the Guardian.</li>
                                            <li>Pan and Aadhar card of the minor has to be provided along with the guardian’s documents</li>
                                        </ol>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header><h4 className='faq-header'>What are the documents required to open a Minor Demat account?</h4> </Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        The process of a Minor Demat Account required documents for Identification Proof, Proof of Address, A Photocopy for Age Verification, Applicants’ Photographs such as -<br /><br />
                                        <ul>
                                            <li> PAN Card of the Guardian </li>
                                            <li>PAN Card of the Minor</li>
                                            <li>Proof of Birth of the Minor (Birth Certificate, School Leaving Certificate)</li>
                                            <li>Proof of Identity of the Minor (Aadhar Card)</li>
                                            <li>Proof of Address of the Minor (Electricity Bill, Ration Card)
                                            </li>

                                        </ul>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'  id="Faqid">
                                    <Accordion.Header > <h4 className='faq-header'>Can minors operate Demat and Trading accounts?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        Minors cannot operate Demat or Trading accounts, these will be operated only by the guardian until the minor comes of age.
                                    </Accordion.Body>
                                </Accordion.Item>



                            </Accordion>
                            {
                                view ?
                                    <Accordion defaultActiveKey="" flush className='open-demat-faqs-accordion'>
                                        <Accordion.Item eventKey="5" className='faq-item'>
                                            <Accordion.Header > <h4 className='faq-header'>How to take ownership of Demat Account after minor turns major?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                                After the minor turns to major, he has to go through the same procedure that is required to open a new demat account to take over the ownership.<br />
                                                <strong>Note:</strong> Minor demat accounts become inoperative when he/she turns 18. The broker will intimate you regarding this.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" className='faq-item'>
                                            <Accordion.Header> <h4 className='faq-header'>How much time is required to open a demat account for minors?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                                If the KYC is clear, it will take 2-3 working days for the account to be active.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7" className='faq-item'>
                                            <Accordion.Header><h4 className='faq-header'>Who is eligible for opening a Minor Demat account in India?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                                Any Indian citizen of India, regardless of age, can own a Minor Demat Account. In India, anyone can legally register a minor Demat account. The minor is unable to buy or sell shares. They will need the father/mother or guardian to function their account. For opening a Demat account a minor must have a valid PAN Card.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8" className='faq-item'>
                                            <Accordion.Header><h4 className='faq-header'>How to invest in the stock market when you’re less than 18 years old?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                                For minors under the age of 18, natural guardians (parents) or court-appointed guardians can demat account for them.
                                                <br />
                                                <strong>Note:</strong> Minor Demat accounts can only be used by guardians.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="9" className='faq-item'>
                                            <Accordion.Header><h4 className='faq-header'>Can we buy shares in the Minor Demat account?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                                A trading account in the minor's name may be formed only for the purpose of selling stocks that the minor has acquired through IPO, inheritance, corporate action, or off-market transfers. However, until the minor becomes a major, the natural guardian will be in charge of the account.<br /><br />
                                                A minor is not permitted to enter into a buy or sale agreement with a stockbroker. A trading account in the name of a minor can be opened only for the purpose of investments and selling securities owned by the minor.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="10" className='faq-item'>
                                            <Accordion.Header><h4 className='faq-header'>What are the restrictions on the Minor Demat account?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                                A Minor Demat account has some restrictions/limitations such as -<br /><br />
                                                <ul>
                                                    <li><strong>Certain segments are prohibited:</strong>A Minor account holder is not permitted to trade in -
                                                        <ol>
                                                            <li>Intraday Trading</li>
                                                            <li>Currency Derivatives (F&amp;O)</li>
                                                            <li>Equity Derivative (F&amp;O)</li>
                                                        </ol>
                                                    </li><br />
                                                    <li><strong>Trading Account Restriction:</strong> A minor's Demat account cannot be linked to their Trading account.
                                                    </li><br />
                                                    <li><strong>No Joint Account:</strong> A minor is not permitted to participate in a Joint Demat account with his parents/guardians.</li><br />
                                                    <li><strong>Transaction Limits:</strong> You can only buy or sell delivery shares.</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="11" className='faq-item'>
                                            <Accordion.Header><h4 className='faq-header'>What to do when a minor becomes a major?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            When a minor reaches the age of 18, the Minor Demat Account expires. Then you must create a separate Demat account for the minor. It is possible to transfer old assets to this new account. The account can be used again, but the minor must sign a new contract with the depository participant (DP).
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="12" className='faq-item'>
                                            <Accordion.Header><h4 className='faq-header'>Is any additional fee or charges applicable on the Minor Demat account?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Some standard charges are applicable to a Minor Demat Account. There can be an additional Safety or Custodian Charge charged for a Minor Demat Account.
                                            </Accordion.Body>
                                        </Accordion.Item>


                                        <button className="btn-bg btn-banner justify-content-center d-flex mx-auto mt-6" onClick={() => {setview(false);chapterScroll('Faqid')}} >&nbsp;View less</button>

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

export default MinorFaq;

