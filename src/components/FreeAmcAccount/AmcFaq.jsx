
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

function AmcFaq() {
    const [view, setview] = useState(false);
    const [show, setshow] = useState(false);
    return (
        <div>

            <section className="Dematfaq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-first text-center pb-4">Demat Account Opening FAQ's</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How long will it take for the Demat Account to be activated?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        Your account will be activated within 4 hours of document submission. If there is any gap in the documentation, the Choice Broking support team will reach out to you. Once your account is activated you will receive an email from Choice Broking informing you about the same.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are the documents required to open a Demat Account?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        The following documents will be required to open an account for a resident individual with Choice Broking:
                                        <ul>
                                            <li>PAN Card</li>
                                            <li>Cancelled Cheque (that captures the MICR Code)</li>
                                            <li>Passport Size Photograph</li>
                                            <li>Aadhaar Card</li>
                                            <li>Aadhaar Card</li>

                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is the Power of Attorney (PoA) and why is it needed?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        The Power of Attorney is a document that gives us the authorization to debit your shares from your Demat Account whenever you sell them. However, till the time you do not submit a POA, you can avail the eDIS facility to sell your holdings. This will require you to authorise your holdings once daily before doing any holding's sell transactions. It is recommended to send a signed copy of your POA since it enables you to sell your holdings seamlessly without the need to authorise online all the time.
                                        A copy of the POA gets emailed to you on your registered email ID, which needs to be physically signed and couriered to us. You can send us the signed POA to our head-office address mentioned on our website - <a href="https://choiceindia.com">https://choiceindia.com</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Where should I courier the Power of Attorney? </Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        You can courier the signed copy of the POA to our Head Office address mentioned below.<br />
                                        Choice International Limited,<br />
                                        Sunil Patodia Tower,<br />
                                        J B Nagar, Andheri (East), Mumbai 400099.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                <Accordion.Header as="h3" className='faq-header'>Are there any charges for Demat Account opening with Choice Broking? </Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    You can open a low brokerage Demat Account with Choice Broking at zero account opening charges
                                    </Accordion.Body>
                                </Accordion.Item>



                            </Accordion>
                            {
                                view ?
                                    <Accordion defaultActiveKey="5" flush className='open-demat-faqs-accordion'>
                                        <Accordion.Item eventKey="5" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'> How do I open a Trading Account Online without opening a Demat Account?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                                NSE/BSE mandates a Demat with your Trading Account for securities. Currency and Commodities do not require a Demat Account, so if your trading requirements are restricted to that; a Trading Account can be opted for. This will have to be specified in the documentation process with the broker. For more information regarding the same, you can contact our customer care team at care@choiceindia.com
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>How do I switch my Demat from another broker to Choice Broking?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            You will be required to provide us with the CML (Client Master List) Copy of your earlier DP and open a new Demat Account with us.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>Can I map multiple Demat Accounts to my Trading Account?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Yes, you can link multiple Demat Accounts to your Trading Account, even with different DP's, but they should all be in your name. However, an important thing to note is that from all the linked Demat Accounts you can give shares for Pay In/Pledge, etc; but the payout from the Trading Account will only get credited to the primary Demat Account.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>How can I transfer shares from another Demat Account to my Choice Broking Demat Account? </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            You will be required to provide the Off Market Delivery Instruction Slip (DIS) to your previous DP, mentioning the target DP ID of the Demat Account you are holding in Choice Equity Broking Private Limited.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="9" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>Is opening a Demat account necessary for stock market investment?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Demat account is mandatory if you are going to trade / invest in equities. Demat accounts hold your shares in electronic form. If you are going to simply trade in futures and options then Demat is not required.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="10" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>Can I use my previous Demat Account with Choice?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            There are 2 options, either you open a new Demat account with Choice and transfer all shares from the old Demat, or merge the old Demat into the new one.<br />
                                            You can opt for manual or online transfer of shares.<br />
                                            <strong>Manual Transfer</strong>
                                            <ul>
                                                <li>Ascertain which DP (Depository Participant) is holding the shares, there are 2 depositories in India, National Securities Depository Limited (NSDL) and Central Depository Services Limited (CDSL)</li>
                                                <li>If your new Demat is with the same DP then it will be an inter-depository transfer, and if it's different; it will be an intra-depository transfer</li>
                                                <li>Next, fill the Delivery Instruction slip (DIS) provided by the DP of your old account. In the 'Mode of Transfer' field, please select whether the transfer is inter-depository or intra-depository. This is crucial</li>
                                                <li>Fill all required details like names of shares, quantity and their ISIN numbers</li>
                                                <li>Enter the 16-character ID of the new account</li>
                                                <li> Submit the signed DIS to old broker and take acknowledgement slip</li>
                                                <li>Shares will be transferred to new account in 3-5 working days</li>
                                            </ul>
                                            <strong>Online Transfer</strong>
                                            <ul>
                                                <li>This option is much simpler, just visit the CDSL website and register with all required details</li>
                                                <li>You will be required to fill a form and use the 'Print Form' option; this notifies CDSL to start the verification process</li>
                                                <li>After verification is completed, Login details to your account will be sent on your email id</li>
                                                <li>Login to your account from CDSL website and start transferring shares to the new account</li>
                                            </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="11" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>Can I hold money in a Demat Account?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Absolutely, you can keep money in the Demat/Trading account. It is, however, advisable to hold only the amount that will be required for trading/investing.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="12" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>Is Opening a Demat Account Online Safe? </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            It's absolutely safe to open a Demat account online but choosing the right broker is essential for this.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="13" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>Is there a limit for Deposit and Withdrawal Money from a Trading Account?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            There is no limit as such for depositing or withdrawing money, however, it will need multiple transactions. For MPS/NEFT/RTGS/ the maximum amount allowed in a single transaction is decided by the bank. UPI transfers have a limit of 1 lakh per transaction. In the case of most brokers, there is no withdrawal limit but do check once with your broker.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="14" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>Can I use the same Demat or Trading account for Stock, Currency, Derivatives and Commodity Trading?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Yes, you can use the same account for trading/investing in any asset class.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="15" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>How much Demat Account Opening Fee charged by Choice?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            It's free. There is no Demat A/c opening fee charged by Choice.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="16" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>What are the eligibility criteria for opening an online Demat &amp; Trading Account? </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            As far as age is concerned, there is no minimum age criterion i.e., under 18 can also have Demat &amp; Trading accounts opened. The parents or guardians will be in-charge of the account until the minor comes of age.<br />
                                            <strong>Below are the common requirements,</strong>
                                            <ul>
                                                <li>
                                                Must be Indian Citizen residing in India
                                                </li>
                                                <li>Must be 18 years of age</li>
                                                <li>Have valid Pan Card</li>
                                                <li>Valid Address Proof (Aadhar, Voter ID, Passport, Driving License, utility bills (not more than 3 months old))</li>
                                            </ul>
                                            You will be required to provide recent photos along with proof of Identity, Address and Income (ITR) to open a Demat account in India.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="17" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>How long will it take for the Demat account to be activated?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            If the documents are in order, the Demat account will be activated in 24 – 48 working hours.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="18" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>What is Paperless Demat account opening?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            In this option for Demat account opening, there is no physical submission of any document involved. All documents are submitted online and take only 10 minutes to complete!
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

export default AmcFaq;

