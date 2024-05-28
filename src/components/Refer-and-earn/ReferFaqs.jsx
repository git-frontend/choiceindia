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
                            <h2 className="title-first text-center pb-4">Mutual Fund Distributor FAQ's</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" activeKey={activeKey} flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("0")}>Is it necessary to clear the NISM exam to become a mutual fund distributor in India?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        To become a mutual fund distributor, one must gain knowledge about the products and intricacies of mutual funds. Hence, obtaining an AMFI certification is necessary.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("1")}>What are the career prospects of being a mutual fund distributor?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        The future prospects of mutual funds in India are promising due to the growing MF industry and investors, the increase in demand for mutual funds, and the number of available mutual fund distributors in India. Opting for this career has many advantages such as being your own boss, earning passive income, etc. Also, one has the flexibility to earn income as per his/her goals as the payment is subjective to selling maximum schemes.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'onClick={() => toggleAccordion("2")}>What is the process for senior citizens to become a mutual fund distributor?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        Mutual Funds provide senior citizens with the opportunity to channel their energies into creating a source of income. For this, senior citizens are individuals who qualify under the criteria stipulated by SEBI vide its Circular No. CIR/ MFD/DF/5/2010 dated June 24, 2010, i.e., a person who has attained the age of 50 years as of May 31, 2010, OR a person who has at least 10 years experience in the securities market as of May 31, 2010.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("3")}>How to become a mutual fund distributor?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        Anyone holding an AMFI certificate is eligible to become a Mutual Fund distributor. In order to become a mutual fund distributor with Choice, one can fill in the registration details. An expert team shall assist them via <a href="mailto:customercare@investica.com">customercare@investica.com</a> or +91 8080808875, once the details have been verified and approved.<br />Note: Investica is a part of Choice Wealth Pvt Ltd. and registered under the ARN Code: 78908
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item' id="Faqid">
                                    <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("4")}>In what form do mutual fund distributors earn revenue?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        Mutual fund distributors earn revenue in the form of commissions. These commissions are a percentage of the investment made by the clients they bring in. The more clients they have and the more those clients invest, the higher their earnings.
                                    </Accordion.Body>
                                </Accordion.Item>



                            </Accordion>
                            {
                                view ?
                                    <Accordion defaultActiveKey=" " activeKey={activeKey} flush className='open-demat-faqs-accordion'>
                                        <Accordion.Item eventKey="5" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("5")}> Is the mutual fund distribution business profitable?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                                Yes, the mutual fund distribution business can be highly profitable. The profitability depends on the individual's ability to sell and the number of clients they can acquire. The more you sell, the more you earn.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("6")}>With which agency are mutual fund distributors registered?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                                Mutual fund distributors are registered with the Association of Mutual Funds in India (AMFI) and must hold a valid ARN (AMFI Registration Number) issued by the National Institute of Securities Markets (NISM).
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("7")}>How much does a mutual fund distributor earn?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                                The earning potential of a mutual fund distributor is not capped and depends entirely on the individual's ability to sell. The more mutual fund units you sell, the higher your earnings.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("8")}>When will I get the commission on the investment? </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                                Commissions are released on a monthly basis at Choice. You can track the status of your clients' payments with the CRM access provided to you once you are registered with Choice.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="9" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("9")}>What is the minimum and maximum age to apply for ARN?
                                            </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                                The minimum age to apply for an ARN and become a Mutual Fund distributor is 18 years. There is no maximum age limit.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="10" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header' onClick={() => toggleAccordion("10")}>Why is the ARN Code Necessary?
                                            </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                                The ARN Code is mandated by regulators for every mutual fund distributor. It ensures that all distributors are qualified and authorized to sell mutual fund units.
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