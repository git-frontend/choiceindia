
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
                                            <Accordion.Header> <h4 className='faq-header'>How do I switch my Demat from another broker to Choice Broking?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            You will be required to provide us with the CML (Client Master List) Copy of your earlier DP and open a new Demat Account with us.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7" className='faq-item'>
                                            <Accordion.Header><h4 className='faq-header'>Can I map multiple Demat Accounts to my Trading Account?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Yes, you can link multiple Demat Accounts to your Trading Account, even with different DP's, but they should all be in your name. However, an important thing to note is that from all the linked Demat Accounts you can give shares for Pay In/Pledge, etc; but the payout from the Trading Account will only get credited to the primary Demat Account.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8" className='faq-item'>
                                            <Accordion.Header><h4 className='faq-header'>How can I transfer shares from another Demat Account to my Choice Broking Demat Account?</h4> </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            You will be required to provide the Off Market Delivery Instruction Slip (DIS) to your previous DP, mentioning the target DP ID of the Demat Account you are holding in Choice Equity Broking Private Limited.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="9" className='faq-item'>
                                            <Accordion.Header> <h4 className='faq-header'>Is opening a Demat account necessary for stock market investment?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Demat account is mandatory if you are going to trade / invest in equities. Demat accounts hold your shares in electronic form. If you are going to simply trade in futures and options then Demat is not required.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="10" className='faq-item'>
                                            <Accordion.Header> <h4 className='faq-header'>Can I use my previous Demat Account with Choice?</h4></Accordion.Header>
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
                                            <Accordion.Header><h4 className='faq-header'>Can I hold money in a Demat Account?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Absolutely, you can keep money in the Demat/Trading account. It is, however, advisable to hold only the amount that will be required for trading/investing.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="12" className='faq-item'>
                                            <Accordion.Header><h4 className='faq-header'>Is Opening a Demat Account Online Safe?</h4> </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            It's absolutely safe to open a Demat account online but choosing the right broker is essential for this.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="13" className='faq-item'>
                                            <Accordion.Header> <h4 className='faq-header'>Is there a limit for Deposit and Withdrawal Money from a Trading Account?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            There is no limit as such for depositing or withdrawing money, however, it will need multiple transactions. For MPS/NEFT/RTGS/ the maximum amount allowed in a single transaction is decided by the bank. UPI transfers have a limit of 1 lakh per transaction. In the case of most brokers, there is no withdrawal limit but do check once with your broker.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="14" className='faq-item'>
                                            <Accordion.Header> <h4 className='faq-header'>Can I use the same Demat or Trading account for Stock, Currency, Derivatives and Commodity Trading?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Yes, you can use the same account for trading/investing in any asset className.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="15" className='faq-item'>
                                            <Accordion.Header><h4 className='faq-header'>How much Demat Account Opening Fee charged by Choice?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            It's free. There is no Demat A/c opening fee charged by Choice.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="16" className='faq-item'>
                                            <Accordion.Header><h4 className='faq-header'>What are the eligibility criteria for opening an online Demat &amp; Trading Account?</h4> </Accordion.Header>
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
                                            <Accordion.Header> <h4 className='faq-header'>How long will it take for the Demat account to be activated?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            If the documents are in order, the Demat account will be activated in 24 – 48 working hours.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="18" className='faq-item'>
                                            <Accordion.Header> <h4 className='faq-header'>What is Paperless Demat account opening?</h4></Accordion.Header>
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

export default MFDistributorFaqs;

