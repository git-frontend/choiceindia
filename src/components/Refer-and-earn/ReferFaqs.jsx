import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

const ReferFaqs=()=>{
    const [view, setView] = useState(false);
    const [show, setshow] = useState(false);
    const [activeKey, setActiveKey] = useState('0');
    /** scroll id view */
    const toggleAccordion = (eventKey) => {
        if (activeKey === eventKey) {
            setActiveKey(null); 
        } else {
            setActiveKey(eventKey); 
        }
    };
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
                            <h2 className="title-first text-center pb-4">Refer & Earn FAQ's</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" activeKey={activeKey} flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("0")}>How do I earn money by referring a Demat account?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    By participating in the Choice Demat Account Refer and Earn program, you can earn attractive rewards for successful referrals. As an existing Choice customer, you'll generate a unique referral link to share with friends and family.
                                    <br/><br/>
                                    When someone uses your link to open a new Demat account with Choice and completes their first trade, you'll receive a ₹500* brokerage reversal. It's a win-win situation for both. Your friends enjoy our seamless trading experience, and you earn a reward for introducing them to Choice.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("1")}>What rewards do my friends and I get for referring a Demat account?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The Refer and Earn program benefits both parties:
                                    <ul>
                                    <li>For you (the referrer): You'll receive a brokerage reversal of ₹500* for every successful referral.</li>
                                    <li>For your friend (the referee): They get to experience Choice's exceptional trading platform and services.</li>
                                    </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'onClick={() => toggleAccordion("2")}>Is there a limit on the number of referral Demat accounts?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    No, there's no limit on the number of referrals you can make. The more friends and family you introduce to Choice, the more you can potentially earn through brokerage reversals. However, share your referral link responsibly, only with those genuinely interested in opening a Demat account.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("3")}>What are the requirements for the referral Demat account program?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    To participate, you must be an existing client of Choice Equity Broking Limited. Additionally:
                                    <ul>
                                    <li>Your referral must use your unique link to open a new Demat account.</li>
                                    <li>Your referral must complete their first trade for you to receive the reward.</li>
                                    </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item' id="Faqid">
                                    <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("4")}>How do I track my Demat account referral status?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Tracking referrals is easy with Choice's FinX mobile app or trading platform. Once your referral opens an account using your link and completes their first trade, the referral reward will be credited to your account ledger.
                                    </Accordion.Body>
                                </Accordion.Item>



                            </Accordion>
                            {
                                view ?
                                    <Accordion defaultActiveKey=" " activeKey={activeKey} flush className='open-demat-faqs-accordion'>
                                        <Accordion.Item eventKey="5" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("5")}>How long does it take to receive my Demat referral reward?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Referral rewards are processed at the end of each month. After your referral completes account opening and their first trade, you'll receive the ₹500* brokerage reversal in your account ledger during the next monthly cycle.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("6")}>Can I refer friends outside of India?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            No, the Choice Demat Account Refer and Earn program is currently available for Indian residents only, as per regulatory guidelines.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("7")}>Can I use social media to share my Demat referral link?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Yes, you can share your referral link on social media platforms. However, exercise caution and avoid unsolicited promotions or spamming. Only share with individuals who have expressed interest in opening a Demat account.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("8")}>How do I generate my referral link? </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Generating your unique referral link is simple.  Log in to your Choice trading account or FinX mobile app, navigate to the Refer and Earn section, and follow the prompts to create your personalized referral link. Once generated, share it via social media, messaging apps, or email.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="9" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("9")}>What happens if my referral closes their Demat account?
                                            </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            If a referral closes their account after you've received the reward, the referral reward will remain credited to your account. However, ensure your referrals have a genuine interest in maintaining their accounts and engaging in trading activities long-term.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <button className="btn-bg btn-banner justify-content-center d-flex mx-auto mt-6" onClick={() => {
                                            setView(false);
                                            setActiveKey('Faqid'); 
                                            chapterScroll('Faqid')}}>&nbsp;View less</button>

                                    </Accordion>


                                    :
                                    <div className="accordion-view-more">
                                        <button className="btn-bg btn-banner  justify-content-center d-flex mx-auto mt-6" onClick={() => setView(!show)} >View more</button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default ReferFaqs;